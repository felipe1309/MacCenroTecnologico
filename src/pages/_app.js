import Layaud from "../components/Layaud"

function MyApp({ Component, pageProps }) {
  return <Layaud><Component {...pageProps} /></Layaud>
  
  
}

export default MyApp
