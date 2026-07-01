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

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'all' | 'systems' | 'websites'>('all');
  const [scrolled, setScrolled] = useState(false);
  
  // Custom contact message states
  const [contactName, setContactName] = useState('');
  const [contactSubject, setContactSubject] = useState('Oportunidade de Trabalho');
  const [contactMessage, setContactMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Handle scroll detection for sticky navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section on scroll
      const sections = ['inicio', 'sobre', 'projetos', 'conhecimentos', 'experiencia', 'diferenciais', 'contato'];
      const scrollPosition = window.scrollY + 120;

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
  }, []);

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
    <div className="min-h-screen bg-bg-dark text-text-p font-sans selection:bg-brand selection:text-bg-dark">
      
      {/* 1. HEADER & NAVIGATION */}
      <header 
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-card-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-card-border py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#inicio" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center text-bg-dark font-extrabold text-lg shadow-md shadow-brand/10 group-hover:scale-105 transition-all duration-300">
              CO
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-text-p tracking-tight leading-none group-hover:text-brand transition-colors">Cledmário Santos</span>
              <span className="text-[10px] font-mono text-brand mt-1 tracking-wider uppercase font-semibold">ADS • IA • GESTÃO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.id 
                    ? 'text-brand font-semibold' 
                    : 'text-text-s hover:text-text-p hover:bg-card-dark/60'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a 
              href="#contato"
              className="ml-4 px-4 py-2 text-xs font-bold uppercase tracking-wider text-bg-dark bg-brand hover:bg-brand-hover rounded-lg shadow-sm hover:shadow transition-all duration-300"
            >
              Fale Comigo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-s hover:text-text-p hover:bg-card-dark transition-colors focus:outline-none"
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
            className="fixed top-[64px] left-0 w-full bg-card-dark z-40 border-b border-card-border shadow-2xl md:hidden overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-brand-light text-brand font-semibold' 
                      : 'text-text-s hover:text-text-p hover:bg-bg-dark/50'
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
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-brand hover:bg-brand-hover text-bg-dark rounded-xl font-bold shadow-md transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp: {contactInfo.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION (INÍCIO) */}
      <section 
        id="inicio" 
        className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-bg-dark via-bg-dark to-slate-950/40 overflow-hidden"
      >
        {/* Background visual shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand/5 blur-3xl rounded-full -translate-y-12 translate-x-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand/5 blur-3xl rounded-full translate-y-12 -translate-x-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-light border border-brand/20 text-brand font-mono text-xs font-semibold tracking-wide uppercase mx-auto lg:mx-0">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Pronto para novos desafios</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-p leading-tight">
                {personalInfo.name}
              </h1>

              <p className="text-lg sm:text-xl font-display font-semibold text-brand">
                {personalInfo.title}
              </p>

              <p className="text-text-s text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {personalInfo.summary}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  id="cta-see-projects"
                  href="#projetos"
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand hover:bg-brand-hover text-bg-dark font-bold rounded-xl shadow-lg shadow-brand/10 hover:shadow-xl hover:shadow-brand/25 transition-all duration-300 text-center flex items-center justify-center space-x-2 group"
                >
                  <span>Ver Projetos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  id="cta-contact"
                  href="#contato"
                  className="w-full sm:w-auto px-8 py-3.5 bg-card-dark hover:bg-slate-800 text-text-p border border-card-border font-medium rounded-xl hover:shadow transition-all duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Entrar em Contato</span>
                </a>
              </div>

              {/* Trust parameters / mini statistics */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-card-border max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-bold text-text-p">ADS</p>
                  <p className="text-xs text-text-s font-medium">Formação Superior</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-p">05+</p>
                  <p className="text-xs text-text-s font-medium">Projetos Web Ativos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-p">IA</p>
                  <p className="text-xs text-text-s font-medium">Integração Prática</p>
                </div>
              </div>

            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px]">
                
                {/* Decorative glowing gradient ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand to-brand-hover rounded-3xl blur opacity-25 animate-pulse" />
                
                {/* Main executive avatar/profile card */}
                <div className="relative bg-card-dark border border-card-border rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/40">
                  
                  {/* Decorative Header Code Accent */}
                  <div className="flex items-center justify-between border-b border-card-border pb-5 mb-5">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-brand/80" />
                    </div>
                    <span className="font-mono text-[10px] text-brand bg-brand-light px-2 py-1 rounded-md font-semibold">
                      cledmario.ts
                    </span>
                  </div>

                  {/* Profile Initials & Badges */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-24 h-24 rounded-2xl bg-brand text-bg-dark flex items-center justify-center font-display font-extrabold text-3xl shadow-lg shadow-brand/10 relative">
                      CS
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-brand border-2 border-card-dark flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-bg-dark stroke-[3px]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-text-p">Cledmário Santos Oliveira</h3>
                      <p className="text-xs text-brand font-mono mt-1">@mariooliveira-dev</p>
                    </div>

                    {/* Quick overview bullet stats */}
                    <div className="w-full space-y-2.5 pt-4 text-left">
                      <div className="flex items-center space-x-3 text-xs text-text-p bg-bg-dark/50 p-2.5 rounded-xl border border-card-border">
                        <GraduationCap className="w-4 h-4 text-brand shrink-0" />
                        <span>Tecnólogo em Análise e Desenv. de Sistemas</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-text-p bg-bg-dark/50 p-2.5 rounded-xl border border-card-border">
                        <Briefcase className="w-4 h-4 text-brand shrink-0" />
                        <span>Foco em Sistemas Administrativos</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-text-p bg-bg-dark/50 p-2.5 rounded-xl border border-card-border">
                        <Cpu className="w-4 h-4 text-brand shrink-0" />
                        <span>Desenvolvimento Acelerado por IAs</span>
                      </div>
                    </div>

                    <div className="w-full pt-4 border-t border-card-border">
                      <div className="flex items-center justify-between text-xs text-text-s font-mono">
                        <span>Status</span>
                        <span className="text-brand font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping inline-block" />
                          Disponível para Trabalho
                        </span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION (SOBRE MIM) */}
      <section id="sobre" className="py-20 bg-bg-dark border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual left element */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-card-dark to-bg-dark text-text-p rounded-3xl p-8 shadow-xl border border-card-border relative overflow-hidden">
                {/* Decorative pattern overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-2xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand/5 blur-2xl rounded-full" />

                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                    <User className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold tracking-tight">O que me motiva?</h3>
                  
                  <p className="text-text-s text-sm leading-relaxed">
                    Unir a tecnologia moderna com a prática administrativa real. Eu sei como secretarias, empresas e órgãos públicos funcionam por dentro. Meu objetivo é usar meu conhecimento em computação para criar sistemas práticos, automatizar planilhas manuais cansativas e organizar fluxos complexos em painéis modernos de controle.
                  </p>

                  <div className="space-y-3 pt-4 border-t border-card-border">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm text-text-p">Experiência no setor público</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm text-text-p">Visão técnica e organizacional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm text-text-p">Familiaridade com banco de dados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Sobre Cledmário</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-p tracking-tight">
                  Trajetória Administrativa & Tecnológica
                </h2>
                <div className="w-12 h-1 bg-brand rounded" />
              </div>

              <p className="text-text-s text-base sm:text-lg leading-relaxed">
                {personalInfo.about}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-card-dark p-4 rounded-xl border border-card-border space-y-1.5">
                  <span className="font-display font-bold text-text-p text-base">Competência Administrativa</span>
                  <p className="text-text-s text-xs leading-relaxed">
                    Vivência prática na gestão de processos de matrículas, organização de chamadas, controle de documentos, suporte ao cidadão e fluxo interno.
                  </p>
                </div>
                <div className="bg-card-dark p-4 rounded-xl border border-card-border space-y-1.5">
                  <span className="font-display font-bold text-text-p text-base">Inovação Orientada a IA</span>
                  <p className="text-text-s text-xs leading-relaxed">
                    Especialista em orquestrar e direcionar inteligências artificiais para gerar aplicações robustas integradas com bancos de dados reais.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="#contato"
                  className="inline-flex items-center space-x-2 text-brand hover:text-brand-hover font-semibold text-sm transition-all group"
                >
                  <span>Conhecer diferenciais de trabalho</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (PROJETOS) */}
      <section id="projetos" className="py-20 bg-bg-dark scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Meu Portfólio</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-p tracking-tight">
                Projetos & Soluções Desenvolvidas
              </h2>
              <div className="w-12 h-1 bg-brand rounded" />
              <p className="text-text-s text-sm mt-2 max-w-xl">
                Sistemas operacionais completos e páginas modernas com integrações estáveis e visual corporativo impecável.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex bg-card-dark p-1 rounded-xl border border-card-border shadow-sm shrink-0 self-start md:self-auto">
              <button
                onClick={() => setProjectFilter('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  projectFilter === 'all' 
                    ? 'bg-brand text-bg-dark shadow-sm font-bold' 
                    : 'text-text-s hover:text-text-p'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setProjectFilter('systems')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  projectFilter === 'systems' 
                    ? 'bg-brand text-bg-dark shadow-sm font-bold' 
                    : 'text-text-s hover:text-text-p'
                }`}
              >
                Sistemas Web
              </button>
              <button
                onClick={() => setProjectFilter('websites')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  projectFilter === 'websites' 
                    ? 'bg-brand text-bg-dark shadow-sm font-bold' 
                    : 'text-text-s hover:text-text-p'
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
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card-dark rounded-2xl border border-card-border overflow-hidden shadow-sm hover:shadow-lg hover:shadow-brand/5 hover:border-brand/20 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Decorative project header with technology category */}
                  <div className="p-4 bg-bg-dark/40 border-b border-card-border flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand">
                      {project.category === 'systems' ? 'SISTEMA ADMINISTRATIVO' : 'WEBSITE INSTITUCIONAL'}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-750 group-hover:bg-brand transition-colors" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-bold text-text-p tracking-tight group-hover:text-brand transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-text-s text-sm leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-card-border">
                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="text-[11px] font-mono px-2 py-0.5 bg-bg-dark border border-card-border/50 text-text-s rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="pt-2">
                        {project.isComingSoonOrUpdating ? (
                          <div className="w-full px-4 py-2.5 bg-bg-dark/65 text-text-s font-semibold text-xs text-center rounded-xl border border-card-border font-mono flex items-center justify-center space-x-2">
                            <Clock className="w-3.5 h-3.5 text-brand" />
                            <span>Projeto em atualização</span>
                          </div>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-4 py-2.5 bg-brand text-bg-dark hover:bg-brand-hover font-bold text-xs text-center rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
                          >
                            <span>Ver projeto</span>
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[3px]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick Notice about projects */}
          <div className="mt-12 p-5 bg-brand-light border border-brand/20 rounded-2xl max-w-2xl mx-auto text-center">
            <p className="text-xs text-text-p leading-relaxed font-medium">
              💡 <strong>Nota Técnica:</strong> Meus projetos utilizam o <strong className="text-brand">Supabase</strong> como backend serverless para persistência de dados em tempo real, fornecendo segurança, tabelas de controle administrativo de alunos e relatórios de métricas.
            </p>
          </div>

        </div>
      </section>

      {/* KNOWLEDGE SECTION (CONHECIMENTOS) */}
      <section id="conhecimentos" className="py-20 bg-bg-dark border-y border-card-border scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Tecnologias & Competências</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-p tracking-tight">
              Habilidades em Tecnologia e Negócios
            </h2>
            <div className="w-12 h-1 bg-brand rounded mx-auto" />
            <p className="text-text-s text-sm max-w-xl mx-auto">
              Minha formação une o melhor de dois mundos: o conhecimento técnico de programação com a vivência operacional da área administrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tech Pillar */}
            <div className="bg-card-dark border border-card-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-p text-lg">Desenvolvimento Web</h3>
                  <p className="text-[11px] text-brand font-mono">FRONT-END & CORE TECH</p>
                </div>
              </div>
              
              <p className="text-xs text-text-s leading-relaxed">
                Desenvolvimento de interfaces modernas de usuários, focando em usabilidade, design responsivo e código de fácil leitura.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.filter(s => s.category === 'tech').map(skill => (
                  <span 
                    key={skill.name}
                    className="text-xs px-3 py-1.5 bg-bg-dark border border-card-border text-text-p font-semibold rounded-lg hover:border-brand/40 hover:text-brand transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Developer Tools Pillar */}
            <div className="bg-card-dark border border-card-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-p text-lg">IA & Ferramentas Ágeis</h3>
                  <p className="text-[11px] text-brand font-mono">DESENVOLVIMENTO ACELERADO</p>
                </div>
              </div>

              <p className="text-xs text-text-s leading-relaxed">
                Uso pragmático de IA generativa e plataformas low-code para acelerar prazos de entrega e construir protótipos de alta complexidade em poucos dias.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.filter(s => s.category === 'tools').map(skill => (
                  <span 
                    key={skill.name}
                    className="text-xs px-3 py-1.5 bg-brand text-bg-dark font-bold rounded-lg border border-brand hover:bg-brand-hover transition-all cursor-default flex items-center gap-1 shadow-sm shadow-brand/10"
                  >
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Administrative Pillar */}
            <div className="bg-card-dark border border-card-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-p text-lg">Gestão Administrativa</h3>
                  <p className="text-[11px] text-brand font-mono">NEGÓCIOS & ORGANIZAÇÃO</p>
                </div>
              </div>

              <p className="text-xs text-text-s leading-relaxed">
                Experiência em entender fluxos burocráticos, preenchimento e controle de documentos públicos, planilhas organizadas e apoio à gestão direta.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {skills.filter(s => s.category === 'admin').map(skill => (
                  <span 
                    key={skill.name}
                    className="text-xs px-3 py-1.5 bg-bg-dark border border-card-border text-text-p font-semibold rounded-lg hover:border-brand/40 hover:text-brand transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION (EXPERIÊNCIA) */}
      <section id="experiencia" className="py-20 bg-bg-dark scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Title / Intro left Column */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Atuação Profissional</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-p tracking-tight">
                  Trajetória Administrativa
                </h2>
                <div className="w-12 h-1 bg-brand rounded" />
              </div>
              
              <p className="text-text-s text-sm leading-relaxed">
                Minha carreira é marcada pela atuação em secretarias da prefeitura municipal, onde passei a identificar oportunidades de aplicar programação web para simplificar e organizar planilhas manuais e processos administrativos estagnados.
              </p>

              <div className="p-4 bg-card-dark border border-card-border rounded-2xl flex items-start space-x-3 shadow-md">
                <GraduationCap className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <span className="font-display font-bold text-xs text-text-p block">Formação Acadêmica</span>
                  <p className="text-xs text-text-s leading-relaxed">
                    Graduação Superior em <strong className="text-brand">Análise e Desenvolvimento de Sistemas (ADS)</strong>, capacitando para modelagem de dados, algoritmos e boas práticas de software.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline right Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative border-l-2 border-card-border pl-6 sm:pl-8 ml-3 space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    
                    {/* Circle bullet point */}
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 rounded-full border-4 border-bg-dark bg-brand group-hover:scale-110 transition-transform shadow-sm shadow-brand/20" />
                    
                    {/* Card container */}
                    <div className="bg-card-dark rounded-2xl p-6 border border-card-border shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-brand bg-brand-light border border-brand/20 px-2.5 py-1 rounded-md self-start sm:self-auto">
                          {exp.period}
                        </span>
                        <span className="text-xs font-medium text-text-s flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Atividade Realizada
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-display font-bold text-text-p text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-mono text-brand">
                          {exp.organization}
                        </p>
                      </div>

                      <p className="text-text-s text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Displaying tags depending on the role to make it rich */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {index === 0 ? (
                          <>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-bg-dark/40 text-text-s rounded border border-card-border/50">Matrículas e Alunos</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-bg-dark/40 text-text-s rounded border border-card-border/50">Controle de Chamadas</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-bg-dark/40 text-text-s rounded border border-card-border/50">Organização de Cursos</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-bg-dark/40 text-text-s rounded border border-card-border/50">Atendimento ao Cidadão</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-bg-dark/40 text-text-s rounded border border-card-border/50">Suporte Operacional</span>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-bg-dark/40 text-text-s rounded border border-card-border/50">Secretarias Públicas</span>
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

      {/* DIFFERENTIALS SECTION (DIFERENCIAIS) */}
      <section id="diferenciais" className="py-20 bg-bg-dark border-y border-card-border scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Por que me contratar?</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-p tracking-tight">
              Diferenciais de Alto Impacto
            </h2>
            <div className="w-12 h-1 bg-brand rounded mx-auto" />
            <p className="text-text-s text-sm max-w-xl mx-auto">
              Veja os fatores que agregam valor ao meu trabalho, aceleram as entregas e garantem a eficiência administrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((diff, index) => (
              <div 
                key={index}
                className="p-6 bg-card-dark border border-card-border rounded-2xl hover:border-brand/30 hover:bg-card-dark/80 transition-all duration-300 space-y-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-bg-dark border border-card-border group-hover:border-brand/30 transition-all flex items-center justify-center text-brand shadow-sm">
                  {index === 0 && <Cpu className="w-5 h-5" />}
                  {index === 1 && <Briefcase className="w-5 h-5" />}
                  {index === 2 && <Database className="w-5 h-5" />}
                  {index === 3 && <Layout className="w-5 h-5" />}
                  {index === 4 && <GraduationCap className="w-5 h-5" />}
                  {index === 5 && <FileCheck2 className="w-5 h-5" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-text-p text-base group-hover:text-brand transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-text-s text-xs sm:text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION (CONTATO) */}
      <section id="contato" className="py-20 bg-bg-dark scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact links and copy section */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand font-bold uppercase tracking-widest block">Vamos conversar?</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-text-p tracking-tight">
                  Contatos e Links Sociais
                </h2>
                <div className="w-12 h-1 bg-brand rounded" />
              </div>

              <p className="text-text-s text-sm leading-relaxed">
                Estou aberto a novas oportunidades na área administrativa, suporte a tecnologia, desenvolvimento de sites, criação de sistemas de controle e automação com inteligência artificial. Entre em contato por qualquer um dos canais disponíveis.
              </p>

              {/* Direct links list */}
              <div className="space-y-3.5 pt-4">
                
                {/* Whatsapp Link Button */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-card-dark border border-card-border rounded-2xl hover:border-brand group transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-brand block leading-none font-semibold">WHATSAPP</span>
                      <span className="font-display font-bold text-text-p text-sm">{contactInfo.whatsappDisplay}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-bg-dark border border-card-border text-text-s flex items-center justify-center group-hover:bg-brand group-hover:text-bg-dark transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* LinkedIn Link Button */}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-card-dark border border-card-border rounded-2xl hover:border-brand group transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-brand block leading-none font-semibold">LINKEDIN</span>
                      <span className="font-display font-bold text-text-p text-sm">{contactInfo.linkedinDisplay}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-bg-dark border border-card-border text-text-s flex items-center justify-center group-hover:bg-brand group-hover:text-bg-dark transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* GitHub Link Button */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-card-dark border border-card-border rounded-2xl hover:border-brand group transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-brand block leading-none font-semibold">GITHUB</span>
                      <span className="font-display font-bold text-text-p text-sm">{contactInfo.githubDisplay}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-bg-dark border border-card-border text-text-s flex items-center justify-center group-hover:bg-brand group-hover:text-bg-dark transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* Email Copy Box */}
                <div
                  id="email-copy-trigger"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-4 bg-card-dark border border-card-border rounded-2xl hover:border-brand cursor-pointer group transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-brand block leading-none font-semibold">E-MAIL (CLIQUE PARA COPIAR)</span>
                      <span className="font-display font-bold text-text-p text-sm">{contactInfo.email}</span>
                    </div>
                  </div>
                  <div className={`px-2.5 py-1 rounded text-[10px] font-bold font-mono transition-all ${
                    copiedEmail 
                      ? 'bg-brand text-bg-dark border border-brand' 
                      : 'bg-bg-dark border border-card-border text-text-s group-hover:bg-brand group-hover:text-bg-dark'
                  }`}>
                    {copiedEmail ? 'Copiado!' : 'Copiar'}
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated / Interactive customized WhatsApp Composer Form */}
            <div className="lg:col-span-7 bg-card-dark rounded-3xl border border-card-border p-6 sm:p-8 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-p text-lg">Criador de Mensagem Rápida</h3>
                  <p className="text-xs text-text-s">Escreva sua proposta e gere um link automático para o WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleGenerateWhatsApp} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs font-mono font-semibold text-brand uppercase">Seu Nome / Empresa</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva / Secult"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 bg-bg-dark border border-card-border rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-text-p placeholder:text-text-s/50 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="text-xs font-mono font-semibold text-brand uppercase">Assunto</label>
                    <select
                      id="form-subject"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-4 py-3 bg-bg-dark border border-card-border rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-text-p transition-all"
                    >
                      <option value="Oportunidade de Trabalho">Vaga / Contratação</option>
                      <option value="Criação de Website">Orçamento de Site</option>
                      <option value="Sistema de Controle">Orçamento de Sistema Web</option>
                      <option value="Dúvidas / Parcerias">Dúvidas / Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-message" className="text-xs font-mono font-semibold text-brand uppercase">Sua Mensagem</label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    placeholder="Olá Cledmário, vi seu portfólio de sistemas com Supabase e gostaria de agendar uma entrevista / solicitar um orçamento..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-bg-dark border border-card-border rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-text-p placeholder:text-text-s/50 transition-all resize-none"
                  />
                </div>

                <button
                  id="submit-contact-form"
                  type="submit"
                  className="w-full py-3.5 bg-brand hover:bg-brand-hover text-bg-dark rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar via WhatsApp</span>
                </button>

                <p className="text-[10px] text-text-s text-center font-mono leading-relaxed mt-2">
                  🔒 Este formulário é executado no navegador e formata o link para o aplicativo oficial do WhatsApp de forma 100% segura.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-text-s py-12 border-t border-card-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-card-border/60">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center text-bg-dark font-extrabold text-base">
                CS
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-text-p text-sm tracking-tight leading-none">Cledmário Santos</span>
                <span className="text-[9px] font-mono text-brand mt-1 uppercase tracking-wider font-semibold">Análise e Desenv. de Sistemas</span>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-text-s">
              <a href="#inicio" className="hover:text-brand transition-colors">Início</a>
              <a href="#sobre" className="hover:text-brand transition-colors">Sobre</a>
              <a href="#projetos" className="hover:text-brand transition-colors">Projetos</a>
              <a href="#conhecimentos" className="hover:text-brand transition-colors">Conhecimentos</a>
              <a href="#experiencia" className="hover:text-brand transition-colors">Experiência</a>
              <a href="#contato" className="hover:text-brand transition-colors">Contato</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-s/70 gap-4">
            <p>© 2026 Cledmário Santos Oliveira. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              <span>Desenvolvido com React, Tailwind e IA</span>
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
