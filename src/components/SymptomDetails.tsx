import { FaShieldAlt, FaClipboardList, FaLightbulb, FaCompass, FaInfoCircle, FaPlus, FaClock } from "react-icons/fa";
import {motion}  from 'framer-motion'

type FormProps = {
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

    setIsSubmitted:React.Dispatch<React.SetStateAction<boolean>>

    historyList: any[]

    setHistoryList: React.Dispatch<React.SetStateAction<any[]>>
}

const SymptomDetails = ({formData,setIsSubmitted, historyList, setFormData}:FormProps) => {




return ( 
   <section className='w-full'>
      <div className="p-4 flex space-x-4 rounded-xl border border-teal-200 bg-teal-100/60 max-w-2xl mx-auto mt-6 shadow-lg">
         <div className="mt-2 w-8 h-8 p-2 rounded-full flex items-center justify-center bg-teal-400">
           <FaShieldAlt className="text-teal-800"/>
         </div>
         <div>
            <h3 className="font-bold text-xl text-teal-900">No Immediate Red Flags</h3>
            <p className="text-teal-700">Based on your input, there are no urgent warning signs. Continue monitoring and follow
               the recommendations below. If symptoms worsen or new ones appear, seek care.
            </p>
         </div>
      </div>
      <div className="p-4 flex flex-col space-y-3 rounded-lg border border-gray-200 bg-white max-w-2xl mx-auto mt-6 shadow-lg">
         <div className="flex space-x-4">
            <div className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-emerald-200/80">
            <FaClipboardList className="text-emerald-600"/>
            </div>
            <h3 className="font-bold text-xl text-gray-900">Summary</h3>
         </div>
            <p className="text-gray-500">You reported back pain lasting {formData['Duration']} with a severity of {formData['Severity']}/10. 
               Most acute back pain is muscular and improves with rest, ice/heat, and gentle movement. Watch for more symptoms that require
               prompt care.
            </p>
         <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
            <div className="bg-gray-100 rounded-lg p-2 flex flex-col space-y-2 flex-1">
               <h4 className="font-semibold text-xl text-gray-400">SYMPTOM</h4>
               <p className="text-gray-700 font-semibold text-lg">{formData['Name']}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-2 flex flex-col space-y-2 flex-1">
               <h4 className="font-semibold text-xl text-gray-400">DURATION</h4>
               <p className="text-gray-700 font-semibold text-lg">{formData['Duration']}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-2 flex flex-col space-y-2 flex-1">
               <h4 className="font-semibold text-xl text-gray-400">SEVERITY</h4>
               <p className="text-gray-700 font-semibold text-lg">{formData['Severity']}/10</p>
            </div>
         </div>
      </div>  
      <div className="p-4 flex flex-col space-y-3 rounded-lg border border-gray-200 bg-white max-w-2xl mx-auto mt-6 shadow-lg">
         <div className="flex space-x-4">
            <div className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-blue-300">
            <FaLightbulb className="text-blue-600"/>
            </div>
            <h3 className="font-bold text-xl text-gray-900">Recommendation</h3>
         </div>
            <p className="text-gray-500">Apply ice for the first 48 hours, then switch to gentle heat. Avoid heavy lifting and twisting.
               Maintain light movement like short walks. Over-the-counter-anti-inflammatories may help if safe.
               Gentle stretching once pain subsides.
            </p>
      </div> 
      <div className="p-4 flex flex-col space-y-3 rounded-lg border border-gray-200 bg-white max-w-2xl mx-auto mt-6 shadow-lg">
         <div className="flex space-x-4">
            <div className="w-8 h-8 p-2 rounded-full flex items-center justify-center bg-orange-300/80">
            <FaCompass className="text-orange-600"/>
            </div>
            <h3 className="font-bold text-xl text-gray-900">Guidance</h3>
         </div>
            <p className="text-gray-500">Maintain good posture, use lumbar support when sitting, and sleep on a firm mattress with a pillow under 
               your knees. If pain radiates down your leg, causes numbness, or persists beyond two weeks, see a  doctor or physical therapist.
            </p>
      </div>
      <div className="p-4 flex space-x-4 rounded-lg border border-gray-200 bg-gray-100/60 max-w-2xl mx-auto mt-6 shadow-lg">
         <div className="mt-2 w-8 h-8 p-2 rounded-full flex items-center justify-center bg-gray-400">
           <FaInfoCircle className="text-gray-800"/>
         </div>
         <div>
            <p className="text-gray-700"><span className="font-bold text-xl text-gray-900 mr-2">Disclaimer:</span>
            This response is generated for informational purposes only and is not a substitute for professional medical
            advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider
            with any questions you may have regarding a medical condition.
            </p>
         </div>
      </div> 
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-6 max-w-2xl mx-auto">
         <motion.button 
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9}}
            transition={{ duration: 0.3 }}
            onClick={() =>{
               setFormData({Name:'', Description:'', Duration:'', Severity:''})
               setIsSubmitted(prev => !prev)
            }}
            className='cursor-pointer flex-1 text-white font-semibold py-2 px-6 flex justify-center items-center rounded-3xl bg-emerald-700'>
            <FaPlus className="mr-2"/> Log Another Symptom
         </motion.button>
         <motion.button 
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9}}
            transition={{ duration: 0.3 }}
            className='cursor-pointer flex-1 text-black font-semibold py-2 px-6 flex justify-center items-center rounded-3xl bg-gray-300'>
            <FaClock className="mr-2"/> View History
         </motion.button>
      </div>
   </section> );
}
 
export default SymptomDetails;