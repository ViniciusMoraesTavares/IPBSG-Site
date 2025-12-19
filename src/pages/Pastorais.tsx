import { useEffect, useState } from 'react';

import { FileText, Calendar, User, ExternalLink } from 'lucide-react';
import { pastorais as pastoraisData } from '../data/pastorais';

interface Pastoral {
  id: string;
  titulo: string;
  data: string;
  conteudo: string;
  url_pdf?: string;
  autor: string;
}

export default function Pastorais() {
  const [pastorais, setPastorais] = useState<Pastoral[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPastoral, setSelectedPastoral] = useState<Pastoral | null>(null);

  useEffect(() => {
    loadPastorais();
  }, []);

  function loadPastorais() {
    setLoading(true);
    const ordenadas = [...pastoraisData].sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );
    setPastorais(ordenadas);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1f5014] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Pastorais</h1>
          <p className="text-center text-green-100 max-w-2xl mx-auto">
            Mensagens pastorais com ensinamentos, reflexões e orientações bíblicas para edificação
            e crescimento espiritual da igreja.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f5014]"></div>
            <p className="mt-4 text-gray-600">Carregando pastorais...</p>
          </div>
        ) : pastorais.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Nenhuma pastoral disponível no momento.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {pastorais.map((pastoral) => (
              <div
                key={pastoral.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {pastoral.titulo}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(pastoral.data).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {pastoral.autor}
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedPastoral?.id === pastoral.id ? (
                    <div>
                      <div className="prose max-w-none mb-6">
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                          {pastoral.conteudo}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedPastoral(null)}
                          className="text-gray-600 font-semibold hover:text-gray-900 transition-colors"
                        >
                          Recolher
                        </button>
                        {pastoral.url_pdf && (
                          <a
                            href={pastoral.url_pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#1f5014] font-semibold hover:text-[#2d7a1f] transition-colors"
                          >
                            Abrir PDF
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {pastoral.conteudo}
                      </p>
                      <button
                        onClick={() => setSelectedPastoral(pastoral)}
                        className="text-[#1f5014] font-semibold hover:text-[#2d7a1f] transition-colors"
                      >
                        Ler mais
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
