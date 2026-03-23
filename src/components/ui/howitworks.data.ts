// components/ui/howitworks.data.ts

export interface VideoItem {
  id: number;
  accentClass: "purple" | "orange";
  thumbTag: string;
  duration: string;
  tagLabel: string;
  title: string;
  description: string;
  stat: string;
  youtubeId: string;           // ← cole o ID do YouTube aqui (ex: "dQw4w9WgXcQ")
  waveHeights: number[];
}

export const videos: VideoItem[] = [
  {
    id: 1,
    accentClass: "purple",
    thumbTag: "Automação WhatsApp",
    duration: "2:34",
    tagLabel: "Atendimento com IA",
    title: "Como a IA atende seus clientes pelo WhatsApp",
    description:
      'Do primeiro "oi" até o fechamento — a IA responde, tira dúvidas, agenda e encaminha. Tudo no app que seu cliente já usa, sem você precisar estar online.',
    stat: "2 min",
    youtubeId: "SEU_ID_AQUI",
    waveHeights: [6,10,18,14,22,30,26,20,34,28,22,38,32,24,40,36,28,44,38,30,42,34,26,38,30,22,34,26,18,24,16,20,14,18,12,16,10,14,8,12],
  },
  {
    id: 2,
    accentClass: "orange",
    thumbTag: "Automação de Escritório",
    duration: "3:12",
    tagLabel: "Automação Interna",
    title: "Como a IA trabalha dentro da sua operação",
    description:
      "Lançamentos, registros, follow-ups, documentos. O trabalho que consome horas da sua equipe todo dia — a IA faz em minutos.",
    stat: "3 min",
    youtubeId: "SEU_ID_AQUI",
    waveHeights: [8,14,20,16,28,22,18,32,26,20,36,30,24,42,34,28,46,38,32,40,34,26,38,30,22,34,28,20,32,24,16,26,18,22,14,18,12,16,10,14],
  },
];