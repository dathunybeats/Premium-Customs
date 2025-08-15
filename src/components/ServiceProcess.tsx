import { Calendar, Settings, CheckCircle, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    id: "01",
    title: "BOOK AN APPOINTMENT", 
    description: "Contact us via phone at 832-714-7480 or email to schedule your service. We'll work around your schedule and provide professional automotive customization services.",
    icon: Calendar
  },
  {
    id: "02", 
    title: "CHOOSE YOUR SERVICE",
    description: "Select from our range of services including detailing, vinyl wrap, PPF, ceramic coating, powder coating, and chrome delete packages.",
    icon: Settings
  },
  {
    id: "03",
    title: "EXPERT SERVICE", 
    description: "Our professional team provides expert automotive customization services with premium materials and equipment. Quality craftsmanship for all your vehicle needs.",
    icon: CheckCircle
  },
  {
    id: "04",
    title: "ENJOY THE RESULTS",
    description: "Your vehicle receives professional customization treatment with stunning results. Transform your ride with our premium automotive services.", 
    icon: Car
  }
];

const ServiceProcess = () => {
  return (
    <section id="process" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wider uppercase">
            YOUR AUTOMOTIVE CUSTOMIZATION EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ELEVATE YOUR RIDE<br />
            WITH OUR<br />
            <span className="text-primary">PROCESS</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={step.id} className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.id}
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;