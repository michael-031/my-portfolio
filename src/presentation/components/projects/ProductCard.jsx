import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, Copy } from '@phosphor-icons/react';

export function ProductCard({ product, translate, onSelectProject }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.codeSnippet) {
      navigator.clipboard.writeText(product.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onSelectProject && product.projectDetails) {
      onSelectProject(product.projectDetails, product.sectionIndex ?? 0);
    }
  };

  return (
    <motion.div
      style={translate ? { x: translate } : undefined}
      whileHover={{
        y: -16,
        scale: 1.02,
      }}
      onClick={handleClick}
      key={product.title}
      className="group/product h-80 w-[calc(100vw-2.5rem)] max-w-[24rem] sm:w-[28rem] sm:max-w-none relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/12 bg-[#121117]/95 backdrop-blur-sm pointer-events-auto cursor-pointer"
    >
      <a href="#" onClick={handleClick} className="block h-full w-full relative">
        {/* Render Image Card */}
        {product.type === 'image' && (
          <div className="w-full h-full relative bg-[#0b0a0e] flex items-center justify-center">
            <img
              src={product.thumbnail}
              className="object-cover object-top h-full w-full transition-transform duration-500 group-hover/product:scale-105"
              alt={product.title}
            />
          </div>
        )}

        {/* Render Code Terminal Card */}
        {product.type === 'code' && (
          <div className="w-full h-full bg-[#0d0c11] text-zinc-200 p-4 font-mono text-[11px] flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 font-mono text-xs text-zinc-400">{product.filename}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-zinc-400 hover:text-white transition-colors pointer-events-auto"
                  title="Copy code"
                >
                  {copied ? (
                    <CheckCircle size={15} className="text-emerald-400" />
                  ) : (
                    <Copy size={15} />
                  )}
                </button>
              </div>
              <pre className="text-zinc-200 text-[10.5px] leading-relaxed overflow-hidden">
                <code>{product.codeSnippet}</code>
              </pre>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-zinc-500">
              <span>// {product.category}</span>
              <span className="text-zinc-300">Michael Inoc Studio</span>
            </div>
          </div>
        )}

        {/* Render Styled Mock UI Card */}
        {product.type === 'mock' && (
          <div className="w-full h-full bg-gradient-to-br from-[#191822] via-[#121117] to-[#0a090d] p-6 flex flex-col justify-between text-white relative">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold backdrop-blur-md mb-4 border border-white/10">
                {product.category}
              </span>
              <h3
                className="text-2xl font-bold tracking-tight mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {product.title}
              </h3>
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">{product.subtitle}</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {product.tech?.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/10 text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hover Overlay with details */}
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-95 bg-gradient-to-t from-black via-black/80 to-transparent transition duration-300 flex flex-col justify-end p-6">
          <span className="text-xs font-mono text-zinc-400 uppercase font-bold tracking-wider mb-1">
            {product.category}
          </span>
          <h2
            className="text-xl font-bold text-white tracking-tight mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {product.title}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {product.tech?.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono bg-white/20 text-white px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0e0d12] bg-white px-3 py-1.5 rounded-full">
              Explore <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default ProductCard;
