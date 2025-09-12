import React from "react";
import './Home.css'
import './Main.css'
import './Home-Schedule.css'
import F1Logo from '../../assets/logo.svg'
import RArrow from '../../assets/home/RArrow.svg'
import FOneImage from '../../assets/home/FOneCar.jpg'
import monza from '../../assets/trackImages/jpg/monza.jpg'
import baku from '../../assets/trackImages/jpg/baku.jpg'
import miami from '../../assets/trackImages/jpg/miami.jpg'
import montreal from '../../assets/trackImages/jpg/montrèal.jpg'

const Home = () => {
  return(
    <>
      <div className="Home">
        <div className="navbar">
          <div className="navbar-left jusCen">
            <img src={F1Logo} alt="" className="F1Logo"/>
            <div className="navbar-left-text"><span>FormulaOneInfo</span></div>
          </div>
          <div className="navbar-center">
              <ul className="algCenJusCen ulGap">
                <li id="home">Home</li>
                <li id="About">About</li>
                <li id="results">Results</li>
                <li id="results">Teams</li>
                <li id="drivers">Drivers</li>
                <li id="schedule">Schedule</li>
              </ul>
          </div>
          <div className="navbar-right">
            <button className="logIn"><span>LogIn</span></button>
            <button className="signUp"><span>SignUp</span></button>
          </div>
        </div>

        <div className="schedule">
          <div className="schedule-heading">
            <span>2025 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</span>
          </div>
          <div className="frame-container algCenJusCen">
            <div className="frame-1">
              <div className="frame-1-heading typography"><span>Previous</span></div>
              <div className="frame-1-image-div">
                <img src={monza} alt="" className="frame-1-image"/>
                <div className="frame-1-eventdetail">
                  <div className="frame-1-roundno typography"><span>Round 16</span></div>
                  <div className="frame-1-roundname typography"><span>Monza</span></div>
                  <div className="frame-1-rounddate typography"><span>05 - 07 SEP</span></div>
                </div>
              </div>
            </div>

            <div className="frame-2">
              <div className="frame-2-heading typography"><span>Next</span></div>
              <div className="frame-2-image-div">
                <img src={baku} alt="" className="frame-2-image"/>
                <div className="frame-2-eventdetail">
                  <div className="frame-2-roundno typography"><span>Round 17</span></div>
                  <div className="frame-2-roundname typography"><span>Baku</span></div>
                  <div className="frame-2-rounddate typography"><span>19 - 21 SEP</span></div>
                </div>
              </div>
            </div>

            <div className="frame-3">
              <div className="frame-3-heading typography"><span>Future</span></div>
              <div className="frame-3-image-div">
                <img src={miami} alt="" className="frame-3-image-1"/>
                <div className="frame-3-eventdetail-1">
                  <div className="frame-3-roundno typography"><span>Round 17</span></div>
                  <div className="frame-3-roundname typography"><span>Baku</span></div>
                  <div className="frame-3-rounddate typography"><span>03 - 05 OCT</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="hr"><hr /></div>

          <div className="btns">
            <button className="full-schedule">Full Schedule</button>
            <button className="year">2026</button>
          </div>
        </div>  

        <div className="main">
          <div className="main-left">
            <div className="main-left-text"><span>Welcome to the World of <span className="highlight">F1 Racing</span></span></div>

            <div className="main-left-intro"><span>FormulaOneInfo is home to a comprehensive, easy-to-understand guide to <span className="highlight">F1 </span>racing, perfect for both seasoned fans and rookies looking to dive into the thrilling world of <span className="highlight">Formula 1.</span></span></div>

            <div className="main-left-getstarted">
              <button className="getstarted">Get Started<img src={RArrow} alt="" className="RArrow"/></button>
            </div>
          </div>
          <div className="main-right">
            <div className="main-right-image">
              <img src={FOneImage} alt="" className="FOneImage"/>
            </div>
          </div>
        </div>

        <div className="footer">
          
        </div>
      </div>
    </>
  )
}

export default Home