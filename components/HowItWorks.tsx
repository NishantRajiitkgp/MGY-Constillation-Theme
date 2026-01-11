import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="min-h-screen py-32 px-6 relative flex items-center">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-24">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">The Process</span>
            <h2 className="font-serif text-4xl md:text-6xl text-gray-900">From chaos to coherence.</h2>
        </div>

        <div className="relative">
            {/* Connecting line for desktop */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent md:left-1/2 md:-ml-px md:hidden" />
            
            <div className="space-y-24">
                {[
                    { step: "01", title: "Assess", text: "Begin with a cognitive audit. Identify energy leaks and attention drains." },
                    { step: "02", title: "Align", text: "Customize your daily protocol. Mix focus bouts with strategic rest." },
                    { step: "03", title: "Advance", text: "Track neural adaptation. See how your baseline of calm increases." }
                ].map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-20 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`flex-1 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                            <div className="hidden md:block">
                                <h3 className="text-3xl font-serif text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-lg leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                        
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-accent border-4 border-white shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center justify-center text-[10px] font-bold text-white">
                                {index + 1}
                            </div>
                        </div>

                        <div className="flex-1 md:hidden pl-8 -mt-2">
                             <h3 className="text-2xl font-serif text-gray-900 mb-2">{item.title}</h3>
                             <p className="text-gray-500 leading-relaxed">{item.text}</p>
                        </div>
                        
                        <div className="flex-1 hidden md:block" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;