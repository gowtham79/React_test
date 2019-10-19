import React, { Component } from 'react';
//import { connect } from 'react-redux';


class AllTickets extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data :{
             }
        }
     
    }
    // delete =(title) => {
    //     this.setState((prevState) => ({
    //         data: prevState.title.filter(_name => title !== _name)
    //     }));
    // }
    

    render() {        
        const { ticketList }  = this.props;
        const items = ticketList.map((value, index) => {
            return <ul><li key={index}>{value.title} {value.comment}{index}
            <button>Delete</button>   
            
            </li></ul>
        })

        return (

            <div>
                {items}
            </div>
        );
    }
}

export default AllTickets;




