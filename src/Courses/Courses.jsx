import React from 'react'
import style from './Courses.module.css'
import python from '../assets/Python.webp'
import next from '../assets/Nextjs.webp'
import js from '../assets/js.webp'
const courses = () => {
  return (
    <>
<div className={style.container}>
<div className="container">
  <div className="row align-items-center text-start justify-content-evenly">
    <div className={`col-lg-5 ${style.courses}`}  style={{boxShadow:'0px 0px 10px #F05709'}}>
  <img src={next} alt="" className='img-fluid' />
 <div className={style.courses_text}>
 <h4 style={{color:'#155FC6'}}>The ultimate Next js course</h4>
  <p>Everything you need to build full-stack applications with Next.js 13+ (App Router) and TypeScript</p>
  <h4 >$29 </h4>
 </div>
    </div>
    <div className= {`col-lg-5 ${style.courses}`} style={{boxShadow:'0px 0px 10px #D84A7C'}}>
    <img src={python} alt="" className='img-fluid' />
    <div className={style.courses_text}>
 <h4 style={{color:'#FF5FCC'}}>Complete Python Mastery </h4>
  <p>Everything you need to program in Python in one course (includes 3 real-world projects)</p>
  <h4>$29 </h4>
 </div>
    </div>
  </div>
</div>
</div>
{/* Sigma course */}
<div className={style.sigma}>
<div className={style.main}>
<img src={js}  className='img-fluid' alt="" />
<h4 style={{color:'#F7DF1F',marginTop:"10px"}}> The Ultimate Full-stack JavaScript Developer Bundle (2024)
</h4>
<p>Master all the JavaScript skills you need to land a full-stack developer job</p>
<h4>$69</h4>
</div>
</div>   
    </>
  )
}

export default courses
