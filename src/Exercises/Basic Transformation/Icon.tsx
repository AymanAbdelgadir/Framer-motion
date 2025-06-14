import {motion} from 'framer-motion';

const Icon = () => {
    return (
        <motion.img src="https://picsum.photos/200"
                    className={'size-40 rounded-full object-cover'}
        animate={{rotate: 360}}
        transition={{duration: 3, repeat: Infinity}}/>
    );
};

export default Icon;