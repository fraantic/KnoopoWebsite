import React from 'react';

import Footer from '@/components/Footer/Footer'

import './layout.scss'

const RootLayout = ({ children }) => {
  return (
    <html className='noborder'>

      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Knoopo</title>
      </head>

      <body className='noborder hide-scrollbar'>
        <div>{children}</div>
        <Footer/>
        
      </body>
      
    </html>
  )
}

export default RootLayout