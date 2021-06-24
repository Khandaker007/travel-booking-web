import React, { useState } from 'react'
import './App.scss'

// COMPONENTS
import Header from './components/header/header.component'
import Sidebar from './components/sidebar/sidebar.component'
import HotelView from './components/hotel-view/hotel-view.component'

function App() {
  return (
    <>
      <Header/>
      <div className="content">
        <Sidebar/>
        <HotelView/>
      </div>
    </>
  )
}

export default App
