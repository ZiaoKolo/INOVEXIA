import { cn } from '../utils/cn';
import { Marquee } from './Marquee';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: "Amadou Diop",
    role: "CEO, TechStartup Dakar",
    body: "ZOTECS a transformé notre vision en un produit SaaS rentable en un temps record. Leur compréhension des enjeux africains fait toute la différence.",
    img: "/testimonials/portrait-handsome-man-orange-background.jpg",
  },
  {
    name: "Aïssatou Ndiaye",
    role: "Fondatrice, Senegal Digital Hub",
    body: "Une compréhension fine des besoins africains. Des résultats qui dépassent nos attentes. ZOTECS est plus qu'un prestataire, c'est un véritable partenaire stratégique.",
    img: "/testimonials/smiley-african-woman-with-golden-earrings.jpg",
  },
  {
    name: "Kwame Mensah",
    role: "CTO, Ghana Tech Solutions",
    body: "L'architecture que ZOTECS a mise en place pour notre MVP nous permet de scaler sereinement. Code propre, documentation exemplaire, équipe réactive.",
    img: "/testimonials/young-successful-african-businessman-posing-dark.jpg",
  },
  {
    name: "Ama Boateng",
    role: "Directrice, Design Afrique",
    body: "Collaboration fluide, délais respectés et produit final exceptionnel. ZOTECS combine excellence technique et sens du design.",
    img: "/testimonials/portrait-fashionable-woman-looking-away.jpg",
  },
  {
    name: "Chukwudi Okonkwo",
    role: "Fondateur, Lagos Innovation Lab",
    body: "Le mentorat technique de ZOTECS a transformé notre équipe. Leur approche pédagogique et leur maîtrise des stacks modernes sont incomparables.",
    img: "/testimonials/portrait-modern-man-caffe.jpg",
  },
  {
    name: "Affoué Kouamé",
    role: "CEO, Abidjan StartupHub",
    body: "Le partenaire idéal pour passer d'une idée à une réalité technologique scalable. ZOTECS combine vision stratégique et exécution impeccable.",
    img: "/testimonials/attractive-plus-size-model-white-shirt-apparel.jpg",
  },
  {
    name: "Aminata Traoré",
    role: "Directrice, WebFlow Côte d'Ivoire",
    body: "Un travail remarquable et une équipe toujours à l'écoute. L'intégration des paiements mobiles locaux a été un succès total.",
    img: "/testimonials/content-attractive-black-with-keeping-arms-crossed-outdoors.jpg",
  },
  {
    name: "Grace Wanjiru",
    role: "Fondatrice, Nairobi Tech Women",
    body: "Professionnalisme exemplaire et solutions innovantes. ZOTECS comprend les défis spécifiques des startups africaines et livre des solutions adaptées.",
    img: "/testimonials/fashionable-african-woman-floral-coat.jpg",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({ img, name, role, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-slate-200 dark:border-white/10 bg-white dark:bg-card hover:shadow-lg transition-all duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="48" height="48" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-slate-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-400">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        "{body}"
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">
              Ce que disent nos partenaires
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              La réussite de nos clients est notre meilleure publicité.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative flex w-full flex-col items-center justify-center">
          <Marquee pauseOnHover className="[--duration:30s] mb-4">
            {firstRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </Marquee>
          
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-dark to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-dark to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
