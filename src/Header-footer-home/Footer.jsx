
import style from './Footer.module.css'
const Footer = () => {
  return (
    <>
    <div className={style.footer}>
      <div>

        <h5>�� 2022 Code with JS. All rights reserved.</h5>
      </div>
      <div>
        <ul>
          <li> <i className="bi bi-instagram" style={{color:'#C13584'}}></i>    </li>
          <li> <i className="bi bi-facebook" style={{color:'#1DA1F2'}}></i>    </li>
          <li> <i className="bi bi-twitter" style={{color:'#1DA1F2'}}></i>    </li>
          <li> <i className="bi bi-linkedin"></i>    </li>
           <li> <i className="bi bi-youtube" style={{color:'red'}}></i></li>
        </ul>
      </div>
    <div>
    <button>Terms of use</button>
    <button>Privacy policy</button>
    </div>
    </div>
    </>
  )
}

export default Footer
