import '../styles/globals.css';
import '../styles/Nav.scss';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import { store } from '../store';
// import Settings from '../components/Settings/Settings';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Richard Coric | Web Developer"
        description="Fullstack web developer aiming to build sites and help people"
      />
      <Provider store={store}>
        <Nav />
        {/* <Settings /> */}
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
