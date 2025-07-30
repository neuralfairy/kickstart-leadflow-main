import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Calendar,
  ArrowRight,
  Users,
  Headphones,
  FileText
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Demo",
      description: "See our platform in action with a personalized demonstration",
      action: "Schedule Demo",
      link: "https://salescentri.com/get-started/book-demo",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions from our support team",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat",
      color: "secondary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our lead generation experts",
      action: "Call Now",
      link: "https://salescentri.com/contact/sales-inquiry",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions and we'll respond within 24 hours",
      action: "Send Email",
      link: "https://salescentri.com/contact/support-request",
      color: "secondary"
    }
  ];

  const offices = [
    {
      city: "Seattle, WA",
      address: "1201 3rd Avenue, Suite 3200",
      zipCode: "Seattle, WA 98101",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      primary: true
    },
    {
      city: "San Francisco, CA",
      address: "101 California Street, Suite 2450",
      zipCode: "San Francisco, CA 94111",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      primary: false
    },
    {
      city: "New York, NY",
      address: "1 World Trade Center, Suite 8500",
      zipCode: "New York, NY 10007",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      primary: false
    }
  ];

  const supportOptions = [
    {
      icon: Users,
      title: "Sales Inquiry",
      description: "Questions about our services and pricing",
      link: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with our platform and integrations",
      link: "https://salescentri.com/contact/support-request"
    },
    {
      icon: FileText,
      title: "Partnership Opportunities",
      description: "Explore partnership and integration opportunities",
      link: "https://salescentri.com/contact/partnerships"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
            <span className="block text-primary-glow">Let's Talk</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our lead generation experts are here to help you accelerate your sales pipeline. 
            Choose the best way to connect with us.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant={method.color === "primary" ? "cta" : "outline-primary"}
                    className="w-full"
                    onClick={() => window.open(method.link, '_blank')}
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us at one of our locations across the United States
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`hover:shadow-glow transition-all duration-300 ${office.primary ? 'border-primary' : ''}`}>
                {office.primary && (
                  <div className="bg-gradient-primary text-white text-center py-2 rounded-t-lg">
                    <span className="text-sm font-medium">Headquarters</span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    <p className="text-sm text-muted-foreground">{office.zipCode}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Support
            </h2>
            <p className="text-xl text-muted-foreground">
              Get the right help for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline-primary"
                    className="w-full"
                    onClick={() => window.open(option.link, '_blank')}
                  >
                    Get Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out our comprehensive FAQ section or browse our resource library for answers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="cta"
                onClick={() => window.location.href = '/faq'}
              >
                View FAQ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline-primary"
                onClick={() => window.open('https://salescentri.com/resources/case-studies', '_blank')}
              >
                Resource Library
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl">24/7 Emergency Support</CardTitle>
              <CardDescription className="text-white/90">
                For critical issues affecting your lead generation campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">(555) 911-LEAD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>emergency@kickitmarketing.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Generating Leads?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait - start your free trial today and see how we can transform your sales pipeline.
          </p>
          <Button 
            size="xl" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;