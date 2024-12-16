import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import EventShowcase from '@/components/EventShowcase'
import EnquiryForm from '@/components/EnquiryForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutUs />
      <EventShowcase />
      <EnquiryForm />
      <Footer />
    </main>
  )
}

