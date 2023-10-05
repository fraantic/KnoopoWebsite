"use client";

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useInView } from "framer-motion"
import { Carousel } from 'antd';
import './landing.scss'

import Reveal from '@/components/Reveal/Reveal'
import RevealSlide from '@/components/Reveal/Revealbox'
import Navi from '@/components/Navi/Navi'
import Footer from '@/components/Footer/Footer'

import youtube from '../../public/svgs/youtube.svg'
import twitter from '../../public/svgs/twitter.svg'
import download from '../../public/svgs/download.svg'
import twitch from '../../public/svgs/twitch.svg'
import email from '../../public/pngs/email.png'

import knoopo from '../../public/pngs/knoopoPFP.png'
import fraantic from '../../public/pngs/fraantic.png'
import sumo from '../../public/pngs/sumo.png'
import blocks from '../../public/pngs/blocks.png'
import iman from '../../public/pngs/iman.png'
import miro from '../../public/pngs/miro.png'
import fatasi from '../../public/pngs/fantasi.png'
import chub from '../../public/pngs/chub.png'

import grizzly from '../../public/packimg/grizzly.png'

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
                <Reveal>
                  <div className='staff-display'>
                    <Image src={knoopo} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >OWNER</p>
                      <p className='desc-text-staff' >Knoopo</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={fraantic} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >H-Admin</p>
                      <p className='desc-text-staff' >fraantic</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className='staff-flex'>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={fatasi} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >Admin</p>
                      <p className='desc-text-staff' >Fantasi</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={blocks} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >Admin</p>
                      <p className='desc-text-staff' >blocks</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={sumo} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >Admin</p>
                      <p className='desc-text-staff' >sumo</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={iman} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >Admin</p>
                      <p className='desc-text-staff' >iman</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={miro} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >Admin</p>
                      <p className='desc-text-staff' >miro</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal>
                  <div className='staff-display'>
                    <Image src={miro} width={0} height={0} sizes="100vw" style={{ width: '45px', height: '45px' }} className='profile-image' alt='knoopo youtube'/>
                    <div className='staff-desc-container'>
                      <p className='desc-text-staff' >Admin</p>
                      <p className='desc-text-staff' >miro</p>
                    </div>
                  </div>
                </Reveal>
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

      <div  className='texturepackslider-container'>
        <div>
          <div id="texture-packs" className='nav-to'></div>
          <Reveal>
            <h4 ref={Packs} className='title-text pack-text'>Texture Packs</h4>
          </Reveal>
          <div className='packslist'>
            <RevealSlide >
              <div className='pack-container'>
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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
                <Carousel className='pack-carosel'swipeToSlide draggable>
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
                <Carousel className='pack-carosel' swipeToSlide draggable>
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

      <div className='contact-container'>
        <div id="contact" className='nav-to'></div>
        <div className='contact-item-contaier'>
          <div>
            <Reveal>
              <p className='big-contact'>Contact</p> 
              <p className='green-dot'>.</p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p className='contact-text'>Drop me an email if you wish to get in touch. You can also find me on 
                <Link className='nodecor' href="https://discord.gg/5fZvperhgh">
                &nbsp;Discord&nbsp;
                </Link>
                or 
                <Link className='nodecor' href="https://twitter.com/Knoopo1" >
                &nbsp;Twitter&nbsp;
                </Link>
                if thats more your style
              </p>
            </Reveal>
          </div>
          <div className='email-container'>
          <Reveal>
              <Image src={email} width={0} height={0} sizes="100vw" style={{ width: '30px', height: '30px' }} alt='download grizzly'/>
          </Reveal>
          <Reveal>
            <Link className='nodec email-text' href="mailto:knoopobear@gmail.com"> knoopobear@gmail.com </Link>
          </Reveal>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Page