
const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-white mb-6">
            Why Choose NC Paintless Dent Repair?
          </h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl text-brand-light-gray leading-relaxed text-center">
            We're a fully mobile dent repair service serving Smithfield, Raleigh, and nearby cities. 
            From hail damage to luxury vehicles, we bring expert results without body shop delays. 
            NC Paintless Dent Repair combines cutting-edge techniques with personalized service, 
            ensuring your vehicle looks perfect again — all at your convenience.
          </p>
          
          <div className="mt-10 text-center">
            <p className="text-brand-light-gray font-medium">
              <span className="text-brand-green font-semibold">Service Areas:</span> 
              {' '}Smithfield, Raleigh, Cary, Clayton, Durham, Garner, Goldsboro, Fayetteville, Apex, Benson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
