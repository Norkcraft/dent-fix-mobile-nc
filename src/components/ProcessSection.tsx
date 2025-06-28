
import { Upload, MessageCircle, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProcessSection = () => {
  const steps = [
    {
      icon: Upload,
      number: '1',
      title: 'Upload a Photo',
      description: 'Take a quick photo of the damage and send it to us for an instant assessment.'
    },
    {
      icon: MessageCircle,
      number: '2',
      title: 'Get a Fast Quote',
      description: 'Receive your personalized quote within minutes via text or email.'
    },
    {
      icon: Wrench,
      number: '3',
      title: 'We Come to You',
      description: 'Our mobile technician arrives at your location and fixes the dent in under an hour.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
          <p className="text-lg text-brand-light-gray">
            Simple, fast, and convenient mobile paintless dent repair in Smithfield, NC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-brand-dark rounded-full flex items-center justify-center font-montserrat font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-brand-light-gray">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-green-600 text-white font-montserrat font-semibold px-8 py-4"
          >
            Send a Photo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
