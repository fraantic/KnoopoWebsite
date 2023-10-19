import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from '@/components/Reveal/Reveal'
import RevealSlide from '@/components/Reveal/Revealbox'
import { Carousel } from 'antd';
import download from '../../../public/svgs/download.svg' 

//Grizzly images
import grizzly from '../../../public/packimg/Grizzly/grizzly.png'

//Lovely Lime

//Esoteric

//Gilded

//Cuppa

//Elder Nerd

//Zippo

//Kleos

//Slut

//Dolomite

//Fiio

//bean

//Pegasus

//Knoopo 32x

//knoopo 64x

const PackDisplay = (props) => {
  console.log(props)
  return (
    <RevealSlide >
      <div className='pack-container'>
        
        <Carousel className='pack-carosel' swipeToSlide draggable>
            {props.Images.map((data) => (
              <div key={data.id}>
                <Image src={data.name} width={0} height={0} sizes="100vw" style={{ width: '320px', height: '180px' }} alt='grizzly download'/>
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

const TexturePacks = () => {

  const packData = [
    {
      packnum: 1,
      pack: "Grizzly",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/,g2rekseemdpl9cq/%C2%A74Aphotic_%C2%A72%C2%A7lX_%C2%A79Knoopo_%C2%A77%2864x%29.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 2,
      pack: "Lovely Lime",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/hs9y6dlx1d6vxk9/%C2%A7aLovely%C2%A72Lime%C2%A78%2832x%29.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 3,
      pack: "Esoteric",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/nxojwspti35f1ka/%21_%C2%A73ESO%C2%A79TER%C2%A71IC_%C2%A7816x.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 4,
      pack: "Gilded",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/oeazt6bmsonx0g6/%C2%A7eGIL%C2%A76DED_%C2%A71Grenadier.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 5,
      pack: "Cuppa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "ttps://www.mediafire.com/file/e9a077ude8fzlrl/!_§bCUPPA_§3(64x).zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 6,
      pack: "Elder Nerd",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/1q48n3fouzogfqj/%C2%A75Elder_Nerd_%C2%A78%2832x%29_-_No_Sounds.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 7,
      pack: "Zippo",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/gq6y62dg0crqeqn/%C2%A71ZIPPO_%C2%A79300_v2.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },{
      packnum: 8,
      pack: "Kleos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/e6g1xx313yidgdq/%C2%A73Kleos__%C2%A79%28Mashup_64x%29.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 9,
      pack: "Slut",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/2qr0br5y8i2uvry/SL*t.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 10,
      pack: "Dolomite",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/n91t5yk3ulxqlcd/%C2%A7cDolomite_%C2%A7716x_%C2%A78By_%C2%A78Knoopo.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 11,
      pack: "Fiio",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/dw85979jv835a6b/FIIO.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 12,
      pack: "bean",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/uzr2odoj6l8difu/%C2%A74Bean_%C2%A77%2832x%29.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 13,
      pack: "Pegasus",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      Link: "https://www.mediafire.com/file/c75ots1lgqareh7/%C2%A7bPegasus_%C2%A73%5BMashup%5D.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 14,
      pack: "Knoopo 32x",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/,g2rekseemdpl9cq/%C2%A74Aphotic_%C2%A72%C2%A7lX_%C2%A79Knoopo_%C2%A77%2864x%29.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 15,
      pack: "knoopo 64x",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/,g2rekseemdpl9cq/%C2%A74Aphotic_%C2%A72%C2%A7lX_%C2%A79Knoopo_%C2%A77%2864x%29.zip/file",
      img: [
      { id: 1, name: grizzly, alt: "grizzly download"},
      { id: 2, name: grizzly, alt: "grizzly knoopo"}]
    }
  ]

  console.log(packData)

  return (
    <div  className='texturepackslider-container'>
      <div>
        <div id="texture-packs" className='nav-to'></div>

        <Reveal>
          <h4 className='title-text pack-text'>Texture Packs</h4>
        </Reveal>

        <div className='packslist'>
          { packData.map((packdata) => (
            <PackDisplay Pack={packdata.pack} Desc={packdata.desc} Link={packdata.link} Images={packdata.img} key={packdata.packnum}/>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TexturePacks