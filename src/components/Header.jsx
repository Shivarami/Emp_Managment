import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div><a href='' className='navbar-brand'>Employee Managment App</a></div>
            </nav>
        </header>
      </div>
    );
  }
}
