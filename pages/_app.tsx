import './styles.css';
import { initGA, logPageView } from '../utils/analytics';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_TRACKING_CODE) {
      initGA(process.env.NEXT_PUBLIC_GA_TRACKING_CODE);
      logPageView();
    }
  }, [])

  return <Component {...pageProps} />;
}
