
import { Phone, Mail, MapPin, CheckCircle, Award, Wrench } from 'lucide-react';

const Footer = () => {
  const serviceAreas = [
    'Smithfield', 'Raleigh', 'Cary', 'Clayton', 'Durham', 
    'Garner', 'Goldsboro', 'Fayetteville', 'Apex', 'Benson'
  ];

  return (
    <footer className="bg-brand-dark-green text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              NC Paintless Dent Repair
            </h3>
            <p className="text-gray-300 mb-6">
              Professional mobile paintless dent repair serving North Carolina. 
              We bring expert dent removal directly to your location.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green" />
                <span>(919) 555-DENT</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green" />
                <span>info@ncpaintlessdent.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-green" />
                <span>Serving all of Wake & Johnston Counties</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-gray-300">
              {serviceAreas.map((area, index) => (
                <li key={index} className="hover:text-brand-green transition-colors">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#quote" className="hover:text-brand-green transition-colors">Get Quote</a></li>
              <li><a href="#services" className="hover:text-brand-green transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-green transition-colors">Before & After</a></li>
              <li><a href="#hiring" className="hover:text-brand-green transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-brand-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-green" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-green" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-brand-green" />
              <span>Locally Owned</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 border-t border-gray-700 pt-8">
          <p>&copy; 2024 NC Paintless Dent Repair. All rights reserved.</p>
          <p className="text-sm mt-2">
            Professional mobile paintless dent repair in Smithfield, NC and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
