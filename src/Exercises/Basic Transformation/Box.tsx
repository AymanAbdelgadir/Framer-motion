import {motion}  from  'framer-motion'

const Box = () => {
    return (
        <motion.div className="flex w-36 h-36
        justify-center items-center
        bg-teal-600 rounded-2xl "

        animate={{x:100}}
        

        >

        </motion.div>
    );
};

export default Box;