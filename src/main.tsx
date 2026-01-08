import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Analytics } from "@vercel/analytics/react"
import LogRocket from 'logrocket';
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import { theme } from './theme'
import App from './App.tsx'

if (import.meta.env.PROD) {
  LogRocket.init('j5epm2/jakewantstoworkatbuffer');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics/>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
