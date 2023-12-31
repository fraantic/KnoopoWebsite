import React from 'react'
import './landing.scss'
import Reveal from '@/components/Reveal/Reveal'
import Navi from '@/components/Navi/Navi'
import Footer from '@/components/Footer/Footer'
import AboutGuild from '@/components/LandingPage/aboutGuild'
import AboutKnoopo from '@/components/LandingPage/aboutKnoopo'
import ContactKnoopo from '@/components/LandingPage/contactKnoopo'
import TexturePacks from '@/components/LandingPage/texturePacks';



// eslint-disable-next-line @next/next/no-async-client-component
const Page = async () => {
  return (
    <>
    <Navi className='noborder' />
    <div className='container'>
      <div id="landing" className='background-knoopo'>
        <Reveal>
          <h1 className='knoopo-text'>Knoopo</h1>
        </Reveal>
      </div>
      <AboutKnoopo/>
      <AboutGuild/>
      <TexturePacks/>
    <ContactKnoopo/>
    </div>
    <Footer/>
    </>
  )
}

export default Page
