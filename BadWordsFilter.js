import React, {Component} from 'react';

const Filter = require('bad-words');
const customFilter = new Filter({ regex: /\*|\.|$/gi });

export class BadWords extends Component {

  state = {
    desc:""
  }
  handleChanges = (e)=>{
    let desc = customFilter.clean(e.target.value);
    this.setState({desc})
  }
  render(){
    return (
      <div>
        <h1>Bad Word Detection.</h1>
        <div>
          <textarea row={100} col={100} placeholder="Text" value={this.state.desc} onChange={this.handleChanges} />
        </div>
      </div>
    )
  }
}