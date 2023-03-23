import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
        <Script 
          src='particles.js'
          onLoad={() => {
          console.log('Script has loaded')
        }}
        />
        <Script 
          src='app.js'
        />
      <Component {...pageProps} />
    </>
  )
}
