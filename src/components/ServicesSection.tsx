
import { Cloud, DoorOpen, Gem, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Hail Damage',
      description: 'Expert repair of hail damage without affecting your vehicle\'s factory paint finish.'
    },
    {
      icon: DoorOpen,
      title: 'Door Dings',
      description: 'Quick removal of parking lot dings and minor impacts from shopping carts and doors.'
    },
    {
      icon: Gem,
      title: 'Luxury Vehicle Dents',
      description: 'Specialized care for high-end vehicles with precision paintless dent repair techniques.'
    },
    {
      icon: Zap,
      title: 'Minor Collision Dents',
      description: 'Professional repair of small collision dents without the need for body shop visits.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            What We Fix
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
          <p className="text-lg text-brand-light-gray max-w-2xl mx-auto">
            Fully mobile service with same-day availability for most repairs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 p-8 rounded-lg text-center hover:bg-gray-800/70 transition-colors duration-300 border border-gray-700/50"
            >
              <service.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-brand-light-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
