import './index.css';
import { useEffect, useState } from "react"
import { createBlocks } from './createBlocks';
import { validateMove } from './validMove';

const width = 18
const xoffset = 76
const yoffset = 79

function App() {
  const [blocks, setBlocks] = useState([])
  useEffect(() => {
    setBlocks(createBlocks())    
  }, [])

  const tickMove = () => {
    let canMove = validateMove(blocks, 0, 1)
    if(canMove){
      blocks.forEach(function(block) {
        block.positionY ++
      });
    }
    else{
      let newBlock = createBlocks()      
      setBlocks(newBlock)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setBlocks([...blocks])
      tickMove()
    }, 200)
    return () => clearInterval(timer)
  }, [blocks])

  return (
    <div className="App">
      <div className="bg">
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
