import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-top border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">PREMIUM CUSTOMS</h3>
            <p className="text-muted-foreground mb-4">Automotive Customization Shop offering professional detailing, vinyl wrap, PPF, ceramic coating, powder coating, and chrome delete services.</p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Detailing</li>
              <li>Vinyl Wrap</li>
              <li>PPF (Paint Protection Film)</li>
              <li>Ceramic Coating</li>
              <li>Powder Coating</li>
              <li>Chrome Delete</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>832-714-7480</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@premiumcustoms.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>5335 E 5th St. Unit 523, Houston, TX</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Premium Customs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;