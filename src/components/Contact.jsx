import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'MVP SaaS (30 jours)',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Veuillez remplir tous les champs obligatoires.' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Configuration EmailJS
      const serviceID = 'service_8325xj5'; // À remplacer par votre Service ID
      const templateID = 'template_f8hzxnm'; // À remplacer par votre Template ID
      const publicKey = 'J8cabesIQxz2vTUGK'; // À remplacer par votre Public Key

      // Envoi avec EmailJS
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          to_email: 'koloziao2005@gmail.com',
        },
        publicKey
      );

      console.log('EmailJS Response:', result);
      
      setStatus({ 
        type: 'success', 
        message: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.' 
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        service: 'MVP SaaS (30 jours)',
        message: ''
      });
      
      // Effacer le message après 5 secondes
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: '❌ Erreur d\'envoi. Veuillez réessayer ou nous contacter directement à koloziao2005@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 border-t border-slate-200 dark:border-white/5 relative bg-white dark:bg-dark">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-3 md:mb-4">Construisons votre futur technologique aujourd'hui</h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Contactez nos experts pour une consultation gratuite ou planifiez votre audit SaaS.</p>
        </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={100}>
        <div className="bg-slate-50 dark:bg-card p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase text-slate-500 tracking-wider">Nom</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all" 
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase text-slate-500 tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all" 
                  placeholder="jean@company.fr"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase text-slate-500 tracking-wider">Service</label>
              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all appearance-none cursor-pointer [&>option]:bg-white [&>option]:dark:bg-black [&>option]:text-slate-900 [&>option]:dark:text-white"
                >
                  <option value="MVP SaaS (30 jours)">MVP SaaS (30 jours)</option>
                  <option value="Développement Web & Mobile">Développement Web & Mobile</option>
                  <option value="Mentorat Tech 1:1">Mentorat Tech 1:1</option>
                  <option value="Solutions IA Personnalisées">Solutions IA Personnalisées</option>
                  <option value="Autre projet">Autre projet</option>
                </select>
                <iconify-icon icon="solar:alt-arrow-down-linear" width="16" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></iconify-icon>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase text-slate-500 tracking-wider">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6" 
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3.5 md:py-3 text-base md:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all resize-none" 
                placeholder="Décrivez votre défi technique ou vos objectifs de croissance..."
              ></textarea>
            </div>
            
            {/* Status message */}
            {status.message && (
              <div className={`p-4 rounded-lg text-sm ${
                status.type === 'success' 
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20' 
                  : 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-500/20'
              }`}>
                {status.message}
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-black py-4 md:py-3.5 rounded-lg text-sm md:text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande d\'étude'}
                <iconify-icon icon="solar:plain-3-linear" width="16" className="text-current"></iconify-icon>
              </button>
              <button 
                type="button" 
                onClick={() => window.open('https://wa.me/2250768249990', '_blank')}
                className="flex-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 py-4 md:py-3.5 rounded-lg text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-2"
              >
                <iconify-icon icon="solar:chat-round-dots-linear" width="16" className="text-current"></iconify-icon>
                Chat WhatsApp (Réponse sous 2h)
              </button>
            </div>
          </form>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
