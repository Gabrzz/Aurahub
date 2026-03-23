export interface ProblemItem {
  number: string;
  problem: string;
  solution: string;
  detail: string;
  accent: string;
  glow: string;
  tag: string;
}

export const problems: ProblemItem[] = [
  {
    number: "01",
    problem: "Sabe o WhatsApp que acumula mensagens repetitivas o dia inteiro?",
    solution: "A gente resolve com IA.",
    detail: "Agente treinado com a sua linguagem, respondendo clientes 24h — sem você precisar estar online.",
    accent: "#14de13",
    glow: "rgba(20, 222, 19,0.08)",
    tag: "Automação de Atendimento",
  },
  {
    number: "02",
    problem: "E as tardes que você perde lançando dados no sistema e nas planilhas?",
    solution: "A gente resolve com IA também.",
    detail: "Integrações que capturam, organizam e lançam informações automaticamente — sem erro humano.",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.08)",
    tag: "Automação de Processos",
  },
  {
    number: "03",
    problem: "Aquele cliente que ficou sem resposta porque ninguém viu o e-mail a tempo?",
    solution: "Com IA, isso não acontece mais.",
    detail: "Triagem automática, respostas instantâneas e encaminhamentos inteligentes para o canal certo.",
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.08)",
    tag: "Gestão de Comunicação",
  },
  {
    number: "04",
    problem: "E os relatórios que ninguém tem tempo de montar — mas todo mundo precisa ver?",
    solution: "A IA monta, organiza e entrega. Sozinha.",
    detail: "Dados transformados em relatórios claros, no horário certo, para quem precisa.",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.08)",
    tag: "Business Intelligence",
  },
];