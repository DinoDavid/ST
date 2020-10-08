import React from 'react';
import './App.css';
import Clock from 'react-live-clock';
import Timer from './Timer';
import MyCalendar from './MyCalender';
import AnalogClock from './AnalogClock';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='cardBig'><MyCalendar/></div>
      <div className='card'><h1><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Oslo'} /></h1></div>
      <div className='card'><Timer/></div>
      <div><AnalogClock/></div>

      </header>
    </div>
  );
}

export default Home;
