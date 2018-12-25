import React from 'react';
import './countdown.css';
import PropTypes from 'prop-types';

export default class Countdown extends React.Component {
	constructor(props) {
		super(props);
		let timeLeft = this.props.endTime - this.props.currentTime,
			secondsLeft = Math.floor(timeLeft/1000).toFixed(0);
		this.state = this.getTimeLeft(secondsLeft);
	}
	componentDidMount(){
		this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    getTimeLeft(secondsLeft) {
    	let days = 0, hrs = 0, mins = 0, secs = secondsLeft;
    	//console.log("Init Time ", this.props.endTime, this.props.currentTime, secondsLeft);
        if(secs > 86400){
            days = Math.floor(secs/86400);
            secs = secs - (86400 * days);
        }
    	if (secs > 3600) {
    		hrs = Math.floor(secs/3600);
    		secs = secs - (3600 * hrs);
    	}
    	if (secs > 60) {
    		mins = Math.floor(secs/60);
    		secs = secs - (60 * mins);
    	}
    	return {
    		hrs: hrs, mins: mins, sec: secs, days: days, overallSecLeft: secondsLeft
    	}
    }
    tick(){
    	//let timeLeft = this.getTimeLeft();
    	let {overallSecLeft} = this.state;
    	overallSecLeft = overallSecLeft - 1;
    	if (overallSecLeft <= 0) {
    		clearInterval(this.timer);
            console.log("timer expired");
    		this.props.timerExpired();
    	}
    	let	{hrs, mins, sec, days} = this.getTimeLeft(overallSecLeft);
        this.setState({hrs: hrs, mins: mins, sec: sec, days: days, overallSecLeft: overallSecLeft});
    }

    render() {
    	let {days, hrs, mins, sec} = this.state;
    	return (<div className='timer'>
            <div className='days'>
                <span>{days > 9 ? days: `0${days}`}</span> <span>days</span>
            </div>
    		<div className='hours'>
    			<span>{hrs > 9 ? hrs : `0${hrs}`}</span> <span>hrs</span>
    		</div>
    		<div className='minutes'>
    			<span>{mins > 9 ? mins : `0${mins}`}</span> <span>mins</span>
    		</div>
    		<div className='seconds'>
    			<span>{sec > 9 ? sec : `0${sec}`}</span> <span>secs</span>
    		</div>
		</div>);

    }


}

Countdown.propTypes = {
  currentTime: PropTypes.number,
  endTime: PropTypes.number,
  timerExpired: PropTypes.func
};