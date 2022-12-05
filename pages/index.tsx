import Head from 'next/head'
import { About } from '../sections/About'
import {Blog} from '../sections/Blog'
import {Landing} from '../sections/Landing'
import { Portfolio } from '../sections/Portfolio'
import { Skills } from '../sections/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Richard Coric | Web Developer</title>
      </Head>
      <Landing />
      <Portfolio />
      <About />
      <Skills />
      <Blog />
    </div>
  )
}
