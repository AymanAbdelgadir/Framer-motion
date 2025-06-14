import {motion} from "framer-motion"

const Reca = () => {
    return (
        <motion.div className="h-40 w-60 bg-red-500 rounded-lg "
        whileTap={{ skew:50 }}
        />
    );
};

export default Reca;