import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const defaultSEO = {
  title: 'Igreja Presbiteriana de Santa Gertrudes | Uma igreja bíblica, reformada e acolhedora',
  description: 'Igreja Presbiteriana de Santa Gertrudes. Uma igreja bíblica, reformada e acolhedora. Cultos, boletins, pastorais e informações oficiais. Desde 1989 compartilhando a luz e o amor de Deus.',
  keywords: 'igreja presbiteriana santa gertrudes, igreja reformada santa gertrudes, culto presbiteriano santa gertrudes, igreja evangélica santa gertrudes, IPB Santa Gertrudes, igreja presbiteriana SP',
};

const pageTitles: Record<string, { title: string; description: string; keywords: string }> = {
  '/': {
    title: 'Igreja Presbiteriana de Santa Gertrudes | Uma igreja bíblica, reformada e acolhedora',
    description: 'Igreja Presbiteriana de Santa Gertrudes. Uma igreja bíblica, reformada e acolhedora. Cultos aos domingos 09h e 19h. Desde 1989 compartilhando a luz e o amor de Deus.',
    keywords: 'igreja presbiteriana santa gertrudes, culto evangélico, igreja reformada, IPB santa gertrudes',
  },
  '/boletins': {
    title: 'Boletins | Igreja Presbiteriana de Santa Gertrudes',
    description: 'Acesse os boletins semanais da Igreja Presbiteriana de Santa Gertrudes com informações, avisos e programação.',
    keywords: 'boletins igreja, boletim presbiteriano, avisos igreja santa gertrudes',
  },
  '/pastorais': {
    title: 'Pastorais | Igreja Presbiteriana de Santa Gertrudes',
    description: 'Leia as mensagens pastorais com ensinamentos e reflexões bíblicas da Igreja Presbiteriana de Santa Gertrudes.',
    keywords: 'mensagens pastorais, reflexões bíblicas, palavra pastoral, devocional',
  },
  '/quizzes': {
    title: 'Quizzes Bíblicos | Igreja Presbiteriana de Santa Gertrudes',
    description: 'Teste seus conhecimentos bíblicos com os quizzes interativos da Igreja Presbiteriana de Santa Gertrudes.',
    keywords: 'quiz bíblico, teste bíblico, conhecimento bíblico, perguntas bíblicas',
  },
  '/sociedades': {
    title: 'Sociedades | Igreja Presbiteriana de Santa Gertrudes',
    description: 'Conheça as sociedades internas da IPB Santa Gertrudes: UCP, UPA, UMP e SAF.',
    keywords: 'sociedades IPB, UCP, UPA, UMP, SAF, sociedades igreja',
  },
  '/sobre': {
    title: 'Sobre Nós | Igreja Presbiteriana de Santa Gertrudes',
    description: 'Conheça a história, missão e valores da Igreja Presbiteriana de Santa Gertrudes. Desde 1989 servindo a comunidade.',
    keywords: 'história igreja santa gertrudes, missão IPB, igreja presbiteriana história',
  },
  '/contato': {
    title: 'Contato | Igreja Presbiteriana de Santa Gertrudes',
    description: 'Entre em contato com a Igreja Presbiteriana de Santa Gertrudes. Endereço, telefone e horários dos cultos.',
    keywords: 'contato igreja santa gertrudes, telefone IPB, endereço igreja',
  },
};

export default function SEO({ title, description, keywords }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const pageInfo = pageTitles[location.pathname] || defaultSEO;
    const pageTitle = title || pageInfo.title;
    const pageDescription = description || pageInfo.description;
    const pageKeywords = keywords || pageInfo.keywords;

    document.title = pageTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', pageKeywords);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', pageDescription);
  }, [location, title, description, keywords]);

  return null;
}
