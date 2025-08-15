import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-top border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-primary mb-4 tracking-tight">UNIQUE CUSTOMZ HTX</h3>
            <p className="text-muted-foreground mb-4">Houston's premier automotive customization shop. Transform your ride with professional customization services.</p>
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
              <li>Vinyl Wrap</li>
              <li>Window Tinting</li>
              <li>Headlight/Taillight Tint</li>
              <li>Chrome Delete</li>
              <li>Custom Graphics</li>
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
                <span>+1 832-758-0721</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>uniquecustomzhouston@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>5335 E 5th St. Unit 523, Houston, TX</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Unique Customz HTX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;