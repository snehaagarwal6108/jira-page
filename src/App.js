import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showStencilV: false};
  }
 
  showStencil=() => {
    console.log(this.state.showStencilV);
    this.setState(state => ({
      showStencilV: !state.showStencilV
    }));
  }
  render() {
    return (
         <div className="container">
         <h2>JIRA</h2>
         <h4>banking-uk-all /IUA-2767 Banking Section-Login Page /IUA -2767</h4>
         <span> <h2>Banking Section - Login Page :UI Development</h2></span>
         <span></span>
         <button type="button" className="btn marginL">Edit</button>
         <button type="button" className="btn marginL">Comment</button>
         <button type="button" className="btn marginL">Assign</button>
         <button type="button" className="btn marginL">More</button>
         <button type="button" className="btn marginL">Open</button>
         <button type="button" className="btn marginL">In Progress</button>
         <button type="button" className="btn marginL">Workflow</button>
         <button type="button" className="btn btn-info marginL6" onClick={this.showStencil}>Check Stencil Suggestion</button>
         <div className="row">
         <div className="col-xs-8">
<div className="bold1">Details ___________________________________________________________________________________</div>
<div className="col-xs-4">
<div>Type:     Sub-task</div>
<div>Priority:     Medium</div>
<div>
Affects Version/s:      None
</div>
<div>Components:     None</div>
<div>Labels:      #Login#Banking#password</div>
<div>Sprint:      UK Banking Sprint 28</div>
<div>Rank:        abcdefg</div>
</div>
<div className="col-xs-4">
<div>Status:     DONE(View Workflow)</div>
<div>Resolution:     Done</div>
<div>Fix Version/s:     Done</div>
    </div>{this.state.showStencilV ?
<div className="col-xs-4">
<div className="bold1">Stencil Suggestions</div>
<div><a href="http://localhost:3000/dashboard/login">Login App</a></div>
<div><a href="http://localhost:3000/dashboard/mailbox">Mailbox App</a></div>
</div> :null}
         </div>
         <div className="col-xs-4">
         
         <div className="bold1">People ____________________________________________________________</div>
         
         <div>Assignee:     Sneha Agarwal</div>
<div>Reporter:      Priya Indi</div>
<div>Votes:      Votefor this isssue</div>
<div>Watchers:        Start Watching this issue</div>
         
         </div>    
       </div>
       <div className="row">
       <div className="col-xs-8">
<div className="bold1">Description ___________________________________________________________________________________</div>
<div className="col-xs-4">
<div>Click to add description</div>
</div>

         </div>
         <div className="col-xs-4">
         <div className="bold1">Dates ____________________________________________________________</div>
         
         <div>Created:    08/Aug/18  3:39 PM</div>
<div>Updated:      21/Aug/18 5:06 PM</div>
<div>Resolved:      21/Aug/18 5:06 PM</div>
         
         </div>    

       </div>
       <div className="row">
       <div className="col-xs-8">
<div className="bold1">Attachments ___________________________________________________________________________________</div>
<div className="col-xs-4">
<div>Drop File to attach or browse</div>
</div>

         </div>
         <div className="col-xs-4">
         <div className="bold1">Agile ____________________________________________________________</div>
         
         <div>Completed Sprints:    UK Banking Sprint 29 ended on 19/Sept/2018</div>
<div>:     UK Banking Sprint 27 ended on 19/Aug/2018</div>
<div>:    UK Banking Sprint 28 ended on 19/July/2018</div>
         
         </div>    

       </div>
       <div className="row">
       <div className="col-xs-8">
<div className="bold1">Activity ___________________________________________________________________________________</div>
<div className="col-xs-10">
<button type="button" className="btn ">All</button>
         <button type="button" className="btn">Comments</button>
         <button type="button" className="btn ">Work Log</button>
         <button type="button" className="btn ">history</button>
         <button type="button" className="btn ">Activity</button>
<div>There are no comments in this issue</div>
</div>

         </div>
         <div className="col-xs-4">
       
         </div>    

       </div>
       </div>
       
    );
  }
}

export default App;
