import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-us-final.avif";

const About = () => {
  const textRef = useFadeIn(200);
  const imageRef = useFadeIn(400);

  return (
    <section id="about" className="py-20 lg:py-0 lg:h-[70vh]" style={{backgroundColor: 'rgba(31,31,31,255)'}}>
      {/* Mobile layout */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 items-center">
            <div ref={textRef} className="text-left">
              <p className="text-red-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">
                ABOUT US
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight tracking-tight">
                PREMIUM CUSTOMS<br />
                ELEVATE YOUR RIDE
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Professional automotive customization shop offering comprehensive detailing, vinyl wrap, PPF, ceramic coating, powder coating, and chrome delete services. Transform your vehicle with our expert craftsmanship and premium materials.
              </p>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 h-11 rounded-md text-sm transition-all duration-300">
                LEARN MORE
              </Button>
            </div>
            
            <div ref={imageRef} className="flex justify-center">
              <div className="relative">
                <img 
                  src={aboutImage} 
                  alt="Professional Car Detailing" 
                  className="w-full max-w-lg h-auto object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - side by side with no right padding */}
      <div className="hidden lg:flex lg:h-full">
        {/* Left side - Text content */}
        <div className="flex-none" style={{width: '50%'}}>
          <div ref={textRef} className="h-full flex flex-col justify-center px-8">
            <p className="text-red-500 font-semibold mb-4 tracking-wider uppercase text-sm">
              ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              PREMIUM CUSTOMS<br />
              AUTOMOTIVE CUSTOMIZATION SPECIALIST
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are an automotive customization shop specializing in detailing, vinyl wrap, PPF, ceramic coating, powder coating, and chrome delete. Our skilled and certified technicians provide friendly service and use premium materials to transform your vehicle. Call 832-714-7480 for any questions!
            </p>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-6 h-11 rounded-md text-sm transition-all duration-300 w-fit">
              LEARN MORE
            </Button>
          </div>
        </div>
        
        {/* Right side - Full coverage image extending to edge */}
        <div className="flex-1 h-full">
          <div ref={imageRef} className="h-full">
            <img 
              src={aboutImage} 
              alt="Professional Car Detailing" 
              className="w-full h-full"
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;