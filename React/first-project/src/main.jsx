import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App'
import { ThemeProvider } from './common/componets/ThemeProvider/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
    
  </StrictMode>,
)
//index -> main  -> App.jsx 