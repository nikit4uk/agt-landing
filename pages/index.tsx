import { Inter } from 'next/font/google'
import MainContainer from '@/components/MainContainer'
import MainBlock from '@/components/MainBlock'
import About from '@/components/About'
import Direction from '@/components/Direction'
import Quality from '@/components/Quality'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainContainer title='Aerospace Global Trade'>
      <MainBlock />
      <About />
      <Direction />
      <Quality />
      <Contact />
    </MainContainer>
  )
}
