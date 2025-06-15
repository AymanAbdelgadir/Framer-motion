import {motion} from "framer-motion"
import {useState} from "react"
const FadeComponent = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <motion.div className="h-40 w-60 bg-red-500 rounded-lg "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: show ? 1 : 0 }}
                        transition={{ duration: 2 }}

            >

            </motion.div>
        <button onClick={() => setShow(!show)} className="text-2xl text-white  border-0
        bg-teal-600 p-2 rounded-2xl ml-1">Toggle</button></>


    );
};

export default FadeComponent;