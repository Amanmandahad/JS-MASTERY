
import styles from './Reactt.module.css';

import nextjs from '/src/assets/Nextjs.webp';
import { IoVideocam } from "react-icons/io5";
import { FaCircleDown } from "react-icons/fa6";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { GiMechaHead } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
const Reactt = () => {
  return (
    <div className={styles.container}>
    <div>  <h1>Welcome to the complete Reactjs course</h1></div>
    <div className={styles.next}>
    <div className={styles.left}>
<div className={styles.content}> 
<div>
<h5>Episode 1 :- Introduction to Reactjs</h5>
<span>Installation, Virual dom and js</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 2 :- Igniting our App</h5>
<span>Basics of react,Class components and funcational compoenets,Overview of this course</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>

</div>
<div className={styles.content}> 
<div>
<h5>Episode 3 :- Props and state</h5>
<span>Understandinf file structure and props and state</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>

<div className={styles.content}> 
<div>
<h5>Episode 4 :- Event handling</h5>
<span>Deep dive inside class components and fucnrion component</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 5 :- Lifecycling method and styling</h5>
<span>All about life cycle method and styling</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 6 :-Routing</h5>
<span>Routing in react js</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 7 :- Context api</h5>
<span>Context api for more flexibility</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 8 :- React Hooks</h5>
<span>Lets see all the type of hooks with one project</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 9 :- Redux toolkit</h5>
<span>Redux make the state management easy ,Let's get started</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 10 :- Project 1 </h5>
<span> Disney hotstar</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 11 :- Project 2</h5>
<span>Alibaba app</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 11 :- Interview tips and Questions</h5>
<span>Practise 10 coding interview questions with me  </span>
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
<p> <FaClock className='flex items-center mx-1'/> 15 hours of Content</p>
<p> <BsFillFileBarGraphFill className='flex items-center mx-1'/> Beginner to Pro</p>
<p> <RiProjectorFill className='flex items-center mx-1'/> Hands-on exercises</p>
<p>  <FaCircleDown className='flex items-center mx-1' />Downloadable content</p>
<button>Buy 29$</button>
     </div>
     

    </div>
    </div>
  )
}

export default Reactt
