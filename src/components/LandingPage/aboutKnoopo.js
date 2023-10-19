import React from 'react'
import Reveal from '@/components/Reveal/Reveal'
import youtube from '../../../public/svgs/youtube.svg'
import twitter from '../../../public/svgs/twitter.svg'
import twitch from '../../../public/svgs/twitch.svg'
import Image from 'next/image'
import './landing.scss'

const AboutKnoopo = () => {
  return (
    <div className='About-container'>
      <div id="about" className='nav-to'></div>
      <Reveal>
        <h2  className='title-text pack-text'>About</h2>
      </Reveal>
      <div className='organise-about'>
        <div className='desc-text-container'>
          <Reveal>
          <p className='title-about'>About Knoopo & friends</p>
          </Reveal>
          <Reveal>
          <p className='meetknoopo-text'>Meet Knoopo, the towering 6-foot-7 Minecraft Bedwars streamer whose charismatic presence is as commanding as his stature. With an undeniable handsomeness that captures the attention of both his gaming audience and beyond, Knoopo has carved out a niche in the streaming world that&apos;s hard to ignore.</p>
          </Reveal>
          <Reveal>
          <p className='meetknoopo-text'> Beyond his gaming prowess, Knoopo carries a heavy heart, as his dear friend blocks is currently battling stage 4 cancer, reminding us all that even amidst the virtual adventures, real-life challenges can be the most profound. Alongside blocks, </p>
          </Reveal>
          <Reveal>
          <p className='meetknoopo-text'>Knoopo&apos;s life also features fraantic, a friend who never seems to step outside his ivory tower and presides over an infamously stupid server that fails more often than it succeeds, creating hilariously chaotic moments in Knoopo&apos;s otherwise smooth gaming journey.</p>
          </Reveal>
        </div>
        <div className='statistics-container'>
          <Reveal>
          <p className='title-about'>Statistics</p>
          </Reveal>
          <Reveal>
          <div className='statistics-single'>
            <Image src={youtube} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} alt='knoopo youtube'/>
            <p className='num-text'>376</p>
          </div>
          </Reveal>
          <Reveal>
          <div className='statistics-single'>
            <Image src={twitch} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} alt='knoopo youtube'/>
            <p className='num-text'>74</p>
          </div>
          </Reveal>
          <Reveal>
          <div className='statistics-single'>
            <Image src={twitter} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} alt='knoopo youtube'/>
            <p className='num-text'>1</p>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default AboutKnoopo