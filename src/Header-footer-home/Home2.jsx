import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "./Home2.module.css";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { GoGoal } from "react-icons/go";
import Salesforce from "../assets/salesforce.png";
import airtel from "../assets/airtel.png";
import Dell from "../assets/dell.png";
import ibm from "../assets/IBM.png";
import isro from "../assets/isro.png";
import kmgp from "../assets/Kpmg.png";
import paypal from "../assets/paypal.png";
import google from "../assets/google.png";
import boy from "../assets/boy.png";
import img1 from "../assets/1st featureimg.webp";
import img2 from "../assets/2nd featureimg.webp";
import img3 from "../assets/4th featureimg.webp";
import img4 from "../assets/img6feature.webp";
import person1 from '../assets/person1.webp';
import person2 from '../assets/person2.webp';
import person3 from '../assets/person3.webp';


const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1.1, transition: { duration: 0.6 } },
};

const Home2 = () => {
  return (
    <>
      <div className={style.learn}>
        <div>
          <h1>Is this course suitable for me?</h1>
          <h3>
            Here's a simple diagram to know if you're a good fit for this course
            or not
          </h3>
        </div>
      </div>
      <div className={style.boy}>
        <img src={boy} className="img-fluid" alt="boy" />
      </div>
      <div className={style.require}>
        <div className="container">
          <div className="row justify-content-around align-items-center text-align-center">
            <div className="col-md-5 col-lg-3 col-sm-10 col-sx-12">
              <button>I am a great developer but i can't land a job</button>

              <button>I work as developer but i want a better job</button>

              <button>
                I am a Junior developer want to become senior developer
              </button>
            </div>
            <div className="col-md-5  col-lg-3 col-sm-10 col-sx-12">
              <button>I have no skills im beginner to web dev</button>

              <button>I know web dev but can't make projects</button>

              <button>I'm good in developing but introvert to speak out</button>
            </div>
          </div>
        </div>
      </div>
      {/* WHy code with js mastery*/}
      <div className={style.why}>
        <h1>Why code with JS mastery ?</h1>
      </div>
      {/* Features */}
      <div className={style.feature}>
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-6 col-lg-5 col-sm-6">
              <i className="bi bi-clock-fill" style={{ color: "#A679FF" }}></i>
              <p style={{ color: "#A679FF" }}>Step-by-step lessons</p>
              <h1>Easy-to-follow lessons</h1>
              <h5>
                I know learning to code can be tough. So I've carefully
                organized my courses into simple, bite-sized pieces to help you
                progress smoothly, one step at a time. I'll guide you through
                each step of the way so you won't feel overwhelmed.
              </h5>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-6">
              <img src={img1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-6 col-lg-5 col-sm-6">
              <img
                src={img3}
                className="img-fluid"
                alt=""
                style={{ height: "430px", width: "auto" }}
              />
            </div>
            <div className="col-md-6 col-lg-5 col-sm-6">
              <i className="bi bi-globe2" style={{ color: "#FF75D3" }}></i>
              <p style={{ color: "#FF75D3" }}>Get ready for the job</p>
              <h1>Real-world projects</h1>
              <h5>
                My courses are designed to prepare you for real-world jobs and
                interviews. With in-depth, comprehensive courses packed with
                real-world examples and exercises, you'll be ready to take on
                any challenge that comes your way.
              </h5>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-6 col-lg-5 col-sm-6">
              <i className="bi bi-people-fill" style={{ color: "#A679FF" }}></i>
              <p style={{ color: "#A679FF" }}>From beginner to pro</p>
              <h1>Courses for everyone</h1>
              <h5>
                Whether you're looking to learn a new language or just brushing
                up on your skills, I've got you covered. I offer a wide variety
                of courses so you can pick and choose what's most relevant to
                you. Plus, I make sure my courses are fun and engaging so you
                won't get bored.
              </h5>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-6">
              <img src={img2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-6 col-lg-5 col-sm-6">
              <img
                src={img4}
                className="img-fluid"
                alt=""
                style={{ height: "430px", width: "auto" }}
              />
            </div>
            <div className="col-md-6 col-lg-5 col-sm-6">
              <i className="bi bi-tools" style={{ color: "#73CCAF" }}></i>
              <p style={{ color: "#73CCAF" }}>
                Perfect mix of theory and practice
              </p>
              <h1>Hands-on learning</h1>
              <h5>
                I believe the best way to learn is by actually doing. That's why
                my courses teach you the essential theory and provide practical
                exercises. You'll be able to practice everything you learn and
                apply it to real-life situations.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* reviewsss */}

      <div className={style.views}>
        {" "}
        <h1 style={{ color: "#08FFB4" }}>
          Not sure, if this works? Hear from our students
        </h1>
      </div>
      <br />
      <div className={style.reviews}>
        <div className={style.card}>
          <p>
            “I started learning programming with JS 4 years ago with his C#
            courses. Thanks to those I landed my first job. Then, I continued to
            learn from his materials and made the jump from junior to senior
            Software Engineer (my salary went 10x from my first job). Now, 4
            years later I continue to learn with his excellent courses.”
          </p>
          <div className={style.content}>
            <img src={person1} alt="" />
           <span> Alex fernendis</span> 
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>  
          </div>
        </div>

        <div className={style.card}>
          <p>
          “I had an interest in React whilst I was in a previous job not using it at all, so I did the free YouTube version of your first React course and found it very useful! I then paid for the full thing, and I now have a job working with React, thanks man!”     
          </p>
          <div className={style.content}>
            <img src={person2} alt="" />
           <span> Joe trump </span> 
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>  
          </div>
        </div>

        <div className={style.card}>
          <p>
          “I am proud to say that I have learned a lot from your web development courses, which has helped me to earn a significant income. I would love to continue learning from you. You are a great man. Lots of love from your Afghan student.”
          </p>
          <div className={style.content}>
            <img src={person3} alt="" />
           <span> Albert butler</span> 
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>
           <IoStarSharp  className={style.star}/>  
          </div>
        </div>
      </div>
      {/* students */}
      <div className={style.student_text}>
        <h1>
          {" "}
          Thousands of students achieved their dream job at
          <GoGoal
            style={{
              backgroundColor: "#cc23aa",
              borderRadius: "20px",
              alignItems: "center",
            }}
          />
        </h1>
      </div>
      {/* Companiess */}
      <div className={style.company}>
        <div className="container">
          <div className="row justify-content-evenly align-items-center">
            {[Salesforce, airtel, ibm, kmgp, paypal, google, isro, Dell].map(
              (logo, index) => (
                <motion.div
                  key={index}
                  className="col-lg-3 col-md-3 col-sm-12"
                  initial="hidden"
                  animate="visible"
                  variants={scaleUp}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={logo}
                    className="img-fluid"
                    alt={`Company Logo ${index}`}
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
