import Link from 'next/link';
import { ArrowRight, Phone, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Ta Körkort med
              <span className="block text-amber-300">King Trafikskola</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stockholm mest pålitliga trafikskola. Vi erbjuder körkortsutbildning och handledarutbildning med erfarna instruktörer och moderna bilar.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center bg-amber-500 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-400 transition-colors duration-200 shadow-lg"
              >
                Boka Provkörning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:08-603 85 85" 
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                08-603 85 85
              </a>
            </div>
            
            {/* Quick Info */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="text-sm text-blue-100">Certifierade</div>
                <div className="font-semibold">Instruktörer</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="text-sm text-blue-100">Handledarutbildning</div>
                <div className="font-semibold">Fredagar 16:00</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="text-sm text-blue-100">Ring oss</div>
                <div className="font-semibold">08-603 85 85</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="lg:text-right">
            <div className="relative inline-block">
              {/* Background Card */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="bg-amber-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10c-.1-.3-.4-.6-.8-.6H16V7c0-3.3-2.7-6-6-6S4 3.7 4 7v3H2.4c-.4 0-.7.3-.8.6L.1 11.1C-.2 11.3-.4 11.6-.4 12v3c0 .6.4 1 1 1H3v4c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-4zM2 14v-1.5l1-1.5h2V14H2zm4 0v-3h12v3H6zm14 0v-3h2l1 1.5V14h-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Starta din körkortsresa idag!</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Gratis konsultation
                    </div>
                    <div className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Flexibla tider
                    </div>
                    <div className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Moderna bilar
                    </div>
                    <div className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      95% godkänt första försöket
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}