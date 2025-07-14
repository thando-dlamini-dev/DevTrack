import React, { useState } from 'react'
import { Code, Menu, X } from 'lucide-react'
import useAuthStore from '../stores/authStore';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { user, logout } = useAuthStore();
    
    const navLinks = [

        {
            name: "Contribute",
            path: "/contribute"
        },
        {
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            name: "Progress",
            path: "/progress"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
    ]

    return (
        <nav className='fixed top-0 left-0 z-50 w-full border-b shadow-sm bg-white/95 backdrop-blur-sm border-slate-200'>
            <div className='px-6 mx-auto max-w-7xl sm:px-12'>
                <div className='flex items-center justify-between h-16 lg:h-20'>
                    {/* Logo */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl'>
                            <Code className='w-5 h-5 text-white' />
                        </div>
                        <a href="/" className='text-2xl font-bold transition-colors duration-300 text-slate-800 hover:text-purple-600'>
                            GitContribute
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='items-center hidden gap-8 lg:flex'>
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.path}
                                className='relative font-medium transition-colors duration-300 text-slate-600 hover:text-purple-600 group'
                            >
                                {link.name}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300'></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className='items-center hidden gap-4 lg:flex'>
                        {!user && <a 
                            href="/login" 
                            className='font-medium transition-colors duration-300 text-slate-600 hover:text-purple-600'
                        >
                            Login
                        </a>}
                        {user && <a 
                            onClick={logout}
                            className='font-medium transition-colors duration-300 text-slate-600 hover:text-purple-600'
                        >
                            Logout
                        </a>}
                        {user && 
                        <img 
                            src={user.avatar} 
                            className='w-8 h-8 border-2 rounded-full border-neutral-300' 
                            alt="User Avatar" 
                            />
                        }
                        {!user && <a 
                            href="/signup" 
                            className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
                        >
                            Start For Free
                        </a>}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='p-2 transition-colors duration-300 rounded-lg lg:hidden hover:bg-slate-100'
                    >
                        {isMenuOpen ? (
                            <X className='w-6 h-6 text-slate-600' />
                        ) : (
                            <Menu className='w-6 h-6 text-slate-600' />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='py-6 bg-white border-t lg:hidden border-slate-200'>
                        <div className='flex flex-col gap-4'>
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.path}
                                    className='py-2 font-medium transition-colors duration-300 text-slate-600 hover:text-purple-600'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className='flex flex-col gap-3 pt-4 mt-4 border-t border-slate-200'>
                                
                                {user ? (
                                <>
                                <button 
                                    onClick={() => {
                                    logout();
                                    setIsMobileMenuOpen(false);
                                    }} 
                                    className='w-full p-2 px-4 mb-2 font-semibold text-white transition-transform duration-300 ease-in-out rounded-full cursor-pointer lg:w-auto hover:scale-105 bg-neon-yellow lg:mb-0'
                                >
                                    Log out
                                </button>
                                <div className='flex items-center justify-center gap-2 py-2 lg:justify-start lg:py-0'>
                                    <img 
                                    src={user.avatar} 
                                    className='w-8 h-8 border-4 rounded-full border-neutral-900' 
                                    alt="User Avatar" 
                                    />
                                </div>
                                </>
                            ) : (<>
                                <a 
                                    href="/login" 
                                    className='py-2 font-medium transition-colors duration-300 text-slate-600 hover:text-purple-600'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </a>
                                <a 
                                    href="/signup" 
                                    className='px-6 py-3 font-semibold text-center text-white transition-all duration-300 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Start For Free
                                </a>
                                </>
                            )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar