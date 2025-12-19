import { Link } from 'react-router-dom';
import { Heart, ChevronLeft, Book, Users, HandHeart } from 'lucide-react';

export default function SAF() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/sociedades"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar para Sociedades
          </Link>
          <div className="flex items-center mb-4">
            <Heart className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">SAF</h1>
              <p className="text-xl text-pink-100">Sociedade Auxiliadora Feminina</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre a SAF</h2>
          <p className="text-gray-700 mb-4">
            A Sociedade Auxiliadora Feminina (SAF) é a organização das mulheres da Igreja
            Presbiteriana do Brasil. Na IPB Santa Gertrudes, a SAF reúne mulheres de todas as
            idades comprometidas com o Reino de Deus, atuando em diversas frentes como ação social,
            missões, evangelização e apoio às atividades da igreja.
          </p>
          <p className="text-gray-700 mb-4">
            Com espírito de servir e amor ao próximo, a SAF desenvolve trabalhos que impactam tanto
            a comunidade interna da igreja quanto a sociedade ao redor, sendo instrumento de bênção
            e transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Book className="w-10 h-10 text-pink-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Estudos</h3>
            <p className="text-gray-700 text-sm">
              Estudos bíblicos e devocionais que edificam e fortalecem a fé.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <HandHeart className="w-10 h-10 text-pink-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Ação Social</h3>
            <p className="text-gray-700 text-sm">
              Trabalhos assistenciais e apoio a famílias em situação de necessidade.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="w-10 h-10 text-pink-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Missões</h3>
            <p className="text-gray-700 text-sm">
              Apoio e envolvimento em projetos missionários nacionais e internacionais.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Atividades e Objetivos</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold text-pink-500 mr-3">•</span>
              <span>Realizar encontros mensais com estudos bíblicos e devocionais</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-pink-500 mr-3">•</span>
              <span>Desenvolver ações sociais e visitas a famílias necessitadas</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-pink-500 mr-3">•</span>
              <span>Apoiar projetos missionários com oração e recursos</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-pink-500 mr-3">•</span>
              <span>Promover eventos especiais e confraternizações</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-pink-500 mr-3">•</span>
              <span>Auxiliar nas atividades gerais da igreja com dedicação e amor</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
