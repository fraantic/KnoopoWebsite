"use client";

import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'antd';
import { DotPosition } from 'antd/es/carousel';
import backgroundimg from '../../public/pngs/background.png'
import grizzly from '../../public/packimg/grizzly.png'
import Image from 'next/image'
import './landing.scss'
import Link from 'next/link';
import Reveal from '@/components/Reveal/Reveal'
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
          <p ref={Landing} className='knoopo-text'>Knoopo</p>
        </Reveal>
      </div>
      <div id="texture-container" className='texturepackslider-container'>
        <div>
          <Reveal>
            <p ref={Packs} className='title-text'>Texture Packs</p>
          </Reveal>
        </div>
        <Carousel className='box' autoplay dotPosition="bottom">
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
          <div>
            <Link href="">
              <Image alt="grizlly" width={0} height={0} sizes="100vw" style={{ width: '960px', height: 'auto' }} src={grizzly} className='fixz' />
            </Link>
          </div>
        </Carousel>
      </div>
    </div>
    </>
  )
}

export default Page