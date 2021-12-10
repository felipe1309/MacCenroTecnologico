import Navbar from './Navbar/Navbar'
import { ContextProvider } from '../context/Contexto'
import Head from 'next/head'
const Layaud = ({ children }) => {
  return (
  <ContextProvider>
    <Head>
      <script src="https://kit.fontawesome.com/cd65e2679c.js" crossorigin="anonymous"></script>
    </Head>
    <Navbar></Navbar>
    {children}
    <style jsx global>
      {`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}
    </style>
    </ContextProvider>
  )
}

export default Layaud
