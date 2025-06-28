
import { Button } from '@/components/ui/button';
import { Users, Clock, DollarSign } from 'lucide-react';

const HiringSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Top Pay',
      description: 'Competitive compensation packages'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance that works for you'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Join our local, supportive crew'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            Join Our Crew
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
          <p className="text-lg text-brand-light-gray max-w-3xl mx-auto">
            We're looking for motivated mobile dent technicians to join NC Paintless Dent Repair. 
            Be part of a growing business that values quality work and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-brand-light-gray">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-montserrat font-semibold px-8 py-4"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
