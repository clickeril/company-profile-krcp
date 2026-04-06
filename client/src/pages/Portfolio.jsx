import { motion } from 'framer-motion';
import portfolioData from '../data/portfolio.json';

export default function Portfolio() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{portfolioData.header.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {portfolioData.header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="h-64 w-full relative">
                      <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-slate-900 to-transparent w-full">
                          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1 block">{project.category}</span>
                          <h3 className="text-white font-bold text-xl">{project.title}</h3>
                      </div>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
