import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './Header.jsx'
// import './listItem.jsx'
// import Pricing from './pricing.jsx'
// import WorkWithUs from './WorkWithUs.jsx'



// function Form() {
//   const [inputValue, setInputValue] = useState('');

//   return (
   
//     {/* <div className=' flex items-center justify-center h-screen'>
//       <div className=' bg-blue-500 p-2 rounded-2xl text-2xl hover:bg-blue-400'>Tailwind CSS</div>
//     </div> */}

   
    
//   );
// }



function App() {
  const [Color, setColor] = useState("yellow")
  

  return (
    
    // <div className={`h-screen duration-200 bg-${Color}-300 flex items-end pb-12`}>
    <div className="h-screen duration-200 flex items-end pb-12" style={{backgroundColor: Color}}>
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl w-screen" >



    <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

<button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

<button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

    
    </div>
   </div>
    
  )
}

export default App
