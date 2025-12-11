import { Users, Shield, Clock, Star, Award, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Om King Trafikskola
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Vi har varit Stockholms pålitliga val för körkortsutbildning i många år. Vår mission är att skapa säkra och kompetenta förare genom kvalitetsutbildning.
              </p>
              <Link href="/kontakt" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Kontakta oss
              </Link>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-blue-100">Nöjda elever</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-blue-100">Godkänt första gången</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <div className="text-blue-100">År i branschen</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">5★</div>
                    <div className="text-blue-100">Medelbetyg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Vår Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                King Trafikskola grundades med visionen att erbjuda högkvalitativ körkortsutbildning i Stockholm. Vi har vuxit från en liten lokal trafikskola till en av Stockholms mest respekterade utbildningspartners.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Sedan 2006 har vi följt regelverket för handledarutbildning och hjälpt tusentals familjer att genomföra privat övningskörning på ett säkert sätt.
              </p>
              <p className="text-lg text-gray-600">
                Vår framgång bygger på engagerade instruktörer, moderna metoder och ett genuint intresse för varje elevs framsteg.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Våra Värderingar</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Säkerhet först</h4>
                    <p className="text-gray-600">Trafiksäkerhet är vår högsta prioritet i all utbildning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Individuell fokus</h4>
                    <p className="text-gray-600">Varje elev får personlig uppmärksamhet och anpassad utbildning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kvalitet</h4>
                    <p className="text-gray-600">Kontinuerlig utveckling för att erbjuda bästa möjliga utbildning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vårt Kontor</h2>
            <p className="text-xl text-gray-600">Centralt beläget i Stockholm för din bekvämlighet</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Besök oss</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adress</h4>
                  <p className="text-gray-600">Bredängstorget 5, 127 34 Skärholmen</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a href="tel:08-603 85 85" className="text-blue-600 hover:text-blue-700">08-603 85 85</a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Handledarutbildning</h4>
                  <p className="text-gray-600">Fredagar kl 16:00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Kontakta oss idag</h3>
              <p className="mb-6">Har du frågor om våra kurser eller vill boka en tid? Vi hjälper dig gärna!</p>
              <div className="space-y-4">
                <Link href="/kontakt" className="block w-full bg-white text-blue-600 px-6 py-3 rounded-full text-center font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Kontaktformulär
                </Link>
                <a href="tel:08-603 85 85" className="block w-full border-2 border-white text-white px-6 py-3 rounded-full text-center font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Ring direkt
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vårt Team</h2>
            <p className="text-xl text-gray-600">Professionella instruktörer med passion för trafiksäkerhet</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 text-center">
            <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Erfarna Instruktörer</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Våra instruktörer är certifierade och har omfattande erfarenhet av körkortsutbildning. De genomgår regelbunden vidareutbildning för att hålla sig uppdaterade med de senaste metoderna och regelverken.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Certifierade</div>
                <p className="text-gray-600">Alla våra instruktörer är godkända av Transportstyrelsen</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Erfarna</div>
                <p className="text-gray-600">Genomsnittlig erfarenhet på över 10 år</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Engagerade</div>
                <p className="text-gray-600">Brinner för att skapa säkra förare</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}