import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import { useState } from 'react'
import Fooddisplay from '../fooddisplay/Fooddisplay'
import Appdownload from '../AppDownload/Appdownload'

const Home=()=> {

   const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} /> 
    <Fooddisplay category={category}/>
    <Appdownload/>
    </div>
  )
}

export default Home
