import Card from './Card'
import Image from 'next/image'
import { motion } from 'framer-motion';





const Slider = () => {

  const cardData = {
    "cardData": [
      { "heading": "You argue with a colleague", "info": "You get angry and defensive, instead of staying open and working towards common ground", "bg": "bg-[#EFEBFF]", "emoji": require("../../public/assets/emoji/proud.png") },
      { "heading": "You get a promotion at work", "info": "You question yourself and wonder when they will realize you are an unqualified imposter", "bg": "bg-[#D9F2FF]", "emoji": require("../../public/assets/emoji/angel.png") },
      { "heading": "You attend a class reunion", "info": "You reconnect with old friends and reminisce about the good times you shared during your school days.", "bg": "bg-[#FFEFD5]", "emoji": require("../../public/assets/emoji/pain.png") },
      { "heading": "You receive critical feedback", "info": "Instead of taking it constructively, you become defensive and dismissive, hindering personal growth.", "bg": "bg-[#EFEBFF]", "emoji": require("../../public/assets/emoji/irritated.png") },
      { "heading": "You receive praise for your work", "info": "You struggle to accept compliments and downplay your achievements, underestimating your abilities.", "bg": "bg-[#D9F2FF]", "emoji": require("../../public/assets/emoji/thank-you.png") },
      { "heading": "You face a setback", "info": "Rather than seeing it as an opportunity to learn and grow, you feel discouraged and give up easily.", "bg": "bg-[#FFEFD5]", "emoji": require("../../public/assets/emoji/omg.png") },
      { "heading": "You collaborate on a project", "info": "You insist on having things done your way, disregarding the ideas and input of others.", "bg": "bg-[#EFEBFF]", "emoji": require("../../public/assets/emoji/angel.png") },
      { "heading": "You make a mistake", "info": "Instead of taking responsibility, you blame others and refuse to acknowledge your error.", "bg": "bg-[#D9F2FF]", "emoji": require("../../public/assets/emoji/pain.png") },
      { "heading": "You receive a promotion", "info": "You doubt your worthiness for the new role and fear not living up to expectations.", "bg": "bg-[#FFEFD5]", "emoji": require("../../public/assets/emoji/proud.png") },
      { "heading": "You receive an unexpected gift", "info": "You feel uncomfortable and unworthy of receiving such generosity.", "bg": "bg-[#EFEBFF]", "emoji": require("../../public/assets/emoji/thank-you.png") }
    ]

  }

  return (
    <section className=' flex flex-col items-start justify-start mt-32 font-[Montserrat] w-[90%] gap-2  '>
      <div className='flex items-center'>

        <motion.h1
          initial={{ x: -200, scale: 0 }}
          transition={{
            delay: 0.4,
            duration: 1.5,
            type: "spring",
            stiffness: 50

          }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: true }}
          className='md:pl-40 pl-2 flex md:text-4xl text-xl font-bold '>Does this sound familiar...</motion.h1>
        <motion.div
        initial={{ rotate: -90, x: 400, y: 20 }}
        whileInView={{
          rotate: 0,
          x: 0,
          y: 0,
          

        }}
        transition= {{ duration: 2,delay:0.2 }}
        viewport={{ once: true }}
         
        >
          <Image
            src='/assets/boo.svg'
            width={100}
            height={100}
            alt="boo"
            className=' rounded-full -rotate-[30deg] opacity-80 hidden md:flex'
          />
        </motion.div>
      </div>
      <div className='flex overflow-x-scroll no-scrollbar py-8 w-full px-4'>
        {
          cardData.cardData.map((item, index) => (
            <Card emote={item.emoji} bg={item.bg} heading={item.heading} info={item.info} key={index} />

          ))

        }
      </div>
    </section >
  )
}

export default Slider
