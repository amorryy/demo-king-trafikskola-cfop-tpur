import ServiceCard from '../../components/ServiceCard'
import { Users, Shield, Clock, Check, Car } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Våra Tjänster
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Vi erbjuder komplett körkortsutbildning och handledarutbildning i Stockholm
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Körkort B (Personbil)</h3>
              <p className="text-gray-600 mb-6">Komplett utbildning för personbilskörkort med både teori och praktisk körning. Vi guidar dig genom hela processen från start till mål.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Teoriutbildning med digitala hjälpmedel
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Praktisk körning i moderna bilar
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Flexibla tider som passar dig
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Erfarna och certifierade instruktörer
                </li>
              </ul>
              <Link href="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                Läs mer
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Handledarutbildning</h3>
              <p className="text-gray-600 mb-6">Introduktionsutbildning som sedan 2006 är ett krav för privat övningskörning. Kursen hålls på fredagar kl 16:00.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Obligatorisk kurs för privat övningskörning
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Kurser varje fredag kl 16:00
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Certifikat som gäller i hela Sverige
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Praktisk information för handledare
                </li>
              </ul>
              <Link href="/kontakt" className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors duration-200">
                Boka kurs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ytterligare Tjänster</h2>
            <p className="text-xl text-gray-600">Vi erbjuder även specialiserade kurser och tjänster</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Återuppfriskningskurs"
              description="För dig som inte kört på länge och vill känna dig säker bakom ratten igen"
              icon={<Shield className="h-8 w-8" />}
            />
            
            <ServiceCard 
              title="Intensivkurs"
              description="Snabbare väg till körkort för dig som vill genomföra utbildningen på kortare tid"
              icon={<Clock className="h-8 w-8" />}
            />
            
            <ServiceCard 
              title="Förarutbildning"
              description="Kompetensutveckling för yrkesförare och företag som vill öka trafiksäkerheten"
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparenta Priser</h2>
          <p className="text-xl text-gray-600 mb-8">
            Vi erbjuder konkurrenskraftiga priser utan dolda kostnader. Kontakta oss för en personlig prisuppgift som passar dina behov.
          </p>
          
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Viktig information om avbokningar</h3>
            <p className="text-gray-600">
              "Avbokningar skall ske senast en arbetsdag innan kl 12."
            </p>
          </div>
          
          <Link href="/kontakt" className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Begär prisuppgift
          </Link>
        </div>
      </section>
    </div>
  )
}