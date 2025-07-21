import { useState } from 'react';
import './index.css'
function App(){
    let time = new Date().toLocaleTimeString();
    
       const [Ctime, setCtime] = useState(time)

       const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
       };

       setInterval(UpdateTime, 1000)
    return(
      <div className='bg-gray-200 sm:w-[600px] md:[800px] lg:w-[1000px] m flex justify-center items-center xl:w-[100%] h-[100vh] font-bold text-7xl'>
        <h1> {Ctime} </h1>
      </div>
     
    )
}

export default App;