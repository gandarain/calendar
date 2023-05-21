import '@/styles/globals.css'

import ContextWrapper from "../context/ContextWrapper";

export default function App({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  )
}
