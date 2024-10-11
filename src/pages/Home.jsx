import React from 'react'
import Header from '../component/Header'
import SpecialityMenue from '../component/SpecialityMenue'
import TopDoctors from '../component/TopDoctors'
import Banner from '../component/Banner'
import Footer from '../component/Footer'

export const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenue/>
      <TopDoctors/>
      <Banner/>
    
    </div>
  )
}
