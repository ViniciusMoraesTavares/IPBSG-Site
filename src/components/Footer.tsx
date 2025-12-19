import { Church, Instagram, Youtube, Globe, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#1f5014] rounded-full flex items-center justify-center">
                <Church className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold">IPB Santa Gertrudes</span>
                <span className="text-xs text-gray-400">Desde 1989</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">
              "Até aqui nos ajudou o Senhor"
              <br />
              <span className="text-xs">1 Samuel 7:12b</span>
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#1f5014] transition-colors">Home</Link></li>
              <li><Link to="/boletins" className="hover:text-[#1f5014] transition-colors">Boletins</Link></li>
              <li><Link to="/pastorais" className="hover:text-[#1f5014] transition-colors">Pastorais</Link></li>
              <li><Link to="/quizzes" className="hover:text-[#1f5014] transition-colors">Quizzes</Link></li>
              <li><Link to="/sociedades" className="hover:text-[#1f5014] transition-colors">Sociedades</Link></li>
              <li><Link to="/sobre" className="hover:text-[#1f5014] transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-[#1f5014] transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua José Amâncio Vieira, 221<br />Santa Gertrudes - SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(19) 3545-5024</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Dom: 09h e 19h</div>
                  <div>Seg: 19h30</div>
                  <div>Qua: 19h30</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ipb.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1f5014] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@igrejapresbiterianadesantag"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1f5014] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://beacons.ai/ipb_santagertrudes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1f5014] transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Igreja Presbiteriana de Santa Gertrudes.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
