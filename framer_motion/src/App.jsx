import React from 'react';
import { motion,useScroll} from 'motion/react';
import './App.css';
function App() {
  console.log(useScroll());
  // const {scrollYProgress} = useScroll();
  const scrollYProgress = useScroll().scrollYProgress
  return (
    <div>
      <div>
      {/* <motion.div
       className='box'
       initial={{
        x:400
       }}
       animate={{
        rotate:360,
        x:600
      }}
      transition={{
        duration:1,
        delay:1,
        repeat:Infinity,
        ease:'anticipate'
      }}

       >
         
      </motion.div> */}

      {/* <motion.div
      className='box'
      animate={{
        x:[0,800,800,0,0],
        y:[0,0,300,300,0],
        rotate:[0,360,0,-360,0]
      }}
      transition={{
        duration:4,
        delay:1
      }}
      >
          BOX
      </motion.div>

      <motion.div
      className='box'
      whileHover={{
        background:"red"
      }}
      whileTap={{
        scale:0.8
      }}
      >
          BOX
      </motion.div>

      <motion.div
       className="box"
       drag
       whileDrag={{
        scale:0.8
       }}
       dragConstraints={{
        left:0,
        right:70,
        bottom:50,
        top:0
       }}
       dragDirectionLock='true'
       >
      </motion.div> */}

</div>

      {/* // scroll functionality  */}


      <motion.div className="scroll"
      style={{
        scaleX:scrollYProgress
      }}
      >
      </motion.div>
      <h1>heading</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo. Quos voluptatem eos aut rem. Nobis expedita animi quisquam soluta suscipit nesciunt voluptatibus tenetur. Exercitationem iste et fugit maiores quasi?</p>

      </div>
  )
}

export default App
