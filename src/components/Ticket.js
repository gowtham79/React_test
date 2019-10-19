import React, { Component } from 'react';
//import { connect } from 'react-redux';


class Ticket extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: []
        }
    }
    
    async componentDidMount(){
        const res = await fetch('/api/v1/tickets')
        console.log("----------------------------------")
        console.log(res.json())
    }

    // renderTitles (){
    //     return this.state.title.map(title => <h1>{title.title}</h1>)
    // }
    render() {
        return (
            <div>
                

            </div>
        );
    }
}

export default Ticket;