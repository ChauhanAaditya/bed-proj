import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AddAlbum from './pages/AddAlbum'
import { ToastContainer } from 'react-toastify'
import AddSong from './pages/AddSong'
import ListSong from './pages/ListSong'
import ListAlbum from './pages/ListAlbum'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export const url = 'http://localhost:4000'

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      <Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#D3FFF7]'>
        <Navbar/>
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
      <Routes>
        <Route path='/addSong' element={ <AddSong/> }/>
        <Route path='/addAlbum' element={<AddAlbum/>}/>
        <Route path='/listAlbum' element={<ListSong/>}/>
        <Route path='/listAlbum' element={<ListAlbum/>}/>
      </Routes>
        </div>
      </div>
    </div>
  )
}

export default App