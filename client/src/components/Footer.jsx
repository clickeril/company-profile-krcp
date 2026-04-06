import { Link } from 'react-router-dom';
// Kita konsisten menggunakan Font Awesome (Fa) dan Heroicons (Hi2)
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaArrowRight 
} from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t items-center border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-black tracking-tighter text-white mb-6">
              {/* Perubahan: Building2 jadi HiOutlineBuildingOffice2 */}
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-accent" />
              <span>PT KRCP<span className="text-accent">.</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
              PT Kerta Rahayu Cikal Persada is an integrated corporation operating aggressively in Agriculture, Industry, Construction, Trading, Logistics, Catering, and Real Estate development.
            </p>
            <div className="flex space-x-4">
              {/* Perubahan: Nama komponen disesuaikan dengan Import di atas */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-primary transition-all">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-primary transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-primary transition-all">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-primary transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Inside PT KRCP</Link></li>
              <li><Link to="/leadership" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Board of Directors</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Our Portfolio</Link></li>
              <li><Link to="#" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Contact Hub</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Business Lines</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Agriculture</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Manufacturing</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Real Estate</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">General Trading</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Logistics Center</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 rounded-2xl bg-white/5 border border-white/10 p-6">
             <h4 className="text-white font-bold mb-3 text-lg">Stay Updated</h4>
             <p className="text-slate-400 text-sm mb-6">Subscribe to our corporate newsletter for industry insights and company news.</p>
             <form className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Email Address" className="bg-slate-800 text-white placeholder-slate-500 border border-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:border-accent w-full text-sm" />
                <button type="button" className="bg-accent text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-colors flex items-center justify-center">
                   {/* Perubahan: ArrowRight jadi FaArrowRight */}
                   Subscribe <FaArrowRight className="w-4 h-4 ml-2" />
                </button>
             </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} PT KERTA RAHAYU CIKAL PERSADA. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}