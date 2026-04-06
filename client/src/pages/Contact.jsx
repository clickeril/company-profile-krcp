import { motion } from 'framer-motion';
import contactData from '../data/contact.json';

export default function Contact() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{contactData.header.title}</h1>
          <p className="text-xl text-slate-600">{contactData.header.description}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-slate-50 p-10 rounded-3xl border border-slate-100">
          <div>
             <h3 className="text-2xl font-bold text-primary mb-6">Head Office</h3>
             <p className="text-slate-600 mb-2"><strong>{contactData.info.company}</strong></p>
             <p className="text-slate-600 mb-6">{contactData.info.address}</p>

             <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
             <p className="text-slate-600 mb-6">{contactData.info.email}</p>

             <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
             <p className="text-slate-600">{contactData.info.phone}</p>
             
          </div>

          <div>
             <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-accent focus:ring-accent p-3 border" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-accent focus:ring-accent p-3 border" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-accent focus:ring-accent p-3 border" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
