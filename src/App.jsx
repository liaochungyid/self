import { Routes, Route } from 'react-router'

import Header from './components/layouts/Header'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import WorkPage from './pages/Work'
import ExperiencePage from './pages/Experience'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/experience' element={<ExperiencePage />} />
      </Routes>
    </div>
  )
}

export default App
