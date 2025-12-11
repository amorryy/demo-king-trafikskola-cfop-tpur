import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { Clock, Users, Shield, Star, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Varför välja King Trafikskola?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi har hjälpt tusentals elever att få sitt körkort sedan vårt start. Med erfarna instruktörer och moderna bilar gör vi din körkortsresa trygg och effektiv.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Erfarna Instruktörer</h3>
              <p className="text-gray-600">Våra certifierade instruktörer har många års erfarenhet och hjälper dig att bli en säker förare.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Moderna Bilar</h3>
              <p className="text-gray-600">Vi använder moderna, säkra bilar med dubbla pedaler för en trygg körupplevelse.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexibla Tider</h3>
              <p className="text-gray-600">Vi anpassar oss efter dina behov med flexibla tider för körning och teori.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Våra Tjänster</h2>
            <p className="text-xl text-gray-600">Vi erbjuder fullständig körkortsutbildning för olika kategorier</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ServiceCard 
              title="Körkort B (Personbil)"
              description="Komplett utbildning för personbilskörkort med teori och praktisk körning"
              icon={<Shield className="h-8 w-8" />}
            />
            
            <ServiceCard 
              title="Handledarutbildning"
              description="Introduktionsutbildning för privat övningskörning - krav sedan 2006"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
          
          <div className="text-center">
            <Link href="/tjanster" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Se alla tjänster
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vad våra elever säger</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Fantastisk trafikskola! Instruktörerna var tålmodiga och professionella. Klarade teorin och praktiken på första försöket."</p>
              <div className="font-semibold text-gray-900">- Anna L.</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Rekommenderar King Trafikskola varmt! Bra priser och flexibla tider. Fick mitt körkort snabbt och enkelt."</p>
              <div className="font-semibold text-gray-900">- Marcus S.</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Professionell service från start till mål. Handledarutbildningen var mycket bra och informativ."</p>
              <div className="font-semibold text-gray-900">- Sara K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Redo att börja din körkortsresa?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Kontakta oss idag för mer information om våra kurser och priser
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Kontakta oss
            </Link>
            <a href="tel:08-603 85 85" className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              <Clock className="mr-2 h-5 w-5" />
              Ring nu
            </a>
          </div>
        </div>
      </section>
    </>
  )
}