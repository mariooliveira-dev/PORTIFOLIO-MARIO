import { Project, Skill, ExperienceItem, Differential, ContactInfo } from './types';

export const personalInfo = {
  name: 'Cledmário Santos Oliveira',
  title: 'Desenvolvedor Web em formação | Sistemas administrativos | IA aplicada à criação de sites',
  summary: 'Sou tecnólogo em Análise e Desenvolvimento de Sistemas, com experiência na área administrativa pública e desenvolvimento de projetos digitais. Tenho criado sites e sistemas web usando ferramentas de inteligência artificial, Supabase, GitHub, Vercel, HTML, CSS, JavaScript e React. Meu foco é desenvolver soluções práticas para organização de dados, atendimento, controle administrativo, matrículas, dashboards e automação de processos.',
  about: 'Sou formado em Análise e Desenvolvimento de Sistemas e tenho experiência na área administrativa, com atuação em secretarias públicas, atendimento ao público, organização de documentos, suporte operacional e apoio à gestão. Atualmente estou em transição e evolução na área de tecnologia, criando sites, sistemas administrativos e soluções digitais com apoio de inteligência artificial.',
};

export const projects: Project[] = [
  {
    id: 'secult',
    name: 'Sistema Integrado da Casa da Cultura',
    description: 'Sistema web para gestão de matrículas, alunos, cursos, professores, chamadas, status, relatórios, impressão de fichas, carteirinha, dashboards e integração com Supabase.',
    technologies: ['React', 'Supabase', 'Vercel', 'GitHub', 'JavaScript', 'IA aplicada'],
    link: 'https://sistema-integrado-da-secult.vercel.app',
    category: 'systems'
  },
  {
    id: 'finance',
    name: 'Minhas Finanças',
    description: 'Sistema de controle financeiro pessoal para organização de dívidas, despesas, pagamentos e acompanhamento financeiro.',
    technologies: ['Site web', 'Supabase', 'dashboard', 'formulários', 'IA aplicada'],
    link: 'https://financeiroonline.lovable.app',
    category: 'systems'
  },
  {
    id: 'centralpark',
    name: 'Central Park Teixeira de Freitas',
    description: 'Site institucional moderno para divulgação de informações, serviços, presença digital e contato.',
    technologies: ['Website responsivo', 'design moderno', 'IA aplicada'],
    link: 'https://centralparktxf.lovable.app/',
    category: 'websites'
  },
  {
    id: 'clinicavet',
    name: 'Website Clínica Veterinária',
    description: 'Website moderno e completo focado em clínicas veterinárias e petshops, apresentando serviços, equipe médica, agendamento de consultas e exames, e canais de contato rápidos.',
    technologies: ['Website responsivo', 'clínica', 'veterinária', 'IA aplicada'],
    link: 'https://web-site-clinica-veterin-ria.vercel.app/',
    category: 'websites'
  },
  {
    id: 'mslava',
    name: 'MS Lava Rápido',
    description: 'Site para lava rápido com apresentação de serviços, agendamento, avaliações de clientes, informações de contato e visual moderno.',
    technologies: ['Website responsivo', 'formulário', 'agendamento', 'IA aplicada'],
    link: 'COLOCAR_LINK_AQUI',
    isComingSoonOrUpdating: true,
    category: 'websites'
  },
  {
    id: 'agendapro',
    name: 'AgendaPro',
    description: 'Sistema/site para organização de agendamentos, serviços, horários e atendimento.',
    technologies: ['Website responsivo', 'formulários', 'organização de agenda'],
    link: 'https://agendafyofc.lovable.app',
    category: 'systems'
  }
];

export const skills: Skill[] = [
  // Tech
  { name: 'HTML', category: 'tech' },
  { name: 'CSS', category: 'tech' },
  { name: 'JavaScript', category: 'tech' },
  { name: 'React', category: 'tech' },
  { name: 'Supabase', category: 'tech' },
  { name: 'Banco de dados', category: 'tech' },
  
  // Tools / AI
  { name: 'Criação de sites com IA', category: 'tools' },
  { name: 'Google AI Code', category: 'tools' },
  { name: 'Lovable', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  
  // Admin / Solutions
  { name: 'Sistemas administrativos', category: 'admin' },
  { name: 'Dashboards', category: 'admin' },
  { name: 'Formulários online', category: 'admin' },
  { name: 'Automação de processos', category: 'admin' },
  { name: 'Organização de dados', category: 'admin' },
  { name: 'Atendimento ao público', category: 'admin' },
  { name: 'Área administrativa', category: 'admin' }
];

export const experiences: ExperienceItem[] = [
  {
    period: 'Atualmente',
    role: 'Desenvolvimento & Organização de Soluções Digitais',
    organization: 'Secretaria de Cultura e Turismo',
    description: 'Atuação focada no desenvolvimento e na organização de soluções digitais para controle de matrículas, alunos, cursos, chamadas e processos internos da secretaria.'
  },
  {
    period: 'Experiência Anterior',
    role: 'Área Administrativa',
    organization: 'Prefeitura de Teixeira de Freitas',
    description: 'Experiência em secretarias públicas, organização de documentos, atendimento ao público, suporte operacional e apoio à gestão de informações.'
  }
];

export const differentials: Differential[] = [
  {
    title: 'Sistemas Web com Inteligência Artificial',
    description: 'Capacidade de usar ferramentas modernas de IA generativa para acelerar o desenvolvimento de interfaces e sistemas web, garantindo agilidade e inovação.'
  },
  {
    title: 'Experiência Real Administrativa',
    description: 'Vivência profissional direta em órgãos públicos, sabendo exatamente quais são as dores, as necessidades de controle e as rotinas administrativas cotidianas.'
  },
  {
    title: 'Organização de Dados',
    description: 'Foco na estruturação correta de dados para relatórios, tabelas de controle, matrículas e dashboards intuitivos que facilitam as tomadas de decisões.'
  },
  {
    title: 'Foco em Soluções Práticas',
    description: 'Criação de ferramentas que de fato resolvem problemas operacionais, como controle de chamadas de alunos ou acompanhamento de agendamentos.'
  },
  {
    title: 'Facilidade de Aprendizado',
    description: 'Perfil autodidata focado em contínua evolução tecnológica, adaptando-se rapidamente a novas ferramentas, frameworks e integrações de nuvem.'
  },
  {
    title: 'Comprometimento e Visão Prática',
    description: 'Abordagem profissional orientada a resultados e melhorias de fluxo, unindo a visão técnica da tecnologia com a visão operacional da administração.'
  }
];

export const contactInfo: ContactInfo = {
  whatsapp: '5573988296140', // clean format for wa.me
  whatsappDisplay: '(73) 98829-6140',
  linkedin: 'https://www.linkedin.com/in/cledmario-dev',
  linkedinDisplay: 'linkedin.com/in/cledmario-dev',
  github: 'https://github.com/mariooliveira-dev',
  githubDisplay: 'github.com/mariooliveira-dev',
  email: 'cledmariosantospessoal@gmail.com'
};
