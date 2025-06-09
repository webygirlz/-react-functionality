import React, { useState ,lazy,Suspense} from 'react'
// import User from './user';
const User =lazy(()=>import('./user'));


function AppLazyLoading() {
    const [load,setLoad] = useState(false);
  return (
    <div>
        <h1>Hello react</h1>
        {/* {load ? <User/>:""} */}
        {
            load ?<Suspense fallback={<h4>Loading....</h4>}><User/></Suspense>:null 
        }
      <button onClick={()=> setLoad(true)}>Click</button>
    </div>
  )
}

export default AppLazyLoading;
