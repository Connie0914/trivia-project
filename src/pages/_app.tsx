import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'
import '../service/firebase'

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <Component {...pageProps} />
  )
};

export default App;