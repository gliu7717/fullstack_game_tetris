import './index.css';
import { useEffect, useState } from "react"
import { createBlocks } from './createBlocks';
import { validateMove } from './validMove';
import { rotateBlocks } from './rotateBlocks';

const width = 18
const xoffset = 76
const yoffset = 79

function App() {
  const [blocks, setBlocks] = useState([])
  const [fields, setFields] = useState([])

  useEffect(() => {
    setBlocks(createBlocks())    
  }, [])

  const keyPress = (e) => {
    let dx = 0
    let canMove = false
    if (e.key === 'ArrowLeft') {
      canMove = validateMove(blocks,-1, 0)
      dx = -1
    } else if (e.key === 'ArrowRight') {
      canMove = validateMove(blocks,1, 0)
      dx = 1
    }
    else if (e.key === 'ArrowUp') {
      rotateBlocks(blocks)
      setBlocks([...blocks])
    }

    if( canMove ){
      blocks.forEach(function(block){
        block.positionX += dx 
      })
      setBlocks([...blocks])
    }
  }

  const tickMove = () => {
    let canMove = validateMove(blocks, 0, 1)
    if(canMove){
      blocks.forEach(function(block) {
        block.positionY ++
      });
    }
    else{
      let newfields = fields.concat(blocks)
      setFields(newfields)

      let newBlock = createBlocks()      
      setBlocks(newBlock)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setBlocks([...blocks])
      tickMove()
    }, 300)
    return () => clearInterval(timer)
  }, [blocks])

  return (
    <div className="App">
      <div className="bg">
        {fields.map((block,index) => (
            <img 
              className={block.cname}
              key = {index}
              src={block.image}
              style={{backgroundColor:block.color, width: block.width*width, height: block.height*width, position: 'absolute', 
              top: block.positionY * width + yoffset, left: block.positionX * width + xoffset}}
              alt={block.name}
              data-id={block.id   }
             />
        ))}

        {blocks.map((block,index) => (
          <img 
            className={block.cname}
            key = {index}
            src={block.image}
            style={{backgroundColor:block.color, 
                    width: block.width*width, 
                    height: block.height*width, 
                    position: 'absolute', 
                    top: block.positionY * width + yoffset, 
                    left: block.positionX * width + xoffset}}
            alt={block.name}
            data-id={block.id}
          />
        ))}
      </div>
      <br/> <br/>
      ~score~
    </div>  );
}
export default App;