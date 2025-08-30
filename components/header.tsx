"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Schools", href: "#schools" },
    { name: "Programs", href: "#programs", hasDropdown: true },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ]

  const programsSubNav = [
    { name: "Early Childhood Education", href: "/programs/early-childhood" },
    { name: "Primary & Secondary Education", href: "/programs/primary-secondary" },
    { name: "Higher Education", href: "/programs/higher-education" },
  ]

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="sm:text-xl font-bold text-foreground">Yayasan Qurrotaainy</h1>
              <p className="text-xs text-muted-foreground">SIT Qurrotaa'yun Sukabumi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden tablet:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProgramsOpen(true)}
                    onMouseLeave={() => setIsProgramsOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium hover:cursor-pointer">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isProgramsOpen && (
                      <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                        {programsSubNav.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden tablet:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:cursor-pointer">Get Involved</Button>
          </div>

          {/* Mobile menu button */}
          <div className="tablet:hidden">
            <Button className="hover:cursor-pointer" variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="tablet:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isProgramsOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {programsSubNav.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                Get Involved
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
