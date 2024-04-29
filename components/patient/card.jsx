const PatientCard = ({name,age,sex,city})=>{
    return(
        <div>
            <div className="flex justify-between items-center bg-gray-300 px-4 py-1 rounded-md text-sm font-semibold">
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
                <h1>Sex: {sex}</h1>
                <h1>City: {city}</h1>
            </div>
        </div>
    )
}
export default PatientCard