import '../styles/globals.css';
import '../styles/Nav.scss';
import type { AppProps } from 'next/app'
import Nav from '../components/Navigation';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
    );
  }
