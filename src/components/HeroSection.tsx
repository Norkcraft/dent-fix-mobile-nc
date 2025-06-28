
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Car } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-brand-dark via-brand-dark to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
            Mobile Paintless Dent Repair in{' '}
            <span className="text-brand-green">Smithfield, NC</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-brand-light-gray mb-8 max-w-3xl mx-auto">
            We fix dents fast — at your home or office. No paint. No hassle.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-brand-light-gray">
              <CheckCircle className="w-5 h-5 text-brand-green" />
              <span className="font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 text-brand-light-gray">
              <Shield className="w-5 h-5 text-brand-green" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-brand-light-gray">
              <Car className="w-5 h-5 text-brand-green" />
              <span className="font-medium">100+ Cars Fixed</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-green-600 text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              Get a Free Quote
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-montserrat font-semibold px-8 py-4 text-lg"
            >
              We're Hiring – Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
