import '../styles/globals.css';
import '../styles/Nav.scss';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app'
import Nav from '../components/Navigation';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Richard Coric | Web Developer'
        description='Fullstack web developer aiming to build sites and help people'
      />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
    );
  }
