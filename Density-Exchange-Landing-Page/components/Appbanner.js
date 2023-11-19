import Image from 'next/image'
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";


const Appbanner = () => {

  
    return (
        <section className="md:px-40 flex justify-center items-center md:mt-28 mt-1 font-[Montserrat]">
            <motion.div 
            initial={{ y: 40, opacity: 0 }}
            transition={{
              delay: 0,
              duration: 0.6
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            className="bg-[#FEF6F0] md:w-[85%] w-[95%] h-full md:h-[70vh] rounded-3xl flex md:flex-row flex-col  md:p-8 p-4 mx-2 md:mx-0  ">
                <div className="flex flex-col justify-center md:items-start items-center flex-[0.6] px-5 py-2 gap-2">
                    <motion.p 
                    initial={{ x: '-200', scale: 0,opacity:0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 50
          
                    }}
                    whileInView={{ x: 0, scale: 1,opacity:1 }}
                    viewport={{ once: true }}
                    className="md:text-xl text-lg text-[#212121] font-semibold md:ml-1 z-100">Built out of frustration</motion.p>
                    <motion.h1 
                    initial={{ x: '-200', scale: 0,opacity:0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 50
          
                    }}
                    whileInView={{ x: 0, scale: 1,opacity:1 }}
                    viewport={{ once: true }}
                    className="md:text-5xl text-xl font-bold text-[#151515] md:mt-3">Meet the ahead app  </motion.h1>
                    {/* <div clasName='relative z-10'> */}


                        <motion.div
                        initial={{  rotate:-90,scale: 0 }}
                        transition={{
                          delay: 0.2,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 100
              
                        }}
                        whileInView={{ rotate:0,scale: 1 }}
                        viewport={{ once: true }}>
                        <Image
                            src='/assets/boo.svg'
                            width={250}
                            height={250}
                            alt="hero"
                            className=' border-spacing-8 border-[16px] rounded-full bg-[#FBE8DC] border-[#f0eeee] mt-4'
                        />
                        </motion.div>

                          
                        

                        {/* <div className='h-[500px] w-[500px] bg-white rounded-full absolute'>

                        </div> */}
                    {/* </div> */}



                </div>
                <motion.div 
                initial={{ x: '-200', scale: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 50
      
                }}
                whileInView={{ x: 0, scale: 1 }}
                viewport={{ once: true }}
                className='flex flex-col justify-center items-center z-10 flex-[0.4] text-[#626262] font-semibold relative px-1 md:px-4 text-center md:text-start'>
                    <p className='mb-3 mt-4 md:mt-0  '>A personalized pocket coach that provides bite-sized,science driven tools to boost emotional intelligence.</p>
                    <p>Think of it as pocket cheerleader towards a better,more fulflling.</p>
                    <Image
                            src='/assets/emote-right.png'
                            width={150}
                            height={150}
                            alt="hero"
                            className='absolute hidden md:flex -z-20 opacity-40 bottom-0'
                            />


                </motion.div>
            </motion.div>
        </section>
    )
}

export default Appbanner
