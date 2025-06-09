import React, { useState } from 'react'
import File from './File';
import jsondata from './data.json';

function AppFile() {
     const [data,setData] = useState(jsondata);
        console.log(data)
  return (
    <File data={data}/>
  )
}

export default AppFile;
