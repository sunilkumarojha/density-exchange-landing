
import { motion } from 'framer-motion';
const Vacancy = () => {
    return (
        <motion.section 
        initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{once:true}}
      className="md:px-40 flex  mt-24 font-[Montserrat] flex-col w-[85%] gap-8">
            <div className='flex md:justify-start justify-center items-start'>
                <motion.h1 
                initial={{ x: '-200', scale: 0,opacity:0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
      
                }}
                whileInView={{ x: 0, scale: 1,opacity:1 }}
                viewport={{ once: true }}
                className='md:text-4xl text-2xl font-bold text-black md:ml-2 md:text-start text-center'>Open Vacancies</motion.h1>
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center md:gap-8 gap-4'>
                <motion.div 
                initial={{ scale: 0, opacity:0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
      
                }}
                whileInView={{ scale: 1,opacity:1 }}
                viewport={{ once: true }}
                className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
                    <h1 className='text-lg font-bold text-black mb-3'>Senior Engineer</h1>
                    <ul className="list-disc">
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Full Time Position</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Berlin</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">€65-85k</li>
                    </ul>
                    <div className='flex justify-start items-center'>

                    <button className='bg-black text-white font-semibold text-sm rounded-[50px] py-3 px-4 mt-6 duration-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>See Details</button>
                    </div>
                </motion.div>
                <motion.div 
                 initial={{ scale: 0,opacity:0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
      
                }}
                whileInView={{ scale: 1,opacity:1 }}
                viewport={{ once: true }}
                className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
                    <h1 className='text-lg font-bold text-black mb-3'>Senior Designer</h1>
                    <ul className="list-disc">
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Full Time Position</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Remote</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">€45-65k</li>
                    </ul>
                    <div className='flex justify-start items-center'>

                    <button className='bg-black text-white font-semibold text-sm rounded-[50px] py-3 px-4 mt-6 duration-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>See Details</button>
                    </div>
                </motion.div>
                <motion.div 
                 initial={{ scale: 0,opacity:0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
      
                }}
                whileInView={{ scale: 1,opacity:1 }}
                viewport={{ once: true }}
                className='flex flex-[0.33] flex-col bg-[#FEFBEC] rounded-xl px-6 py-8'>
                    <h1 className='text-lg font-bold text-black mb-3'>Superstar Intern</h1>
                    <ul className="list-disc">
                        <li className="ml-4 text-sm font-semibold text-[#535353]">Part Time Position</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">England</li>
                        <li className="ml-4 text-sm font-semibold text-[#535353]">€40-50k</li>
                    </ul>
                    <div className='flex justify-start items-center'>

                    <button className='bg-black text-white font-semibold text-sm rounded-[50px] py-3 px-4 mt-6 duration-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>See Details</button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Vacancy
