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
            <Link className={`no-line ${props.Landing ? 'border-green' : ''}`} href="/#knoopo-text">
              <p className='locator-text'>Landing</p>
            </Link>
            <Link className={`no-line ${props.About ? '' : ''}`} href="#knoopo-text">
              <p className='locator-text'>About</p>
            </Link>
            <Link className={`no-line ${props.Packs ? 'border-green' : ''}`}  href="/#texture-container">
              <p className='locator-text'>Packs</p>
            </Link>
            <Link className={`no-line ${props.Contact ? '' : ''}`} href="#knoopo-text">
              <p className='locator-text'>Contact</p>
            </Link>
          </div>
        </div>
        

        <div className='nav-Bar-Container-top'>
          <div className='left'>
            <Link href="discord.gg">
              <Image src={discord} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo discord'/>
            </Link>
            <Link href="twitch.tv/knoopo">
              <Image src={twitch} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo twitch'/>
            </Link>
            <Link href="youtube.com/knoopo">
              <Image src={youtube} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo youtube'/>
            </Link>
            <Link href="x.com/knoopo">
              <Image src={twitter} width={0} height={0} sizes="100vw" style={{ width: '24px', height: '24px' }} alt='knoopo twitter'/>
            </Link>
          </div>
          <div className='right'>
            <a href="#" class="btn-flip" data-back="Subscribe" data-front="Knoopo"></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navi