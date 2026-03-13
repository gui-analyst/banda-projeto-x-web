import { useState, useEffect } from 'react';
import { Music, Zap, Users, DollarSign, Phone, Mail, Instagram, Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('sobre');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'sobre', label: 'Sobre', icon: Music },
    { id: 'diferenciais', label: 'Diferenciais', icon: Sparkles },
    { id: 'orcamento', label: 'Orçamento', icon: DollarSign },
    { id: 'contato', label: 'Contato', icon: Phone },
  ];

  const stats = [
    { number: '2023/2024', label: 'Melhor Banda do Ano' },
    { number: '500+', label: 'Eventos Realizados' },
    { number: '10K+', label: 'Convidados Felizes' },
    { number: '100%', label: 'Satisfação Garantida' },
  ];

  const diferenciais = [
    {
      title: 'Violada X',
      description: 'Um momento para reviver as músicas sertanejas de raiz que fizeram sucesso, com um violeiro de alta performance tocando junto com a banda.',
      icon: '🎸',
    },
    {
      title: 'Dançarino X',
      description: 'Dançarino com máscara de LED neon que interage com o público, criando momentos memoráveis e cheios de energia.',
      icon: '💃',
    },
    {
      title: 'Bazuka de CO2',
      description: 'Efeitos visuais impressionantes com CO2 que criam uma atmosfera cinematográfica durante os momentos especiais.',
      icon: '💨',
    },
    {
      title: 'Shots de Bebida',
      description: 'Interação com noivos e convidados, tomando shots de uma maneira empolgante e divertida.',
      icon: '🥃',
    },
    {
      title: 'Óculos X',
      description: 'Acessórios especiais que tornam cada momento ainda mais marcante e divertido para os convidados.',
      icon: '😎',
    },
  ];

  return (
    <div className="hexagon-bg min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#FF2E4A]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold display-font text-white">
              PROJETO<span className="text-[#FF2E4A]">X</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-[#FF2E4A] text-glow'
                    : 'text-white hover:text-[#FF2E4A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/hero-banda-projeto-x-FuVJuRMvzHN8McYgbzfnUe.webp)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#FF2E4A]/30 rounded-full animate-pulse scale-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#FF2E4A]/20 rounded-full animate-pulse scale-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-[#FF2E4A]/20 rounded-full" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold display-font text-white mb-4 slide-in-left glow-text">
            PROJETO<span className="text-[#FF2E4A]">X</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl fade-in-up">
            O Espetáculo da Sua Vida
          </p>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Melhor Banda 2023/2024 - Casamentos, Formaturas, 15 Anos e Confraternizações
          </p>
          <button
            onClick={() => setActiveTab('contato')}
            className="btn-neon fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#FF2E4A] text-glow" />
        </div>
      </section>

      {/* Tab Content Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          {/* Tab Buttons - Mobile */}
          <div className="md:hidden flex flex-wrap gap-2 mb-12 justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded border-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-[#FF2E4A] bg-[#FF2E4A] text-white'
                      : 'border-[#FF2E4A]/50 text-white hover:border-[#FF2E4A]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-bold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Statistics Section */}
          {activeTab === 'sobre' && (
            <div className="mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 text-center group"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#FF2E4A] mb-2 display-font group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <p className="text-sm md:text-base text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SOBRE Tab */}
          {activeTab === 'sobre' && (
            <div className="fade-in-up space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  SOBRE NÓS
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Somos a <span className="text-[#FF2E4A] font-bold">Banda Projeto X</span>, uma das maiores referências do Brasil em casamentos, formaturas, confraternizações e festas de 15 anos.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Vencedores do prêmio de <span className="text-[#FF2E4A] font-bold">Melhor Banda 2023/2024</span>, somos reconhecidos por entregar um espetáculo completo, com energia do começo ao fim, sem pausas.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Muito mais que um show, um verdadeiro "espetáculo" - uma banda que eternaliza todos os momentos e realiza o sonho junto com vocês, misturando todos os estilos musicais e levando alegria por onde passa.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Um repertório eclético e super animado com números e brincadeiras que não deixam ninguém parado.
                  </p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden border-2 border-[#FF2E4A] neon-border order-1 md:order-2 group hover:shadow-2xl transition-all duration-300" style={{ boxShadow: '0 0 30px rgba(255, 46, 74, 0.5)' }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/moments-collage-projeto-x-7Le45Ri6Q6GiKjBZszMZZm.webp"
                    alt="Momentos Projeto X"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          )}

          {/* DIFERENCIAIS Tab */}
          {activeTab === 'diferenciais' && (
            <div className="fade-in-up space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  NOSSOS DIFERENCIAIS
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diferenciais.map((diferencial, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                      {diferencial.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#FF2E4A] mb-3 display-font">
                      {diferencial.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {diferencial.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 rounded-lg border-2 border-[#FF2E4A] bg-black/40 neon-border hover:shadow-2xl transition-all duration-300" style={{ boxShadow: '0 0 20px rgba(255, 46, 74, 0.5)' }}>
                <h3 className="text-2xl font-bold text-white mb-4 display-font">
                  ⏱️ Duração do Show
                </h3>
                <p className="text-xl text-[#FF2E4A] font-bold">
                  2 horas a 2 horas e 30 minutos
                </p>
                <p className="text-gray-300 mt-2">
                  Energia do início ao fim, sem pausas. Sempre com muita interação com o público e momentos marcantes.
                </p>
              </div>
            </div>
          )}

          {/* ORÇAMENTO Tab */}
          {activeTab === 'orcamento' && (
            <div className="fade-in-up space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  ORÇAMENTO
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Valor */}
                <div className="p-8 rounded-lg border-2 border-[#FF2E4A] bg-black/40 neon-border">
                  <h3 className="text-2xl font-bold text-white mb-4 display-font flex items-center gap-2">
                    <DollarSign className="text-[#FF2E4A]" size={32} />
                    Valor do Show
                  </h3>
                  <div className="text-5xl font-bold text-[#FF2E4A] mb-4">
                    R$ 8.000,00
                  </div>
                  <p className="text-gray-300">
                    Valor para show de 2 a 2h30 de duração
                  </p>
                </div>

                {/* Formas de Pagamento */}
                <div className="p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover">
                  <h3 className="text-2xl font-bold text-white mb-4 display-font">
                    Formas de Pagamento
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF2E4A] font-bold">•</span>
                      <div>
                        <p className="font-bold text-white">Sinal (Garantia)</p>
                        <p className="text-gray-300">R$ 1.500,00 no ato da assinatura do contrato</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF2E4A] font-bold">•</span>
                      <div>
                        <p className="font-bold text-white">Restante</p>
                        <p className="text-gray-300">7 dias antes do evento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusos */}
              <div className="p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover">
                <h3 className="text-2xl font-bold text-white mb-6 display-font">
                  ✓ Inclusos no Show
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'CO2',
                    'Shot de Bebida',
                    'Violada X',
                    'Dançarino X',
                    'Óculos X',
                    'Efeitos Especiais',
                    'Técnico de Som',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-[#FF2E4A] text-xl">✓</span>
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Importante */}
              <div className="p-8 rounded-lg border-2 border-yellow-600/50 bg-yellow-900/10">
                <h3 className="text-xl font-bold text-yellow-400 mb-3 display-font">
                  ⚠️ Importante
                </h3>
                <p className="text-gray-300">
                  A contratação de Som, Estrutura, Palco, Iluminação e Backline é por conta do contratante, conforme o nosso Rider Técnico, que será enviado junto com o fechamento.
                </p>
              </div>
            </div>
          )}

          {/* CONTATO Tab */}
          {activeTab === 'contato' && (
            <div className="fade-in-up space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  ENTRE EM CONTATO
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5516994204686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group text-center"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                    💬
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 display-font">WhatsApp</h3>
                  <p className="text-[#FF2E4A] font-bold text-lg">(16) 99420-4686</p>
                  <p className="text-gray-400 text-sm mt-2">Clique para conversar</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:contatoprojetoxbanda@gmail.com"
                  className="p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group text-center"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                    📧
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 display-font">Email</h3>
                  <p className="text-[#FF2E4A] font-bold text-sm break-all">contatoprojetoxbanda@gmail.com</p>
                  <p className="text-gray-400 text-sm mt-2">Clique para enviar email</p>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/projetoxbanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group text-center"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                    📱
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 display-font">Instagram</h3>
                  <p className="text-[#FF2E4A] font-bold">@projetoxbanda</p>
                  <p className="text-gray-400 text-sm mt-2">Siga nossas redes</p>
                </a>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-lg border-2 border-[#FF2E4A] bg-black/40 neon-border">
                <h3 className="text-2xl font-bold text-white mb-6 display-font">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Seu Email"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Seu Telefone"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Sua Mensagem"
                    rows={5}
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="btn-neon w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Obrigado! Entraremos em contato em breve.');
                    }}
                  >
                    ENVIAR MENSAGEM
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FF2E4A]/20 bg-black/80 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Banda Projeto X. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://instagram.com/projetoxbanda" target="_blank" rel="noopener noreferrer" className="text-[#FF2E4A] hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/5516994204686" target="_blank" rel="noopener noreferrer" className="text-[#FF2E4A] hover:text-white transition-colors">
              <Phone size={24} />
            </a>
            <a href="mailto:contatoprojetoxbanda@gmail.com" className="text-[#FF2E4A] hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Feito com <Heart size={14} className="inline text-[#FF2E4A]" /> para a melhor banda do Brasil
          </p>
        </div>
      </footer>
    </div>
  );
}
