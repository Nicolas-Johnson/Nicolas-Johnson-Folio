import './navbar.scss';
import {motion} from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration: 0.5}}>Nicolas J</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/nicolas-johnson-s-s/" target="_blank"><img src="../../public/linkedin.png" alt="Linkedin Icon" /></a>
                <a href="https://www.instagram.com/nicolas_s_/" target="_blank"><img src="../../public/instagram.png" alt="Instagram Icon" /></a>
                <a href="https://github.com/Nicolas-Johnson" target="_blank"><img src="../../public/github.png" alt="GitHub Icon" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar