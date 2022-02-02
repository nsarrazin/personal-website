import React from 'react';
import { useTheme } from '@material-ui/core';
import { Box, Typography, IconButton } from '@material-ui/core';
import { motion } from "framer-motion";

export interface SelectableIconProps {
    active: boolean,
    icon: any,
    callback: () => void;
}

export function FadeIn(props: any) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            variants={{
                visible: { opacity: 1, scale: 1, translateY: 0 },
                hidden: { opacity: 0, scale: 1, translateY: "5rem" }

            }}
        >
            {props.children}
        </motion.div>
    );
}

export function SelectableIcon(props: SelectableIconProps) {
    const theme = useTheme();

    let color = props.active ? theme.palette.primary.main : theme.palette.secondary.main
    return (
        <FadeIn>
            <IconButton style={{ width: "10vh" }}
                onClick={props.callback}>
                <props.icon fill={color} stroke={color} />
            </IconButton>
        </FadeIn>
    )
}


