import { motion } from "framer-motion";

const boxes = [0, 1, 2,4];

export default function SequentialBoxes() {
    return (
        <div style={{ display: "flex", gap: "1rem", margin: "100px" }}>
            {boxes.map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ x: 0, rotate: 0, scale: 1 }}
                    animate={{
                        x: 150,
                        rotate: 360,
                        scale: 1.2
                    }}
                    transition={{
                        delay: index * 0.3,
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity, // ⬅️ Loop forever
                        repeatType: "reverse" // ⬅️ Reverses animation back to start
                    }}
                    style={{
                        width: 60,
                        height: 60,
                        backgroundColor: "tomato",
                        borderRadius: 10,
                    }}
                />
            ))}
        </div>
    );
}
