import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutData from '../data/about.json';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ backgroundImage: `url(${aboutData.header.bgImage})` }} 
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {aboutData.header.title}
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-xl text-slate-300 max-w-2xl mx-auto">
            {aboutData.header.description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {aboutData.intro.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed whitespace-pre-line">
                {aboutData.intro.description.replace(/\*\*/g, '') /* Simple markdown strip for bold */}
              </p>
              <ul className="space-y-4 mb-8">
                 {aboutData.features.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                       <CheckCircle2 className="w-5 h-5 text-accent mr-3" /> {item}
                    </li>
                 ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
                 Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
           </motion.div>
           
           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <img src={aboutData.images[0]} className="rounded-2xl w-full h-80 object-cover shadow-lg" alt="Team working" />
              <img src={aboutData.images[1]} className="rounded-2xl w-full h-80 object-cover shadow-lg translate-y-12" alt="Corporate desk" />
           </motion.div>
        </div>
      </div>
    </div>
  );
}
