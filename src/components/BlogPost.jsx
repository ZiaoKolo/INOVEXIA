import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Tag, Check, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Vous pouvez ajouter ici la logique pour sauvegarder dans localStorage
    if (!isBookmarked) {
      localStorage.setItem(`bookmark-${id}`, 'true');
    } else {
      localStorage.removeItem(`bookmark-${id}`);
    }
  };

  // Articles data (même structure que Blog.jsx)
  const articles = [
    {
      id: 1,
      title: "Créer un SaaS rentable depuis l'Afrique : Guide complet 2026",
      excerpt: "Découvrez les étapes essentielles pour transformer votre idée en produit SaaS monétisable, avec intégration des paiements mobiles (Orange Money, Wave, MTN).",
      category: "SaaS",
      date: "15 Janvier 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      author: "Ziao Kolo Israel",
      authorRole: "Co-fondateur, CEO & Full-Stack Developer",
      authorImage: "/team/Kolo.jpg",
      tags: ["SaaS", "Entrepreneuriat", "Mobile Money"],
      content: `
        <h2>Introduction</h2>
        <p>L'écosystème SaaS africain connaît une croissance exponentielle. En 2026, les opportunités n'ont jamais été aussi nombreuses pour les entrepreneurs qui souhaitent créer des solutions technologiques rentables adaptées au marché local.</p>
        
        <h2>1. Identifier un problème réel</h2>
        <p>La première étape consiste à identifier un problème concret que rencontrent les entreprises ou les particuliers en Afrique. Que ce soit la gestion de stock, la comptabilité, ou la coordination d'équipes à distance, votre SaaS doit répondre à un besoin précis.</p>
        
        <h3>Questions à se poser :</h3>
        <ul>
          <li>Quel problème résolvez-vous ?</li>
          <li>Qui sont vos utilisateurs cibles ?</li>
          <li>Quelle est la taille de votre marché ?</li>
          <li>Comment les gens résolvent-ils ce problème actuellement ?</li>
        </ul>
        
        <h2>2. Architecture technique adaptée</h2>
        <p>Construire un SaaS performant nécessite une architecture solide. Nous recommandons :</p>
        
        <ul>
          <li><strong>Frontend :</strong> React.js ou Vue.js pour une expérience utilisateur fluide</li>
          <li><strong>Backend :</strong> Node.js, Django ou Laravel pour la logique métier</li>
          <li><strong>Base de données :</strong> PostgreSQL ou MongoDB selon vos besoins</li>
          <li><strong>Hosting :</strong> AWS, Google Cloud ou solutions locales comme Afrihost</li>
        </ul>
        
        <h2>3. Intégration des paiements mobiles</h2>
        <p>Le point crucial pour un SaaS africain : les paiements. Intégrez les solutions de Mobile Money populaires :</p>
        
        <ul>
          <li><strong>Orange Money :</strong> Dominant en Afrique de l'Ouest francophone</li>
          <li><strong>Wave :</strong> Solution innovante avec faibles frais de transaction</li>
          <li><strong>MTN Mobile Money :</strong> Leader dans plusieurs pays africains</li>
        </ul>
        
        <blockquote>
          "L'intégration des paiements mobiles n'est pas une option, c'est une nécessité pour atteindre 90% du marché africain." - Équipe ZOMTIK
        </blockquote>
        
        <h2>4. Modèle de tarification</h2>
        <p>Adaptez vos prix au pouvoir d'achat local. Proposez :</p>
        
        <ul>
          <li>Un plan gratuit avec fonctionnalités limitées</li>
          <li>Des abonnements mensuels accessibles (5000-50000 FCFA)</li>
          <li>Des options de paiement annuelles avec réduction</li>
          <li>Des tarifs spéciaux pour les entreprises</li>
        </ul>
        
        <h2>5. Marketing et acquisition clients</h2>
        <p>Pour acquérir vos premiers clients :</p>
        
        <ul>
          <li>Créez du contenu éducatif sur les réseaux sociaux</li>
          <li>Participez aux événements tech locaux</li>
          <li>Développez un programme de parrainage</li>
          <li>Collaborez avec des influenceurs business</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Créer un SaaS rentable en Afrique demande de la persévérance, mais les opportunités sont immenses. En suivant ces étapes et en restant à l'écoute de vos utilisateurs, vous pouvez construire une entreprise technologique prospère qui répond aux besoins réels du marché africain.</p>
        
        <p><strong>Besoin d'aide pour lancer votre SaaS ?</strong> Contactez ZOMTIK pour un accompagnement personnalisé de la conception au déploiement.</p>
      `
    },
    {
      id: 2,
      title: "Architecture MVP : Valider votre idée en 30 jours",
      excerpt: "Méthodologie éprouvée pour concevoir et déployer un Minimum Viable Product performant sans dette technique.",
      category: "Développement",
      date: "10 Janvier 2026",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
      author: "Ziao Kolo Israel",
      authorRole: "Co-fondateur, CEO & Full-Stack Developer",
      authorImage: "/team/Kolo.jpg",
      tags: ["MVP", "Architecture", "Agilité"],
      content: `
        <h2>Pourquoi un MVP ?</h2>
        <p>Un Minimum Viable Product vous permet de valider votre idée rapidement sans investir des mois de développement. L'objectif : tester votre hypothèse avec de vrais utilisateurs et itérer rapidement.</p>
        
        <h2>Les 4 semaines du MVP</h2>
        
        <h3>Semaine 1 : Définition & Prototypage</h3>
        <ul>
          <li>Définir les 3 fonctionnalités essentielles (pas plus !)</li>
          <li>Créer des wireframes avec Figma</li>
          <li>Valider le parcours utilisateur</li>
          <li>Choisir la stack technique</li>
        </ul>
        
        <h3>Semaine 2 : Développement Backend</h3>
        <ul>
          <li>Mise en place de l'API REST</li>
          <li>Configuration de la base de données</li>
          <li>Authentification utilisateur</li>
          <li>Tests unitaires des endpoints critiques</li>
        </ul>
        
        <h3>Semaine 3 : Développement Frontend</h3>
        <ul>
          <li>Intégration des maquettes</li>
          <li>Connexion à l'API</li>
          <li>Gestion des états avec Redux/Context</li>
          <li>Responsive design mobile-first</li>
        </ul>
        
        <h3>Semaine 4 : Tests & Déploiement</h3>
        <ul>
          <li>Tests utilisateurs avec 10-15 bêta-testeurs</li>
          <li>Correction des bugs critiques</li>
          <li>Optimisation des performances</li>
          <li>Déploiement en production</li>
        </ul>
        
        <h2>Stack technique recommandée</h2>
        <p>Pour un MVP rapide et efficace :</p>
        
        <ul>
          <li><strong>Frontend :</strong> React + Vite + Tailwind CSS</li>
          <li><strong>Backend :</strong> Node.js + Express ou Django</li>
          <li><strong>BDD :</strong> PostgreSQL + Supabase pour le backend-as-a-service</li>
          <li><strong>Hosting :</strong> Vercel (frontend) + Railway (backend)</li>
        </ul>
        
        <h2>Erreurs à éviter</h2>
        <ul>
          <li>Vouloir trop de fonctionnalités dès le début</li>
          <li>Négliger les tests utilisateurs</li>
          <li>Sur-architecturer pour une hypothétique scalabilité</li>
          <li>Ne pas mesurer les métriques clés (taux de conversion, rétention)</li>
        </ul>
        
        <blockquote>
          "Un MVP parfait lancé dans 6 mois n'a aucune valeur. Un MVP imparfait lancé dans 30 jours vous apprendra 10 fois plus." - Lean Startup
        </blockquote>
        
        <h2>Après le lancement</h2>
        <p>Une fois votre MVP en ligne :</p>
        <ul>
          <li>Collectez les feedbacks utilisateurs quotidiennement</li>
          <li>Analysez les données analytics</li>
          <li>Priorisez les améliorations selon l'impact</li>
          <li>Itérez toutes les 2 semaines</li>
        </ul>
        
        <p><strong>Prêt à construire votre MVP ?</strong> ZOMTIK peut vous accompagner de A à Z avec notre formule "MVP 30 jours".</p>
      `
    },
    {
      id: 3,
      title: "Intégration de l'IA générative dans vos applications web",
      excerpt: "Comment implémenter Gemini AI et ChatGPT pour automatiser vos processus métier et améliorer l'expérience utilisateur.",
      category: "Intelligence Artificielle",
      date: "5 Janvier 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      author: "Ziao Kolo Israel",
      authorRole: "Co-fondateur, CEO & Full-Stack Developer",
      authorImage: "/team/Kolo.jpg",
      tags: ["IA", "Gemini", "Automatisation"],
      content: `
        <h2>L'IA générative : Une révolution accessible</h2>
        <p>En 2026, intégrer l'IA dans vos applications n'est plus réservé aux géants de la tech. Des APIs comme OpenAI GPT et Google Gemini rendent cette technologie accessible à tous les développeurs.</p>
        
        <h2>Cas d'usage concrets</h2>
        
        <h3>1. Support client automatisé</h3>
        <p>Créez un chatbot intelligent capable de répondre aux questions courantes de vos clients 24/7.</p>
        
        <pre><code>
// Exemple d'intégration Gemini AI
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function handleCustomerQuery(question) {
  const prompt = \`Tu es un assistant du service client pour [Votre entreprise].
  Question client: \${question}
  Réponds de manière professionnelle et concise.\`;
  
  const result = await model.generateContent(prompt);
  return result.response.text();
}
        </code></pre>
        
        <h3>2. Génération de contenu</h3>
        <p>Automatisez la création de descriptions produits, articles de blog ou posts réseaux sociaux.</p>
        
        <h3>3. Analyse de sentiment</h3>
        <p>Analysez automatiquement les avis clients pour détecter les points de friction.</p>
        
        <h3>4. Recommandations personnalisées</h3>
        <p>Proposez des produits ou services adaptés à chaque utilisateur selon son historique.</p>
        
        <h2>Choisir entre GPT et Gemini</h2>
        
        <table>
          <thead>
            <tr>
              <th>Critère</th>
              <th>GPT-4</th>
              <th>Gemini Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prix</td>
              <td>$$$</td>
              <td>$$ (plus accessible)</td>
            </tr>
            <tr>
              <td>Multimodal</td>
              <td>Oui (image + texte)</td>
              <td>Oui (image + texte + vidéo)</td>
            </tr>
            <tr>
              <td>Latence</td>
              <td>Rapide</td>
              <td>Très rapide</td>
            </tr>
            <tr>
              <td>Contexte max</td>
              <td>128k tokens</td>
              <td>1M tokens</td>
            </tr>
          </tbody>
        </table>
        
        <h2>Bonnes pratiques d'intégration</h2>
        
        <ul>
          <li><strong>Rate limiting :</strong> Évitez les appels excessifs pour contrôler les coûts</li>
          <li><strong>Caching :</strong> Stockez les réponses fréquentes en Redis</li>
          <li><strong>Fallback :</strong> Prévoyez un plan B si l'API est indisponible</li>
          <li><strong>Monitoring :</strong> Tracez les coûts et performances en temps réel</li>
          <li><strong>Sécurité :</strong> Ne jamais exposer votre clé API côté client</li>
        </ul>
        
        <h2>Gestion des coûts</h2>
        <p>Pour optimiser vos dépenses IA :</p>
        
        <ul>
          <li>Utilisez des modèles plus légers pour les tâches simples</li>
          <li>Implémentez un système de cache efficace</li>
          <li>Limitez la longueur des prompts</li>
          <li>Utilisez le streaming pour de longues réponses</li>
        </ul>
        
        <blockquote>
          "L'IA n'est pas là pour remplacer l'humain, mais pour augmenter ses capacités et automatiser les tâches répétitives." - Équipe ZOMTIK
        </blockquote>
        
        <h2>Exemple : Générateur de descriptions produits</h2>
        
        <pre><code>
async function generateProductDescription(product) {
  const prompt = \`Génère une description marketing attrayante pour ce produit:
  
  Nom: \${product.name}
  Catégorie: \${product.category}
  Caractéristiques: \${product.features.join(', ')}
  Prix: \${product.price} FCFA
  
  La description doit:
  - Faire 3-4 phrases
  - Mettre en avant les bénéfices clients
  - Inclure un appel à l'action
  - Être adaptée au marché africain\`;
  
  const result = await model.generateContent(prompt);
  return result.response.text();
}
        </code></pre>
        
        <h2>Conclusion</h2>
        <p>L'intégration de l'IA générative peut transformer votre application et vous donner un avantage compétitif significatif. Commencez petit avec un cas d'usage simple, mesurez les résultats, puis élargissez progressivement.</p>
        
        <p><strong>Besoin d'aide pour intégrer l'IA dans votre application ?</strong> Nos experts ZOMTIK peuvent vous accompagner du POC à la production.</p>
      `
    },
    {
      id: 4,
      title: "Optimisation Mobile-First pour l'Afrique de l'Ouest",
      excerpt: "Techniques avancées de compression WebP et lazy loading pour garantir des performances optimales sur réseaux 3G/4G.",
      category: "Performance",
      date: "28 Décembre 2025",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
      author: "Ziao Kolo Israel",
      authorRole: "Co-fondateur, CEO & Full-Stack Developer",
      authorImage: "/team/Kolo.jpg",
      tags: ["Mobile", "Performance", "WebP"],
      content: `
        <h2>Le contexte africain</h2>
        <p>En Afrique de l'Ouest, plus de 80% des utilisateurs accèdent au web via mobile, souvent sur des réseaux 3G avec des connexions instables. Votre site doit être optimisé pour ces conditions réelles.</p>
        
        <h2>1. Images optimisées avec WebP</h2>
        <p>Le format WebP réduit la taille des images de 25-35% par rapport au JPEG sans perte de qualité.</p>
        
        <pre><code>
// Conversion automatique en WebP avec fallback
&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;source srcset="image.jpg" type="image/jpeg"&gt;
  &lt;img src="image.jpg" alt="Description" loading="lazy"&gt;
&lt;/picture&gt;
        </code></pre>
        
        <h2>2. Lazy Loading intelligent</h2>
        <p>Chargez les images uniquement quand elles sont visibles :</p>
        
        <pre><code>
// React Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';

&lt;LazyLoadImage
  src="product.webp"
  alt="Product"
  effect="blur"
  threshold={100}
  placeholderSrc="product-thumb.webp"
/&gt;
        </code></pre>
        
        <h2>3. Compression et minification</h2>
        <ul>
          <li>Minifiez CSS/JS avec Vite ou Webpack</li>
          <li>Activez la compression Gzip/Brotli sur votre serveur</li>
          <li>Supprimez le code mort avec Tree Shaking</li>
        </ul>
        
        <h2>4. CDN et mise en cache</h2>
        <p>Utilisez un CDN avec des points de présence en Afrique :</p>
        <ul>
          <li>Cloudflare (gratuit)</li>
          <li>Bunny CDN (économique)</li>
          <li>AWS CloudFront</li>
        </ul>
        
        <h2>5. Optimisation du Critical Path</h2>
        <pre><code>
// Préchargement des ressources critiques
&lt;link rel="preload" href="font.woff2" as="font" crossorigin&gt;
&lt;link rel="preconnect" href="https://api.example.com"&gt;
        </code></pre>
        
        <h2>Métriques à surveiller</h2>
        <ul>
          <li><strong>LCP</strong> (Largest Contentful Paint) : &lt; 2.5s</li>
          <li><strong>FID</strong> (First Input Delay) : &lt; 100ms</li>
          <li><strong>CLS</strong> (Cumulative Layout Shift) : &lt; 0.1</li>
          <li><strong>Time to Interactive</strong> : &lt; 3.5s sur 3G</li>
        </ul>
        
        <blockquote>
          "Un site qui charge en 2 secondes convertit 2x plus qu'un site qui charge en 5 secondes sur mobile." - Google Research
        </blockquote>
        
        <h2>Checklist d'optimisation</h2>
        <ul>
          <li>✅ Images en WebP avec fallback</li>
          <li>✅ Lazy loading sur toutes les images</li>
          <li>✅ Code splitting par route</li>
          <li>✅ Compression Gzip/Brotli activée</li>
          <li>✅ CDN configuré</li>
          <li>✅ Fonts optimisés (WOFF2)</li>
          <li>✅ CSS critique inline</li>
          <li>✅ Service Worker pour offline</li>
        </ul>
        
        <p><strong>Votre site est-il optimisé pour le marché africain ?</strong> ZOMTIK peut auditer et optimiser vos performances web.</p>
      `
    },
    {
      id: 5,
      title: "Monétisation avec Mobile Money : Guide d'intégration",
      excerpt: "Tutoriel complet pour intégrer Orange Money, Wave et MTN Money dans votre application SaaS.",
      category: "Paiements",
      date: "20 Décembre 2025",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
      author: "Ziao Kolo Israel",
      authorRole: "Co-fondateur, CEO & Full-Stack Developer",
      authorImage: "/team/Kolo.jpg",
      tags: ["Paiements", "API", "Monétisation"],
      content: `
        <h2>Pourquoi Mobile Money ?</h2>
        <p>En Afrique de l'Ouest, seulement 15% de la population possède une carte bancaire, mais plus de 60% utilisent le Mobile Money. Pour monétiser votre application, l'intégration Mobile Money est indispensable.</p>
        
        <h2>Les acteurs majeurs</h2>
        
        <h3>1. Orange Money</h3>
        <p>Leader dans 17 pays africains avec plus de 50 millions d'utilisateurs.</p>
        <ul>
          <li><strong>Frais :</strong> 2-3% par transaction</li>
          <li><strong>API :</strong> REST API bien documentée</li>
          <li><strong>Délai paiement :</strong> Instantané</li>
        </ul>
        
        <h3>2. Wave</h3>
        <p>Solution innovante avec les frais les plus bas du marché.</p>
        <ul>
          <li><strong>Frais :</strong> 1% seulement !</li>
          <li><strong>API :</strong> Simple et moderne</li>
          <li><strong>Pays :</strong> Sénégal, Côte d'Ivoire, Burkina, Mali</li>
        </ul>
        
        <h3>3. MTN Mobile Money</h3>
        <p>Présent dans 21 pays avec une base d'utilisateurs massive.</p>
        <ul>
          <li><strong>Frais :</strong> 2.5-4%</li>
          <li><strong>API :</strong> MOMO API</li>
          <li><strong>Certification :</strong> Requise (process de 2-4 semaines)</li>
        </ul>
        
        <h2>Intégration Orange Money</h2>
        
        <pre><code>
// Exemple d'intégration Orange Money
const initiatePayment = async (amount, customerPhone) => {
  const response = await fetch('https://api.orange.com/orange-money-webpay/dev/v1/webpayment', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      merchant_key: MERCHANT_KEY,
      currency: 'XOF',
      order_id: generateOrderId(),
      amount: amount,
      return_url: 'https://votreapp.com/payment-success',
      cancel_url: 'https://votreapp.com/payment-cancel',
      notif_url: 'https://votreapp.com/api/payment-webhook',
      lang: 'fr',
      reference: \`ORDER-\${Date.now()}\`
    })
  });
  
  const data = await response.json();
  return data.payment_url; // Rediriger l'utilisateur vers cette URL
};
        </code></pre>
        
        <h2>Gestion des webhooks</h2>
        <p>Les webhooks vous notifient du statut des paiements :</p>
        
        <pre><code>
// Endpoint webhook pour confirmer les paiements
app.post('/api/payment-webhook', async (req, res) => {
  const { order_id, status, txnid } = req.body;
  
  // Vérifier la signature
  if (!verifyWebhookSignature(req)) {
    return res.status(401).send('Invalid signature');
  }
  
  if (status === 'SUCCESS') {
    // Activer l'abonnement utilisateur
    await activateSubscription(order_id);
    
    // Envoyer email de confirmation
    await sendPaymentConfirmation(order_id);
  }
  
  res.status(200).send('OK');
});
        </code></pre>
        
        <h2>Bonnes pratiques</h2>
        
        <ul>
          <li><strong>Timeouts :</strong> Les paiements Mobile Money peuvent prendre 1-2 minutes</li>
          <li><strong>Retry logic :</strong> Implémentez des tentatives automatiques</li>
          <li><strong>UI claire :</strong> Indiquez clairement les étapes du paiement</li>
          <li><strong>Notifications SMS :</strong> Confirmez par SMS après paiement</li>
          <li><strong>Support multi-opérateurs :</strong> Proposez plusieurs options</li>
        </ul>
        
        <h2>Gestion des erreurs courantes</h2>
        
        <ul>
          <li><strong>Solde insuffisant :</strong> Message clair + suggestion de recharger</li>
          <li><strong>Timeout :</strong> Vérifier le statut via l'API</li>
          <li><strong>Opérateur indisponible :</strong> Proposer une alternative</li>
          <li><strong>Code PIN incorrect :</strong> Limiter les tentatives</li>
        </ul>
        
        <h2>Agrégateurs de paiement</h2>
        <p>Pour simplifier, utilisez des agrégateurs qui gèrent plusieurs opérateurs :</p>
        
        <ul>
          <li><strong>Paystack :</strong> Orange Money, MTN, Moov</li>
          <li><strong>Flutterwave :</strong> Couverture pan-africaine</li>
          <li><strong>CinetPay :</strong> Spécialiste Afrique francophone</li>
        </ul>
        
        <blockquote>
          "Avec Mobile Money, vous pouvez monétiser 10x plus d'utilisateurs qu'avec seulement les cartes bancaires en Afrique." - ZOMTIK
        </blockquote>
        
        <h2>Conformité et sécurité</h2>
        <ul>
          <li>Stockez les données de paiement de manière sécurisée (PCI DSS)</li>
          <li>Utilisez HTTPS pour tous les échanges</li>
          <li>Journalisez toutes les transactions</li>
          <li>Implémentez la détection de fraude</li>
        </ul>
        
        <p><strong>Besoin d'aide pour intégrer Mobile Money ?</strong> ZOMTIK peut gérer toute l'intégration technique pour vous.</p>
      `
    },
    {
      id: 6,
      title: "SEO Technique pour Startups SaaS en 2026",
      excerpt: "Stratégies concrètes de référencement naturel pour dominer les recherches locales et attirer des clients qualifiés.",
      category: "Marketing",
      date: "12 Décembre 2025",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      author: "Traoré Ouessogo Cheick Mohamed Tidjane",
      authorRole: "Co-fondateur, Head of Digital Marketing & SEO",
      authorImage: "/team/Cheick.jpeg",
      tags: ["SEO", "Marketing", "Croissance"],
      content: `
        <h2>SEO pour SaaS : Les fondamentaux</h2>
        <p>Le SEO est essentiel pour acquérir des clients de manière organique. Pour un SaaS, cela signifie ranker sur des mots-clés à forte intention d'achat.</p>
        
        <h2>1. Recherche de mots-clés stratégiques</h2>
        <p>Ciblez 3 types de mots-clés :</p>
        
        <h3>a) Mots-clés transactionnels</h3>
        <ul>
          <li>"logiciel de gestion stock Sénégal"</li>
          <li>"application facturation Côte d'Ivoire"</li>
          <li>"CRM pour PME africaines"</li>
        </ul>
        
        <h3>b) Mots-clés informationnels</h3>
        <ul>
          <li>"comment gérer sa comptabilité"</li>
          <li>"créer un SaaS en Afrique"</li>
          <li>"intégrer Orange Money"</li>
        </ul>
        
        <h3>c) Mots-clés de comparaison</h3>
        <ul>
          <li>"[VotreApp] vs [Concurrent]"</li>
          <li>"meilleur logiciel de [catégorie]"</li>
          <li>"alternative à [concurrent]"</li>
        </ul>
        
        <h2>2. Architecture SEO-friendly</h2>
        
        <pre><code>
// Next.js : SEO optimisé par défaut
export async function generateMetadata({ params }) {
  return {
    title: 'Logiciel de Gestion Stock | VotreApp',
    description: 'Gérez votre stock facilement avec paiements Mobile Money',
    keywords: ['gestion stock', 'Orange Money', 'Sénégal'],
    openGraph: {
      title: 'VotreApp - Gestion de Stock Intelligente',
      description: '...',
      images: ['/og-image.jpg'],
    },
  };
}
        </code></pre>
        
        <h2>3. Contenu optimisé</h2>
        <p>Créez du contenu qui répond aux questions de vos clients :</p>
        
        <ul>
          <li><strong>Pages piliers :</strong> Guides complets sur votre domaine</li>
          <li><strong>Cluster de contenu :</strong> Articles liés entre eux</li>
          <li><strong>Études de cas :</strong> Success stories de clients</li>
          <li><strong>Comparatifs :</strong> Votre solution vs alternatives</li>
        </ul>
        
        <h2>4. Optimisation technique</h2>
        
        <h3>a) Core Web Vitals</h3>
        <ul>
          <li>LCP &lt; 2.5s</li>
          <li>FID &lt; 100ms</li>
          <li>CLS &lt; 0.1</li>
        </ul>
        
        <h3>b) Sitemap et robots.txt</h3>
        <pre><code>
// public/robots.txt
User-agent: *
Allow: /
Sitemap: https://votreapp.com/sitemap.xml

// Génération sitemap automatique
npm install next-sitemap
        </code></pre>
        
        <h3>c) Schema Markup</h3>
        <pre><code>
// Schema pour SaaS
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VotreApp",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "15000",
    "priceCurrency": "XOF"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}
        </code></pre>
        
        <h2>5. Link Building local</h2>
        <p>Obtenez des backlinks de qualité :</p>
        
        <ul>
          <li>Annuaires tech africains (AfricanStartups, etc.)</li>
          <li>Guest posts sur blogs tech locaux</li>
          <li>Partenariats avec incubateurs/accélérateurs</li>
          <li>Presse locale et interviews</li>
        </ul>
        
        <h2>6. SEO local pour chaque pays</h2>
        <p>Créez des pages dédiées par pays :</p>
        
        <ul>
          <li>/senegal/ - Contenu en français adapté</li>
          <li>/cote-ivoire/ - Références locales</li>
          <li>/burkina-faso/ - Tarifs en FCFA</li>
        </ul>
        
        <h2>7. Tracking et optimisation</h2>
        <p>Mesurez vos résultats :</p>
        
        <ul>
          <li><strong>Google Search Console :</strong> Positions et clics</li>
          <li><strong>Google Analytics 4 :</strong> Conversions organiques</li>
          <li><strong>Ahrefs/SEMrush :</strong> Backlinks et concurrence</li>
        </ul>
        
        <blockquote>
          "70% de nos clients SaaS proviennent du trafic organique. Le SEO est l'investissement le plus rentable à long terme." - Growth Hacker
        </blockquote>
        
        <h2>Quick Wins SEO</h2>
        <ul>
          <li>✅ Optimiser les balises title et meta description</li>
          <li>✅ Ajouter des alt text aux images</li>
          <li>✅ Créer un blog avec 2 articles/semaine</li>
          <li>✅ Obtenir 10 backlinks de qualité</li>
          <li>✅ Optimiser la vitesse de chargement</li>
          <li>✅ Créer des pages FAQ riches en mots-clés</li>
        </ul>
        
        <h2>Calendrier SEO sur 3 mois</h2>
        
        <h3>Mois 1 : Fondations</h3>
        <ul>
          <li>Audit SEO complet</li>
          <li>Recherche de mots-clés</li>
          <li>Optimisation technique</li>
        </ul>
        
        <h3>Mois 2 : Contenu</h3>
        <ul>
          <li>20 articles de blog</li>
          <li>Pages piliers</li>
          <li>Optimisation on-page</li>
        </ul>
        
        <h3>Mois 3 : Authority</h3>
        <ul>
          <li>Link building</li>
          <li>Guest posting</li>
          <li>Partenariats stratégiques</li>
        </ul>
        
        <p><strong>Besoin d'une stratégie SEO sur-mesure ?</strong> ZOMTIK peut auditer votre site et créer un plan d'action SEO personnalisé.</p>
      `
    }
  ];

  const article = articles.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      {/* Back Button */}
      <div className="border-b border-slate-200 dark:border-white/5 sticky top-16 bg-white/95 dark:bg-dark/95 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-800/60 dark:bg-slate-800/60 text-sm font-medium text-slate-300 dark:text-slate-300">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} de lecture</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[2/1] rounded-2xl object-cover bg-slate-100 dark:bg-slate-800"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <img
              src={article.authorImage}
              alt={article.author}
              className="size-12 rounded-full bg-slate-800"
            />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">{article.author}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{article.authorRole}</p>
            </div>
          </div>

          {/* Share & Bookmark */}
          <div className="flex items-center gap-3 relative">
            {/* Share Button */}
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 z-50">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <hr className="my-2 border-slate-200 dark:border-slate-700" />
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                    {copied ? 'Copié !' : 'Copier le lien'}
                  </button>
                </div>
              )}
            </div>
            
            {/* Bookmark Button */}
            <button 
              onClick={toggleBookmark}
              className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors ${
                isBookmarked ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <Tag className="w-4 h-4 text-slate-400" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-sm text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-slate dark:prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic
            prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
            prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-slate-100 dark:prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:text-slate-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-8
            prose-table:w-full prose-table:my-8
            prose-thead:border-b-2 prose-thead:border-slate-300 dark:prose-thead:border-slate-700
            prose-th:text-left prose-th:p-3 prose-th:font-semibold prose-th:text-slate-900 dark:prose-th:text-white
            prose-td:p-3 prose-td:border-t prose-td:border-slate-200 dark:prose-td:border-slate-800 prose-td:text-slate-600 dark:prose-td:text-slate-400
            prose-img:rounded-xl prose-img:my-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Besoin d'aide pour votre projet ?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Nos experts ZOMTIK peuvent vous accompagner de la conception au déploiement de votre application.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform"
          >
            Démarrer un projet
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
