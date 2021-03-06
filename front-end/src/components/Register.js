import React, {Component} from 'react';
import Toolbar from './Toolbar/Toolbar'
import  {BrowserRouter as Router, Link } from 'react-router-dom'
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop'
import {register} from './UserFunctions'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            slideDrawerOpen: false,
            name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
                this.props.history.push(`/login`)
        })
    }


    drawerToggleClickHandler = () => {
        this.setState((PrevState) => {
            return {slideDrawerOpen: !PrevState.slideDrawerOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({slideDrawerOpen: false});
    }

    render(){
        let backdrop;
        if(this.state.slideDrawerOpen){
            backdrop = < Backdrop click={this.backdropClickHandler} />;
        }

        return(
            <div className="loginPage">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SlideDrawer show={this.state.slideDrawerOpen}/> 
                {backdrop}
                <img className="loginImage" src="./Images/paper-plane-icon-white-vector-16585648.png" alt="" />
                <div className="loginForm">
                    <form noValidate onSubmit={this.onSubmit}>
                        <label>
                            <input name="name" type="text" value={this.state.name} onChange={this.onChange} required />
                            <img className="label-text" src="./Images/images.png" alt="" />
                        </label>
                        <label>
                            <input name="email" type="email" value={this.state.email} onChange={this.onChange}  required />
                            <img className="label-text" src="./Images/584856a0e0bb315b0f7675a9.png" alt="" />
                        </label>
                        <label>
                            <input name="password" type="password" value={this.state.password} onChange={this.onChange}  required />
                            <img className="label-text" src="./Images/locked-outline.png" alt="" />
                        </label>
                            <button type="submit" >SignUp</button>
                    </form> 
                </div>
                {/* <Router>
                    <h3>Already have an account? <Link className="links" to="/#">Login</Link></h3>
                </Router> */}
            </div>
        )
    }
}
export default Register;