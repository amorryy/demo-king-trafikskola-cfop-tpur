import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
                alt="King Trafikskola"
                width={200}
                height={60}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Din pålitliga partner för körkortsutbildning i Stockholm. Vi skapar säkra förare genom kvalitetsutbildning.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:08-603 85 85" className="text-gray-300 hover:text-white transition-colors">
                  08-603 85 85
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <div className="text-gray-300">
                  <div>Bredängstorget 5</div>
                  <div>127 34 Skärholmen</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-400" />
                <div className="text-gray-300">
                  <div>Handledarutbildning:</div>
                  <div>Fredagar kl 16:00</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Hem
              </Link>
              <Link href="/tjanster" className="block text-gray-300 hover:text-white transition-colors">
                Tjänster
              </Link>
              <Link href="/om-oss" className="block text-gray-300 hover:text-white transition-colors">
                Om oss
              </Link>
              <Link href="/kontakt" className="block text-gray-300 hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Våra Tjänster</h3>
            <div className="space-y-2 text-gray-300">
              <div>Körkort B (Personbil)</div>
              <div>Handledarutbildning</div>
              <div>Återuppfriskningskurs</div>
              <div>Intensivkurs</div>
            </div>
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2 text-amber-400">Viktigt om avbokningar</h4>
            <p className="text-gray-300 text-sm">
              "Avbokningar skall ske senast en arbetsdag innan kl 12."
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} King Trafikskola. Alla rättigheter förbehållna.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Skapad av <span className="text-blue-400 font-semibold">Noory Solution</span>
          </p>
        </div>
      </div>
    </footer>
  );
}