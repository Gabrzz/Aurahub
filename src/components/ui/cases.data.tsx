// components/ui/cases.data.ts

export interface CaseItem {
  id: number;
  company: string;          // nome curto (logo text)
  tag: string;
  tagColor: "purple" | "orange" | "pink" | "cyan";
  stat: { value: string; label: string }[];
  title: string;
  description: string;
  auraDelivery?: string;    // badge "O que a Aura entrega"
}

export const cases: CaseItem[] = [
  {
    id: 1,
    company: "magalu",
    tag: "Atendimento com IA",
    tagColor: "purple",
    stat: [
      { value: "+50M", label: "atendimentos/mês" },
      { value: "24h",  label: "disponibilidade"  },
    ],
    title: "A Lu virou o rosto da marca",
    description:
      "A assistente virtual do Magalu atende milhões de clientes por dia. Resolve pedidos, rastreia compras, responde dúvidas — e ainda vende. A IA deixou de ser suporte e virou o principal canal de relacionamento.",
    auraDelivery: "Agente de atendimento WhatsApp + múltiplos canais",
  },
  {
    id: 2,
    company: "claro",
    tag: "Automação de Atendimento",
    tagColor: "orange",
    stat: [{ value: "-70%", label: "tempo de espera" }],
    title: "Suporte resolvido em segundos, sem fila",
    description:
      "Agendamentos, segunda via, mudança de plano. O cliente resolve tudo sozinho — a IA cuida de cada etapa.",
  },
  {
    id: 3,
    company: "natura",
    tag: "Análise de Dados",
    tagColor: "pink",
    stat: [{ value: "3×", label: "conversão em campanhas" }],
    title: "IA que entende o comportamento do cliente",
    description:
      "Produto certo, hora certa, pessoa certa. A IA analisa padrões e personaliza cada campanha automaticamente.",
  },
  {
    id: 4,
    company: "o boticário",
    tag: "Automação de Processos",
    tagColor: "cyan",
    stat: [],
    title: "Menos operação manual, mais tempo pra crescer",
    description:
      "O Boticário automatizou processos internos com IA: desde o relacionamento com franqueados até a gestão de campanhas. O que antes exigia equipes inteiras, hoje roda em fluxos automáticos.",
    auraDelivery: "Automação de processos internos + integrações n8n",
  },
];

export const marqueeCompanies = [
  "magalu","claro","natura","o boticário","ifood",
  "nubank","mercado livre","bradesco","ambev","localiza",
];