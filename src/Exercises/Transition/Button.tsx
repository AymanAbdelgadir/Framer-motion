import {motion }from "framer-motion"
const Button = () => {
    return (
        <motion.button className="bg-cyan-700 shadow-cyan-200 shadow-2xl
         w-40 h-20 rounded-2xl text-white text-2xl"
        initial={{scale: 1}}
        whileHover={{scale:[0.9 , 1.1] , opacity: 1.2 , backgroundColor : 'blue' }}
        whileTap={{scale: 0.9, backgroundColor :  'red'}}
       >
            Click Me
        </motion.button>
    );
};

export default Button;