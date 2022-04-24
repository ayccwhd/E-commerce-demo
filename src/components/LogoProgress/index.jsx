import React, { Component } from 'react'
import Homelink from '../HomeLink'
import Progress from '../Progress';

export default class LogoProgress extends Component {
  render() {
    return (
      <div className='center'>
            <Homelink/> 
            <Progress/>

      </div>
    )
  }
}
