import React from 'react';
import Head from 'next/head';

import './layout.scss'

export const metadata = {
  title: 'Knoopo',
  description: 'Subscribe to knoopo',
  icons: {
    icon: "./icon.ico"
  } 
}

const RootLayout = ({ children }) => {
  return (
    <html className='noborder'>

      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Knoopo</title>
        <link rel="icon" href="../../public/favicon/favicon.ico" sizes="any" />
      </Head>

      <body className='noborder hide-scrollbar'>
        <div>{children}</div>
        
        
      </body>
      
    </html>
  )
}

export default RootLayout