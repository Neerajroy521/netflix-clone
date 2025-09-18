
import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (<>
      <Navbar></Navbar>
    <div className='home'>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order,
            a young man living in modern Tstanbul embarks on a quest to save the city from an immortal enemy.</p>
            <div className="hero-btn">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards></TitleCards>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}></TitleCards>
        <TitleCards title={"Only on Netflix"} category={"popular"}></TitleCards>
        <TitleCards title={"Upcomming"} category={"upcoming"}></TitleCards>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}></TitleCards>
      </div>
      <Footer></Footer>
    </div>
  </>
  )
}

export default Home
