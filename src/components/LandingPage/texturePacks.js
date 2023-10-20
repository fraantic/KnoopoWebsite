import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from '@/components/Reveal/Reveal'
import RevealSlide from '@/components/Reveal/Revealbox'
import { Carousel } from 'antd';
import download from '../../../public/svgs/download.svg' 

//Grizzly images
import grizzly from '../../../public/packimg/Grizzly/thumbnail.png'
import showcaseGrizzly from '../../../public/packimg/Grizzly/showcase.png'

//Lovely Lime
import Lime from '../../../public/packimg/lime/pack.png'
import showcaseLime from '../../../public/packimg/lime/showcase.png'
import thumbnailLime from '../../../public/packimg/lime/thumbnail.jpg'

//Esoteric
import Esoteric from '../../../public/packimg/esoteric/pack.png'
import showcaseEsoteric from '../../../public/packimg/esoteric/showcase.png'
import motion1Esoteric from '../../../public/packimg/esoteric/motion1.jpeg'
import motion2Esoteric from '../../../public/packimg/esoteric/motion2.jpeg'
import motion3Esoteric from '../../../public/packimg/esoteric/motion3.jpeg'

//Gilded
import Gilded from '../../../public/packimg/gilded/showcase.png'
import showcaseGilded from '../../../public/packimg/gilded/showcase.png'
import thumbnailGilded from '../../../public/packimg/gilded/thumbnail.png'

//Cuppa
import Cuppa from '../../../public/packimg/cuppa/pack.png'
import showcaseCuppa from '../../../public/packimg/cuppa/showcase.png'

//Elder Nerd
import ENerd from '../../../public/packimg/Enerd/pack.png'
import showcaseENerd from '../../../public/packimg/Enerd/showcase.png'

//Zippo
import Zippo from '../../../public/packimg/zippo/pack.png'
import showcaseZippo from '../../../public/packimg/zippo/showcase.png'

//Kleos
import Kleos from '../../../public/packimg/kleos/pack.png'
import showcaseKleos from '../../../public/packimg/kleos/showcase.png'
import thumbnailKleos from '../../../public/packimg/kleos/thumbnail.jpg'

//Slut
import Slut from '../../../public/packimg/slut/pack.jpg'
import showcaseSlut from '../../../public/packimg/slut/showcase.png'

//Dolomite
import Dolomite from '../../../public/packimg/dolomite/pack.png'
import showcaseDolomite from '../../../public/packimg/dolomite/showcase.png'

//Fiio
import Fiio from '../../../public/packimg/fiio/pack.png'
import showcaseFiio from '../../../public/packimg/fiio/showcase.png'

//bean
import bean from '../../../public/packimg/bean/pack.png'
import showcasebean from '../../../public/packimg/bean/showcase.png'

//Pegasus
import Pegasus from '../../../public/packimg/pegasus/pack.png'
import showcasePegasus from '../../../public/packimg/pegasus/showcase.png'

//Knoopo 32x
import Knoopo32x from '../../../public/packimg/knoopo32x/pack.png'
import showcaseKnoopo32x from '../../../public/packimg/knoopo32x/showcase.png'

