import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ];

  const resources = [
    { name: 'Case Studies', url: 'https://salescentri.com/resources/case-studies' },
    { name: 'Whitepapers', url: 'https://salescentri.com/resources/whitepapers-ebooks' },
    { name: 'API Documentation', url: 'https://salescentri.com/docs/api-reference' },
    { name: 'User Guide', url: 'https://salescentri.com/docs/user-guide' },
    { name: 'Tutorials', url: 'https://salescentri.com/resources/tutorials-webinars' }
  ];

  const solutions = [
    { name: 'Lead Generation', url: 'https://salescentri.com/platforms/lead-management/lead-generation' },
    { name: 'Data Enrichment', url: 'https://salescentri.com/services/data-enrichment' },
    { name: 'SDR Service', url: 'https://salescentri.com/services/sdr-service' },
    { name: 'Voice AI Agent', url: 'https://salescentri.com/platforms/lead-management/voice-ai-agent' },
    { name: 'PSA Suite', url: 'https://salescentri.com/solutions/psa-suite' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold">Kickitmarketing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate high-quality, targeted B2B leads using advanced tools and proven strategies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Seattle, WA</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>hello@kickitmarketing.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a 
                    href={solution.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.slice(0, 3).map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              variant="cta" 
              size="sm" 
              className="w-full mb-4"
              onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
            >
              Start Free Trial
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <p>&copy; 2024 Kickitmarketing Solutions. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          {/* Strategic Backlink */}
          <div className="text-sm text-muted-foreground">
            <a 
              href="https://salescentri.com?utm_source=KickItMarketing.com&utm_medium=footer&utm_campaign=partner_network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;