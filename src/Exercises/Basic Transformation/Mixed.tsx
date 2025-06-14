import {motion} from "framer-motion"
const Mixed = 
() => {
    return (
        <motion.div 
            className="h-40 w-60 bg-blue-500 rounded-lg"
            initial={{ scale: 1, y: 0, x: 0 }}
            animate={{
                scale: [0.8, 1, 0.8, 1, 0.8],
                y: [-100, 0, 100, 0, -100],
                x: [-100, 0, 100, 0, -100]
            }}
            transition={{
                duration: 5,
                repeat: Infinity,

            }}
        />
    );
}

export default Mixed;