//knoopo 64x
import knoopo64x from '../../../public/packimg/knoopo64x/pack.png'
import showcaseknoopo64x from '../../../public/packimg/knoopo64x/showcase.png'

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
      { id: 2, name: showcaseGrizzly, alt: "grizzly knoopo"}]
    },
    {
      packnum: 2,
      pack: "Lovely Lime",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/hs9y6dlx1d6vxk9/%C2%A7aLovely%C2%A72Lime%C2%A78%2832x%29.zip/file",
      img: [
      { id: 1, name: thumbnailLime, alt: "Lime knoopo"},
      { id: 2, name: Lime, alt: "Lovely Lime download"},
      { id: 3, name: showcaseLime, alt: "Lovely Lime knoopo"}]
    },
    {
      packnum: 3,
      pack: "Esoteric",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/nxojwspti35f1ka/%21_%C2%A73ESO%C2%A79TER%C2%A71IC_%C2%A7816x.zip/file",
      img: [
      { id: 1, name: Esoteric, alt: "Esoteric download"},
      { id: 2, name: showcaseEsoteric, alt: "Esoteric knoopo"},
      { id: 3, name: motion1Esoteric, alt: "Ranked bedwars Pack"},
      { id: 4, name: motion2Esoteric, alt: "Ranked bedwars Pack 32x"},
      { id: 5, name: motion3Esoteric, alt: "Ranked bedwars Pack download"}]
    },
    {
      packnum: 4,
      pack: "Gilded",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/oeazt6bmsonx0g6/%C2%A7eGIL%C2%A76DED_%C2%A71Grenadier.zip/file",
      img: [
      { id: 1, name: thumbnailGilded, alt: "Gilded download"},
      { id: 2, name: Gilded, alt: "Gilded download"},
      { id: 3, name: showcaseGilded, alt: "Gilded knoopo"}]
    },
    {
      packnum: 5,
      pack: "Cuppa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "ttps://www.mediafire.com/file/e9a077ude8fzlrl/!_§bCUPPA_§3(64x).zip/file",
      img: [
      { id: 1, name: Cuppa, alt: "Cuppa download"},
      { id: 2, name: showcaseCuppa, alt: "Cuppa knoopo"}]
    },
    {
      packnum: 6,
      pack: "Elder Nerd",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/1q48n3fouzogfqj/%C2%A75Elder_Nerd_%C2%A78%2832x%29_-_No_Sounds.zip/file",
      img: [
      { id: 1, name: ENerd, alt: "Elder Nerd download"},
      { id: 2, name: showcaseENerd, alt: "Elder Nerd knoopo"}]
    },
    {
      packnum: 7,
      pack: "Zippo",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/gq6y62dg0crqeqn/%C2%A71ZIPPO_%C2%A79300_v2.zip/file",
      img: [
      { id: 1, name: Zippo, alt: "Zippo download"},
      { id: 2, name: showcaseZippo, alt: "Zippo knoopo"}]
    },{
      packnum: 8,
      pack: "Kleos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/e6g1xx313yidgdq/%C2%A73Kleos__%C2%A79%28Mashup_64x%29.zip/file",
      img: [
      { id: 1, name: thumbnailKleos, alt: "Kleos download"},
      { id: 2, name: Kleos, alt: "Kleos download"},
      { id: 3, name: showcaseKleos, alt: "Kleos knoopo"}]
    },
    {
      packnum: 9,
      pack: "Slvt",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/2qr0br5y8i2uvry/SL*t.zip/file",
      img: [
      { id: 1, name: Slut, alt: "Slut download"},
      { id: 2, name: showcaseSlut, alt: "Slut knoopo"}]
    },
    {
      packnum: 10,
      pack: "Dolomite",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/n91t5yk3ulxqlcd/%C2%A7cDolomite_%C2%A7716x_%C2%A78By_%C2%A78Knoopo.zip/file",
      img: [
      { id: 1, name: Dolomite, alt: "Dolomite download"},
      { id: 2, name: showcaseDolomite, alt: "Dolomite knoopo"}]
    },
    {
      packnum: 11,
      pack: "Fiio",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/dw85979jv835a6b/FIIO.zip/file",
      img: [
      { id: 1, name: Fiio, alt: "Fiio download"},
      { id: 2, name: showcaseFiio, alt: "Fiio knoopo"}]
    },
    {
      packnum: 12,
      pack: "bean",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/uzr2odoj6l8difu/%C2%A74Bean_%C2%A77%2832x%29.zip/file",
      img: [
      { id: 1, name: bean, alt: "bean download"},
      { id: 2, name: showcasebean, alt: "bean knoopo"}]
    },
    {
      packnum: 13,
      pack: "Pegasus",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      Link: "https://www.mediafire.com/file/c75ots1lgqareh7/%C2%A7bPegasus_%C2%A73%5BMashup%5D.zip/file",
      img: [
      { id: 1, name: Pegasus, alt: "Pegasus download"},
      { id: 2, name: showcasePegasus, alt: "Pegasus knoopo"}]
    },
    {
      packnum: 14,
      pack: "Knoopo 32x",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/,g2rekseemdpl9cq/%C2%A74Aphotic_%C2%A72%C2%A7lX_%C2%A79Knoopo_%C2%A77%2864x%29.zip/file",
      img: [
      { id: 1, name: Knoopo32x, alt: "Knoopo 32x download"},
      { id: 2, name: showcaseKnoopo32x, alt: "Knoopo 32x knoopo"}]
    },
    {
      packnum: 15,
      pack: "knoopo 64x",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
      link: "https://www.mediafire.com/file/,g2rekseemdpl9cq/%C2%A74Aphotic_%C2%A72%C2%A7lX_%C2%A79Knoopo_%C2%A77%2864x%29.zip/file",
      img: [
      { id: 1, name: knoopo64x, alt: "knoopo 64x download"},
      { id: 2, name: showcaseknoopo64x, alt: "knoopo 64x knoopo"}]
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