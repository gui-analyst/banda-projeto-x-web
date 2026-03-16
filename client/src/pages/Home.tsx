import { useState, useEffect } from 'react';
import { Music, Zap, Users, DollarSign, Phone, Mail, Instagram, Heart, Sparkles, ChevronDown, Play } from 'lucide-react';
import MobileMenu from '@/components/MobileMenu';
import { CyberpunkIcon } from '@/components/CyberpunkIcons';

export default function Home() {
  const [activeTab, setActiveTab] = useState('sobre');
  const [scrollY, setScrollY] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'sobre', label: 'Sobre', icon: Music },
    { id: 'diferenciais', label: 'Diferenciais', icon: Sparkles },
    { id: 'videos', label: 'Vídeos', icon: Play },
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

  // Show hero banner only on 'sobre' tab
  const showHeroBanner = activeTab === 'sobre';

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
          <nav className="hidden md:flex gap-6">
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

      {/* Hero Section - Only shown on 'sobre' tab */}
      {showHeroBanner && (
        <section className="relative w-full h-screen pt-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/Notes_260313_004739_dfe_4d696c27.png)',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#FF2E4A]/30 rounded-full animate-pulse scale-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#FF2E4A]/20 rounded-full animate-pulse scale-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-[#FF2E4A]/20 rounded-full" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp" alt="Projeto X" className="h-32 md:h-48 w-auto mb-8 slide-in-left" />
            <h1 className="text-3xl md:text-5xl font-bold display-font text-white mb-4 slide-in-left glow-text hidden">
              PROJETO<span className="text-[#FF2E4A]">X</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl fade-in-up">
              O Espetáculo da Sua Vida
            </p>
            <p className="text-sm md:text-lg text-gray-300 max-w-2xl mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Melhor Banda 2023/2024 - Casamentos, Formaturas, 15 Anos e Confraternizações
            </p>
            <button
              onClick={() => setActiveTab('orcamento')}
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
      )}

      {/* Tab Content Section */}
      <section className={`relative px-4 ${showHeroBanner ? 'py-20' : 'pt-32 pb-20'}`}>
        <div className="container mx-auto">
          {/* SOBRE Tab */}
          {activeTab === 'sobre' && (
            <div className="fade-in-up space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold display-font text-white mb-4 glow-text">
                  SOBRE NÓS
                </h2>
                <div className="w-24 h-1 bg-[#FF2E4A] mx-auto rounded" />
              </div>

              {/* Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 md:p-6 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 text-center group min-h-[140px] flex flex-col justify-center"
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

              <div className="mt-12 p-6 md:p-8 rounded-lg border-2 border-[#FF2E4A] bg-black/40 neon-border hover:shadow-2xl transition-all duration-300" style={{ boxShadow: '0 0 20px rgba(255, 46, 74, 0.5)' }}>
                <h3 className="text-2xl font-bold text-white mb-4 display-font">
                  ⏱️ Duração do Show
                </h3>
                <p className="text-lg md:text-xl text-[#FF2E4A] font-bold">
                  2 horas a 2 horas e 30 minutos
                </p>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Energia do início ao fim, sem pausas. Sempre com muita interação com o público e momentos marcantes.
                </p>
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

              {/* Video Modal */}
              {selectedVideo !== null && (
                <div
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedVideo(null)}
                >
                  <div
                    className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden border-2 border-[#FF2E4A]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-[#FF2E4A] text-white rounded hover:bg-[#FF2E4A]/80 transition-all"
                    >
                      ✕
                    </button>
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={videos[selectedVideo].embedUrl}
                        title={videos[selectedVideo].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Video Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {videos.map((video, idx) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer fade-in-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => setSelectedVideo(idx)}
                  >
                    <div className="relative h-40 md:h-56 rounded-lg overflow-hidden border-2 border-[#FF2E4A]/30 hover:border-[#FF2E4A] transition-all duration-300">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Projeto+X';
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

              <div className="grid md:grid-cols-2 gap-6">
                {/* Valor */}
                <div className="p-6 md:p-8 rounded-lg border-2 border-[#FF2E4A] bg-black/40 neon-border overflow-hidden">
                  <h3 className="text-2xl font-bold text-white mb-4 display-font flex items-center gap-2">
                    <CyberpunkIcon name="Energia" className="w-8 h-8" />
                    Valor do Show
                  </h3>
                  <div className="text-4xl md:text-5xl font-bold text-[#FF2E4A] mb-4">
                    R$ 8.000,00
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    Valor para show de 2 a 2h30 de duração
                  </p>
                </div>

                {/* Formas de Pagamento */}
                <div className="p-6 md:p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover overflow-hidden">
                  <h3 className="text-2xl font-bold text-white mb-4 display-font">
                    Formas de Pagamento
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF2E4A] font-bold text-lg">•</span>
                      <div>
                        <p className="font-bold text-white text-sm md:text-base">Sinal (Garantia)</p>
                        <p className="text-gray-300 text-xs md:text-sm">R$ 1.500,00 no ato da assinatura do contrato</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#FF2E4A] font-bold text-lg">•</span>
                      <div>
                        <p className="font-bold text-white text-sm md:text-base">Restante</p>
                        <p className="text-gray-300 text-xs md:text-sm">7 dias antes do evento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusos */}
              <div className="p-6 md:p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 neon-border-hover overflow-hidden">
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
                      <span className="text-white text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Importante */}
              <div className="p-6 md:p-8 rounded-lg border-2 border-yellow-600/50 bg-yellow-900/10 overflow-hidden">
                <h3 className="text-xl font-bold text-yellow-400 mb-3 display-font">
                  ⚠️ Importante
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
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

              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5516994204686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 md:p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group text-center overflow-hidden min-h-[240px] flex flex-col justify-center"
                >
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                    💬
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 display-font">WhatsApp</h3>
                  <p className="text-[#FF2E4A] font-bold text-base md:text-lg break-all">(16) 99420-4686</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-2">Clique para conversar</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:contatoprojetoxbanda@gmail.com"
                  className="p-4 md:p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group text-center overflow-hidden min-h-[240px] flex flex-col justify-center"
                >
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                    📧
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 display-font">Email</h3>
                  <p className="text-[#FF2E4A] font-bold text-xs md:text-sm break-all">contatoprojetoxbanda@gmail.com</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-2">Clique para enviar email</p>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/projetoxbanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 md:p-8 rounded-lg border-2 border-[#FF2E4A]/30 bg-black/40 hover:border-[#FF2E4A] hover:bg-black/60 transition-all duration-300 neon-border-hover group text-center overflow-hidden min-h-[240px] flex flex-col justify-center"
                >
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 scale-pulse">
                    📱
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 display-font">Instagram</h3>
                  <p className="text-[#FF2E4A] font-bold text-base md:text-lg">@projetoxbanda</p>
                  <p className="text-gray-400 text-xs md:text-sm mt-2">Siga nossas redes</p>
                </a>
              </div>

              {/* Contact Form */}
              <div className="p-6 md:p-8 rounded-lg border-2 border-[#FF2E4A] bg-black/40 neon-border overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-6 display-font">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors text-sm md:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Seu Email"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Seu Telefone"
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors text-sm md:text-base"
                  />
                  <textarea
                    placeholder="Sua Mensagem"
                    rows={5}
                    className="w-full px-4 py-3 rounded bg-black/60 border border-[#FF2E4A]/30 text-white placeholder-gray-500 focus:border-[#FF2E4A] focus:outline-none transition-colors resize-none text-sm md:text-base"
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
          <p className="text-gray-400 mb-4 text-sm md:text-base">
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
          <p className="text-xs md:text-sm text-gray-500">
            Feito com <Heart size={14} className="inline text-[#FF2E4A]" /> por Guilherme Correa para a melhor banda do Brasil
          </p>
        </div>
      </footer>
    </div>
  );
}
