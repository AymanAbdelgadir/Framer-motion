import {useState} from 'react';
import {motion} from 'framer-motion';

const Side = () => {
    const [show, setShow] = useState(false);
    return (
        <>
           <motion.div className="h-screen w-60 bg-red-500 rounded-lg items-start m-4"
           initial={{x:-100, opacity: 0}}
           animate={{opacity: show ? 1 : 0 , x: show ? 0 : -100}}
                       transition={{duration: 2 , type: 'spring'}}
           />
            <button className="bg-cyan-700 shadow-cyan-200 shadow-2xl  rounded-2xl
            items-center m-6 h-20 w-auto p-6 text-white text-2xl "
            onClick={() => {setShow(!show)}}>Show sidebar</button>
        </>
    );
};

export default Side;