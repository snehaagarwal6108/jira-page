import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
         <div class="container">
         <h2>JIRA</h2>
         <h4>banking-k-all /IUA-2767 Banking Section-Front End Changes /IUA -2767</h4>
         <h2>Banking Section - Front End Changes :UI Development</h2>
         <button type="button" class="btn marginL">Edit</button>
         <button type="button" class="btn marginL">Comment</button>
         <button type="button" class="btn marginL">Assign</button>
         <button type="button" class="btn marginL">More</button>
         <button type="button" class="btn marginL">Open</button>
         <button type="button" class="btn marginL">In Progress</button>
         <button type="button" class="btn marginL">Workflow</button>
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
<div>Labels:      None</div>
<div>Sprint:      UK Banking Sprint 28</div>
<div>Rank:        abcdefg</div>
</div>
<div className="col-xs-4">
<div>Status:     DONE(View Workflow)</div>
<div>Resolution:     Done</div>
<div>Fix Version/s:     Done</div>
</div>
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
<button type="button" class="btn ">All</button>
         <button type="button" class="btn">Comments</button>
         <button type="button" class="btn ">Work Log</button>
         <button type="button" class="btn ">history</button>
         <button type="button" class="btn ">Activity</button>
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
