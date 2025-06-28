
const GallerySection = () => {
  // Placeholder images for before/after gallery
  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      alt: 'Paintless dent repair Smithfield before and after hail damage'
    },
    {
      before: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      alt: 'Mobile paintless dent repair Smithfield NC door ding removal'
    },
    {
      before: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      after: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop',
      alt: 'NC Paintless Dent Repair luxury vehicle dent removal before after'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            See the Difference
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
          <p className="text-lg text-brand-light-gray">
            Real results from NC Paintless Dent Repair customers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img 
                    src={item.before} 
                    alt={`Before ${item.alt}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-semibold rounded">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={item.after} 
                    alt={`After ${item.alt}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-brand-green text-white px-2 py-1 text-sm font-semibold rounded">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
