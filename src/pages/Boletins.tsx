import { useEffect, useState } from 'react';
import { FileText, Calendar, ExternalLink, ChevronDown, Sparkles, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Boletim {
  id: string;
  titulo: string;
  data: string;
  url_pdf: string;
  destaque?: boolean;
  capa_url?: string;
}

// Dados simulados
const boletinsData: Boletim[] = [
  {
    id: '1',
    titulo: 'Boletim Semanal - Dezembro 2025',
    data: '2025-12-15',
    url_pdf: '#',
    destaque: true,
    capa_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop'
  },
  {
    id: '2',
    titulo: 'Boletim Semanal - Novembro 2025',
    data: '2025-11-24',
    url_pdf: '#'
  },
  {
    id: '3',
    titulo: 'Boletim Especial - Ação de Graças',
    data: '2025-11-17',
    url_pdf: '#'
  },
  {
    id: '4',
    titulo: 'Boletim Semanal - Novembro 2025',
    data: '2025-11-10',
    url_pdf: '#'
  },
  {
    id: '5',
    titulo: 'Boletim Semanal - Novembro 2025',
    data: '2025-11-03',
    url_pdf: '#'
  },
  {
    id: '6',
    titulo: 'Boletim Semanal - Outubro 2025',
    data: '2025-10-27',
    url_pdf: '#'
  }
];

export default function Boletins() {
  const [boletins, setBoletins] = useState<Boletim[]>([]);
  const [loading, setLoading] = useState(true);
  const [destaque, setDestaque] = useState<Boletim | null>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  useEffect(() => {
    loadBoletins();
  }, []);

  function loadBoletins() {
    setTimeout(() => {
      const ordenados = [...boletinsData].sort(
        (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
      );
      setBoletins(ordenados);
      const featured = ordenados.find((b) => b.destaque) || ordenados[0] || null;
      setDestaque(featured);
      setLoading(false);
    }, 800);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION - PREMIUM */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-[#1a4410] via-[#1f5014] to-[#2d7a1f]"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/10 to-transparent"></div>

        {/* Floating Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-white/3 blur-3xl"
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full grid lg:grid-cols-2 gap-12 items-center py-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-green-200" />
                <span className="text-sm font-medium text-green-50">Atualizado semanalmente</span>
              </motion.div>

              {/* Title */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
                >
                  Boletim da
                  <span className="block text-green-200">Semana</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="text-lg sm:text-xl text-green-50/90 max-w-xl leading-relaxed"
                >
                  Acompanhe a programação completa, mensagens inspiradoras e tudo que acontece na nossa comunidade de fé.
                </motion.p>
              </div>

              {/* Featured Bulletin Info */}
              {destaque && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold text-white">
                        {destaque.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-green-100">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(destaque.data).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={destaque.url_pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#1f5014] px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      Abrir Boletim
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="#lista"
                      className="inline-flex items-center gap-2 bg-transparent border-2 border-white/40 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 hover:border-white/60 transition-all"
                    >
                      Ver Todos
                      <ChevronDown className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right Content - Featured Image */}
            {destaque?.capa_url && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="relative hidden lg:flex justify-center items-center"
              >
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
                  
                  {/* Image Container */}
                  <a
                    href={destaque.url_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <div className="relative w-[320px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-[1.02]">
                      <img
                        src={destaque.capa_url}
                        alt={destaque.titulo}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-4">
                          <ExternalLink className="w-6 h-6 text-[#1f5014]" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#1f5014] text-xs font-bold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                      Clique para visualizar
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs font-medium uppercase tracking-wider">Role para ver mais</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* DRIVE ACCESS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] rounded-3xl p-12 overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 2.5a17.5 17.5 0 1 0 0 35 17.5 17.5 0 0 0 0-35z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-2">
                <FileText className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Acesse todos os boletins
                </h2>
                <p className="text-green-50/90 text-lg max-w-2xl mx-auto">
                  Explore nosso arquivo completo no Google Drive com todos os boletins anteriores organizados por data.
                </p>
              </div>

              <a
                href="https://drive.google.com/drive/folders/1vgZMeqAMgOh8gdf_1yVfn--7Y-XlmN1J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#1f5014] px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-lg"
              >
                Abrir Drive
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BULLETINS LIST */}
      <section id="lista" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Boletins Anteriores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navegue pela nossa coleção de boletins e mantenha-se conectado com a vida da igreja.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#1f5014] rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="text-gray-600 text-lg">Carregando boletins...</p>
            </div>
          ) : boletins.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Nenhum boletim disponível
              </h3>
              <p className="text-gray-600">
                Novos boletins serão publicados em breve.
              </p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {boletins
                .filter((b) => (destaque ? b.id !== destaque.id : true))
                .map((boletim, index) => (
                <motion.div
                  key={boletim.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] p-8 pb-12">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {boletim.titulo}
                      </h3>
                      <div className="flex items-center gap-2 text-green-100">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {new Date(boletim.data).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <a
                      href={boletim.url_pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-[#1f5014] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#2d7a1f] transition-all group-hover:scale-105 active:scale-95"
                    >
                      Visualizar
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-12 border border-green-200/50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-300/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>
            
            <div className="relative space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1f5014] rounded-2xl mb-2">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Sobre os Boletins
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Os boletins da Igreja Presbiteriana de Santa Gertrudes são publicados semanalmente e contêm informações essenciais sobre a vida da igreja.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Calendar, text: "Programação completa dos cultos e atividades da semana" },
                  { icon: FileText, text: "Mensagens e reflexões bíblicas inspiradoras" },
                  { icon: Sparkles, text: "Avisos importantes para a comunidade" },
                  { icon: Clock, text: "Agenda de eventos especiais e encontros" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/30"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1f5014] rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}