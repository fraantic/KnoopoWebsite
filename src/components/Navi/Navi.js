import React from 'react';
import Image from 'next/image'
import knoopo from '../../../public/pngs/knoopoPFP.png'
import discord from '../../../public/svgs/discord.svg'
import twitch from '../../../public/svgs/twitch.svg'
import youtube from '../../../public/svgs/youtube.svg'
import twitter from '../../../public/svgs/twitter.svg'
import './Navi.scss'
import './button.scss'
import Link from 'next/link';


const Navi = (props) => {


  return (
    <div className='nav-Container'>
      <div className='top-nav'>

        <div className='nav-Bar-Container-left'>
          <Image src={knoopo} width={0} height={0} sizes="100vw" style={{ width: '40px', height: '40px' }} alt="knoopoimage" className='Knoopo-img'/>
          <div className='locator'>
            <Link className={`no-line ${props.Landing ? 'border-green' : ''}`} href="/#landing">
              <p className='locator-text'>Landing</p>
            </Link>
            <Link className={`no-line ${props.About ? '' : ''}`} href="/#about">
              <p className='locator-text'>About</p>
            </Link>
            <Link className={`no-line ${props.Packs ? 'border-green' : ''}`}  href="/#guild">
              <p className='locator-text'>Guild</p>
            </Link>
            <Link className={`no-line ${props.Packs ? 'border-green' : ''}`}  href="/#texture-packs">
              <p className='locator-text'>Packs</p>
            </Link>
            <Link className={`no-line ${props.Contact ? '' : ''}`} href="#knoopo-text">
              <p className='locator-text'>Contact</p>
            </Link>
          </div>
        </div>
        

        <div className='nav-Bar-Container-top'>
          <div className='left'>
            <Link href="https://discord.gg/5fZvperhgh">
              <Image src={discord} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo discord'/>
            </Link>
            <Link href="https://www.twitch.tv/knoopo">
              <Image src={twitch} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo twitch'/>
            </Link>
            <Link href="https://www.youtube.com/@knoopo">
              <Image src={youtube} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo youtube'/>
            </Link>
            <Link href="https://twitter.com/Knoopo1">
              <Image src={twitter} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo twitter'/>
            </Link>
          </div>
          <div className='right'>
            <a href="https://www.youtube.com/@knoopo/about" class="btn-flip" data-back="Subscribe" data-front="Knoopo"></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navi