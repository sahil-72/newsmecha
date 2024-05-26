import React, { Component } from 'react'
// import {
//     Link
//   } from "react-router-dom";

export default class Navbar extends Component {

    render() {

        let { mode, togglemode } = this.props;

        return (
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsMecha</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/general">General</a></li>
                            {/* <li className="nav-item"><a className="nav-a" href="/business">Business</a></li >
                            <li className="nav-item"><a className="nav-a" href="/entertainment">Entertainment</a></li>
                            <li className="nav-item"><a className="nav-a" href="/health">Health</a></li>
                            <li className="nav-item"><a className="nav-a" href="/science">Science</a></li>
                            <li className="nav-item"><a className="nav-a" href="/sports">Sports</a></li>
                            <li className="nav-item"><a className="nav-a" href="/technology">Technology</a></li> */}
                        </ul>
                        <div className="form-check form-switch ">
                            <input className="form-check-input" onClick={togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'white'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>

                </div>
            </nav>
        )
    }
}

