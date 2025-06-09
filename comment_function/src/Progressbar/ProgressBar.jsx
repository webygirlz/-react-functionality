import { useState } from 'react';
import './Style.css'
function ProgressBar({progress,tatalTask,taskprogress}) {


    const taskPersentage = (taskprogress/tatalTask) *100;
    
  return (
    <div className='contain' style={{width:`${tatalTask}%`}}>
     <div className='con' style={{width:`${taskPersentage}%`}}>
        {taskPersentage}%
     </div>
    </div>
  )
}


export  function ProgressBarComponent(){
    const [taskprogress,setTaskProgress] = useState(2);
    const [tatalTask,setTotalTask] = useState(50);

    const progress =[90,80,50,70,4];
      return(
        <>
        <div>
          {progress.map((value)=>(
            <ProgressBar progress={value} key={value} taskprogress={taskprogress} tatalTask={tatalTask}/>
          ))}
        </div>

        <button>done task</button>
        </>
      )
}