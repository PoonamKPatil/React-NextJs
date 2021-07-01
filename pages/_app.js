import Footer from '../components/Footer'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <div>
    //   <NavBar/>
    //     <Component {...pageProps} />
    //   <Footer></Footer>
    // </div>
    <div className="content">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
   
  )
}

export default MyApp
