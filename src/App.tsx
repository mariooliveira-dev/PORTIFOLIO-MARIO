import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Code, 
  Database, 
  Layers, 
  Mail, 
  Github, 
  Linkedin, 
  Phone, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Menu, 
  X, 
  GraduationCap, 
  Sparkles, 
  User, 
  Send, 
  MessageSquare, 
  Cpu, 
  Layout, 
  Clock,
  ArrowUpRight,
  TrendingUp,
  FileCheck2,
  Calendar,
  Check
} from 'lucide-react';
import { personalInfo, projects, skills, experiences, differentials, contactInfo } from './data';
import { Project } from './types';
import Logo from './components/Logo';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'systems' | 'websites'>('all');
  const [scrolled, setScrolled] = useState(false);
  
  // Custom contact message states
  const [contactName, setContactName] = useState('');
  const [contactSubject, setContactSubject] = useState('Oportunidade de Trabalho');
  const [contactMessage, setContactMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Loading animation simulation for ultimate premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll detection for sticky navbar style changes
  useEffect(() => {
    if (loading) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section on scroll
      const sections = ['inicio', 'sobre', 'projetos', 'conhecimentos', 'experiencia', 'diferenciais', 'contato'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleGenerateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Olá Cledmário, meu nome é ${contactName || 'Visitante'}.\n\n*Assunto:* ${contactSubject}\n\n*Mensagem:*\n${contactMessage || 'Gostei muito do seu portfólio e gostaria de conversar sobre oportunidades!'}`;
    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const filteredProjects = projects.filter(
    proj => projectFilter === 'all' ? true : proj.category === projectFilter
  );

  const getSkillIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('html5') || n.includes('html')) return <Code className="w-4 h-4 text-orange-500 shrink-0" />;
    if (n.includes('css3') || n.includes('css')) return <Layers className="w-4 h-4 text-blue-500 shrink-0" />;
    if (n.includes('javascript')) return <Code className="w-4 h-4 text-yellow-500 shrink-0" />;
    if (n.includes('typescript')) return <Code className="w-4 h-4 text-blue-400 shrink-0" />;
    if (n.includes('react')) return <Cpu className="w-4 h-4 text-sky-400 shrink-0" />;
    if (n.includes('vite')) return <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />;
    if (n.includes('node')) return <Cpu className="w-4 h-4 text-green-400 shrink-0" />;
    if (n.includes('supabase')) return <Database className="w-4 h-4 text-emerald-400 shrink-0" />;
    if (n.includes('git') && !n.includes('hub')) return <Code className="w-4 h-4 text-orange-500 shrink-0" />;
    if (n.includes('github')) return <Github className="w-4 h-4 text-slate-300 shrink-0" />;
    if (n.includes('vercel')) return <Send className="w-4 h-4 text-white shrink-0" />;
    if (n.includes('sql')) return <Database className="w-4 h-4 text-blue-500 shrink-0" />;
    if (n.includes('banco de dados')) return <Database className="w-4 h-4 text-cyan-400 shrink-0" />;
    if (n.includes('ui/ux')) return <Layout className="w-4 h-4 text-pink-400 shrink-0" />;
    if (n.includes('responsiv')) return <Layout className="w-4 h-4 text-indigo-400 shrink-0" />;
    if (n.includes('excel')) return <FileCheck2 className="w-4 h-4 text-green-500 shrink-0" />;
    return <Check className="w-4 h-4 text-brand shrink-0" />;
  };

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre Mim' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'conhecimentos', label: 'Conhecimentos' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-text-p font-sans selection:bg-brand/20 selection:text-brand relative overflow-x-hidden">
      
      {/* BACKGROUND GRAPHICS (Tech ambient) */}
      <div className="fixed inset-0 tech-grid pointer-events-none z-0 opacity-40" />
      <div className="fixed top-12 left-1/4 w-[500px] h-[500px] rounded-full radial-glow-blue pointer-events-none z-0" />
      <div className="fixed bottom-12 right-1/4 w-[600px] h-[600px] rounded-full radial-glow-cyan pointer-events-none z-0" />
      <div className="fixed top-1/2 left-2/3 w-[400px] h-[400px] rounded-full radial-glow-teal pointer-events-none z-0" />

      {/* STYLISH CYBER SPLASH SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="splash-loader"
            className="fixed inset-0 bg-[#04060a] z-50 flex flex-col items-center justify-center px-4"
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="space-y-8 text-center max-w-sm">
              <Logo className="w-72 h-auto mx-auto" />
              
              <div className="space-y-2">
                <div className="h-0.5 w-44 bg-white/5 rounded-full mx-auto overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand via-accent-cyan to-accent-teal"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  Carregando Portfólio Premium...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER & NAVIGATION */}
      <header 
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/25' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center space-x-3 group relative">
            <Logo simplified className="w-12 h-12" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight leading-none text-base group-hover:text-brand transition-colors">
                Cledmário Santos
              </span>
              <span className="text-[9px] font-mono text-brand mt-1 tracking-widest uppercase font-bold">
                Systems & Technology
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-display uppercase tracking-wider transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? 'text-brand font-bold' 
                    : 'text-text-s hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-brand to-accent-cyan rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a 
              href="#contato"
              className="ml-4 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-brand hover:bg-brand-hover rounded-xl shadow-md shadow-brand/10 hover:shadow-brand/20 transition-all duration-300 border border-brand/20 hover:scale-[1.03]"
            >
              Fale Comigo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-text-s hover:text-white hover:bg-white/5 transition-colors focus:outline-none border border-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[74px] left-0 w-full bg-bg-dark/95 backdrop-blur-2xl z-30 border-b border-white/5 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-brand/10 text-brand font-semibold border-l-4 border-brand' 
                      : 'text-text-s hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3.5 bg-brand hover:bg-brand-hover text-white rounded-xl font-bold shadow-lg shadow-blue-500/10 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp: {contactInfo.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section 
        id="inicio" 
        className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden flex flex-col items-center justify-center text-center"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Logo Principal Centralizada */}
          <div className="flex justify-center mb-6">
            <Logo className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] h-auto" />
          </div>

          {/* Nome e Apresentação com Animações de Entrada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand font-mono text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
              <span className="shimmer-text">Pronto para novos desafios públicos e privados</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              {personalInfo.name}
            </h1>

            {/* List of elegant title tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto pt-4">
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-display tracking-widest uppercase bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                Desenvolvedor Web
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-display tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Criador de Sistemas Inteligentes
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-display tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Especialista em Sistemas Administrativos
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold font-display tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Desenvolvedor Full Stack
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text-s text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Action buttons with high-end hover states */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a 
              id="cta-see-projects"
              href="#projetos"
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold rounded-xl shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center space-x-2 group cursor-pointer border border-brand/20"
            >
              <span>Ver Projetos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              id="cta-contact"
              href="#contato"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-medium rounded-xl hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Entrar em Contato</span>
            </a>
          </motion.div>

          {/* Mini trust stats in a razor sharp glass container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-lg mx-auto"
          >
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">ADS</p>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">Formação Superior</p>
            </div>
            <div className="text-center border-x border-white/5 px-2">
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">09</p>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">Projetos Ativos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">DEV</p>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">Sistemas & Sites</p>
            </div>
          </motion.div>

          {/* Minimal executive details card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="glass-panel p-5 rounded-2xl max-w-md mx-auto flex items-center justify-between border border-white/5 shadow-xl shadow-black/20"
          >
            <div className="flex items-center space-x-3 text-left">
              <Logo simplified className="w-12 h-12 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-white font-display">Cledmário Santos Oliveira</h4>
                <p className="text-[10px] font-mono text-brand">@mariooliveira-dev</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="sobre" className="py-24 relative overflow-hidden border-y border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual left element - Glass panel card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="glass-panel rounded-3xl p-8 border border-white/5 relative overflow-hidden group shadow-2xl">
                {/* Decorative glow gradients inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full group-hover:bg-brand/15 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-teal/10 blur-3xl rounded-full group-hover:bg-accent-teal/15 transition-all duration-500" />

                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                    <User className="w-6 h-6 text-accent-cyan" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">O que me motiva?</h3>
                  
                  <p className="text-text-s text-sm leading-relaxed">
                    Unir a tecnologia moderna com a prática administrativa real. Eu sei como secretarias, empresas e órgãos públicos funcionam por dentro. Meu objetivo é usar meu conhecimento em computação para criar sistemas práticos, automatizar planilhas manuais cansativas e organizar fluxos complexos em painéis modernos de controle.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0" />
                      <span className="text-sm text-white">Experiência no setor público</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0" />
                      <span className="text-sm text-white">Visão técnica e organizacional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0" />
                      <span className="text-sm text-white">Familiaridade com banco de dados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Sobre Cledmário</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Trajetória Administrativa & Tecnológica
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-brand to-accent-cyan rounded" />
              </div>

              <p className="text-text-s text-base sm:text-lg leading-relaxed">
                {personalInfo.about}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 space-y-2">
                  <span className="font-display font-bold text-white text-base block">Competência Administrativa</span>
                  <p className="text-text-s text-xs leading-relaxed">
                    Vivência prática na gestão de processos de matrículas, organização de chamadas, controle de documentos, suporte ao cidadão e fluxo interno.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 space-y-2">
                  <span className="font-display font-bold text-white text-base block">Inovação & Automação</span>
                  <p className="text-text-s text-xs leading-relaxed">
                    Especialista em integrar sistemas modernos de banco de dados e APIs para gerar aplicações robustas e automatizadas.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="#contato"
                  className="inline-flex items-center space-x-2 text-brand hover:text-brand-hover font-bold text-sm transition-all group"
                >
                  <span>Conhecer diferenciais de trabalho</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projetos" className="py-24 relative overflow-hidden scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Meu Portfólio</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Projetos & Soluções Desenvolvidas
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-brand to-accent-cyan rounded" />
              <p className="text-text-s text-sm mt-2 max-w-xl">
                Sistemas operacionais completos e páginas modernas com integrações estáveis e visual corporativo impecável.
              </p>
            </div>

            {/* Filter buttons - Modern glass capsule */}
            <div className="flex bg-slate-950/60 p-1.5 rounded-2xl border border-white/5 shadow-inner shrink-0 self-start md:self-auto">
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-4 py-2 text-xs font-bold font-display uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                  projectFilter === 'all' 
                    ? 'bg-brand text-white shadow-lg' 
                    : 'text-text-s hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setProjectFilter('systems')}
                className={`px-4 py-2 text-xs font-bold font-display uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                  projectFilter === 'systems' 
                    ? 'bg-brand text-white shadow-lg' 
                    : 'text-text-s hover:text-white'
                }`}
              >
                Sistemas Web
              </button>
              <button
                onClick={() => setProjectFilter('websites')}
                className={`px-4 py-2 text-xs font-bold font-display uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer ${
                  projectFilter === 'websites' 
                    ? 'bg-brand text-white shadow-lg' 
                    : 'text-text-s hover:text-white'
                }`}
              >
                Websites
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-panel rounded-3xl border border-white/5 overflow-hidden shadow-2xl flex flex-col h-full group transition-all duration-500 hover:border-brand/20 hover:shadow-brand/5 hover:-translate-y-1.5"
                >
                  {/* Decorative project header with technology category */}
                  <div className="p-4 bg-slate-950/40 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-brand">
                      {project.category === 'systems' ? 'SISTEMA ADMINISTRATIVO' : 'WEBSITE INSTITUCIONAL'}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-brand transition-colors" />
                  </div>

                  {/* Interactive Illustrative Image/Banner */}
                  <div className={`h-40 w-full relative overflow-hidden flex items-center justify-center border-b border-white/5 bg-gradient-to-br transition-all duration-500 ${
                    project.id === 'secult' ? 'from-blue-950/30 to-indigo-950/30 text-blue-400' :
                    project.id === 'simulador-ms-project' ? 'from-purple-950/30 to-violet-950/30 text-purple-400' :
                    project.id === 'centerfisio' ? 'from-emerald-950/30 to-teal-950/30 text-emerald-400' :
                    project.id === 'finance' ? 'from-emerald-950/30 to-green-950/30 text-emerald-400' :
                    project.id === 'centralpark' ? 'from-sky-950/30 to-blue-950/30 text-sky-400' :
                    project.id === 'clinicavet' ? 'from-rose-950/30 to-amber-950/30 text-rose-400' :
                    project.id === 'mslava' ? 'from-cyan-950/30 to-blue-950/30 text-cyan-400' :
                    project.id === 'calculadora' ? 'from-indigo-950/30 to-pink-950/30 text-indigo-400' :
                    'from-orange-950/30 to-amber-950/30 text-amber-400'
                  }`}>
                    {/* Abstract decorative grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                    
                    {/* Modern floating blur blobs */}
                    <div className="absolute top-2 right-4 w-12 h-12 rounded-full bg-current/10 blur-xl" />
                    <div className="absolute bottom-2 left-4 w-16 h-16 rounded-full bg-current/5 blur-xl" />

                    {/* Visual Icon representation */}
                    <div className="relative p-4 rounded-2xl bg-[#0a0f1d]/95 shadow-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:border-brand/40">
                      {project.id === 'secult' && <GraduationCap className="w-8 h-8 text-blue-400" />}
                      {project.id === 'simulador-ms-project' && <Sparkles className="w-8 h-8 text-purple-400" />}
                      {project.id === 'centerfisio' && <Cpu className="w-8 h-8 text-emerald-400" />}
                      {project.id === 'finance' && <TrendingUp className="w-8 h-8 text-emerald-400" />}
                      {project.id === 'centralpark' && <Code className="w-8 h-8 text-sky-400" />}
                      {project.id === 'clinicavet' && <FileCheck2 className="w-8 h-8 text-rose-400" />}
                      {project.id === 'mslava' && <Send className="w-8 h-8 text-cyan-400" />}
                      {project.id === 'calculadora' && <Cpu className="w-8 h-8 text-indigo-400" />}
                      {project.id === 'agendapro' && <Calendar className="w-8 h-8 text-amber-400" />}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-brand transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-text-s text-xs leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-md font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="pt-2 flex gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-brand hover:bg-brand-hover text-white font-bold text-xs text-center rounded-xl transition-all duration-300 flex items-center justify-center space-x-1 shadow-sm hover:shadow-md hover:scale-[1.01]"
                        >
                          <span>Acessar Projeto</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[3px]" />
                        </a>
                        <a
                          href={contactInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 font-semibold text-xs text-center rounded-xl transition-all duration-300 flex items-center justify-center space-x-1 hover:scale-[1.01]"
                          title="Código Fonte"
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">Código</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick Notice about projects */}
          <div className="mt-12 p-6 glass-panel border border-brand/20 rounded-2xl max-w-2xl mx-auto text-center">
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              💡 <strong>Nota Técnica:</strong> Meus projetos utilizam o <strong className="text-brand">Supabase</strong> como backend serverless para persistência de dados em tempo real, fornecendo segurança, tabelas de controle administrativo de alunos e relatórios de métricas.
            </p>
          </div>

        </div>
      </section>

      {/* KNOWLEDGE SECTION */}
      <section id="conhecimentos" className="py-24 relative overflow-hidden border-y border-white/5 bg-slate-950/20 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Tecnologias & Competências</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Habilidades em Tecnologia e Negócios
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand to-accent-cyan rounded mx-auto" />
            <p className="text-text-s text-sm max-w-xl mx-auto">
              Minha formação une o melhor de dois mundos: o conhecimento técnico de programação com a vivência operacional da área administrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tech Pillar */}
            <div className="glass-panel border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl group transition-all duration-500 hover:border-brand/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                  <Code className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Desenvolvimento Web</h3>
                  <p className="text-[10px] text-brand font-mono tracking-wider">FRONT-END & CORE TECH</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                Desenvolvimento de interfaces modernas de usuários, focando em usabilidade, design responsivo e código de fácil leitura.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.filter(s => s.category === 'tech').map(skill => (
                  <span 
                    key={skill.name}
                    className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:border-brand/40 hover:text-brand hover:bg-white/10 transition-all cursor-default flex items-center gap-2 shadow-sm"
                  >
                    {getSkillIcon(skill.name)}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Tools Pillar */}
            <div className="glass-panel border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl group transition-all duration-500 hover:border-brand/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                  <Cpu className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Ferramentas & Deploy</h3>
                  <p className="text-[10px] text-brand font-mono tracking-wider">CONTROLE & DEPLOY</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Uso de sistemas modernos de controle de versão, builders ágeis e plataformas de hospedagem em nuvem para deploy contínuo de aplicações.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.filter(s => s.category === 'tools').map(skill => (
                  <span 
                    key={skill.name}
                    className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:border-brand/40 hover:text-brand hover:bg-white/10 transition-all cursor-default flex items-center gap-2 shadow-sm"
                  >
                    {getSkillIcon(skill.name)}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Administrative Pillar */}
            <div className="glass-panel border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl group transition-all duration-500 hover:border-brand/20">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                  <Briefcase className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Gestão Administrativa</h3>
                  <p className="text-[10px] text-brand font-mono tracking-wider">NEGÓCIOS & ORGANIZAÇÃO</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Experiência em entender fluxos burocráticos, preenchimento e controle de documentos públicos, planilhas organizadas e apoio à gestão direta.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.filter(s => s.category === 'admin').map(skill => (
                  <span 
                    key={skill.name}
                    className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:border-brand/40 hover:text-brand hover:bg-white/10 transition-all cursor-default flex items-center gap-2 shadow-sm"
                  >
                    {getSkillIcon(skill.name)}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experiencia" className="py-24 relative overflow-hidden scroll-mt-12 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Timeline Left Column */}
            <div className="lg:col-span-5 space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Atuação Profissional</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Experiência Prática Consolidada
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-brand to-accent-cyan rounded" />
              </div>
              
              <p className="text-text-s text-base leading-relaxed">
                Minha carreira é marcada pela atuação em secretarias da prefeitura municipal, onde passei a identificar oportunidades de aplicar programação web para simplificar e organizar planilhas manuais e processos administrativos estagnados.
              </p>

              <div className="p-6 glass-panel border border-white/5 rounded-2xl flex items-start space-x-4 shadow-xl">
                <GraduationCap className="w-6 h-6 text-accent-cyan mt-1 shrink-0" />
                <div className="space-y-1">
                  <span className="font-display font-bold text-xs text-white block">Formação Acadêmica</span>
                  <p className="text-text-s text-xs leading-relaxed">
                    Graduação Superior em <strong className="text-brand font-bold">Análise e Desenvolvimento de Sistemas (ADS)</strong>, capacitando para modelagem de dados, algoritmos e boas práticas de software.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline right Column - Futuristic Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 ml-3 space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    
                    {/* Pulsing indicator node */}
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 rounded-full border-4 border-[#080b11] bg-brand group-hover:scale-110 group-hover:bg-accent-cyan transition-all shadow-md shadow-brand/20" />
                    
                    {/* Card container */}
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl hover:border-brand/20 transition-all duration-300 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-md self-start sm:self-auto uppercase tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-white text-xl">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-mono text-accent-cyan font-bold">
                          {exp.organization}
                        </p>
                      </div>

                      <p className="text-text-s text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {index === 0 ? (
                          <>
                            <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/5">Matrículas e Alunos</span>
                            <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/5">Controle de Chamadas</span>
                            <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/5">Organização de Cursos</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/5">Atendimento ao Cidadão</span>
                            <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/5">Suporte Operacional</span>
                            <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-300 rounded border border-white/5">Secretarias Públicas</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DIFFERENTIALS SECTION */}
      <section id="diferenciais" className="py-24 relative overflow-hidden border-y border-white/5 bg-slate-950/40 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Diferenciais Competitivos</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Por que me contratar para seu projeto?
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand to-accent-cyan rounded mx-auto" />
            <p className="text-text-s text-sm max-w-xl mx-auto">
              Garanto sistemas estáveis e interfaces limpas integradas a fluxos burocráticos reais de preenchimento e controle de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {differentials.map((diff, index) => (
              <div 
                key={index}
                className="p-6 sm:p-8 glass-panel border border-white/5 rounded-3xl hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 group-hover:border-brand/30 transition-all flex items-center justify-center text-accent-cyan shadow-md">
                  {index === 0 && <Cpu className="w-6 h-6" />}
                  {index === 1 && <Briefcase className="w-6 h-6" />}
                  {index === 2 && <Database className="w-6 h-6" />}
                  {index === 3 && <Layout className="w-6 h-6" />}
                  {index === 4 && <Sparkles className="w-6 h-6" />}
                  {index === 5 && <CheckCircle2 className="w-6 h-6" />}
                </div>
                
                <h3 className="font-display font-bold text-white text-lg tracking-tight group-hover:text-brand transition-colors">
                  {diff.title}
                </h3>
                <p className="text-text-s text-xs leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contato" className="py-24 relative overflow-hidden scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Vamos Conversar?</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Canais de Atendimento Direto
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-brand to-accent-cyan rounded" />
              </div>

              <p className="text-text-s text-sm leading-relaxed">
                Estou aberto a novas oportunidades na área administrativa, suporte a tecnologia, desenvolvimento de sites, criação de sistemas de controle e automação de processos. Entre em contato por qualquer um dos canais disponíveis.
              </p>

              {/* Direct links list with glass look */}
              <div className="space-y-3 pt-4">
                
                {/* Whatsapp */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-panel border border-white/5 rounded-2xl hover:border-brand hover:bg-white/5 group transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">WhatsApp</span>
                      <span className="font-display font-bold text-white text-sm">{contactInfo.whatsappDisplay}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Linkedin */}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-panel border border-white/5 rounded-2xl hover:border-brand hover:bg-white/5 group transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">LinkedIn</span>
                      <span className="font-display font-bold text-white text-sm">{contactInfo.linkedinDisplay}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Github */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 glass-panel border border-white/5 rounded-2xl hover:border-brand hover:bg-white/5 group transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Github className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">GitHub</span>
                      <span className="font-display font-bold text-white text-sm">{contactInfo.githubDisplay}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Email copy trigger */}
                <div
                  id="email-copy-trigger"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-4 glass-panel border border-white/5 rounded-2xl hover:border-brand hover:bg-white/5 cursor-pointer group transition-all duration-300 shadow-md"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">E-mail pessoal</span>
                      <span className="font-display font-bold text-white text-sm">{contactInfo.email}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-[10px] font-bold font-mono uppercase tracking-wider transition-all ${
                    copiedEmail 
                      ? 'bg-brand text-white border border-brand' 
                      : 'bg-white/5 border border-white/5 text-slate-300 group-hover:bg-brand group-hover:text-white'
                  }`}>
                    {copiedEmail ? 'Copiado!' : 'Copiar'}
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive customized WhatsApp Composer Form - Console style */}
            <div className="lg:col-span-7 glass-panel rounded-3xl border border-white/5 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand/5 blur-[80px] pointer-events-none" />
              
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">Compositor WhatsApp</h3>
                  <p className="text-[10px] text-brand font-mono uppercase tracking-wider">Envio rápido e seguro</p>
                </div>
              </div>

              <form onSubmit={handleGenerateWhatsApp} className="space-y-5 relative z-10 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs font-semibold text-slate-300 font-display">Nome ou Instituição</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva / Secult"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0f1d]/60 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-white placeholder:text-slate-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="text-xs font-semibold text-slate-300 font-display">Assunto da Conversa</label>
                    <select
                      id="form-subject"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0f1d]/60 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-white transition-all"
                    >
                      <option value="Oportunidade de Trabalho">Vaga / Contratação</option>
                      <option value="Criação de Website">Orçamento de Site</option>
                      <option value="Criação de Sistema Administrativo">Sistema Administrativo</option>
                      <option value="Outro Assunto">Dúvida / Parceria</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-semibold text-slate-300 font-display">Mensagem Customizada</label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Olá Cledmário, vi seu portfólio de sistemas com Supabase e gostaria de agendar uma entrevista / solicitar um orçamento..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0f1d]/60 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-white placeholder:text-slate-500 transition-all resize-none"
                  />
                </div>

                <button
                  id="submit-contact-form"
                  type="submit"
                  className="w-full py-3.5 bg-brand hover:bg-brand-hover text-white rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar via WhatsApp</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center font-mono leading-relaxed mt-2">
                  🔒 Este formulário é executado no navegador e formata o link para o aplicativo oficial do WhatsApp de forma 100% segura.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05080f] text-slate-400 py-16 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
            <a href="#inicio" className="flex items-center space-x-3 group text-left">
              <Logo simplified className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-tight leading-none group-hover:text-brand transition-colors">
                  Cledmário Santos
                </span>
                <span className="text-[9px] font-mono text-brand mt-1 uppercase tracking-wider font-bold">
                  Análise e Desenvolvimento de Sistemas
                </span>
              </div>
            </a>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <a href="#inicio" className="hover:text-brand transition-colors">Início</a>
              <a href="#sobre" className="hover:text-brand transition-colors">Sobre</a>
              <a href="#projetos" className="hover:text-brand transition-colors">Projetos</a>
              <a href="#conhecimentos" className="hover:text-brand transition-colors">Conhecimentos</a>
              <a href="#experiencia" className="hover:text-brand transition-colors">Experiência</a>
              <a href="#contato" className="hover:text-brand transition-colors">Contato</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
            <p>© 2026 Cledmário Santos Oliveira. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              <span>Desenvolvido com React, Tailwind e TypeScript</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
