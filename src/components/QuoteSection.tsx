
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    damage: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            Request a Free Quote
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
          <p className="text-lg text-brand-light-gray">
            Get your mobile paintless dent repair quote in minutes
          </p>
        </div>

        <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white mb-2 block">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="damage" className="text-white mb-2 block">
                Describe the Damage
              </Label>
              <Textarea
                id="damage"
                name="damage"
                rows={4}
                placeholder="Tell us about the dent size, location, and how it happened..."
                value={formData.damage}
                onChange={handleChange}
                className="bg-gray-700/50 border-gray-600 text-white"
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit"
                size="lg" 
                className="bg-brand-green hover:bg-green-600 text-white font-montserrat font-semibold px-12 py-4"
              >
                Get My Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
