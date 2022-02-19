import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { ResumeContextProvider } from './store/resume-context'

ReactDOM.render(
  <React.StrictMode>
    <ResumeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResumeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
