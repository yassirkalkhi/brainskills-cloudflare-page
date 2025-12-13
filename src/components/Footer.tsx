import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & About */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Brainskills</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Brainskills est un centre d'excellence dédié au développement du potentiel intellectuel des enfants à travers la robotique, la programmation et le calcul mental.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialIcon href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialIcon href="#" icon={<Linkedin className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-primary inline-block pb-2">Nos Programmes</h3>
                        <ul className="space-y-4">
                            <FooterLink href="#robotique">Ateliers Robotique</FooterLink>
                            <FooterLink href="#programmation">Coding & Appli</FooterLink>
                            <FooterLink href="#soroban">Calcul Mental (Soroban)</FooterLink>
                            <FooterLink href="#langues">Langues Vivantes</FooterLink>
                            <FooterLink href="#vacances">Stages Vacances</FooterLink>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-primary inline-block pb-2">Liens Rapides</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/">Accueil</FooterLink>
                            <FooterLink href="/about">À propos</FooterLink>
                            <FooterLink href="/activities">Activités</FooterLink>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-primary inline-block pb-2">Contactez-nous</h3>
                        <ul className="space-y-4">
                            <ContactItem icon={<MapPin className="w-5 h-5" />} text="Plateau, Safi, Maroc" />
                            <ContactItem icon={<Phone className="w-5 h-5" />} text="+212 600-000000" />
                            <ContactItem icon={<Mail className="w-5 h-5" />} text="contact@brainskills.ma" />
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Brainskills Maroc. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <a href={href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                {children}
            </a>
        </li>
    )
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
            {icon}
        </a>
    )
}

function ContactItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <li className="flex items-start gap-3 text-gray-400">
            <div className="shrink-0 mt-1 text-primary">
                {icon}
            </div>
            <span>{text}</span>
        </li>
    )
}
