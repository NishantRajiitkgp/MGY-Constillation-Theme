import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="min-h-screen py-32 px-6 flex items-center justify-center relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Invest in clarity.</h2>
            <p className="text-gray-500">Simple, transparent pricing. No hidden algorithms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors bg-white/60 backdrop-blur-md">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Seeker</h3>
                <div className="text-3xl font-serif text-gray-900 mb-6">$0<span className="text-base font-sans text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    {['Daily 5-min guidance', 'Basic journal access', 'Community forums'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                            <Check size={14} className="text-gray-400" /> {f}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-900 hover:bg-white transition-colors text-sm font-medium">
                    Get Started
                </button>
            </div>

            {/* Card 2 - Featured */}
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-accent/30 relative overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Practitioner</h3>
                <div className="text-3xl font-serif text-gray-900 mb-6">$12<span className="text-base font-sans text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    {['Full library access', 'Advanced analytics', 'Offline mode', 'Priority support'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                            <Check size={14} className="text-accent" /> {f}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors text-sm shadow-[0_4px_14px_rgba(124,58,237,0.3)] font-medium">
                    Start Trial
                </button>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors bg-white/60 backdrop-blur-md">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Guide</h3>
                <div className="text-3xl font-serif text-gray-900 mb-6">$29<span className="text-base font-sans text-gray-500">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    {['All Practitioner features', '1:1 Coaching session', 'Workshop access'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                            <Check size={14} className="text-gray-400" /> {f}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-900 hover:bg-white transition-colors text-sm font-medium">
                    Contact Us
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;