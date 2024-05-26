import React, { Component } from 'react'
import spinner from './giphy.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt='spinner' style={{height:'100px', width:'100px'}} /> 
      </div>
    )
  }
}
