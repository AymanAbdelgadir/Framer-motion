import {motion} from 'framer-motion';
const Circle = () => {
    return (
        <motion.div className='size-36 bg-amber-700
        rounded-full'
        animate={{y: [100,0, 200, 0,100, 0]}}
        transition={{duration : 3 , repeat: Infinity}}

        >

        </motion.div>
    );
};

export default Circle;