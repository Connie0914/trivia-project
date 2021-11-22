import { useDate } from 'hooks/useDate';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const date = useDate();
  return <Component {...pageProps} {...date} />;
};

export default App;
