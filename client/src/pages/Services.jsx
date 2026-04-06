import { motion } from 'framer-motion';
import servicesData from '../data/services.json';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-slate-900 py-24 relative overflow-hidden">
                <div 
                   className="absolute inset-0 opacity-20 bg-cover bg-center" 
                   style={{ backgroundImage: `url(${servicesData.header.bgImage})` }} 
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                    {servicesData.header.title}
                </motion.h1>
                <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-xl text-slate-300 max-w-2xl mx-auto">
                    {servicesData.header.description}
                </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.sectors.map((item, i) => (
                        <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} transition={{delay: i * 0.1}} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all group overflow-hidden relative">
                            <span className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50 opacity-50 group-hover:text-primary/5 transition-colors z-0 select-none">{item.num}</span>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all group-hover:w-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
  );
}
