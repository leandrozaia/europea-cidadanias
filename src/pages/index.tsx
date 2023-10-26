import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { OurTeam } from '@/components/OurTeam'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  const testimonials = [
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    },
    {
      name: "José",
      star: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.",
    }
  ]

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <Banner />
        <AboutUs />
        <Services />
        <OurTeam />
        <Testimonials testimonials={testimonials} />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}
