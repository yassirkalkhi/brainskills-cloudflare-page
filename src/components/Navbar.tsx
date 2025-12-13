import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <>
            <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-black/10 text-white text-sm font-poppins">
                <Link to="/" className="flex items-center gap-2">
                    {/* Logo */}
                    <img src="./logo.svg" className="w-12 h-12" alt="" />

                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
                    <Link to="/" className="hover:text-primary transition font-medium">
                        Accueil
                    </Link>
                    <Link to="/about" className="hover:text-primary transition font-medium">
                        À propos
                    </Link>
                    <Link to="/activities" className="hover:text-primary transition font-medium">
                        Activités
                    </Link>
                    <a href="#contact" className="hover:text-primary transition font-medium">
                        Contact
                    </a>
                </div>

                <button className="hidden md:block px-6 py-2.5 bg-primary hover:bg-primary/90 active:scale-95 transition-all rounded-full font-medium    ">
                    Rejoignez-nous
                </button>

                <button onClick={toggleMenu} className="md:hidden active:scale-90 transition">
                    <Menu className="w-6 h-6" />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-100 bg-gray-900/95 text-white backdrop-blur-xl flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link to="/" onClick={closeMenu} className="hover:text-primary transition text-2xl font-medium">
                    Accueil
                </Link>
                <Link to="/about" onClick={closeMenu} className="hover:text-primary transition text-2xl font-medium">
                    À propos
                </Link>
                <Link to="/activities" onClick={closeMenu} className="hover:text-primary transition text-2xl font-medium">
                    Activités
                </Link>
                <a href="#contact" onClick={closeMenu} className="hover:text-primary transition text-2xl font-medium">
                    Contact
                </a>

                <button onClick={closeMenu} className="active:ring-3 active:ring-white aspect-square w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary/90 transition text-white rounded-full absolute bottom-10">
                    <X className="w-6 h-6" />
                </button>
            </div>
        </>
    )
}
