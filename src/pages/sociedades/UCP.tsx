import { Link } from 'react-router-dom';
import { Baby, ChevronLeft, Book, Heart, Users } from 'lucide-react';

export default function UCP() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/sociedades"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar para Sociedades
          </Link>
          <div className="flex items-center mb-4">
            <Baby className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">UCP</h1>
              <p className="text-xl text-blue-100">União de Catequistas Presbiterianas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre a UCP</h2>
          <p className="text-gray-700 mb-4">
            A União de Catequistas Presbiterianas (UCP) é uma sociedade dedicada ao ensino e
            educação cristã de crianças, adolescentes e jovens. Seu principal campo de atuação é a
            Escola Dominical, onde professores capacitados ministram aulas bíblicas adaptadas para
            cada faixa etária.
          </p>
          <p className="text-gray-700 mb-4">
            A UCP trabalha com comprometimento na formação espiritual das novas gerações,
            utilizando métodos pedagógicos adequados e material didático de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Book className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ensino Bíblico</h3>
            <p className="text-gray-700 text-sm">
              Aulas organizadas por faixa etária com conteúdo adaptado e relevante.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Capacitação</h3>
            <p className="text-gray-700 text-sm">
              Treinamento contínuo de professores para excelência no ensino.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Heart className="w-10 h-10 text-blue-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Amor e Cuidado</h3>
            <p className="text-gray-700 text-sm">
              Ambiente acolhedor e seguro para o desenvolvimento das crianças.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Atividades e Objetivos</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold text-blue-500 mr-3">•</span>
              <span>Ministrar aulas na Escola Dominical todos os domingos às 09h</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-500 mr-3">•</span>
              <span>Desenvolver atividades especiais para datas comemorativas</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-500 mr-3">•</span>
              <span>Promover eventos recreativos e educativos para as crianças</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-500 mr-3">•</span>
              <span>Apoiar os pais na educação cristã dos filhos</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-500 mr-3">•</span>
              <span>Preparar material didático e recursos pedagógicos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
