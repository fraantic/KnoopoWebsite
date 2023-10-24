import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from '@/components/Reveal/Reveal'
import './landing.scss'

import email from '../../../public/pngs/email.png'

const ContactKnoopo = () => {
  return (
  <div id="contact-container" className='contact-container'>
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
  )
}

export default ContactKnoopo