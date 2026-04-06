import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { useRef } from 'react';
import homeData from '../data/home.json';

const getIcon = (iconName) => {
  const IconComponent = Icons[iconName] || Icons.HelpCircle;
  return IconComponent;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(heroScroll, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. ADVANCED HERO PARALLAX SECTION */}
      <section ref={heroRef} className="relative w-full h-[100vh] flex items-center overflow-hidden bg-slate-900">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
          <img 
            src={homeData.hero.bgImage} 
            alt="Corporate Building" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20">
          <motion.div 
            style={{ opacity: opacityText }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-white text-xs font-semibold tracking-wider uppercase">{homeData.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              {homeData.hero.titleLine1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-amber-200">
                {homeData.hero.titleLine2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              {homeData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="bg-accent hover:bg-accent/90 text-slate-900 font-bold py-4 px-8 rounded-full transition-all hover:scale-105 flex items-center justify-center shadow-lg shadow-accent/20">
                Discover Our Enterprise <Icons.ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium py-4 px-8 rounded-full transition-all flex items-center justify-center">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/50"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
             <motion.div 
                className="w-full h-1/2 bg-accent absolute top-0"
                animate={{ y: ["0%", "200%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "circInOut" }}
             />
          </div>
        </motion.div>
      </section>

      {/* 2. LIVE METRICS & STATS SECTION */}
      <section className="relative -mt-16 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
           {homeData.stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left flex-1"
              >
                 <h4 className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">{stat.value}</h4>
                 <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                 {i !== homeData.stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-200"></div>}
              </motion.div>
           ))}
        </div>
      </section>

      {/* 3. CORPORATE OVERVIEW */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="lg:w-1/2">
              <div className="flex items-center space-x-3 mb-6">
                 <div className="w-12 h-[2px] bg-accent"></div>
                 <h2 className="text-sm font-bold tracking-widest text-accent uppercase">{homeData.overview.badge}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.15]">
                {homeData.overview.title}
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {homeData.overview.description}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8 mt-10">
                 {homeData.overview.features.map((feature, i) => {
                    const FeatureIcon = getIcon(feature.icon);
                    return (
                        <div key={i} className="flex items-start space-x-4">
                            <div className="bg-white p-3 rounded-xl shadow-sm"><FeatureIcon className="w-6 h-6 text-primary" /></div>
                            <div>
                            <h5 className="font-bold text-slate-900">{feature.title}</h5>
                            <p className="text-sm text-slate-500">{feature.desc}</p>
                            </div>
                        </div>
                    );
                 })}
              </div>
              <Link to="/about" className="inline-flex items-center bg-primary hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-full transition-colors group">
                Read Corporate Profile 
                <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                 <img src={homeData.overview.images[0]} alt="Corporate Team" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
                 <img src={homeData.overview.images[1]} alt="Modern Office" className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center">
                 <div className="bg-accent/20 text-accent p-4 rounded-full mb-3"><Icons.BarChart3 className="w-8 h-8" /></div>
                 <span className="font-bold text-slate-900 text-lg">Sustainable</span>
                 <span className="text-sm text-slate-500 font-medium tracking-wide">Growth Strategy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS SECTORS SECTION - DETAILED CARDS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-4">
                 <div className="w-12 h-[2px] bg-accent"></div>
                 <h2 className="text-sm font-bold tracking-widest text-accent uppercase">{homeData.services.badge}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">{homeData.services.title}</h3>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
               <Link to="/services" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                 View All Sectors <Icons.ChevronRight className="ml-1 w-5 h-5" />
               </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {homeData.services.list.map((service, i) => {
              const ServiceIcon = getIcon(service.icon);
              return (
                <motion.div key={i} variants={fadeUp} className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                    <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                    </div>
                    <div className="p-8 relative">
                    <div className="absolute -top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-colors border border-slate-100 z-20">
                        <ServiceIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors pr-10">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                    <Link to="/services" className="inline-flex items-center text-sm font-bold text-slate-400 group-hover:text-accent transition-colors">
                        Learn more <Icons.ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                    </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / VALUE PROPOSITION */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20 transform translate-x-1/3 -translate-y-1/2"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">{homeData.values.badge}</h2>
               <h3 className="text-3xl md:text-5xl font-extrabold mb-6">{homeData.values.title}</h3>
               <p className="text-slate-400 text-lg">{homeData.values.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
               {homeData.values.list.map((item, i) => {
                 const ValueIcon = getIcon(item.icon);
                 return (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + (i*0.1) }} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
                        <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-accent">
                            <ValueIcon className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                        <p className="text-slate-400 leading-relaxed">{item.text}</p>
                    </motion.div>
                 );
               })}
            </div>
         </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{homeData.cta.title}</h2>
          <p className="text-slate-800 mb-10 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            {homeData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="inline-block bg-slate-900 text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-slate-800 hover:-translate-y-1 shadow-xl shadow-slate-900/20 text-lg">
               Contact Our Experts
             </Link>
             <Link to="/portfolio" className="inline-block bg-transparent text-slate-900 border-2 border-slate-900 font-bold py-4 px-10 rounded-full transition-all hover:bg-slate-900 hover:text-white text-lg">
               Explore Portfolio
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
