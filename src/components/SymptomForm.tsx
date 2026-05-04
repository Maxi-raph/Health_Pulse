import { FaLaptopMedical } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

type Props = {
    isAnalyzing: boolean

    setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>

    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>

    formData: {  
    Name: string;
    Description: string;
    Duration: string;
    Severity: string;}

    setFormData:  React.Dispatch<React.SetStateAction<{
    Name: string;
    Description: string;
    Duration: string;
    Severity: string;
    }>>

    setHistoryList: React.Dispatch<React.SetStateAction<any[]>>
}

const SymptomForm = ({isAnalyzing,setIsAnalyzing,setIsSubmitted,formData,setFormData,setHistoryList}:Props) => {


const severityScale: Record<number, number>= {
     0:0, 
     1:10,
     2:20,
     3:30,
     4:40,
     5:50,
     6:60,
     7:70,
     8:80,
     9:90,
     10:100
    }
  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleDescriptionChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleDurationChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
  }

  const handleSeverityChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)
    if (isNaN(value)) value = 0
    value = Math.min(10, Math.max(0, value))
    setFormData(prev => ({...prev, [e.target.name]:value}))
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault()
   setIsAnalyzing((prev) => !prev)
   setHistoryList((prev) => [...prev, formData])

   setTimeout(()=>{
    setIsAnalyzing((prev) => !prev)
    setIsSubmitted((prev) => !prev)
   },3000)
  }

return ( <form className="bg-white px-3 py-6 rounded-lg max-w-2xl mx-auto mt-4 border border-gray-200 shadow-lg" onSubmit={handleSubmit}>
     
     <div className="flex flex-col space-y-1">
        <label htmlFor="Name" className="font-semibold">Symptom Name <span className="text-red-600 inline-block ml-1">*</span></label>
        <input type="text" name="Name" value={formData['Name']} onChange={handleNameChange} className="px-4 py-2 rounded-lg border border-gray-400 font-semibold outline-0 focus:ring focus:ring-teal-400 placeholder:text-gray-400 placeholder:font-normal"
        placeholder="Write symptom name" required/>
     </div>
     <div className="flex flex-col space-y-1 mt-6">
        <label htmlFor="Description" className="font-semibold">Description<span className="text-red-600 inline-block ml-1">*</span></label>
        <textarea name="Description" value={formData['Description']} onChange={handleDescriptionChange} className="px-4 py-2 rounded-lg border border-gray-400 font-semibold outline-0 focus:ring focus:ring-teal-400 placeholder:text-gray-400 placeholder:font-normal" 
        placeholder="Describe how it feels,where it is located, what makes it better or worse..." required/>
     </div>     
     <div className="flex flex-col space-y-1 mt-6">
        <label htmlFor="Duration" className="font-semibold">Duration <span className="text-red-600 inline-block ml-1">*</span></label>
        <input type="text" name="Duration" value={formData['Duration']} onChange={handleDurationChange} className="px-4 py-2 rounded-lg border border-gray-400 font-semibold outline-0 focus:ring focus:ring-teal-400 placeholder:text-gray-400 placeholder:font-normal"
        placeholder="e.g. 2 days, 1 week, a few hours" required/>
     </div>
     <div className="flex space-x-2 mt-6 font-semibold">
        <label htmlFor="Severity">Severity: </label>
        <input  type="text"
         min='0' 
         max='10'
         value={formData['Severity']}
         onChange={handleSeverityChange}
         name="Severity"
         placeholder="0"
         className="text-green-700 w-6 h-6 text-center mr-1 border border-gray-400 rounded-sm outline-0 focus:ring focus:ring-teal-400"
         required/>
         <span className="ml-1">/ 10</span>
     </div>

        <div className="w-full relative h-2 rounded-lg bg-gray-300 mt-4">
            <span 
               className={`absolute -top-1 block w-4 h-4 rounded-full bg-green-700`}
               style={{ 
                  left: `${severityScale[Number(formData['Severity'])] || 0}%`,
                  transform: 'translateX(-50%)'
               }}>
            </span>
        </div>
        <div className="flex justify-between mt-2">
            <p className="text-gray-400">Mid(1)</p>
            <p className="text-gray-400">Moderate(5)</p>
            <p className="text-gray-400">Severe(10)</p>
        </div>
     {isAnalyzing 

     ?  <button type="submit" className={`w-full flex justify-center items-center py-2 px-3 rounded-xl bg-teal-500 text-white
      font-semibold mt-6 cursor-pointer`} disabled={true}><ClipLoader className="mr-2" size={14} color="white"/> Analyzing </button>
     
      :    <button type="submit" className={`w-full flex justify-center items-center py-2 px-3 rounded-xl bg-teal-700 text-white
      font-semibold mt-6 cursor-pointer`}><FaLaptopMedical  className="mr-2"/> Analyze Symptom </button>}
    </form> );
}
 
export default SymptomForm;