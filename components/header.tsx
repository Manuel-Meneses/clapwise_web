"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState("light")

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Theme listener
  useEffect(() => {
    const handleThemeChange = (e: any) => setTheme(e.detail.theme)
    window.addEventListener("header-theme", handleThemeChange)
    return () => window.removeEventListener("header-theme", handleThemeChange)
  }, [])

  // Estilos dinámicos solo para el Header visible
  const textColor = theme === "dark" && !scrolled ? "text-[#F3F4F6]" : "text-[#4C4B4B]"
  const logoFilter = theme === "dark" && !scrolled ? "brightness(0) invert(1)" : "brightness(1) invert(0)"
  const burgerColor = theme === "dark" && !scrolled ? "text-white" : "text-[#192832]"

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const menuItems = ['cómo funciona']

  return (
    <header 
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled 
          ? "top-4 left-4 right-4 md:left-[10%] md:right-[10%] rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl" 
          : "top-0 left-0 w-full rounded-none bg-transparent"
      }`}
    >
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
        
        <a href="/" className="flex items-center gap-2">
          <img src="/logo_web.svg" alt="ClapWise" className={`transition-all duration-500 ${scrolled ? "h-14" : "h-16"} w-auto object-contain`} style={{ filter: logoFilter }} />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => {
            const isAgente = item === 'cómo funciona'
            const targetId = item === 'soluciones' ? 'solutions' : item.toLowerCase().replace(' ', '-')
            return (
              <a
                key={item}
                href={isAgente ? "/como-funciona" : `#${targetId}`}
                onClick={(e) => !isAgente && handleSmoothScroll(e, targetId)}
                className={`text-sm font-medium transition-colors duration-500 ${textColor} hover:text-[#427AA1]`}
              >
                {item}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <a href="https://calendly.com/clapwise/30min" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center gap-2 bg-[#427AA1] text-white rounded-full px-5 py-2 transition-all duration-300 hover:bg-[#00324D]">
            <span className="text-sm font-semibold">Iniciar Prueba</span>
          </a>
        </div>

        {/* BOTÓN MÓVIL (Hamburguesa dinámica) */}
        <button 
          className={`md:hidden p-2 transition-colors ${burgerColor}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MENÚ MÓVIL FLOTANTE: Estilo dropdown premium (glassmorphism) */}
      <div 
        className={`absolute top-full left-0 w-full px-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isOpen ? "opacity-100 translate-y-2 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl p-6 flex flex-col gap-2">
          <nav className="flex flex-col">
            {menuItems.map((item) => {
              const isAgente = item === 'cómo funciona'
              const targetId = item === 'soluciones' ? 'solutions' : item.toLowerCase().replace(' ', '-')
              return (
                <a
                  key={item}
                  href={isAgente ? "/como-funciona" : `#${targetId}`}
                  onClick={(e) => {
                    if (!isAgente) handleSmoothScroll(e, targetId)
                    setIsOpen(false)
                  }}
                  className="text-lg font-bold text-[#192832] py-4 border-b border-gray-100 flex justify-between items-center hover:text-[#427AA1] transition-colors"
                >
                  {item}
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </a>
              )
            })}
          </nav>

          <div className="mt-4">
            <a 
              href="https://calendly.com/clapwise/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#427AA1] text-white rounded-full py-3.5 font-semibold hover:bg-[#00324D] transition-colors shadow-sm"
            >
              <span>Iniciar Prueba</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}