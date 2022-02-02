import React from 'react';

import { motion } from "framer-motion";

export function FadeInIcon(props: any) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: props.delay * 0.5 }}
            whileHover={{ scale: 1.1, transition: { delay: 0, duration: 0.1 } }}
            variants={{
                visible: { opacity: 1, scale: 1, translateY: 0 },
                hidden: { opacity: 0, scale: 1, translateY: "5rem" }
            }}
        >
            {props.children}
        </motion.div>
    );
}

export function FadeInText(props: any) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: props.delay * 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1, translateX: 0 },
                hidden: { opacity: 0, scale: 1, translateX: "-5rem" }
            }}
        >
            {props.children}
        </motion.div>
    );

}