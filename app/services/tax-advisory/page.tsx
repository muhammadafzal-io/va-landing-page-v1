import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Building2, Receipt, FileText, Scale, BadgeCheck } from "lucide-react"

export default function TaxAdvisoryPage() {
  const offerings = [
    { icon: Globe, title: "Cross-border tax structuring and residency advisory services" },
    { icon: Building2, title: "UK – UAE corporate structuring" },
    { icon: Receipt, title: "KSA Zakat, VAT and Corporate Income Tax advisory" },
    { icon: FileText, title: "UK inheritance tax planning" },
    { icon: Scale, title: "Double tax treaty reviews" },
    {
      icon: BadgeCheck,
      title: "Federal Tax Authority (FTA) and Zakat, Tax and Customs Authority (ZATCA) residency certificates",
    },
  ]

  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />

      {/* Hero Section */}


      <section className="relative bg-primary py-24 md:py-32 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-tax-advisory.jpg"
            alt="Tax advisory documents"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-balance">
            Tax Advisory and International Structuring
          </h1>
        </div>
      </section>
      {/* </CHANGE> */}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-primary/70 mb-8 leading-relaxed font-sans">
            Contact our team to discuss your tax advisory and structuring needs
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-8 py-6 text-base font-sans">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
