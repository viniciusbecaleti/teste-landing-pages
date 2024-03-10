import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'

export default function Home() {
  return (
    <>
      <Header />

      <Hero
        title="Generated by create next app"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam veritatis quibusdam quaerat ullam hic consequuntur architecto? Nesciunt, accusamus! Nemo cum est reiciendis laborum unde eos recusandae? Commodi, odio rerum!"
        actions={[
          { label: 'Get Started', url: 'https://nextjs.org/docs' },
          { label: 'GitHub', url: 'https://github.com', outlined: true },
        ]}
      />
    </>
  )
}
