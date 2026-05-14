import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xbdqlabp', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        // Optioneel: verberg de succesmelding na 8 seconden
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div>
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded flex items-start gap-3 text-green-400 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 size={24} className="flex-shrink-0 mt-0.5" />
          <p className="font-body text-base">Bericht verzonden! Wij nemen zo snel mogelijk contact met u op.</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded flex items-start gap-3 text-red-400 animate-in fade-in slide-in-from-top-2">
          <AlertCircle size={24} className="flex-shrink-0 mt-0.5" />
          <p className="font-body text-base">Er is iets misgegaan bij het verzenden. Probeer het later opnieuw of neem telefonisch contact op.</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-subheading text-[13px] uppercase tracking-[2px] font-medium text-gray-400 mb-2">Naam patiënt / eigenaar *</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-[var(--color-accent)] focus:ring-0 outline-none transition-all text-white font-body placeholder:text-white/20"
              placeholder="Uw naam"
              required
              disabled={status === 'submitting'}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-subheading text-[13px] uppercase tracking-[2px] font-medium text-gray-400 mb-2">Telefoonnummer *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-[var(--color-accent)] focus:ring-0 outline-none transition-all text-white font-body placeholder:text-white/20"
              placeholder="06 12345678"
              required
              disabled={status === 'submitting'}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block font-subheading text-[13px] uppercase tracking-[2px] font-medium text-gray-400 mb-2">E-mailadres *</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-[var(--color-accent)] focus:ring-0 outline-none transition-all text-white font-body placeholder:text-white/20"
            placeholder="uw@email.nl"
            required
            disabled={status === 'submitting'}
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block font-subheading text-[13px] uppercase tracking-[2px] font-medium text-gray-400 mb-2">Behandeling / Onderwerp</label>
          <select 
            id="subject" 
            name="subject"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-[var(--color-accent)] focus:ring-0 outline-none transition-all text-white appearance-none font-body"
            disabled={status === 'submitting'}
          >
            <option className="bg-[var(--color-charcoal)]">Reparatie</option>
            <option className="bg-[var(--color-charcoal)]">Restauratie</option>
            <option className="bg-[var(--color-charcoal)]">Onderdelen</option>
            <option className="bg-[var(--color-charcoal)]">Overig</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block font-subheading text-[13px] uppercase tracking-[2px] font-medium text-gray-400 mb-2">Klachten / Bericht *</label>
          <textarea 
            id="message" 
            name="message"
            rows={4}
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-[var(--color-accent)] focus:ring-0 outline-none transition-all text-white resize-none font-body placeholder:text-white/20"
            placeholder="Beschrijf de symptomen van de patiënt..."
            required
            disabled={status === 'submitting'}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`w-full bg-[var(--color-accent)] hover:bg-white text-[var(--color-dark-bg)] font-subheading text-[15px] uppercase tracking-[2px] font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'submitting' ? 'Bezig met verzenden...' : 'Verstuur Bericht'}
        </button>
        
        <p className="text-center font-body text-sm text-gray-500 mt-4">
          Wij reageren binnen 24 uur. Bij spoed, bel direct: <a href="tel:+31653613489" className="font-bold text-[var(--color-accent)] hover:underline">06 53 61 34 89</a>
        </p>
      </form>
    </div>
  );
};
