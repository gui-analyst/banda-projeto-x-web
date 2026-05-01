
import { useState, useEffect } from 'react';
import { Music, Zap, Users, DollarSign, Phone, Mail, Instagram, Heart, Sparkles, ChevronDown, Play, Calendar, ArrowRight } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { CyberpunkIcon } from '@/components/CyberpunkIcons';

export default function Home() {
  const [activeTab, setActiveTab] = useState('landing');
  const [scrollY, setScrollY] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'landing', label: 'Home', icon: Music },
    { id: 'sobre', label: 'Projeto X', icon: Music },
    { id: 'diferenciais', label: 'Diferenciais', icon: Sparkles },
    { id: 'videos', label: 'Vídeos', icon: Play },
    { id: 'shows', label: 'Próximos Shows', icon: Calendar },
  ];

  const whatsappNumber = '5516992277417';
  const whatsappMessage = 'Olá, acabei de visitar o site e gostaria de contratar a banda para o meu evento';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = 'https://instagram.com/projetoxbanda';
  const emailAddress = 'contatoprojetoxbanda@gmail.com';
  const emailUrl = `mailto:${emailAddress}`;

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
      icon: 'VioladaX',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.48_cb459df8.jpeg',
    },
    {
      title: 'Dançarino X',
      description: 'Dançarino com máscara de LED neon que interage com o público, criando momentos memoráveis e cheios de energia.',
      icon: 'DancadorX',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/pasted_file_ltDcta_WhatsAppImage2026-03-16at19.51.49_b816d57a.webp',
    },
    {
      title: 'Bazuka de CO2',
      description: 'Efeitos visuais impressionantes com CO2 que criam uma atmosfera cinematográfica durante os momentos especiais.',
      icon: 'CO2',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.48 (2)_152d62ae.jpeg',
    },
    {
      title: 'Shots de Bebida',
      description: 'Interação com noivos e convidados, tomando shots de uma maneira empolgante e divertida.',
      icon: 'Shot',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.47_8dabee25.jpeg',
    },
    {
      title: 'Óculos X',
      description: 'Acessórios especiais que tornam cada momento ainda mais marcante e divertido para os convidados.',
      icon: 'OculosX',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/pasted_file_ykPx4Z_WhatsAppImage2026-03-16at19.51.49(3)_88ff815e.webp',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Show Projeto X - Momento Épico',
      thumbnail: 'https://img.youtube.com/vi/v5TYzZS9Yyc/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/v5TYzZS9Yyc',
    },
    {
      id: 2,
      title: 'Projeto X - Energia Total',
      thumbnail: 'https://img.youtube.com/vi/eIt_3LZOOwU/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/eIt_3LZOOwU',
    },
    {
      id: 3,
      title: 'Banda Projeto X - Surpresa Especial',
      thumbnail: 'https://img.youtube.com/vi/wBx8TFeN7gU/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/wBx8TFeN7gU',
    },
    {
      id: 4,
      title: 'Projeto X - Festa Animada',
      thumbnail: 'https://img.youtube.com/vi/kiis8llcQVY/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/kiis8llcQVY',
    },
    {
      id: 5,
      title: 'Banda Projeto X - Show Completo',
      thumbnail: 'https://img.youtube.com/vi/YQL5VoCSWIc/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/YQL5VoCSWIc',
    },
  ];

  const upcomingShows = [
    {
      id: 1,
      date: '2026-04-10',
      day: 'Sexta',
      time: '22:00',
      event: 'Casamento - Marina & Lucas',
      location: 'Salao Eventos Franca',
      city: 'Franca, SP',
      status: 'Confirmado',
    },
    {
      id: 2,
      date: '2026-04-18',
      day: 'Sabado',
      time: '20:00',
      event: 'Formatura - Turma 2026',
      location: 'Clube Recreativo',
      city: 'Ribeirao Preto, SP',
      status: 'Confirmado',
    },
    {
      id: 3,
      date: '2026-05-02',
      day: 'Sabado',
      time: '21:00',
      event: 'Festa de 15 Anos - Sofia',
      location: 'Espaco Eventos Premium',
      city: 'Franca, SP',
      status: 'Confirmado',
    },
    {
      id: 4,
      date: '2026-05-16',
      day: 'Sabado',
      time: '22:00',
      event: 'Confraternizacao Empresarial',
      location: 'Hotel Grand Plaza',
      city: 'Sao Paulo, SP',
      status: 'Confirmado',
    },
    {
      id: 5,
      date: '2026-06-05',
      day: 'Sexta',
      time: '20:30',
      event: 'Casamento - Joao & Amanda',
      location: 'Salao Eventos Franca',
      city: 'Franca, SP',
      status: 'Confirmado',
    },
  ];

  return (
    <div className="hexagon-bg min-h-screen">
      {/* Mobile Menu */}
      <MobileMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-[#FF2E4A]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp" alt="Projeto X" className="h-12 md:h-14 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6 items-center">
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#FF2E4A] text-white font-bold rounded hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow"
            >
              Contratar
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* LANDING PAGE - Home */}
          {activeTab === 'landing' && (
            <div className="space-y-20">
              {/* Hero Section */}
              <section className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden -mx-4 -mt-24 pt-24">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/Notes_260313_004739_dfe_4d696c27.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    transform: `translateY(${scrollY * 0.5}px)`,
                  }}
                />
                <div className="absolute inset-0 bg-black/50" />

                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#FF2E4A]/30 rounded-full animate-pulse scale-pulse" />
                <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#FF2E4A]/20 rounded-full animate-pulse scale-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-[#FF2E4A]/20 rounded-full" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />

                <div className="relative z-10 text-center px-4">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp" alt="Projeto X" className="h-32 md:h-48 w-auto mb-8 slide-in-left mx-auto" />
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl fade-in-up mx-auto">
                    O Espetáculo da Sua Vida
                  </p>
                  <button
                    onClick={() => setActiveTab('sobre')}
                    className="btn-neon fade-in-up inline-block"
                    style={{ animationDelay: '0.4s' }}
                  >
                    SOLICITAR ORÇAMENTO
                  </button>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-[#FF2E4A] w-8 h-8" />
                  </div>
                </div>
              </section>

              {/* Preview: Projeto X */}
              <section className="py-20 px-6 md:px-12 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 neon-border hover:shadow-2xl transition-all duration-300 fade-in-up" style={{ boxShadow: '0 0 20px rgba(255, 46, 74, 0.3)' }}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                    O PROJETO X
                  </h2>
                  <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Somos a <span className="text-[#FF2E4A] font-bold">Banda Projeto X</span>, uma das maiores referências do Brasil em casamentos, formaturas, confraternizações e festas de 15 anos.
                    </p>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Vencedores do prêmio de <span className="text-[#FF2E4A] font-bold">Melhor Banda 2023/2024</span>, somos reconhecidos por entregar um espetáculo completo, com energia do começo ao fim, sem pausas.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-[#FF2E4A] neon-border">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.47_8dabee25.jpeg" alt="Projeto X" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setActiveTab('sobre')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF2E4A] text-white font-bold rounded hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow group"
                  >
                    Ver Mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* Preview: Diferenciais */}
              <section className="py-20 px-6 md:px-12 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 neon-border hover:shadow-2xl transition-all duration-300 fade-in-up" style={{ boxShadow: '0 0 20px rgba(255, 46, 74, 0.3)' }}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                    NOSSOS DIFERENCIAIS
                  </h2>
                  <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {diferenciais.slice(0, 2).map((diferencial, idx) => (
                    <div
                      key={idx}
                      className="group fade-in-up overflow-hidden rounded-lg border-2 border-[#FF2E4A]/30 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="relative h-40 md:h-48 overflow-hidden bg-black/60">
                        <img
                          src={diferencial.image}
                          alt={diferencial.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 md:p-6 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                        <h3 className="text-lg md:text-xl font-bold text-[#FF2E4A] display-font mb-2">
                          {diferencial.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 line-clamp-2">
                          {diferencial.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setActiveTab('diferenciais')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF2E4A] text-white font-bold rounded hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow group"
                  >
                    Ver Todos os Diferenciais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* Preview: Vídeos */}
              <section className="py-20 px-6 md:px-12 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 neon-border hover:shadow-2xl transition-all duration-300 fade-in-up" style={{ boxShadow: '0 0 20px rgba(255, 46, 74, 0.3)' }}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                    MELHORES MOMENTOS
                  </h2>
                  <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
                </div>

                <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {videos.slice(0, 3).map((video, idx) => (
                    <div
                      key={video.id}
                      className="group cursor-pointer fade-in-up"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden rounded-lg border-2 border-[#FF2E4A]/30 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-[#FF2E4A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 md:w-8 h-6 md:h-8 text-[#FF2E4A] fill-current" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white mt-2 md:mt-3 group-hover:text-[#FF2E4A] transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setActiveTab('videos')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF2E4A] text-white font-bold rounded hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow group"
                  >
                    Ver Todos os Vídeos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* Preview: Próximos Shows */}
              <section className="py-20 px-6 md:px-12 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 neon-border hover:shadow-2xl transition-all duration-300 fade-in-up" style={{ boxShadow: '0 0 20px rgba(255, 46, 74, 0.3)' }}>
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                    PRÓXIMOS SHOWS
                  </h2>
                  <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
                </div>

                <div className="space-y-4 mb-8">
                  {upcomingShows.slice(0, 2).map((show) => (
                    <div
                      key={show.id}
                      className="p-4 md:p-6 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover fade-in-up"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <p className="text-[#FF2E4A] font-bold text-sm md:text-base">
                            {show.day}, {new Date(show.date).toLocaleDateString('pt-BR')} às {show.time}
                          </p>
                          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                            {show.event}
                          </h3>
                          <p className="text-gray-400 text-sm md:text-base mt-1">
                            {show.location} • {show.city}
                          </p>
                        </div>
                        <span className="inline-block px-3 py-1 bg-[#FF2E4A]/20 border border-[#FF2E4A] text-[#FF2E4A] text-xs md:text-sm font-bold rounded">
                          {show.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setActiveTab('shows')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF2E4A] text-white font-bold rounded hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow group"
                  >
                    Ver Todos os Shows <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </section>

              {/* CTA Final */}
              <section className="text-center py-12">
                <h2 className="text-3xl md:text-4xl font-bold display-font text-white mb-6 glow-text">
                  Pronto para o Espetáculo?
                </h2>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF2E4A] text-white font-bold rounded text-lg hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow group"
                >
                  CONTRATAR AGORA <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </section>
            </div>
          )}

          {/* SOBRE Tab */}
          {activeTab === 'sobre' && (
            <div className="fade-in-up space-y-12">
              <div className="text-center mb-12 pt-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  O PROJETO X
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="group p-4 md:p-6 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover text-center overflow-hidden fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-xl md:text-3xl font-bold text-[#FF2E4A] mb-1 md:mb-2 display-font group-hover:scale-110 transition-transform duration-300 break-words">
                      {stat.number}
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Somos a <span className="text-[#FF2E4A] font-bold">Banda Projeto X</span>, uma das maiores referências do Brasil em casamentos, formaturas, confraternizações e festas de 15 anos.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Vencedores do prêmio de <span className="text-[#FF2E4A] font-bold">Melhor Banda 2023/2024</span>, somos reconhecidos por entregar um espetáculo completo, com energia do começo ao fim, sem pausas.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Muito mais que um show, um verdadeiro "espetáculo" - uma banda que eternaliza todos os momentos e realiza o sonho junto com vocês, misturando todos os estilos musicais e levando alegria por onde passa.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Um repertório eclético e super animado com números e brincadeiras que não deixam ninguém parado.
                  </p>
                </div>
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border-2 border-[#FF2E4A] neon-border order-1 md:order-2 group hover:shadow-2xl transition-all duration-300" style={{ boxShadow: '0 0 30px rgba(255, 46, 74, 0.5)' }}>
                  <div className="grid grid-cols-2 gap-1 h-full">
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.47_8dabee25.jpeg" alt="Show 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.48_cb459df8.jpeg" alt="Show 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.48 (2)_152d62ae.jpeg" alt="Show 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/pasted_file_ltDcta_WhatsAppImage2026-03-16at19.51.49_b816d57a.webp" alt="Show 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
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

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {diferenciais.map((diferencial, idx) => (
                  <div
                    key={idx}
                    className="group fade-in-up overflow-hidden rounded-lg border-2 border-[#FF2E4A]/30 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Image Section */}
                    <div className="relative h-56 md:h-64 overflow-hidden bg-black/60">
                      <img
                        src={diferencial.image}
                        alt={diferencial.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 md:p-6 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <CyberpunkIcon name={diferencial.icon as any} className="w-10 h-10 md:w-12 md:h-12" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-[#FF2E4A] display-font flex-grow">
                          {diferencial.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {diferencial.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VÍDEOS Tab */}
          {activeTab === 'videos' && (
            <div className="fade-in-up space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  MELHORES MOMENTOS
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {videos.map((video, idx) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video.id)}
                    className="group cursor-pointer fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden rounded-lg border-2 border-[#FF2E4A]/30 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{
                          boxShadow: selectedVideo === video.id ? '0 0 30px rgba(255, 46, 74, 0.8)' : 'none',
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-[#FF2E4A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 md:w-8 h-6 md:h-8 text-[#FF2E4A] fill-current" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white mt-2 md:mt-3 group-hover:text-[#FF2E4A] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Video Modal */}
              {selectedVideo && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
                  <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={videos.find((v) => v.id === selectedVideo)?.embedUrl}
                      title="Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PRÓXIMOS SHOWS Tab */}
          {activeTab === 'shows' && (
            <div className="fade-in-up space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  PRÓXIMOS SHOWS
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              <div className="space-y-4">
                {upcomingShows.map((show) => (
                  <div
                    key={show.id}
                    className="p-4 md:p-6 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover fade-in-up"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-[#FF2E4A] font-bold text-sm md:text-base">
                          {show.day}, {new Date(show.date).toLocaleDateString('pt-BR')} às {show.time}
                        </p>
                        <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                          {show.event}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base mt-1">
                          {show.location} • {show.city}
                        </p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-[#FF2E4A]/20 border border-[#FF2E4A] text-[#FF2E4A] text-xs md:text-sm font-bold rounded">
                        {show.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-400 mb-6">
                  Interessado em contratar a banda para seu evento?
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF2E4A] text-white font-bold rounded text-lg hover:bg-[#FF2E4A]/80 transition-all duration-300 text-glow group"
                >
                  CONTRATAR AGORA <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Floating WhatsApp Button with 3D Flip */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-30 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden perspective hover:scale-110 transition-transform duration-300"
        style={{
          perspective: '1000px',
        }}
      >
        <div className="relative w-full h-full flip-container" style={{ transformStyle: 'preserve-3d', animation: 'flip-3d 6s infinite' }}>
          {/* Front - WhatsApp Logo */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF2E4A] to-[#FF2E4A]/80 rounded-full border-2 border-white/20"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <img src="https://i.ibb.co/99wDYLVT/Design-sem-nome-2.png" alt="WhatsApp" className="w-10 h-10 md:w-12 md:h-12" />
          </div>

          {/* Back - Projeto X Logo */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF2E4A] to-[#FF2E4A]/80 rounded-full border-2 border-white/20"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp" alt="Projeto X" className="w-10 h-10 md:w-12 md:h-12" />
          </div>

          {/* Sparkles and Flares */}
          <div className="sparkles-burst absolute inset-0 pointer-events-none" style={{ animation: 'sparkles-burst 6s infinite' }} />
          <div className="glow-pulse absolute inset-0 rounded-full" style={{ animation: 'glow-pulse 6s infinite', boxShadow: '0 0 20px rgba(255, 46, 74, 0.6)' }} />
          <div className="light-ray absolute inset-0 rounded-full" style={{ animation: 'light-ray 6s infinite' }} />
          <div className="orbit-sparkles absolute inset-0 pointer-events-none" style={{ animation: 'orbit-sparkles 6s infinite' }} />
          <div className="flare-light absolute inset-0 rounded-full pointer-events-none" style={{ animation: 'flare-light 6s infinite' }} />
        </div>
      </a>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-[#FF2E4A]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-4 display-font">REDES SOCIAIS</h3>
              <div className="flex gap-4 justify-center">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FF2E4A] hover:bg-[#FF2E4A] transition-all duration-300 group">
                  <Instagram className="w-5 h-5 text-[#FF2E4A] group-hover:text-white transition-colors" />
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FF2E4A] hover:bg-[#FF2E4A] transition-all duration-300">
                  <img src="https://i.ibb.co/99wDYLVT/Design-sem-nome-2.png" alt="WhatsApp" className="w-5 h-5" />
                </a>
                <a href={emailUrl} className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#FF2E4A] hover:bg-[#FF2E4A] transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-[#FF2E4A] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-4 display-font">CONTATO</h3>
              <p className="text-gray-400 text-sm">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF2E4A] transition-colors">
                  +55 16 99227-7417
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a href={emailUrl} className="hover:text-[#FF2E4A] transition-colors">
                  {emailAddress}
                </a>
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-4 display-font">INSTAGRAM</h3>
              <p className="text-gray-400 text-sm">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF2E4A] transition-colors">
                  @projetoxbanda
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-[#FF2E4A]/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Feito com <Heart className="w-4 h-4 text-[#FF2E4A] inline" /> por Guilherme Correa para a Banda Projeto X © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
