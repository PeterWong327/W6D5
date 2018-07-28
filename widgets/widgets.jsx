import Clock from './clock';
import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';

const potato = function(){
  return (
    <div>
      <Clock/>
      <Tabs/>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(potato(), root);
});
