'use client'
import { useState } from "react"
import History from "./History"
import PatientCard from "./card"
const Patient = ()=>{
    const data = [{date:'2020020202',doctor:'ABAA',desctription:'.......'}]
    const [data2,setData] = useState(data)
    const [add,setAdd] = useState(false)
    const [desc, setDesc]=useState("")

    const handleAddDate = ()=>{
        const date = new Date().toLocaleDateString()
        const doctor = 'ali'
        setData([...data2,{date,doctor,desctription:desc}])
        setAdd(false)
        setDesc("")
        
    }    
    const handleAddAdd = ()=>{
        setAdd(true)
    }
    return(
        <div className="relative w-screen h-screen">
            <PatientCard name='Thamer wardah Hussien' age='31' sex='Male' city='Maysan'/>
            <div className="flex flex-col gap-4 mt-8">
                {data2.map((item,index)=><History key={index} date={item.date} doctor={item.doctor} desc={item.desctription} />)}
            </div>
            <div>
                <button
                onClick={handleAddAdd}
                 className="text-sm font-bold text-white bg-sky-500 rounded-lg px-2 hover:bg-sky-300">New date</button>
            </div>

            {add &&
            <div className="flex gap-8 justify-center items-center absolute  h-full w-full top-0 right-0 bg-gray-200/80 px-10 ">
                <textarea
                onChange={(e)=>setDesc(e.target.value)}
                 placeholder="Desctription of the patient case"
                 className="border-2 rounded-sm  flex-1 p-4 min-h-80"
                 />
             <button
                onClick={handleAddDate}
                 className="text-sm font-bold text-white bg-sky-500 rounded-lg px-2 hover:bg-sky-300">Conform</button>
                 </div> }
      </div>    
    )
}


export default Patient