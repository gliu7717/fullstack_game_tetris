import blueBlock from './images/blue_block.png'
import redBlock from './images/red-block.png'
import yellowBlock from './images/yellow_block.png'
import orangeBlock from './images/orange_block.png'
import greenBlock from './images/green_block.png'
import purpleBlock from './images/purple-block.png'
import lightBlueBlock from './images/light_blue_block.png'

const offset =0
export const createBlocks = () =>{
    const blue_block = {
      id :1,
      image: blueBlock,
      positionX : 1 + offset,
      positionY: 0,
      width : 1,
      height :1
    }
    const red_block = {
      id :2,
      image: redBlock,
      positionX : 0+ offset,
      positionY: 1,
      width : 1,
      height :1,
    }
    const orange_block = {
      id :3,
      image: orangeBlock,
      positionX : 1 + offset,
      positionY: 1,
      width : 1,
      height :1,
    }
    const yellow_block = {
      id :4,
      image: yellowBlock,
      positionX : 1+ offset,
      positionY: 2,
      width : 1,
      height :1,
    }    
    const boardArrangement = []    
    boardArrangement.push(blue_block)
    boardArrangement.push(red_block)
    boardArrangement.push(orange_block)
    boardArrangement.push(yellow_block)
    return boardArrangement
  }

  