import React, { useState } from 'react';

const File=({data})=> {
            const [expanded,setExpaned] = useState({});
        return (
            <div className='container' style={{padding:"10px"}}>
                {data.map((node)=>(
                    <div key={node.id}>
                       {node.IsFolder && <span onClick={()=> setExpaned((prev)=>({
                        ...prev,
                        [node.name]:!prev[node.name],
                       }))}>  {expanded[node.name] ? '-' : '+'}</span>}
                       <span>{node.name}</span>
                        {expanded && node?.children && <File data={node.children}/>}
                    </div>
                ))}

            </div>
        )
 
}

export default File;



 {/* {data.map((node)=>(
        <div>
         <li key={node.id}>{node.name}</li>
        </div>
    ))} */}