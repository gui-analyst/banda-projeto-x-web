import { useState, useEffect } from 'react';
import { Music, Zap, Users, DollarSign, Phone, Mail, Instagram, Heart, Sparkles, ChevronDown, Play, Calendar } from 'lucide-react';
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
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.49_4f8a1e2c.jpeg',
    },
    {
      title: 'Bazzuka CO2',
      description: 'Efeito especial de CO2 que cria uma experiência visual espetacular, elevando a energia do evento ao máximo.',
      icon: 'BazzukaX',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.47_e7c2d4f1.jpeg',
    },
    {
      title: 'Shot de Bebida',
      description: 'Momento de interação com o público onde oferecemos shots de bebida, criando uma experiência memorável e divertida.',
      icon: 'ShotX',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.47 (1)_a3b5c8d2.jpeg',
    },
    {
      title: 'Óculos X',
      description: 'Óculos neon customizados que são distribuídos ao público, criando uma identidade visual única para o seu evento.',
      icon: 'OculosX',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/WhatsApp Image 2026-03-16 at 19.51.49 (3)_f1e2d3c4.jpeg',
    },
  ];

  const videos = [
    { id: 1, title: 'Show Completo - Casamento SP', url: 'https://www.youtube.com/embed/v5TYzZS9Yyc' },
    { id: 2, title: 'Formatura - Energia Total', url: 'https://www.youtube.com/embed/eIt_3LZOOwU' },
    { id: 3, title: '15 Anos - Momento Marcante', url: 'https://www.youtube.com/embed/wBx8TFeN7gU' },
    { id: 4, title: 'Confraternização - Público Dançando', url: 'https://www.youtube.com/embed/kiis8llcQVY' },
    { id: 5, title: 'Casamento - Momento Especial', url: 'https://www.youtube.com/embed/YQL5VoCSWIc' },
  ];

  const upcomingShows = [
    { id: 1, event: 'Casamento', date: '2026-04-15', day: 'Sábado', time: '20:00', location: 'Salão de Festas', city: 'Franca - SP', status: 'Confirmado' },
    { id: 2, event: 'Formatura', date: '2026-04-22', day: 'Sábado', time: '19:00', location: 'Clube da Cidade', city: 'Ribeirão Preto - SP', status: 'Confirmado' },
    { id: 3, event: '15 Anos', date: '2026-05-10', day: 'Sábado', time: '21:00', location: 'Espaço de Eventos', city: 'Araraquara - SP', status: 'Confirmado' },
    { id: 4, event: 'Confraternização', date: '2026-05-20', day: 'Terça', time: '18:00', location: 'Chácara', city: 'São Paulo - SP', status: 'Confirmado' },
    { id: 5, event: 'Casamento', date: '2026-06-05', day: 'Sábado', time: '20:00', location: 'Fazenda', city: 'Batatais - SP', status: 'Confirmado' },
  ];

  return (
    <div className="min-h-screen bg-black text-white hexagon-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-[#FF2E4A]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp" alt="Projeto X" className="h-12 md:h-14" />
          <MobileMenu tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="hidden md:flex gap-6 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-bold transition-colors ${
                  activeTab === tab.id ? 'text-[#FF2E4A]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-2 bg-[#FF2E4A] text-white rounded-lg font-bold hover:bg-[#FF2E4A]/80 transition-all duration-300 hover:scale-105"
          >
            Contratar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/Notes_260313_004739_dfe_a1b2c3d4.png)',
            backgroundAttachment: 'fixed',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="mb-8 animate-fade-in">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp" alt="Projeto X" className="h-24 md:h-32 mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-up text-glow">
            O Espetáculo da Sua Vida
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up">
            Melhor Banda 2023/2024 - Casamentos, Formaturas, 15 Anos e Confraternizações
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#FF2E4A] text-[#FF2E4A] rounded-lg font-bold hover:bg-[#FF2E4A] hover:text-white transition-all duration-300 hover:scale-105 animate-fade-in-up"
          >
            SOLICITAR ORÇAMENTO
          </a>
          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-[#FF2E4A]" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Sobre Tab */}
          {activeTab === 'sobre' && (
            <div className="space-y-12 animate-fade-in-up">
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 border-2 border-[#FF2E4A]/30 rounded-lg bg-black/40 text-center hover:border-[#FF2E4A] transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#FF2E4A] mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-8 border-2 border-[#FF2E4A]/30 rounded-lg bg-black/40">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Me chamo Lucas e represento a Banda Projeto X, uma das maiores referências do Brasil em casamentos, formaturas, confraternizações e festas de 15 anos.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Vencedores do prêmio de Melhor Banda de 2023/2024, somos reconhecidos por entregar um espetáculo completo, com energia do começo ao fim, sem pausas — sempre com muita interação com o público e momentos marcantes.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nosso diferencial está nos diversos "números" ao longo do show, criados para surpreender e elevar a festa a outro nível.
                </p>
              </div>

              <div className="p-6 md:p-8 border-2 border-yellow-500/50 rounded-lg bg-yellow-500/5">
                <p className="text-yellow-300 font-bold text-lg mb-4">⚠️ Importante</p>
                <p className="text-gray-300">
                  A contratação de Som, Estrutura, Palco, Iluminação e Backline é por conta do contratante, conforme o nosso Rider Técnico, que será enviado junto com o fechamento.
                </p>
              </div>
            </div>
          )}

          {/* Diferenciais Tab */}
          {activeTab === 'diferenciais' && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Números Especiais do Show</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {diferenciais.map((item, index) => (
                  <div
                    key={index}
                    className="group border-2 border-[#FF2E4A]/30 rounded-lg overflow-hidden bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">
                          <CyberpunkIcon name={item.icon} />
                        </div>
                        <h3 className="text-xl font-bold text-[#FF2E4A]">{item.title}</h3>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vídeos Tab */}
          {activeTab === 'videos' && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Melhores Momentos</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="group cursor-pointer border-2 border-[#FF2E4A]/30 rounded-lg overflow-hidden bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 hover:scale-105"
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <div className="relative h-40 bg-black flex items-center justify-center">
                      <Play size={48} className="text-[#FF2E4A] group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300 font-semibold">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedVideo && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                  <div className="relative w-full max-w-4xl">
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-[#FF2E4A]"
                    >
                      ✕
                    </button>
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={videos.find((v) => v.id === selectedVideo)?.url}
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Próximos Shows Tab */}
          {activeTab === 'shows' && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Próximos Shows</h2>
              <div className="space-y-6">
                {upcomingShows.map((show) => (
                  <div
                    key={show.id}
                    className="group p-6 md:p-8 border-2 border-[#FF2E4A]/30 rounded-lg bg-black/40 hover:border-[#FF2E4A] transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="flex gap-6 flex-1">
                        <div className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-[#FF2E4A]">
                            {show.date.split('-')[2]}
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-gray-400 uppercase">
                              {show.day}
                            </div>
                            <div className="text-sm md:text-base text-gray-300">
                              {show.date.split('-')[1]}/{show.date.split('-')[0]}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#FF2E4A] transition-colors">
                            {show.event}
                          </h3>
                          <div className="space-y-1 text-sm md:text-base text-gray-300">
                            <p className="flex items-center gap-2">
                              <span className="text-[#FF2E4A]">📍</span>
                              {show.location}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="text-[#FF2E4A]">🏙️</span>
                              {show.city}
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="text-[#FF2E4A]">⏰</span>
                              {show.time}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center md:items-end gap-3">
                        <span className="px-4 py-2 bg-[#FF2E4A]/20 border border-[#FF2E4A] text-[#FF2E4A] rounded-full text-xs md:text-sm font-bold uppercase">
                          {show.status}
                        </span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 md:px-6 py-2 md:py-3 bg-[#FF2E4A] text-white rounded-lg font-bold hover:bg-[#FF2E4A]/80 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                        >
                          Contratar
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 md:p-8 border-2 border-[#FF2E4A]/30 rounded-lg bg-black/40 text-center">
                <p className="text-gray-300 text-sm md:text-base mb-4">
                  Não vê sua data aqui? Entre em contato conosco!
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-[#FF2E4A] text-white rounded-lg font-bold hover:bg-[#FF2E4A]/80 transition-all duration-300 hover:scale-105"
                >
                  Solicitar Disponibilidade
                </a>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-flip-button"
        title="Conversar no WhatsApp"
      >
        <div className="flip-container">
          {/* Front face - WhatsApp Logo */}
          <div className="flip-face front">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/whatsapp-logo-icone_f3074de5.png"
              alt="WhatsApp"
            />
          </div>
          {/* Back face - Banda Projeto X Logo */}
          <div className="flip-face back">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663417961282/gHaHPi2GjbH7b7LmvcVLLu/logo_b9698840.webp"
              alt="Projeto X"
            />
          </div>
        </div>
        {/* Sparkle particles - outside flip-container */}
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        
        {/* Orbiting sparkles */}
        <div className="orbit-sparkle"></div>
        <div className="orbit-sparkle"></div>
        
        {/* Light flare effect */}
        <div className="flip-flare"></div>
      </a>

      {/* Footer */}
      <footer className="border-t border-[#FF2E4A]/20 bg-black/80 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-4 text-sm md:text-base"></p>
          <div className="flex justify-center gap-6 mb-4">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF2E4A] hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Instagram size={24} />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src="https://i.ibb.co/99wDYLVT/Design-sem-nome-2.png" alt="WhatsApp" className="w-6 h-6" />
            </a>
            <a href={emailUrl} className="text-[#FF2E4A] hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-xs md:text-sm">
            Feito com ❤️ por Guilherme Correa para Banda Projeto X © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
