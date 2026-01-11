import React from 'react';

const Articles: React.FC = () => {
  const articles = [
    { cat: "Neuroscience", title: "The Default Mode Network & You", date: "Oct 12" },
    { cat: "Philosophy", title: "Stoicism in the Age of AI", date: "Oct 08" },
    { cat: "Practice", title: "Why 10 Minutes is Enough", date: "Sep 25" },
    { cat: "Biology", title: "Circadian Rhythms Decoded", date: "Sep 14" },
  ];

  return (
    <section id="articles" className="min-h-screen py-32 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 max-w-md">Wisdom for the modern intellectual.</h2>
          <button className="mt-6 md:mt-0 text-accent hover:text-gray-900 transition-colors text-sm font-medium uppercase tracking-wider">
            Read Journal {"->"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {articles.map((art, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-gray-200 relative">
                <img
                  src={`https://picsum.photos/600/400?random=${i + 10}`}
                  alt={art.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-900 border border-white/50 shadow-sm">
                  {art.cat}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-serif text-gray-900 group-hover:text-accent transition-colors duration-300 w-3/4">
                  {art.title}
                </h3>
                <span className="text-sm text-gray-500 font-mono mt-1">{art.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;