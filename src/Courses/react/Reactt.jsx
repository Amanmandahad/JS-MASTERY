
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
    <div>  <h1>Welcome to the complete Nextjs course</h1></div>
    <div className={styles.next}>
    <div className={styles.left}>
<div className={styles.content}> 
<div>
<h5>Episode 1 :- Introduction to Nextjs</h5>
<span>Server components vs CLient Components</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 2 :- Igniting our App</h5>
<span>Basics of react ,Overview of this course</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>

</div>
<div className={styles.content}> 
<div>
<h5>Episode 3 :- Deep dive inside file structure</h5>
<span>Understandinf file structure</span>
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
<h5>Episode 5 :- Next js Styling</h5>
<span>How to style, Differents ways to style</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 6 :- Caching</h5>
<span>Caching with Nextjs</span>
</div>
<div>
<i className="bi bi-camera-video-fill"></i>
</div>
</div>
<div className={styles.content}> 
<div>
<h5>Episode 7 :- Image Optimization</h5>
<span>Image Optimization for faster loading</span>
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
<h5>Episode 9 :- Assignments</h5>
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
<p> <FaClock className='flex items-center mx-1'/> 12 hours of Content</p>
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
