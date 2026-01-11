import React from 'react';
import { Brain, Zap, Moon, Focus, BarChart2, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: Brain, title: 'Psychology', desc: 'Evidence-based cognitive framing techniques.' },
    { icon: Zap, title: 'Flow State', desc: 'Audio engines designed to induce deep focus.' },
    { icon: Moon, title: 'Restoration', desc: 'NSDR and sleep protocols for recovery.' },
    { icon: Focus, title: 'Attention', desc: 'Drills to improve sustained concentration.' },
    { icon: BarChart2, title: 'Analytics', desc: 'Track your mental clarify scores over time.' },
    { icon: Shield, title: 'Privacy', desc: 'Your mental data is encrypted and yours alone.' },
  ];

  return (
    <section id="features" className="min-h-screen py-32 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">A structured system for<br/>the unstructured mind.</h2>
          <p className="text-gray-500 text-lg">Most wellness apps offer random content. MGY offers a curriculum for consciousness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/30 backdrop-blur-md p-8 rounded-xl hover:bg-white/60 transition-all duration-300 group border border-white/50 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                <f.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;