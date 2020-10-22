import React from 'react'


import './Index.css'

export default function Sprite({sprite, data, position }) {
    const {x, y, h, w} = data;
    return (
        <div>
            
        <div 
          style={{
              position: "absolute",
              top: position.y,
              left: position.x,
              display: 'inline-block',
              height: `${h}px`,
              width: `${w}px`,
              backgroundImage: `url(${sprite})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `-${x}px -${y}px`
          }}
        >
         </div>
         </div>
    )
}



