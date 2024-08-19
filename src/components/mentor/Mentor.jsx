import React from 'react';
import style from './Mentor.module.css';
import boy from '../assests2/6aea7a42ec1a407eab592031796e635e.jpeg';
import { Tabs, Tab } from 'react-bootstrap';
import { FaClock } from "react-icons/fa6";

const Mentor = () => {
  return (
    <div className={style.container}>
      <div className={style.contain1}>
        <div className={style.info}>
          <img src={boy} className='img-fluid' alt="" />
          <h2>Aman Mandahad</h2>
          <p>Full-stack Software Developer and Javascript Enthusiast, Who Loves Building Things In Javascript. Educator at Js mastery.</p>
          <div style={{ display: 'flex', gap: '60px' }}>
            <div className={style.btn1}>Top 1%</div>
            <div className={style.btn2}>300+ Bookings</div>
          </div>
        </div>
      </div>
      <div className={style.contain2}>
        <h1>Connect with me for 1:1 Mentorship</h1>
        <h3>I will guide you in every way</h3>
        <div className="container mt-4">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className={`mb-10  ${style.tabs}`} >
            <Tab eventKey="call" title="1:1 Call">
            <div className={style.tabWrapper}>
              <div className={style.tab} style={{boxShadow:'0px 0px 8px #FF5FCC'}}>
                <h4>Career Guidance</h4>
                <p>I will help you with career guidance.</p>
                <div className={style.btn}>
                  <span> <FaClock style={{fontSize:'20px'}}/>   Video meeting 30 mins</span>
                  <div><button>$50</button></div>
                </div>
              </div>

              <div className={style.tab} style={{boxShadow:'0px 0px 8px red'}}>
                <h4>Resume review </h4>
                <p>Resume review ,Do's and Don'ts </p>
                <div className={style.btn}>
                  <span> <FaClock style={{fontSize:'20px'}}/> Video meeting 30 mins</span>
                  <div><button>$50</button></div>
                </div>
              </div>
              </div>
              <div className={style.tab} style={{boxShadow:'0px 0px 8px #1CFFBB'}}>
                <h4>Discuss you project</h4>
                <p>Discuss your project,Get new ideas</p>
                <div className={style.btn}>
                  <span> <FaClock style={{fontSize:'20px'}}/>   Video meeting 45 mins</span>
                  <div><button>$70</button></div>
                </div>
              </div>
              
            </Tab>
            <Tab eventKey="dm" title="Priority DM">
                <div className={style.tabWrapper}>
            <div className={style.tab} style={{boxShadow:'0px 0px 8px #1CFFBB'}}>
              <h4>Resume review,Over text</h4>
              <p>Resume review, Do's and dont'ts</p>
              <div className={style.btn}>
                <span>  <FaClock style={{fontSize:'20px'}}/> Replies in 1 day </span>
                <div><button>$20</button></div>
              </div>
            </div>
          </div>
            </Tab>
            <Tab eventKey="all" title="All">
                <div className={style.tabWrapper}>
            <div className={style.all} style={{boxShadow:'0px 0px 8px Gold'}}>
              <h4>Career guidance + Resume review</h4>
              <p>I will help you with career guidance and resume review</p>
              <div className={style.btn}>
                <span>  <FaClock style={{fontSize:'20px'}}/> Video meeting 1hour</span>
                <div><button>$85</button></div>
              </div>
            </div>
          </div>
            </Tab>

          </Tabs>
        
        </div>
      </div>
    </div>
  );
}

export default Mentor;
