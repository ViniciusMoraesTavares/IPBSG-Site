import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, Instagram, Youtube, Globe } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    }, 3000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1f5014] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Fale Conosco</h1>
          <p className="text-center text-green-100 max-w-2xl mx-auto">
            Estamos à disposição para responder suas dúvidas, ouvir suas necessidades e receber você
            em nossa igreja
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-700">Rua José Amâncio Vieira, 221</p>
                  <p className="text-gray-700">Santa Gertrudes - SP</p>
                  <p className="text-gray-700">CEP: 13450-000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-700">(19) 3545-5024</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=551935455024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1f5014] hover:text-[#2d7a1f] font-medium"
                  >
                    WhatsApp disponível
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Horários</h3>
                  <div className="space-y-1 text-gray-700">
                    <p><span className="font-medium">Domingo:</span></p>
                    <p className="ml-4">09h - Escola Dominical</p>
                    <p className="ml-4">19h - Culto de Adoração</p>
                    <p className="mt-2"><span className="font-medium">Segunda-feira:</span></p>
                    <p className="ml-4">19h30 - Reunião nos Lares</p>
                    <p className="mt-2"><span className="font-medium">Quarta-feira:</span></p>
                    <p className="ml-4">19h30 - Estudo Bíblico</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ipb.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center hover:bg-[#2d7a1f] transition-colors"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@igrejapresbiterianadesantag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center hover:bg-[#2d7a1f] transition-colors"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://beacons.ai/ipb_santagertrudes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1f5014] rounded-lg flex items-center justify-center hover:bg-[#2d7a1f] transition-colors"
                >
                  <Globe className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-700">
                  Obrigado por entrar em contato. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5014] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5014] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5014] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f5014] focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1f5014] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d7a1f] transition-colors flex items-center justify-center"
                >
                  Enviar Mensagem
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Como Chegar</h2>
          </div>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.8!2d-47.5!3d-22.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMwJzAwLjAiUyA0N8KwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja Presbiteriana de Santa Gertrudes"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
