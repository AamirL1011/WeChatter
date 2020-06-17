import React from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import {changePageState} from "../../actions";


class NavbarItem extends React.Component {

    changeToHome = (e) => {
        console.log('changeToHomeCalled', this.props.isHome.isHome);
        this.props.changePageState(true);
        setTimeout( () => {
            console.log('changeToHomeStatus:', this.props.isHome.isHome);
        }, 20);
    };

    changeToAbout = (e) => {
        console.log('changeToAboutCalled', this.props.isHome.isHome);
        this.props.changePageState(false);
        setTimeout( () => {
            console.log('changeToAboutStatus:', this.props.isHome.isHome);
        }, 20);
    };

    render() {
        return <ul className={"nav"}>
            <li onClick={this.changeToHome}><a className="brand">WeChatter</a></li>
            <li onClick={this.changeToHome}><a className="activePage">Home</a></li>
            <li onClick={this.changeToAbout}><a>About</a></li>
        </ul>;
    };
}



//state has entire state of app!!
const mapStateToProps = (state) => { //name is by convention
    return { isHome: state.isHome }; //now it will appear as props
}

export default connect(mapStateToProps, {changePageState})(NavbarItem);
