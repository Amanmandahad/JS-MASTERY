/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "./Home.module.css";
import jsmastery from "../assets/header.logo.webp";
import img from "../assets/contact (2).png";
import style from "./Home.module.css";
import coverletter from "../assets/cover-letter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import portfolio from "../assets/portfolio.svg";
import resume from "../assets/resume.svg";
import stars from "../assets/Stars.svg";
import { IoArrowDown } from "react-icons/io5";
import Home2 from "./Home2";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses'); // Navigate to the target route
  };

  const handlechange = () => {
    navigate('/mentor'); // Navigate to the target route
  };

 const handlereview = ()=>{
  navigate('/courses'); 
 }


  return (
    <>
      {/* Hero Section */}
      <div className={style.contain}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-5 col-sm-12">
              <h1>
                Become the software engineer that companie's love to hire
              </h1>
              <button onClick={handlechange}>1:1 Mentorship</button>
              <button onClick={handleClick}>All Courses</button>
            </div>
            <div className="col-md-5 col-sm-12">
              <img
                src={img}
                className="img-fluid"
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className={style.skills}>
        <div className="container">
          <div className="row justify-content-around">
            <div className={`col-md-2 col-sm-2 col-lg-2 ${style.skill}`} style={{ boxShadow: '0px 0px 10px #8C27E7' }}>
              <h1 style={{ color: '#A679FF' }}>10k+</h1>
              <p>Students taught</p>
            </div>
            <div className={`col-md-2  col-sm-2 col-lg-2 ${style.skill}`} style={{ boxShadow: '0px 0px 10px #4CCFAF' }}>
              <h1 style={{ color: '#4CCFAF' }}>1M+</h1>
              <p>Youtube fans</p>
            </div>
            <div className={`col-md-2 col-sm-2 col-lg-2 ${style.skill}`} style={{ boxShadow: '0px 0px 10px #FF5FCC' }}>
              <h1 style={{ color: '#FF5FCC' }}>10+</h1>
              <p>Years of experience</p>
            </div>
            <div className={`col-md-2 col-sm-2 col-lg-2 ${style.skill}`} style={{ boxShadow: "0px 0px 10px #FF9F24 " }}>
              <h1 style={{ color: '#FF9F24' }}>20+</h1>
              <p>Coding courses on Udemy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Views */}
      <div className={style.personal}>
        <div className={style.personal_text}>
          <h1>Career Assignments with Personalized Reviews</h1>
          <h4>
            Your submissions will be reviewed and optimized by expert mentors.
          </h4>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {[
              { src: resume, title: "Resume" },
              { src: linkedin, title: "Linkedin" },
              { src: github, title: "Github" },
              { src: portfolio, title: "Portfolio" },
              { src: coverletter, title: "Coverletter" }
            ].map((item, index) => (
              <div
                key={index}
                className="col-md-3 col-lg-2 col-sm-12"
                draggable
              >
                <div className={style.card}>
                  <img src={item.src} className="img-fluid" alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={jsmastery}
          alt=""
        />
        <h4>JSM Mentor</h4>
        <i
          className="bi bi-arrow-down"
          style={{
            fontSize: "100px",
            color: "#11FFB7",
            marginTop: "-35px",
          }}
        ></i>
      </div>

      {/* Details */}
      <div className={style.detail} style={{ marginTop: '-23px' }}>
        <div className={`container ${style.detail_card}`}>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div>
                <h3>
                  <img src={stars} alt="" /> Detailed review
                </h3>
                <p>
                  Experience Section Detailing: Each role should have a detailed
                  description that includes the context of your work. Mention
                  the problem you solved, the approach you took, the
                  technologies you used, and the outcome. For instance, "Led a
                  team of 5 developers in migrating a legacy monolithic
                  application to a microservices architecture using Docker and
                  Kubernetes, resulting in a 40% reduction in deployment time
                  and improved system scalability."
                </p>
                <br />
                <p>
                  Skill enhancement and validation go beyond basic skills and
                  develop skills like GraphQL, Pipelines, and more about backend
                  and frontend technologies.
                </p>
                <button onClick={handlereview}>
                  Enroll in the course now <IoArrowDown style={{ fontSize: '23px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </>
  );
};

export default Home;
