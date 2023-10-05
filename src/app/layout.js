import React from 'react';

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
        
        
      </body>
      
    </html>
  )
}

export default RootLayout