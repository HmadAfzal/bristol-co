import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white"><a href="/">Bristol Co</a></h1>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {[ 'About', 'Contact', 'Timing','Menu'].map((item) => (
              <li key={item}>
                <a 
                  href={`/${item.toLowerCase()}`} 
                  className="block md:text-white hover:text-yellow-300 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}