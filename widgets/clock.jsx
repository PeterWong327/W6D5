import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: new Date()};
  }

  tick(){
    this.setState({time: new Date()});
  }

  render(){
    let hours = ((this.state.time.getHours() < 10) ? "0" : "") + this.state.time.getHours();
    let minutes = ((this.state.time.getMinutes() < 10) ? "0" : "") + this.state.time.getMinutes();
    let seconds = ((this.state.time.getSeconds() < 10) ? "0" : "") + this.state.time.getSeconds();
    return (
      <div className='clock-container'>
        <h1 className='clock-title'>Clock</h1>
        <div className="clock group">
          <div className="fields">
            <h1>Time:</h1>
            <h1>Date:</h1>
          </div>
          <div className="data">
            <h1>{hours}:{minutes}:{seconds}</h1>
            <h1>{this.state.time.toDateString()}</h1>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.ticker = setInterval(()=>this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.ticker);
  }
}

export default Clock;
