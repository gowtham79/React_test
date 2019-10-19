import React, { Component } from 'react';
import AllTickets from './AllTickets';
class CreateTicket extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      title:'',
      comment:'',
      data:[
        {    id:'1',
            'title':'new tite',
            'comment':'new comment'
        },
        {     id:'2',
            'title':'new tite',
            'comment':'new comment'
        }
      ]
    }
  }

  submit = (e) =>{
    e.preventDefault();
    const {data} = this.state;
    const title = this.state.title;
    const comment = this.state.comment;
    data.push({
      title,
      comment,
    });
    
    this.setState({data: data});
  }

render() {
  const { data } = this.state;
  return (
<div>
  <form onSubmit ={this.submit}>
  <label> title: </label>
   <input required type="text" name = "title" placeholder="Enter ticket title" value={this.state.title}
   onChange={(e) => this.setState({ title: e.target.value })}></input><br /><br />
   <label> comment:</label>
   <textarea required rows="5" cols="28" name = "comment" placeholder="Enter context about ticket" value={this.state.comment}
   onChange={(e) => this.setState({ comment: e.target.value })} /><br /><br />
   <input type="submit" value="Ticketscreate" />
  </form>
  <AllTickets ticketList={ data }/>
</div>
);
}
}
export default CreateTicket;