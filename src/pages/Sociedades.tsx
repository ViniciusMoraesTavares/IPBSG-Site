import { Link } from 'react-router-dom';
import { Users, Heart, Baby, Sparkles } from 'lucide-react';

const sociedades = [
  {
    nome: 'UCP',
    titulo: 'União de Catequistas Presbiterianas',
    descricao: 'Dedicada ao ensino e educação cristã de crianças, adolescentes e jovens através da Escola Dominical.',
    icon: Baby,
    link: '/sociedades/ucp',
    color: 'from-blue-500 to-blue-600',
  },
  {
    nome: 'UPA',
    titulo: 'União Presbiteriana de Adolescentes',
    descricao: 'Trabalha na formação espiritual e social dos adolescentes da igreja através de atividades e estudos.',
    icon: Sparkles,
    link: '/sociedades/upa',
    color: 'from-purple-500 to-purple-600',
  },
  {
    nome: 'UMP',
    titulo: 'União de Mocidade Presbiteriana',
    descricao: 'Promove o desenvolvimento espiritual e a integração dos jovens através de cultos, estudos e eventos.',
    icon: Users,
    link: '/sociedades/ump',
    color: 'from-green-500 to-green-600',
  },
  {
    nome: 'SAF',
    titulo: 'Sociedade Auxiliadora Feminina',
    descricao: 'Organização das mulheres da igreja com foco em ação social, missões e crescimento espiritual.',
    icon: Heart,
    link: '/sociedades/saf',
    color: 'from-pink-500 to-pink-600',
  },
];

export default function Sociedades() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1f5014] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Sociedades da Igreja</h1>
          <p className="text-center text-green-100 max-w-2xl mx-auto">
            As sociedades internas são grupos organizados que trabalham em áreas específicas da vida
            da igreja, promovendo comunhão, crescimento espiritual e serviço ao Reino de Deus.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {sociedades.map((sociedade) => {
            const Icon = sociedade.icon;
            return (
              <Link
                key={sociedade.nome}
                to={sociedade.link}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className={`bg-gradient-to-br ${sociedade.color} p-8`}>
                  <Icon className="w-16 h-16 text-white mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">{sociedade.nome}</h2>
                  <h3 className="text-lg text-white/90">{sociedade.titulo}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{sociedade.descricao}</p>
                  <span className="text-[#1f5014] font-semibold group-hover:text-[#2d7a1f] transition-colors">
                    Saiba mais →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O Papel das Sociedades
            </h2>
            <p className="text-gray-700 mb-4">
              As sociedades internas da IPB Santa Gertrudes desempenham papel fundamental na vida
              da igreja, atuando em diversas frentes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Promover a comunhão entre os membros</li>
              <li>Desenvolver atividades de ensino e discipulado</li>
              <li>Realizar ações sociais e missionárias</li>
              <li>Apoiar as atividades gerais da igreja</li>
              <li>Proporcionar crescimento espiritual aos seus participantes</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Todos são bem-vindos para participar das atividades das sociedades conforme sua faixa
              etária e interesse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
