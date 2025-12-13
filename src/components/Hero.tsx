import { ChevronRight, Check, Sparkles, Video } from 'lucide-react'

export function Hero() {
    return (
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 bg-black text-white pt-20 pb-20 overflow-hidden min-h-screen">
            
            {/* Badge */}
            <div className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-12 mb-8 bg-white/10 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Nouveau
                </span>
                <p className="flex items-center gap-1 text-gray-300 text-xs sm:text-sm font-medium">
                    <span>Inscriptions ouvertes 2025</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-center leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
                Préparez votre enfant au  <br className="hidden md:block" />Monde de
                <span className="bg-primary text-white rounded-xl px-2 mx-2">
                    <span className="font-bold">Demain.</span>
                </span>
            </h1>

            {/* Subheadline */}
            <p className="font-normal sm:text-lg text-center max-w-2xl mx-auto mb-10 leading-relaxed">
               Une méthode unique à Safi pour développer l'intelligence et la créativité. <br />
               Robotique, Programmation et Calcul Mental.  
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 font-semibold transition-all  ">
                    Inscrire mon enfant
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-primary hover:bg-primary/20 text-white rounded-full px-6 h-12 font-medium transition-all">
                    <Video className="w-5 h-5" />
                    <span>Voir la vidéo</span>
                </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-12 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full">
                        <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Pédagogie Positive</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full">
                        <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Professeurs Certifiés</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full">
                        <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Matériel LEGO® Education</span>
                </div>
            </div>

            {/* Showcase Image */}
            <div className="relative mt-16 w-full max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50"></div>
                <img
                    src="/hero-image.png"
                    alt="Atelier Robotique Brainskills"
                    className="w-full rounded-2xl shadow-2xl border border-white/10"
                />

                {/* Floating Card Overlay */}
                <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-gray-900/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl max-w-xs animate-bounce-slow hidden sm:block">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg">Succès</div>
                            <div className="text-gray-400 text-xs">Les enfants adorent !</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
