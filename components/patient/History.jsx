const History = ({date,doctor,desc})=>{
    return(
        <div className="flex gap-6 text-sm font-semibold bg-blue-100 px-4 py-1 ">
            <h2 className="underline ">{date}</h2>
            <h2 className="underline  ">Dr.{doctor}</h2>
            <h3 className="text-justify pl-6 pr-6">{desc}</h3>
        </div>
    )
}

export default History