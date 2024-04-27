import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { About, CLaimAirdrop, EmptyPage } from './pages'
import { Footer, JoinQuest } from './components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.css'
import { useState } from 'react'
AOS.init({ duration: 1500 })

export const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/about' />} />
        <Route path='/about' element={<About />} />
        <Route path='/join_quest' element={<JoinQuest setOpen={setOpen} />} />
        <Route
          path='/claim_airdrop'
          element={<CLaimAirdrop setOpen={setOpen} />}
        />
        <Route path='mint_bread_nft' element={<EmptyPage />} />
      </Routes>
      <Footer />
    </>
  )
}
