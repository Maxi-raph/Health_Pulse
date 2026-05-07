import { FaHeart } from 'react-icons/fa'
import TimelineCard from '../components/TimelineCard';

const PregnancyTimeline = () => {
    return ( <section className='bg-white w-full min-h-screen py-2'>
    <h1 className="text-center text-blue-500 text-xl font-bold mb-2">VitalAI</h1>
    <div className="w-full h-88 flex flex-col text-white gap-2 justify-center items-center
     bg-[url('assets/freestocks-ux53SGpRAHU-unsplash.jpg')] bg-gray-700/70 bg-cover bg-center bg-blend-overlay">
        <h2 className="text-3xl max-w-sm text-center font-semibold font-poppins ">
            Let's begin your pregnancy journey <FaHeart className='text-3xl inline' /></h2>
        <p>We'll help you track your baby's growth, visits, and milestones step by step</p>
    </div>
    <h3 className="font-bold text-xl mt-6 text-center px-6">To create your pregnancy timeline, choose how you want to start.</h3>
    <p className="text-gray-400 text-center px-6 mt-2">You can use your last menstrual period or your current pregnancy week.</p>
    <div className="flex justify-center gap-4 mt-4">
        <TimelineCard desc='dfdf'/>
    </div>
    </section> );
}
 
export default PregnancyTimeline;