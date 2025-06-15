import {useState} from 'react';
import {motion} from 'framer-motion';

const Modal = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <motion.div className="bg-cyan-700 rounded-2xl justify-start w-full h-30"
            initial={{opacity: 0,y:-100}}
            animate={{opacity: show ? 1 : 0 ,  y: show ? 0 : -100}}
                        exit={{opacity: 0,y:-100}}
            transition={{duration: 2 , ease: 'easeInOut'}}/>
            <button onClick={() => setShow(!show)} className="text-2xl text-white  border-0
        bg-teal-600 p-2 rounded-2xl  justify-center items-center w-auto h-36">Show</button>
        </>
    );
};

export default Modal;