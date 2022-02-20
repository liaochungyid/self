import { Routes, Route } from 'react-router'

import Header from './components/layouts/Header'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import WorkPage from './pages/Work'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
