import React from 'react';
import Sprite from '../sprite'


function Actor({
    sprite, 
    data, 
    position ={x: 0, y: 0} ,
    step = 0, 
    dir = 3
    }) 
    
    {
    const { h, w} = data;
    return (
        <div>
       
        <Sprite sprite={sprite}  
         
         position={position}
        
        data={{
            x: step * w,
            y: dir * h,
            w,
            h
          }}/>
        
          </div>
    )
}

export default Actor
