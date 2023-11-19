import AboutCard from './AboutCard'
import Image from 'next/image'
import { motion } from 'framer-motion';



const Work = () => {


    const aboutcardData =
        [
            {
                "heading": "Power through, even when the going gets tough", "info": "We help you spot and work around whatever stands in the way, be it bad habits, fears etc."
            },
            {
                "heading": "Learn more about who you are and where you want to go", "info": "We ask the right questions to help you better understand why you do things the way you do"
            },

            {
                "heading": "Embrace challenges and overcome obstacles with resilience",
                "info": "Discover effective strategies to tackle difficult situations head-on and come out stronger than ever."
            },
            {
                "heading": "Uncover your true potential and chart your path to success",
                "info": "Gain insights into your strengths and passions, empowering you to set clear goals and achieve them."
            },
            {
                "heading": "Breaking free from limitations and reaching new heights",
                "info": "Equip yourself with the tools and mindset necessary to push beyond your boundaries and achieve greatness."
            },
            {
                "heading": "Understanding your fears and transforming them into opportunities",
                "info": "Explore the root causes of your fears and learn how to harness them as catalysts for personal growth and achievement."
            },
            {
                "heading": "Navigating through self-defeating habits and forging new, empowering ones",
                "info": "Identify detrimental habits that hinder your progress and replace them with positive, productive behaviors that propel you forward."
            },
            {
                "heading": "Unlocking self-awareness to unlock your potential",
                "info": "Delve into the depths of self-discovery to gain a profound understanding of yourself and unlock your limitless potential."
            },
            {
                "heading": "Conquering self-doubt and cultivating unshakable self-belief",
                "info": "Develop the confidence and self-assurance needed to overcome self-doubt and unleash your true capabilities."
            },
            {
                "heading": "Discovering your purpose and designing a fulfilling life",
                "info": "Uncover your life's purpose and create a meaningful existence aligned with your values, passions, and aspirations."
            },
            {
                "heading": "Building resilience in the face of adversity and setbacks",
                "info": "Develop the mental and emotional strength to bounce back from challenges, setbacks, and failures, emerging stronger than ever."
            }
        ]


    return (
        <section className="md:px-40 w-screen md:w-full  md:h-full px-1 flex justify-center items-center md:mt-36 mt-24 font-[Montserrat]">
            <motion.div 
            initial={{ y: 40, opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            className="bg-[#F3F1FF] flex-col md:flex-row w-[90%] h-full md:h-[90vh] rounded-3xl flex md:px-12 px-2 md:pt-20 pt-12  md:pb-8 pb-6 md:gap-12 gap-8">
                <div className="flex flex-1 flex-col  ">
                    <motion.div 
                    initial={{ x: '-200', scale: 0,opacity:0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 50
          
                    }}
                    whileInView={{ x: 0, scale: 1,opacity:1 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-start ">
                        <h1 className="md:text-4xl text-3xl text-black font-bold ">Work with us</h1>
                    </motion.div>
                    <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    transition={{
                      delay: 0.6,
                      duration: 0.8
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{once:true}}

                    className="flex flex-col bg-white rounded-3xl gap-1 md:h-[60vh]  mt-6">
                        <div className="flex flex-[0.7] flex-col md:px-6 px-4 py-4 ">
                            <Image
                                src='/assets/boo.svg'
                                width={100}
                                height={100}
                                alt="boo"
                                className='-ml-5'
                            />
                            <h2 className='text-start text-[#363636] text-xl font-semibold'>About</h2>
                            <p className='text-start text-[#535353] font-semibold'>At ahead our goal is to make self-improvement dun and lasting. We know there's a way how to make it work. And that's what aHead is all about!    </p>



                        </div>
                        <div className="flex flex-[0.3] flex-col p-2 bg-[#FEF6F0] rounded-3xl gap-1 md:px-6 px-4 py-4">
                            <h2 className='text-start text-[#363636] text-xl font-semibold'>Product</h2>
                            <p className='text-start text-[#535353] font-semibold'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager-like we did... </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                initial={{ y: 40, opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{once:true}}
                className="flex flex-1 flex-col justify-end">
                    <div className="flex items-center md:justify-end justify-center">
                        <motion.h1 
                        initial={{ x: '200', scale: 0,opacity:0 }}
                        transition={{
                          delay: 0.3,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 50
              
                        }}
                        whileInView={{ x: 0, scale: 1,opacity:1 }}
                        viewport={{ once: true }}
                        className="md:text-4xl text-3xl text-[#6B4DEE] md:text-end text-center font-bold">ahead</motion.h1>
                    </div>
                    <div className="flex md:flex-col flex-row md:overflow-y-auto  overflow-x-auto py-8 w-full px-4 mt-4">
                        {
                            aboutcardData.map((item, index) => (
                                <AboutCard heading={item.heading} info={item.info} key={index} />
                            ))
                        }
                    </div>
                </motion.div>








            </motion.div>
        </section>
    )
}

export default Work
