import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Calendar, Percent, CheckCircle, Star } from "lucide-react";

const ServicePackages = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-500 font-semibold mb-4 tracking-wider uppercase border-l-4 border-blue-500 pl-4">
              💸 FINANCING AVAILABLE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              FINANCE YOUR<br />
              CUSTOM RIDE<br />
              <span className="text-blue-500">WITH SYNCHRONY</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4" />
                <span className="text-foreground font-medium">Quick & Easy Application</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <DollarSign className="w-6 h-6 text-green-500 mr-4" />
                <span className="text-foreground font-medium">Flexible Payment Plans</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <Calendar className="w-6 h-6 text-green-500 mr-4" />
                <span className="text-foreground font-medium">Up to 60 Months Terms</span>
              </div>
              <div className="flex items-center bg-card/50 p-4 rounded-lg border border-border">
                <Percent className="w-6 h-6 text-green-500 mr-4" />
                <span className="text-foreground font-medium">Competitive Interest Rates</span>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <CreditCard className="w-12 h-12 text-blue-500 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">SYNCHRONY</h3>
                      <p className="text-sm text-muted-foreground">Financing Partner</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Benefits Include:</span>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
                      <li>• No down payment required</li>
                      <li>• Same-day approval available</li>
                      <li>• Online account management</li>
                      <li>• Promotional financing options</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Transform your ride today!</p>
                    <span className="text-lg font-semibold text-foreground">Apply in minutes</span>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Apply for Financing
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Subject to credit approval. Terms and conditions apply.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;