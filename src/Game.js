import React from 'react';

import orhe from './components/sprite/sprites/skins/orhe.png'

import Player from './components/player'
import Sprite from './components/sprite'

function Game() {
  const data = {
    h: 150,
    w: 170
  }
    return (
        <div className='zone-container'>
          <Player sprite={orhe}  data={data}/>
          </div>
    )
}

export default Game
