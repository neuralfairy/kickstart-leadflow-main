import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';

const Hero = () => {
  const features = [
    "Qualified B2B leads in 24 hours",
    "95% data accuracy guarantee", 
    "CRM integration included"
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "B2B Leads Generated" },
    { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
    { icon: Target, value: "85%", label: "Conversion Rate" }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 text-white mb-6 animate-fade-in">
              <span className="text-sm font-medium">#1 B2B Lead Generation Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Generate High-Quality
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                B2B Leads
              </span>
              That Convert
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in">
              Accelerate your sales pipeline with our advanced lead generation tools. 
              Get targeted, qualified prospects ready to buy your products or services.
            </p>

            {/* Feature List */}
            <div className="space-y-3 mb-8 animate-fade-in">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-glow" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button 
                size="xl" 
                variant="hero" 
                className="shadow-2xl"
                onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="xl" 
                variant="outline-primary" 
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/demo', '_blank')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 animate-fade-in">
              <p className="text-white/70 text-sm mb-4">Trusted by 500+ B2B companies</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="text-white font-semibold">Microsoft</div>
                <div className="text-white font-semibold">Salesforce</div>
                <div className="text-white font-semibold">HubSpot</div>
                <div className="text-white font-semibold">Slack</div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary-glow" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;