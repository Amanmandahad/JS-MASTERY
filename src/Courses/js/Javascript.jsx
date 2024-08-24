
import styles from './Javascript.module.css';

import nextjs from '/src/assets/Nextjs.webp';
import { IoVideocam } from "react-icons/io5";
import { FaCircleDown } from "react-icons/fa6";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { GiMechaHead } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
const Javascript = () => {
  return (
    <div className={styles.container}>
    <div>  <h1>Welcome to the complete Javascript course</h1></div>
    <div className={styles.next}>
    <div className={styles.left}>
<div className={styles.content}> 
<div>
<h5>Episode 1 :- Introduction to Javascript</h5>
<span>Introduction with variables and data types</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 2 :- Operators and conditional statement</h5>
<span>Lets go deep into js </span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>

</div>
<div className={styles.content}> 
<div>
<h5>Episode 3 :- Loops and Strings</h5>
<span>All types of loops and strings</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>

<div className={styles.content}> 
<div>
<h5>Episode 4 :- App Route</h5>
<span>Problem with react router and Understanding of App route</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 5 :- Arrays</h5>
<span>Arrays and it's types</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 6 :- Functions and methods</h5>
<span>Functions the heart of js lets learn with methods</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 8 :- Dom</h5>
<span>Dom manupliation </span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 8 :- lets set up Backend</h5>
<span>Setting backend with mongodb</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 9 :- Events in js</h5>
<span>All types of event Hover,click,Double click will learn</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 10 :- Classes and Objects</h5>
<span>  Classes and objects in js</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 11 :- Assignments</h5>
<span>Questions for pratise</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 9 :- Assignments</h5>
<span>Questions for pratise</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>


     </div>

     <div className={styles.right}>
<img src={nextjs} className='img-fluid ' alt="" />
<p> <IoVideocam className='flex items-center mx-1 bg-red'/> In depth High Quality Videos</p>
<p> <GiMechaHead  className='flex items-center mx-1'/> Project Based Learning</p>
<p><FaClock className='flex items-center mx-1'/> 20 hours of Content</p>
<p> <BsFillFileBarGraphFill className='flex items-center mx-1'/> Beginner to Pro</p>
<p> <RiProjectorFill className='flex items-center mx-1'/> Hands-on exercises</p>
<p>   <FaCircleDown className='flex items-center mx-1' /> Downloadable content</p>
<button>Buy 29$</button>
     </div>
     

    </div>
    </div>
  )
}

export default Javascript;
