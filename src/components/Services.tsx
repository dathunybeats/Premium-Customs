import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useFadeIn, usePopUpAnimation } from "@/hooks/useScrollAnimation";
import serviceBayImage from "@/assets/service-bay.jpg";
import detailingImage from "@/assets/detailing-process.jpg";
import diagnosticsImage from "@/assets/diagnostics.jpg";
import heroImage from "@/assets/hero-car.jpg";
import rootImg1 from "@/../448862467_795696592704901_3273269336755050533_n.jpg";
import rootImg2 from "@/../456699078_496824373209091_6259366427592540416_n.jpg";
import rootImg3 from "@/../479893191_18056512079488341_6843233752688514097_n.jpeg";
import rootImg4 from "@/../528696091_18074988686488341_5236087420551395233_n.jpeg";
import serviceCar1 from "@/assets/service-car1.jpg";
import serviceCar2 from "@/assets/service-car2.jpg";
import serviceCleAmg from "@/assets/service-cle-amg.jpg";
import serviceMercedesGt from "@/assets/service-mercedes-gt.jpg";

const services = [
  {
    title: "VINYL WRAP",
    description: "Premium vinyl wrapping for complete vehicle transformation",
    image: rootImg1,
    badge: "POPULAR",
    badgeColor: "bg-blue-500"
  },
  {
    title: "WINDOW TINT",
    description: "Professional window tinting for privacy and UV protection",
    image: rootImg2,
    objectPosition: '50% 80%',
    badge: "PREMIUM",
    badgeColor: "bg-blue-500"
  },
  {
    title: "HEADLIGHT TINT",
    description: "Custom headlight and taillight tinting services",
    image: rootImg3,
    objectPosition: '50% 80%',
    badge: "SPECIALIST",
    badgeColor: "bg-blue-500"
  },
  {
    title: "CHROME DELETE",
    description: "Sleek chrome delete packages for a modern look",
    image: rootImg4,
    objectPosition: '50% 80%',
    badge: "TRENDING",
    badgeColor: "bg-blue-500"
  },
  {
    title: "CUSTOM GRAPHICS",
    description: "Personalized graphics and decal installation",
    image: serviceCar1,
    badge: null,
    badgeColor: null
  },
  {
    title: "PAINT PROTECTION",
    description: "Clear protective films for paint preservation",
    image: serviceCar2,
    badge: null,
    badgeColor: null
  }
];

const Services = () => {
  const headerRef = useFadeIn<HTMLDivElement>();
  
  // Create refs for each row with staggered pop-up animations (desktop)
  const row1Ref = usePopUpAnimation<HTMLDivElement>(200);
  const row2Ref = usePopUpAnimation<HTMLDivElement>(400);
  const row3Ref = usePopUpAnimation<HTMLDivElement>(600);

  // Create refs for individual cards (mobile)
  const card1Ref = usePopUpAnimation<HTMLDivElement>(100);
  const card2Ref = usePopUpAnimation<HTMLDivElement>(200);
  const card3Ref = usePopUpAnimation<HTMLDivElement>(300);
  const card4Ref = usePopUpAnimation<HTMLDivElement>(400);
  const card5Ref = usePopUpAnimation<HTMLDivElement>(500);
  const card6Ref = usePopUpAnimation<HTMLDivElement>(600);

  // Group services into rows of 2
  const serviceRows = [
    services.slice(0, 2),
    services.slice(2, 4),
    services.slice(4, 6)
  ];

  const rowRefs = [row1Ref, row2Ref, row3Ref];
  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-left mb-16">
          <p className="text-blue-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-black tracking-tight">
            <span className="md:hidden">AUTOMOTIVE CUSTOMIZATION<br />SERVICES</span>
            <span className="hidden md:inline">AUTOMOTIVE CUSTOMIZATION SERVICES</span>
          </h2>
        </div>
        
        {/* Desktop version - animate by rows */}
        <div className="hidden md:block space-y-6">
          {serviceRows.map((row, rowIndex) => (
            <div key={rowIndex} ref={rowRefs[rowIndex]} className="grid md:grid-cols-2 gap-6">
              {row.map((service, index) => (
                <Card key={index} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group rounded-xl">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: (service as any).objectPosition || '50% 50%' }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* Badge */}
                    {service.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge className={`${service.badgeColor} text-white font-semibold px-2.5 py-1 text-[10px] tracking-wide`}>
                          {service.badge}
                        </Badge>
                      </div>
                    )}
                    
                    {/* Service Title - Expandable on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:pb-6 pb-2 group-hover:pt-6 pt-4">
                      <div className="px-6">
                        <h3 className="text-white font-semibold text-xl tracking-wide mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile version - animate individual cards */}
        <div className="md:hidden space-y-4">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} ref={cardRefs[index]}>
              <Card className="bg-white border-gray-200 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 overflow-hidden group rounded-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: (service as any).objectPosition || '50% 50%' }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-red-500 text-white font-semibold px-2 py-1 text-[10px] tracking-wide">
                        {service.badge}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Service Title - Reduced padding */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md py-3">
                    <div className="px-4">
                      <h3 className="text-white font-semibold text-lg tracking-wide mb-0">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;