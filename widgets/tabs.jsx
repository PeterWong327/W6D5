import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.tabs = [{title:'one', content:'I am the first'},
                {title:'two', content:'Second pane here'},
                {title:'three', content:'Third pane here'}];
    this.state = {selected:0};
    this.selectTab = this.selectTab.bind(this);
  }

  render(){
    return(
      <div className='tabses'>
        <ul>
          <li><header className="1" onClick={this.selectTab}>{this.tabs[0].title}</header></li>
          <li><header className="2" onClick={this.selectTab}>{this.tabs[1].title}</header></li>
          <li><header className="3" onClick={this.selectTab}>{this.tabs[2].title}</header></li>
        </ul>
        <article>{this.tabs[this.state.selected].content}</article>
      </div>
    );
  }

  selectTab(e) {
    this.setState({selected:parseInt(e.currentTarget.className) - 1});
  }
}

export default Tabs;
