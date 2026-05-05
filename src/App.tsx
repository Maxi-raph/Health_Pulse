import { useState, useEffect } from 'react'
import {motion}  from 'framer-motion'
import SymptomForm from './components/SymptomForm'
import SymptomDetails from './components/SymptomDetails'
import './App.css'
import { FaCaretRight } from 'react-icons/fa'

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({Name:'', Description:'', Duration:'', Severity:''})
  const [historyList, setHistoryList] = useState<any[]>([])

  useEffect(()=> window.scrollTo(0,0) ,[isSubmitted])
 

  return (
    <section className='bg-teal-50 w-full min-h-screen px-6 py-6'>
      <div className="flex flex-col mx-auto max-w-2xl">
        <div className="flex mb-2 items-center justify-between">
          <div className='flex items-center space-x-2'>
            <a href='/' className='text-gray-400 font-semibold'>Home</a>
            <FaCaretRight className='text-sm' />
            <p className='text-black font-semibold'>Symptoms Log</p>
          </div>
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9}}
              transition={{ duration: 0.3 }}
              className='cursor-pointer text-white font-semibold py-2 px-6 flex justify-center items-center rounded-lg bg-emerald-700'>
              Symptoms Log
            </motion.button>
        </div>
        <h2 className="text-2xl font-bold mt-2">Log a Symptom</h2>
        <p className="text-gray-400 mt-2">Describe what you are feeling and get personalized health insights</p>
      </div>
      {isSubmitted
      ? <SymptomDetails formData={formData} setFormData={setFormData} setIsSubmitted={setIsSubmitted}  setHistoryList={setHistoryList} historyList={historyList}/>
      : <SymptomForm isAnalyzing={isAnalyzing} setIsAnalyzing={setIsAnalyzing} setHistoryList={setHistoryList} setIsSubmitted={setIsSubmitted} formData={formData} setFormData={setFormData} />}
    </section>
  )
}

export default App
