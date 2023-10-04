"use client";

import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd';
import { DotPosition } from 'antd/es/carousel';
import backgroundimg from '../../public/pngs/background.png'
import grizzly from '../../public/packimg/grizzly.png'
import download from '../../public/svgs/download.svg'
import Image from 'next/image'
import './landing.scss'
import Link from 'next/link';
import Reveal from '@/components/Reveal/Reveal'
import RevealSlide from '@/components/Reveal/RevealSlide'
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
      <div id="knoopo-text" className='background-knoopo'>
        <Reveal>
          <h1 ref={Landing} className='knoopo-text'>Knoopo</h1>
        </Reveal>
      </div>  
      <div id="texture-container" className='texturepackslider-container'>
        <div>
          <Reveal>
            <h2 ref={Packs} className='title-text pack-text'>Texture Packs</h2>
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