import { useState } from "react"


function App() {

  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 " 
      style={{backgroundColor: color }} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap gap-2 justify-center shadow-xl bg-white px-3 py-2 rounded-full">
            <button 
            onClick={() => setcolor("red")}
            className="outline-none px-4 rounded-full text-white"
            style={{backgroundColor: "red"}}
            >
              red
            </button>

            <button 
            onClick={() => setcolor("green")}
            className="outline-none px-4 rounded-full text-white"
            style={{backgroundColor: "green"}}
            >
              green
            </button>

            <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 rounded-full text-white"
            style={{backgroundColor: "blue"}}
            >
              blue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
