import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-white">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-bold tracking-tight text-gray-900">MGY</div>
        <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
        </div>
        <div className="text-xs text-gray-400">
            © 2024 MindGuruYoga. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;