"use client";

import youtube from '../../public/svgs/youtube.svg'
import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd';
import backgroundimg from '../../public/pngs/background.png'
import twitter from '../../public/svgs/twitter.svg'
import grizzly from '../../public/packimg/grizzly.png'
import download from '../../public/svgs/download.svg'
import Image from 'next/image'
import twitch from '../../public/svgs/twitch.svg'
import './landing.scss'
import Link from 'next/link';
import Reveal from '@/components/Reveal/Reveal'
import RevealSlide from '@/components/Reveal/Revealbox'
import Navi from '@/components/Navi/Navi'
import { useInView } from "framer-motion"

const Page = () => {
  const [viewLanding, setViewLanding] = useState(false)
  const [viewAbout, setViewAbout] = useState(false)
  const [viewPacks, setViewPacks] = useState(false)
  const [viewContent, setViewContent] = useState(false)

  const Landing = useRef(null)
  const isInViewLanding = useInView(Landing)

  const About = useRef(null)
  const isInViewAbout = useInView(About)

  const Packs = useRef(null)
  const isInViewPacks = useInView(Packs)

  const Content = useRef(null)
  const isInViewContent = useInView(Content)

  useEffect(() => {
    if (isInViewLanding) {
      setViewLanding(true)
    }
  }, [isInViewLanding])

  useEffect(() => {
    if (isInViewAbout) {
      setViewAbout(true)
    }
  }, [isInViewAbout])


  useEffect(() => {
    if (isInViewPacks) {
      setViewPacks(true)
    }
  }, [isInViewPacks])


  useEffect(() => {
    if (isInViewContent) {
      setViewContent(true)
    }
  }, [isInViewContent])


  return (
    <>
    <Navi className='noborder' Landing={viewLanding} About={viewAbout} Packs={viewPacks} Contact={viewContent} />
    <div className='container'>
      <div id="landing" className='background-knoopo'>
        <Reveal>
          <h1 ref={Landing} className='knoopo-text'>Knoopo</h1>
        </Reveal>
      </div>

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

      <div  className='guild-container'>
        <div id="guild" className='nav-to'></div>
        <Reveal> 
          <h3 className='title-text pack-text'>Guild</h3>
        </Reveal>
      </div>

      <div  className='texturepackslider-container'>
        <div>
          <div id="texture-packs" className='nav-to'></div>
          <Reveal>
            <h4 ref={Packs} className='title-text pack-text'>Texture Packs</h4>
          </Reveal>
          <div className='packslist'>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Grizzly</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Lovely Lime</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Esoteric</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Gilded</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Cuppa</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Elder Nerd</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Zippo</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Kleos</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Slut</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Dolomite</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Fiio</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Bean</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Pegasus</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Knoopo 32x</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel'>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly knoopo'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                  <div>
                    <Image src={grizzly} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='knoopo discord'/>
                  </div>
                </Carousel>

                <div className='text-holder'>
                  <p className='pack-name'>Knoopo 64x</p>
                  <div className='desc-down'>
                    <p className='pack-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
                  </div>
                </div>

              </div>
            </RevealSlide>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page