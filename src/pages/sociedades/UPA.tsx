import { Link } from 'react-router-dom';
import { Sparkles, ChevronLeft, Book, Users, Heart } from 'lucide-react';

export default function UPA() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/sociedades"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar para Sociedades
          </Link>
          <div className="flex items-center mb-4">
            <Sparkles className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">UPA</h1>
              <p className="text-xl text-purple-100">União Presbiteriana de Adolescentes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre a UPA</h2>
          <p className="text-gray-700 mb-4">
            A União Presbiteriana de Adolescentes (UPA) é dedicada à formação espiritual e social
            dos adolescentes da igreja. Reconhecendo que a adolescência é um período crucial de
            desenvolvimento, a UPA proporciona um ambiente acolhedor onde os jovens podem crescer na
            fé, fazer amizades e descobrir seu propósito em Cristo.
          </p>
          <p className="text-gray-700 mb-4">
            Através de estudos bíblicos, atividades recreativas e projetos sociais, a UPA trabalha
            para equipar os adolescentes com valores cristãos sólidos e prepará-los para os desafios
            da vida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Book className="w-10 h-10 text-purple-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Estudos</h3>
            <p className="text-gray-700 text-sm">
              Estudos bíblicos relevantes para questões enfrentadas pelos adolescentes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Users className="w-10 h-10 text-purple-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Comunhão</h3>
            <p className="text-gray-700 text-sm">
              Ambiente de amizade e apoio mútuo entre os adolescentes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Heart className="w-10 h-10 text-purple-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Desenvolvimento</h3>
            <p className="text-gray-700 text-sm">
              Atividades que promovem crescimento pessoal e espiritual.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Atividades e Objetivos</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold text-purple-500 mr-3">•</span>
              <span>Realizar encontros periódicos com estudos bíblicos temáticos</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-purple-500 mr-3">•</span>
              <span>Promover atividades recreativas e momentos de lazer</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-purple-500 mr-3">•</span>
              <span>Desenvolver projetos de ação social e evangelismo</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-purple-500 mr-3">•</span>
              <span>Participar de acampamentos e retiros espirituais</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-purple-500 mr-3">•</span>
              <span>Apoiar o desenvolvimento de talentos e habilidades</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
