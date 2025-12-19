import { Church, Book, Heart, Target, Users } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1f5014] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Church className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Sobre Nossa Igreja</h1>
          <p className="text-center text-green-100 max-w-2xl mx-auto">
            Conheça a história, missão e identidade da Igreja Presbiteriana de Santa Gertrudes
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-100 mb-6">
              <p className="text-2xl sm:text-3xl font-serif italic text-gray-900 mb-2">
                "Até aqui nos ajudou o Senhor"
              </p>
              <p className="text-[#1f5014] font-semibold">1 Samuel 7:12b</p>
              <p className="text-gray-600 text-sm mt-3">
                Desde 1989 compartilhando a luz e o amor de Deus
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              A Igreja Presbiteriana de Santa Gertrudes foi fundada em 1989, fruto do desejo de um
              grupo de cristãos comprometidos em levar o Evangelho de Cristo a esta comunidade. Desde
              então, a igreja tem sido um farol de esperança e fé, testemunhando fielmente o amor de
              Deus e servindo a população local.
            </p>
            <p>
              Ao longo de mais de três décadas de história, a IPB-SG tem se mantido fiel aos
              princípios reformados e presbiterianos, valorizando a Palavra de Deus como autoridade
              suprema para fé e prática. A igreja cresceu não apenas em número, mas principalmente em
              maturidade espiritual e compromisso com o Reino de Deus.
            </p>
            <p>
              O versículo "Até aqui nos ajudou o Senhor" (1 Samuel 7:12b) resume bem nossa jornada.
              Cada passo foi dado com a certeza de que Deus nos guiava, cada desafio foi superado com
              Sua ajuda, e cada vitória foi fruto de Sua graça. Este marco serve como testemunho da
              fidelidade divina e nos inspira a continuar caminhando com fé e confiança.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center mb-4">
              <Book className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bíblica</h3>
            <p className="text-gray-700 text-sm">
              Fundamentada nas Escrituras Sagradas como única regra de fé e prática, crendo na
              inerrância e suficiência da Palavra de Deus.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center mb-4">
              <Church className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Reformada</h3>
            <p className="text-gray-700 text-sm">
              Alinhada com a teologia reformada e os princípios da Reforma Protestante, valorizando
              a soberania de Deus e a salvação pela graça.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Acolhedora</h3>
            <p className="text-gray-700 text-sm">
              Uma comunidade calorosa que recebe a todos com amor, oferecendo cuidado pastoral,
              comunhão genuína e um ambiente familiar.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 text-[#1f5014] mr-3" />
            Missão, Visão e Valores
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossa Missão</h3>
              <p className="text-gray-700">
                Glorificar a Deus através da pregação fiel da Palavra, do discipulado de vidas, da
                comunhão fraterna e do serviço amoroso à comunidade, fazendo discípulos de Cristo e
                expandindo o Seu Reino.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser uma igreja cada vez mais fundamentada na Palavra de Deus, comprometida com a
                adoração verdadeira, o crescimento espiritual dos membros e o impacto transformador
                na sociedade através do Evangelho de Jesus Cristo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nossos Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-[#1f5014] mr-3">•</span>
                  <span>Supremacia e autoridade das Escrituras Sagradas</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#1f5014] mr-3">•</span>
                  <span>Adoração centrada em Deus e reverente</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#1f5014] mr-3">•</span>
                  <span>Comunhão fraterna e cuidado mútuo</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#1f5014] mr-3">•</span>
                  <span>Evangelização e missões</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#1f5014] mr-3">•</span>
                  <span>Ensino bíblico sólido e discipulado</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[#1f5014] mr-3">•</span>
                  <span>Serviço à comunidade e ação social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] rounded-xl shadow-md p-8 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Faça Parte da Nossa Família</h2>
            <p className="text-green-100 mb-6">
              Se você está em busca de uma igreja fundamentada na Palavra de Deus, que valoriza a
              comunhão e o crescimento espiritual, você é muito bem-vindo aqui. Venha nos conhecer e
              fazer parte desta família!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=551935455024"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1f5014] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
