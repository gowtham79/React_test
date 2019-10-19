
import React, { Component } from 'react'

export default class Headerr extends Component {
    render() {
        return (
            <div>
            <div class="header">
            <a href="#default" class="logo">CompanyLogo</a>
            <div class="header-right">
              <a class="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>
          
            </div>
        )
    }
}
