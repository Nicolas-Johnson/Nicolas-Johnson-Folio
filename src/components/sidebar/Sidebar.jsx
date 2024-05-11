import './sidebar.scss';
import Link from './Links/Link';
import ToggleButton from './toggleButton/ToggleButton';
import { useState } from 'react';
import { delay, motion } from 'framer-motion';

const Sidebar = () => {
    const [ open, setOpen] = useState(false);
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffiness: 20,
                damping: 40
            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffiness: 400,
                damping: 40
            },
        },
    };

    return (
        <motion.div className='sidebar' animate={open ? "open": "closed"}>
            <motion.div className="bg" variants={variants}>
                <Link />
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}

export default Sidebar