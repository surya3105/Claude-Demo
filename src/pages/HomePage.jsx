import Hero from '../components/home/Hero'
import IntroSection from '../components/home/IntroSection'
import FeaturedServices from '../components/home/FeaturedServices'
import CallToAction from '../components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedServices />
      <CallToAction />
    </>
  )
}
