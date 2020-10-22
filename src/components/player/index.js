import React from 'react';
import Actor from '../actor';
import useKeyPress from '../hooks/use-key-press';
import useWalk from '../hooks/use-walk'

function Player({sprite}) {
    const { dir, step, walk , position} = useWalk(3)
    const data = {
        h: 205,
        w: 160
      }

      const directions = {
          down: 0, 
          left: 1,
          right: 2,
          up: 3
      }

      useKeyPress((e) => {
         
         walk(e.key.replace("Arrow", "").toLowerCase())
        
         e.preventDefault();
      })

    return (
        
             <div>
                 {console.log(position)}
             <Actor  sprite={sprite} data={data} step={step} dir={dir} position={position}/> 
             </div>
    )
}

export default Player
