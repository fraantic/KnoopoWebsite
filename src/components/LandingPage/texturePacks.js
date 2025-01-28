import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from '@/components/Reveal/Reveal'
import RevealSlide from '@/components/Reveal/Revealbox'
import { Carousel } from 'antd';
import download from '../../../public/svgs/download.svg' 

async function getData() {
  const res1 = await fetch(
    "https://knoopobackend.onrender.com/api/packs?populate=*",
    { next: { revalidate: 30 } }
  );
  return res1.json()
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function TexturePacks() {
  const packs = await getData()

  console.log(packs)
  return (
    <div  className='texturepackslider-container'>
      <div>
        <div id="texture-packs" className='nav-to'></div>

        <Reveal>
          <h4 className='title-text pack-text'>Texture Packs</h4>
        </Reveal>

        <div className='packslist'>
          { packs.data.map((packdata, index) => (
            <PackDisplay Pack={packdata.attributes.name} Desc={packdata.attributes.description} Link={packdata.attributes.link} Images={packdata.attributes.images} key={`${index}`}/>
          ))}
        </div>

      </div>
    </div>
  )
}

const PackDisplay = (props) => {
  console.log(props)
  return (
    <RevealSlide >
      <div className='pack-container'>
        
        <Carousel className='pack-carosel' swipeToSlide draggable>
            {props.Images.data.map((data) => (
              <div key={data.id}>
                <Image src={`${data.attributes.url}`} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly download'/>
              </div>
            ))}
        </Carousel>

        <div className='text-holder'>
          <p className='pack-name'>{props.Pack}</p>
          <div className='desc-down'>
            <p className='pack-desc'>{props.Desc}</p>
            <Link href={`${props.Link}`}>
              <Image className="download-image" src={download} width={0} height={0} sizes="100vw" style={{ width: '32px', height: '32px' }} alt='download grizzly'/>
            </Link>
          </div>
        </div>

      </div>
    </RevealSlide>
  )
}
