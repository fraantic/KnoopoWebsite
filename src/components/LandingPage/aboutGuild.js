import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/Reveal/Reveal'
import './landing.scss'

import knoopo from '../../../public/pngs/knoopoPFP.png'
import fraantic from '../../../public/pngs/fraantic.png'
import sumo from '../../../public/pngs/sumo.png'
import blocks from '../../../public/pngs/blocks.png'
import iman from '../../../public/pngs/iman.png'
import miro from '../../../public/pngs/miro.png'
import fatasi from '../../../public/pngs/fantasi.png'
import chub from '../../../public/pngs/chub.png'

const StaffDisplay = (props) => {
  return (
    <Reveal>
      <div className='staff-display'>
        <Image src={props.image} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
        <div className='staff-desc-container'>
          <p className='desc-text-staff' >{props.role}</p>
          <p className='desc-text-staff' >{props.person}</p>
        </div>
      </div>
    </Reveal>
  )
}

const aboutGuild = () => {
  return (
    <div  className='guild-container'>
    <div id="guild" className='nav-to'></div>
    <Reveal> 
      <h3 className='title-text pack-text'>Guild</h3>
    </Reveal>
    <div className='guild-info-container'>
      <div className='about-guild-container'>
        <Reveal>
          <p className='title-about'>About Guild</p>
        </Reveal>
        <div>
          <Reveal>
            <p className='meetknoopo-text'>The Cuppatea guild expertly run by Knoopo is mostly comprised of Bedwars and Skyblock players fueled on caffeine and unemployment. Together these players make up the foundation of the strongest guild in hypixel and soon to be hypixel china. One of the reasons for the high skill level of players in the Cuppatea guild are the tournaments held biannually, being a outlet for the display of individual skills and expert team coordination.</p>
          </Reveal>
          <Reveal>
            <p className='meetknoopo-text'>Understanding the present and planning for the future is a key part of our guild&apos;s ideology. We are constantly planning events, increasing the liveliness of our guild. Cuppatea actively searches for ways to improve their guild members&apos; skills and increase notoriety amongst the community by besting other guilds in battle. Honour and glory to CUPPATEA. COME FORTH HYPIXELIANS, RISE UP AND SEEK GLORY. FORGET YOUR SEDANTARY LIFESTYLES. FIGHT FOR A PURPOSE. FIGHT FOR YOUR HONOUR MY TEAMAKERS.</p>
          </Reveal>
        </div>
      </div>
      <div className='extra-guild-info'>
        <div>
          <Reveal>
            <p className='title-about'>Guild Staff</p>
          </Reveal>
          <div className='staff-flex margin-bottom'>
            <StaffDisplay image={knoopo} role="OWNER" person="knoopo"/>
            <StaffDisplay image={fraantic} role="H-Admin" person="fraantic"/>
          </div>

          <div className='staff-flex'>
          <StaffDisplay image={fatasi} role="Admin" person="fantasi"/>
          <StaffDisplay image={sumo} role="Admin" person="sumo"/>
          <StaffDisplay image={blocks} role="Admin" person="blocks"/>
          <StaffDisplay image={iman} role="Admin" person="iman"/>
          <StaffDisplay image={miro} role="Admin" person="miro"/>
          <StaffDisplay image={chub} role="Admin" person="chub"/>
          </div>
        </div>
        <div>
          <Reveal>
            <p className='title-about'>Apply</p>
          </Reveal>
          <Reveal>
            <p className='meetknoopo-text'>To join our guild you need to meet one prerequisite, subscribe to knoopo. Otherwise join the discord, create a application ticket and follow the instructions</p>
          </Reveal>
        </div>
      </div>
    </div>
  </div>
  )
}

export default aboutGuild