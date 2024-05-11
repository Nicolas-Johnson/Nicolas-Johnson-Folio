import {motion} from 'framer-motion';

const ToggleButton = ({setOpen}) => {
    const variant = {
        open: {d: "M 3 16.5 L 17  2.5"},
        closed: {d: "M 2 2.5  L 20 2.5"},
    };
    return (
        <button onClick={() => {setOpen((prev) => !prev)}}>
            <svg viewBox="0 0 23 23" width="23" height="23">
                <path strokeWidth='3' stroke='black' strokeLinecap='round' />
                <path strokeWidth='3' stroke='black' strokeLinecap='round' />
                <path strokeWidth='3' stroke='black' strokeLinecap='round' />
            </svg>
        </button>
    )
}

export default ToggleButton