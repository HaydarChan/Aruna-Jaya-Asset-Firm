import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import Logo from "../public/LogoArunaJaya.png"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image src={Logo} alt="Aruna Jaya Logo" width={60} height={60} />
              <span className="text-2xl font-italiana text-primary">Aruna Jaya</span>
            </div>
            <p className="text-muted-foreground leading-relaxed font-dm-sans font-light max-w-sm">
              Empowering your investments with professional capital market services and expert financial guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-italiana text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Portfolio"].map((item: string) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-dm-sans font-light"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-italiana text-foreground mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground font-dm-sans font-light">info@ajcapital.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground font-dm-sans font-light">+62 11 111111</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground font-dm-sans font-light">Bandung, West Java</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground font-dm-sans font-light">
            © 2024 Aruna Jaya. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
