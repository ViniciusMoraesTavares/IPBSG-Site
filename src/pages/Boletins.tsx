import { useEffect, useState } from 'react';

import { FileText, Calendar, ExternalLink, ChevronDown } from 'lucide-react';
import { boletins as boletinsData } from '../data/boletins';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Boletim {
  id: string;
  titulo: string;
  data: string;
  url_pdf: string;
  destaque?: boolean;
  capa_url?: string;
}

export default function Boletins() {
  const [boletins, setBoletins] = useState<Boletim[]>([]);
  const [loading, setLoading] = useState(true);
  const [destaque, setDestaque] = useState<Boletim | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);

  useEffect(() => {
    loadBoletins();
  }, []);

  function loadBoletins() {
    setLoading(true);
    const ordenados = [...boletinsData].sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );
    setBoletins(ordenados);
    const featured = ordenados.find((b) => b.destaque) || ordenados[0] || null;
    setDestaque(featured);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.section
        style={{ opacity, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative h-[100vh] bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1"
            >
              <div className="flex items-center mb-6">
                <FileText className="w-10 h-10 mr-3" />
                <h1 className="text-4xl sm:text-5xl font-bold">Boletins da Igreja</h1>
              </div>
              {destaque && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">{destaque.titulo}</h2>
                  <div className="flex items-center text-green-100 mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    {new Date(destaque.data).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <p className="text-green-50 mb-6">Boletim digital da semana</p>
                  <div className="flex gap-4">
                    <a
                      href={destaque.url_pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-[#1f5014] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                    >
                      Abrir Boletim
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="#lista"
                      className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Ver Todos
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
            {destaque?.capa_url && (
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                src={destaque.capa_url}
                alt={destaque.titulo}
                className="max-w-[30%] h-auto rounded-xl shadow-2xl border border-white/20"
                loading="eager"
                decoding="async"
              />
            )}
          </div>
        </div>
      </motion.section>

      <motion.div id="lista" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-8">
          <a
            href="https://drive.google.com/drive/folders/1vgZMeqAMgOh8gdf_1yVfn--7Y-XlmN1J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#1f5014] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d7a1f] transition-colors"
          >
            Abrir todos no Drive
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f5014]"></div>
            <p className="mt-4 text-gray-600">Carregando boletins...</p>
          </div>
        ) : boletins.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Nenhum boletim disponível no momento.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boletins
              .filter((b) => (destaque ? b.id !== destaque.id : true))
              .map((boletim) => (
              <motion.div
                key={boletim.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] p-6">
                  <FileText className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{boletim.titulo}</h3>
                  <div className="flex items-center text-green-100 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(boletim.data).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                </div>
                <div className="p-6">
                  <a
                    href={boletim.url_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-[#1f5014] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d7a1f] transition-colors"
                  >
                    Abrir Boletim
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre os Boletins</h2>
            <p className="text-gray-700 mb-4">
              Os boletins da Igreja Presbiteriana de Santa Gertrudes são publicados semanalmente
              e contêm informações essenciais sobre a vida da igreja, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Programação completa dos cultos e atividades da semana</li>
              <li>Mensagens e reflexões bíblicas</li>
              <li>Avisos importantes para a comunidade</li>
              <li>Agenda de eventos especiais</li>
              <li>Informações sobre sociedades e departamentos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
