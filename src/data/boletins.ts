export const boletins = [
  {
    id: '684',
    titulo: 'O SENTIDO DA VIDA ESTÁ EM DEUS pt II',
    data: '2025-12-21',
    url_pdf:
      '/pdf/684 - O SENTIDO DA VIDA ESTÁ EM DEUS pt II  - Boletim virtual.pdf',
    destaque: true,
    capa_url: '/pdf/capa_pastoral.png',
  },
  {
    id: '683',
    titulo: 'O SENTIDO DA VIDA ESTÁ EM DEUS',
    data: '2025-12-14',
    url_pdf:
      '/pdf/683 - O SENTIDO DA VIDA ESTÁ EM DEUS - Boletim virtual.pdf',
  },
  {
    id: '682',
    titulo: 'A igreja deve ser testemunha aqui e também lá!',
    data: '2025-12-07',
    url_pdf:
      '/pdf/682 - A igreja deve ser testemunha aqui e também lá! - Boletim virtual.pdf',
  },
  {
    id: '681',
    titulo:
      'A Consciência do Controle de Deus afasta a ansiedade',
    data: '2025-11-30',
    url_pdf:
      '/pdf/681 - A Consciência do Controle de Deus afasta a ansiedade - Boletim virtual.pdf',
  },
] as {
  id: string;
  titulo: string;
  data: string;
  url_pdf: string;
  destaque?: boolean;
  capa_url?: string;
}[];
