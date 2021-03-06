import React from 'react'
import {Row, Col, PageHeader, Table} from 'react-bootstrap'
import {Route, Switch, Link} from 'react-router-dom'
import TopNav from './TopNav'

import '../styles/Main.css';
import notecard from '../assets/notecard.png';

class Main extends React.Component {
  render() {
    return (
      <div id="background">
        <div className='title-page'>
          {/* <div className='overlay'></div> */}
          <div className='title-box-container'>
            <span>
              <div id="title-card-0" className='title-card bottom'>
                <div id="title-card-1" className='title-card top'>
                <img className="img-rounded"/>
                  <div className='title-box'>
                    <h1>uLearn</h1>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div id="title-card-2" className='title-card bottom'>
                <div id="title-card-3" className='title-card'>
                  <div id="title-card-4" className='title-card top'>
                    <div className='title-box'>
                      <h1>uPlay</h1>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div id="title-card-5" className='title-card bottom'>
                <div id="title-card-6" className='title-card'>
                  <div id="title-card-7" className='title-card'>
                    <div id="title-card-8" className='title-card top'>
                      <div className='title-box'>
                        <h1 className='ghostly'>————</h1>
                      </div>
                      <div id="title-card-9" className='title-card top'>
                        <div className='title-box'>
                          <h1>
                            uStaq
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        <span>
          <div id='intro-text'>
            <h1>
              Welcome to uStaq! 
            </h1> 
              <h4>
                Sign in to start learning or jump right in with a fun quiz.
              </h4>
          </div>
        </span>
      </div>
    </div>
    )
  }
}

export default Main
