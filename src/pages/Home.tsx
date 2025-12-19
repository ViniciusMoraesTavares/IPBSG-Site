import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Calendar, FileText, Brain, Instagram, ChevronRight, Bell } from 'lucide-react';
import { boletins as boletinsData } from '../data/boletins';
import { pastorais as pastoraisData } from '../data/pastorais';
import { avisos as avisosStatic } from '../data/avisos';

interface Boletim {
  id: string;
  titulo: string;
  data: string;
  url_pdf: string;
  destaque?: boolean;
}

interface Pastoral {
  id: string;
  titulo: string;
  data: string;
  conteudo: string;
  autor: string;
  destaque?: boolean;
}

interface Aviso {
  id: string;
  titulo: string;
  conteudo: string;
}

export default function Home() {
  const [boletimDestaque, setBoletimDestaque] = useState<Boletim | null>(null);
  const [pastoralDestaque, setPastoralDestaque] = useState<Pastoral | null>(null);
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    const boletinsOrdenados = [...boletinsData].sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );
    const boletimDestaqueLocal = boletinsData.find((b) => b.destaque) || boletinsOrdenados[0] || null;
    if (boletimDestaqueLocal) setBoletimDestaque(boletimDestaqueLocal);

    const pastoraisOrdenadas = [...pastoraisData].sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );
    const pastoralDestaqueLocal = pastoraisData.find((p) => p.destaque) || pastoraisOrdenadas[0] || null;
    if (pastoralDestaqueLocal) setPastoralDestaque(pastoralDestaqueLocal);

    const avisosAtivos = avisosStatic
      .filter((a) => a.ativo)
      .sort((a, b) => {
        const da = a.created_at ? new Date(a.created_at).getTime() : 0;
        const db = b.created_at ? new Date(b.created_at).getTime() : 0;
        return db - da;
      })
      .slice(0, 3);
    setAvisos(avisosAtivos);
  }

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Igreja Presbiteriana de Santa Gertrudes
            </h1>
            <h2 className="text-xl sm:text-2xl mb-8 text-green-100">
              Uma igreja bíblica, reformada e acolhedora
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-2xl sm:text-3xl font-serif italic mb-2">
                "Até aqui nos ajudou o Senhor"
              </p>
              <p className="text-green-100">1 Samuel 7:12b</p>
            </div>
            <p className="text-lg text-green-50 mb-8">
              Desde 1989 compartilhando a luz e o amor de Deus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=551935455024"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1f5014] px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Fale Conosco
              </a>
              <Link
                to="/sobre"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {avisos.length > 0 && (
        <section className="bg-yellow-50 border-b border-yellow-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-start space-x-3">
              <Bell className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-yellow-900 mb-2">Avisos Importantes</h3>
                <div className="space-y-2">
                  {avisos.map((aviso) => (
                    <div key={aviso.id} className="text-sm text-yellow-800">
                      <span className="font-medium">{aviso.titulo}:</span> {aviso.conteudo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {boletimDestaque && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-[#1f5014] px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Boletim da Semana</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {boletimDestaque.titulo}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(boletimDestaque.data).toLocaleDateString('pt-BR')}
                  </p>
                  <a
                    href={boletimDestaque.url_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1f5014] font-semibold hover:text-[#2d7a1f] transition-colors"
                  >
                    Abrir Boletim <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            )}

            {pastoralDestaque && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-[#1f5014] px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Pastoral</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {pastoralDestaque.titulo}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(pastoralDestaque.data).toLocaleDateString('pt-BR')}
                  </p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {pastoralDestaque.conteudo.substring(0, 150)}...
                  </p>
                  <Link
                    to="/pastorais"
                    className="inline-flex items-center text-[#1f5014] font-semibold hover:text-[#2d7a1f] transition-colors"
                  >
                    Ler Completa <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              to="/boletins"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Boletins</h3>
              <p className="text-gray-600 text-sm mb-3">
                Acesse todos os boletins da igreja
              </p>
              <span className="text-[#1f5014] font-semibold text-sm inline-flex items-center">
                Ver todos <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/pastorais"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pastorais</h3>
              <p className="text-gray-600 text-sm mb-3">
                Leia as mensagens pastorais
              </p>
              <span className="text-[#1f5014] font-semibold text-sm inline-flex items-center">
                Ver todas <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/quizzes"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quizzes</h3>
              <p className="text-gray-600 text-sm mb-3">
                Teste seus conhecimentos bíblicos
              </p>
              <span className="text-[#1f5014] font-semibold text-sm inline-flex items-center">
                Participar <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Horários dos Cultos e Atividades
            </h2>
            <p className="text-gray-600">Você é sempre bem-vindo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="font-bold text-gray-900 mb-2">Domingo</h3>
              <p className="text-sm text-gray-600 mb-1">09h - Escola Dominical</p>
              <p className="text-sm text-gray-600">19h - Culto de Adoração</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="font-bold text-gray-900 mb-2">Segunda-feira</h3>
              <p className="text-sm text-gray-600">19h30 - Reunião nos Lares</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="font-bold text-gray-900 mb-2">Quarta-feira</h3>
              <p className="text-sm text-gray-600">19h30 - Estudo Bíblico</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1f5014] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siga-nos nas Redes Sociais</h2>
          <p className="text-green-100 mb-8">
            Fique por dentro de tudo que acontece na nossa igreja
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/ipb.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-[#1f5014] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
