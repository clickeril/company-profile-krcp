import { motion } from 'framer-motion';
import leadershipData from '../data/leadership.json';

export default function Leadership() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{leadershipData.header.title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {leadershipData.header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {leadershipData.leaders.map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden">
                   <img src={item.image} alt={item.role} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
