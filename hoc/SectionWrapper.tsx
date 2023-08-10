import { motion } from "framer-motion"

const staggerContainer = (staggerChildren: any, delayChildren: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

const Wrapper = (Component: React.FC, id: string) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(1,1)}
        initial= 'hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className=" w-full relative z-0"
      >
        <span className=" invisible" id={id}/>
        <Component/>
      </motion.section>
    )
  }

export default Wrapper