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
      <div className='bg-gray-200  flex justify-center items-center w-[100%] h-[100vh] font-bold sm:text-2xl md:text-5xl lg:text-7xl'>
        <h1> {Ctime} </h1>
      </div>
     
    )
}

export default App;