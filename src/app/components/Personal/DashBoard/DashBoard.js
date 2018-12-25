import React, { Component } from 'react';
import style from '../styles.css'
import CountDown from '../../Common/CountDown'
class DashBoard extends Component {

    constructor(props){
        super();
        this.state={
    
        }
    }

    render(){
        var time = new Date().getTime();
        return(
            <div className="timer-container">
             <img src="https://i.ibb.co/89XhTSd/aaa.png" alt="countttt" />
                <div className="dashboard-container">
                    <div className="crackers">
                        <div className="before"></div>
                        <div className="after"></div>
                    </div>
                    <CountDown currentTime={time} endTime={1548979201000}></CountDown>
                </div>
            </div>
        )
    }
}

export default DashBoard;