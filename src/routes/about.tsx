import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CheckCircle, Award, MapPin } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      <main className="pt-10">
        <section className="py-20 bg-black">
          <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black mb-6 text-white">À propos de <span className="text-primary">Brainskills</span></h1>
              <p className="text-xl text-white leading-relaxed">
                Notre mission est de préparer la prochaine génération de créateurs, d'inventeurs et de penseurs critiques à Safi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="./nous.jpg"
                  alt="Équipe Brainskills"
                  className=" rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Notre Vision</h3>
                <p className="text-white mb-6 leading-relaxed">
                  Chez Brainskills Maroc, nous croyons que chaque enfant possède un potentiel illimité. Notre rôle est de fournir les outils, l'environnement et l'inspiration nécessaires pour libérer ce potentiel.
                </p>
                <div className="space-y-4">
                  <ValueItem title="Excellence" description="Nous visons les plus hauts standards pédagogiques." />
                  <ValueItem title="Innovation" description="Toujours à la pointe des nouvelles technologies éducatives." />
                  <ValueItem title="Passion" description="Une équipe dévouée qui aime transmettre son savoir." />
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Où nous trouver ?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <LocationCard
                  name="Centre ABC"
                  address="Quartier ABC, Safi"
                  features={['Salles climatisées', 'Équipement EV3 complet', 'Espace parents']}
                />
                <LocationCard
                  name="Centre Plateau Radees"
                  address="Quartier Plateau, Safi"
                  features={['Laboratoire de langues', 'Espace créatif', 'Parking disponible']}
                />
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ValueItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4 bg-white/10 rounded-2xl p-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Award className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  )
}

function LocationCard({ name, address, features }: { name: string, address: string, features: string[] }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-6 h-6 text-primary" />
        <h4 className="text-xl font-bold">{name}</h4>
      </div>
      <p className="text-white mb-4">{address}</p>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 text-green-500" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
