import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Target, Zap, Shield, TrendingUp, Users, Star } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered lead scoring identifies your ideal prospects with 95% accuracy."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate qualified leads in 24 hours, not weeks."
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "100% compliant data sourcing with privacy protection built-in."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      content: "Kickitmarketing increased our lead quality by 300% and reduced our sales cycle by 45%.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Marketing Director, GrowthCo",
      content: "The ROI has been incredible. We've closed $2M in new business from their leads.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "CEO, StartupXYZ",
      content: "Best lead generation partner we've ever worked with. Highly recommended!",
      rating: 5
    }
  ];

  const processSteps = [
    { step: "01", title: "Target Analysis", description: "We analyze your ideal customer profile and identify key prospects." },
    { step: "02", title: "Data Enrichment", description: "Our AI enriches prospect data with verified contact information." },
    { step: "03", title: "Lead Qualification", description: "Every lead is qualified and scored before delivery." },
    { step: "04", title: "CRM Integration", description: "Seamlessly sync qualified leads directly to your CRM system." }
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Kickitmarketing?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced lead generation technology combined with proven sales strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From prospect identification to CRM integration - we handle it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-6 -right-4 h-6 w-6 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of companies growing with our lead generation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Sales?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start generating high-quality B2B leads today. No setup fees, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="xl" 
              variant="outline-primary" 
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
