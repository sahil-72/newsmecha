import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress: 10
    }
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
      document.body.style.backgroundColor = 'rgb(39, 45, 51)';
      document.body.style.color = 'white';
    }
    else {
      this.setState({
        mode: 'light'
      })
      document.body.style.backgroundColor = 'rgb(238, 236, 226)';
      document.body.style.color = 'black';
    }
  }

  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} togglemode={this.toggleMode} />
        <News setProgress={this.setProgress} mode={this.state.mode} category='general' />
        <LoadingBar color='#f11946' progress={this.state.progress} />
        
        {/* <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar mode={this.state.mode} togglemode={this.toggleMode} />
        <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key='home' mode={this.state.mode} category='general' />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key='general' mode={this.state.mode} category='general' />}></Route>        
            <Route exact path="/business" element={<News setProgress={this.setProgress} key='business' mode={this.state.mode} category='business' />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key='entertainment' mode={this.state.mode} category='entertainment' />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key='health' mode={this.state.mode} category='health' />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key='science' mode={this.state.mode} category='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key='sports' mode={this.state.mode} category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key='technology' mode={this.state.mode} category='technology' />}></Route>
          </Routes>
        </Router > */}
      </div >
    )
  }
}

