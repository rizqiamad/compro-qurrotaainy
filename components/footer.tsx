import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "About Us": [
      { name: "Our Mission", href: "#mission" },
      { name: "Leadership Team", href: "#leadership" },
      { name: "Annual Reports", href: "#reports" },
      { name: "Careers", href: "#careers" },
    ],
    Schools: [
      { name: "Elementary Schools", href: "#elementary" },
      { name: "Middle Schools", href: "#middle" },
      { name: "High Schools", href: "#high" },
      { name: "Learning Centers", href: "#centers" },
    ],
    Programs: [
      { name: "Academic Programs", href: "#academic" },
      { name: "Extracurricular", href: "#extracurricular" },
      { name: "Summer Camps", href: "#camps" },
      { name: "Adult Education", href: "#adult" },
    ],
    Resources: [
      { name: "Parent Portal", href: "#portal" },
      { name: "Student Resources", href: "#student" },
      { name: "Library System", href: "#library" },
      { name: "Support Services", href: "#support" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">EduFoundation</h3>
                <p className="text-sm text-muted-foreground">Empowering Communities</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dedicated to providing exceptional educational opportunities that empower students, strengthen
              communities, and create lasting positive change in the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">© 2024 Educational Foundation. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link
                href="#accessibility"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
