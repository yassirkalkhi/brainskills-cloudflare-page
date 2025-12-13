import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { Brain, Code, Globe, Calculator, Rocket, Star, CheckCircle, Users } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})
function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <main>
        <Hero />

        {/* Features Bento Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Brain className="w-8 h-8 text-white" />}
                color="bg-linear-to-br from-primary to-primary/80"
                title="Robotique"
                description="Construction et programmation de robots EV3. Ingénierie ludique."
                className="lg:translate-y-0 bg-white/10 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              />
              <FeatureCard
                icon={<Code className="w-8 h-8 text-white" />}
                color="bg-linear-to-br from-blue-400 to-blue-600"
                title="Programmation"
                description="Logique algorithmique avec Scratch et Python pour les jeunes."
                className="lg:translate-y-8"
              />
              <FeatureCard
                icon={<Calculator className="w-8 h-8 text-white" />}
                color="bg-linear-to-br from-green-400 to-green-600"
                title="Calcul Mental"
                description="Techniques du Soroban pour un cerveau rapide et agile."
                className="lg:translate-y-0"
              />
              <FeatureCard
                icon={<Globe className="w-8 h-8 text-white" />}
                color="bg-linear-to-br from-purple-400 to-purple-600"
                title="Langues"
                description="Français, Anglais, Espagnol. Immersion interactive."
                className="lg:translate-y-8"
              />
            </div>
          </div>
        </section>

        {/* Value Proposition & Stats */}
        <section className="pt-32 pb-20 bg-black" id="why-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-linear-to-r from-primary/10 to-primary/5 rounded-[2.5rem] transform -rotate-2"></div>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  alt="Brainskills Classroom"
                  className="relative rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
                />

                {/* Floating Stat Card */}
                <div className="absolute -bottom-10 -right-10 bg-black/80 p-6 rounded-2xl shadow-xl border border-white/10 max-w-xs hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl  text-white font-bold">100%</div>
                      <div className="text-sm text-white">Réussite Scolaire</div>
                    </div>
                  </div>
                  <p className="text-xs text-white italic">"Nos élèves excellent aussi à l'école"</p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-4">Pourquoi Nous ?</h2>
                <h3 className="text-4xl text-white md:text-5xl font-black mb-8 leading-tight">
                  Plus qu'un centre, <br /> une <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-yellow-500">école de vie.</span>
                </h3>
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Au-delà des compétences techniques, nous forgeons le caractère. Confiance en soi, résolution de problèmes, créativité et travail d'équipe sont au cœur de notre pédagogie bienveillante.
                </p>

                <div className="space-y-6">
                  <ValueRow icon={<Star className="w-5 h-5" />} title="Pédagogie Positive" text="Apprendre par le jeu et l'encouragement." />
                  <ValueRow icon={<Rocket className="w-5 h-5" />} title="Technologie de Pointe" text="Matériel LEGO® Education et salles équipées." />
                  <ValueRow icon={<Users className="w-5 h-5" />} title="Suivi Personnalisé" text="Petits groupes pour une attention maximale." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summer Camp Section - Parallax Style */}
        <section className="py-32 bg-gray-900 relative overflow-hidden isolate">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary via-gray-900 to-gray-900"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-primary font-bold tracking-wider uppercase text-sm mb-8">
              <Rocket className="w-5 h-5 animate-pulse" />
              <span>Été 2025 • Places Limitées</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Le Camp d'Été <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-yellow-400">Inoubliable</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light">
              Une aventure unique mêlant robotique, défis scientifiques, arts et sports.
              Offrez à votre enfant des vacances intelligentes et amusantes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <CampFeature label="Robotique" />
              <CampFeature label="Sciences Fan" />
              <CampFeature label="Arts & Design" />
              <CampFeature label="Jeux d'équipe" />
            </div>

            <button className="bg-white text-gray-900 px-10 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl shadow-white/10 ring-4 ring-white/20">
              Réserver sa place maintenant
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description, color, className }: { icon: React.ReactNode, title: string, description: string, color: string, className?: string }) {
  return (
    <div className={`group bg-white/10 rounded-3xl p-8 transition-all duration-300 border border-white/10 hover:-translate-y-2 ${className}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${color}`}>
        {icon}
      </div>
      <h4 className="text-2xl text-white font-bold mb-3 transition-colors">{title}</h4>
      <p className="leading-relaxed text-white font-medium">
        {description}
      </p>
    </div>
  )
}

function ValueRow({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/10 transition-colors">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-2xl text-white font-bold mb-3 transition-colors">{title}</h4>
        <p className="text-white">{text}</p>
      </div>
    </div>
  )
}

function CampFeature({ label }: { label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white font-medium backdrop-blur-sm">
      {label}
    </div>
  )
}
