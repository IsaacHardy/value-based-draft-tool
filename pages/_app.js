import '../styles/index.css'
import Nav from '../components/Nav';
import { DataProvider } from '../context/dataContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
      
    </>
  )
}

export default MyApp
