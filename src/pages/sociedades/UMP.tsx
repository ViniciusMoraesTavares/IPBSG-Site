import { Link } from 'react-router-dom';
import { Users, ChevronLeft, Book, Heart, Target } from 'lucide-react';

export default function UMP() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/sociedades"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Voltar para Sociedades
          </Link>
          <div className="flex items-center mb-4">
            <Users className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">UMP</h1>
              <p className="text-xl text-green-100">União de Mocidade Presbiteriana</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre a UMP</h2>
          <p className="text-gray-700 mb-4">
            A União de Mocidade Presbiteriana (UMP) é formada pelos jovens da igreja que buscam
            crescimento espiritual, comunhão e servir a Deus com seus talentos e energia. A UMP é
            um espaço vibrante onde os jovens podem expressar sua fé de maneira autêntica e se
            desenvolver como líderes cristãos.
          </p>
          <p className="text-gray-700 mb-4">
            Através de cultos próprios, estudos bíblicos, projetos missionários e eventos
            especiais, a UMP trabalha para fortalecer a fé dos jovens e prepará-los para serem sal
            e luz no mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <Book className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Discipulado</h3>
            <p className="text-gray-700 text-sm">
              Estudos profundos da Palavra para formar jovens fundamentados na fé.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Heart className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Comunhão</h3>
            <p className="text-gray-700 text-sm">
              Momentos de amizade, apoio mútuo e crescimento juntos.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <Target className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Missão</h3>
            <p className="text-gray-700 text-sm">
              Projetos evangelísticos e sociais para impactar a comunidade.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Atividades e Objetivos</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="font-bold text-green-500 mr-3">•</span>
              <span>Realizar cultos jovens com louvor e mensagens relevantes</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-green-500 mr-3">•</span>
              <span>Promover estudos bíblicos e células de crescimento</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-green-500 mr-3">•</span>
              <span>Desenvolver ações sociais e projetos missionários</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-green-500 mr-3">•</span>
              <span>Participar de congressos, retiros e acampamentos</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-green-500 mr-3">•</span>
              <span>Capacitar jovens para liderança e serviço na igreja</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
