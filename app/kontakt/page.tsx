import ContactForm from '../../components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kontakta Oss
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Har du frågor om våra kurser eller vill boka en tid? Vi hjälper dig gärna!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Kontaktuppgifter</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:08-603 85 85" className="text-blue-600 hover:text-blue-700 text-lg">
                      08-603 85 85
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adress</h3>
                    <p className="text-gray-600 text-lg">
                      Bredängstorget 5<br>
                      127 34 Skärholmen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Handledarutbildning</h3>
                    <p className="text-gray-600 text-lg">
                      Fredagar kl 16:00
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Important Info */}
              <div className="mt-10 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Viktigt om avbokningar</h3>
                <p className="text-gray-700">
                  "Avbokningar skall ske senast en arbetsdag innan kl 12."
                </p>
              </div>

              {/* Quick Actions */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Snabba kontaktvägar</h3>
                <div className="space-y-4">
                  <a href="tel:08-603 85 85" className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
                    <Phone className="h-5 w-5 mr-2" />
                    Ring oss direkt
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Skicka meddelande</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Vanliga frågor</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                När hålls handledarutbildningen?
              </h3>
              <p className="text-gray-600">
                Handledarutbildningen (introduktionsutbildning) hålls varje fredag kl 16:00. Detta är ett krav sedan 2006 för alla som ska bedriva privat övningskörning.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Hur bokar jag körkortsutbildning?
              </h3>
              <p className="text-gray-600">
                Du kan boka genom att ringa oss på 08-603 85 85 eller fylla i kontaktformuläret på denna sida. Vi återkommer med information om lediga tider och priser.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vilka regler gäller för avbokningar?
              </h3>
              <p className="text-gray-600">
                Avbokningar ska ske senast en arbetsdag innan kl 12. Detta gäller för alla våra tjänster.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Erbjuder ni utbildning för andra körkortskategorier?
              </h3>
              <p className="text-gray-600">
                Vi fokuserar främst på körkort B (personbil) och handledarutbildning. Kontakta oss för information om andra kategorier eller specialkurser.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}