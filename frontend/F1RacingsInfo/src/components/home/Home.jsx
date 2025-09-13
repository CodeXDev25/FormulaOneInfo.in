import React from "react";
import axios from 'axios'
import './Home.css'
import './Main.css'
import './Home-Schedule.css'
import './backendDatafetchnUpdate'
import F1Logo from '../../assets/logo.svg'
import RArrow from '../../assets/home/RArrow.svg'
import FOneImage from '../../assets/home/FOneCar.jpg'

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
                <img src="" alt="No Internet" className="frame-1-image" id="js-frame-1-image"/>
                <div className="frame-1-eventdetail">
                  <div className="frame-1-roundno typography"><span>Round <span id="js-frame-1-roundno"></span></span></div>
                  <div className="frame-1-roundname typography"><span id="js-frame-1-location"></span></div>
                  <div className="frame-1-rounddate typography"><span><span id="js-frame-1-startdate"></span> - <span id="js-frame-1-enddate"></span> <span id="js-frame-1-month"></span></span></div>
                </div>
              </div>
            </div>

            <div className="frame-2">
              <div className="frame-2-heading typography"><span>Next</span></div>
              <div className="frame-2-image-div">
                <img src="" alt="No Internet" className="frame-2-image" id="js-frame-2-image"/>
                <div className="frame-2-eventdetail">
                  <div className="frame-2-roundno typography"><span>Round <span id="js-frame-2-roundno"></span></span></div>
                  <div className="frame-2-roundname typography"><span id="js-frame-2-location"></span></div>
                  <div className="frame-2-rounddate typography"><span><span id="js-frame-2-startdate"></span> - <span id="js-frame-2-enddate"></span> <span id="js-frame-2-month"></span></span></div>
                </div>
              </div>
            </div>

            <div className="frame-3">
              <div className="frame-3-heading typography"><span>Future</span></div>
              <div className="frame-3-image-div">
                <img src="" alt="No Internet" className="frame-3-image-1" id="js-frame-3-image"/>
                <div className="frame-3-eventdetail-1">
                  <div className="frame-3-roundno typography"><span>Round <span id="js-frame-3-roundno"></span></span></div>
                  <div className="frame-3-roundname typography"><span id="js-frame-3-location"></span></div>
                  <div className="frame-3-rounddate typography"><span><span id="js-frame-3-startdate"></span> - <span id="js-frame-3-enddate"></span> <span id="js-frame-3-month"></span></span></div>
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

        <div className="full-schedule">
          
        </div>
      </div>
    </>
  )
}

export default Home