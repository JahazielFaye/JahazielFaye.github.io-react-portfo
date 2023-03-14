// import the global styles file
import '../styles/globals.css'

// define the main component of the app
function MyApp({ Component, pageProps }) {
    // return the child component with its props
  return <Component {...pageProps} />
}

export default MyApp
