import { Component } from 'react'
// import {
//     // DropdownItem
//     NavLink
// } from 'reactstrap'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

export class Logout extends Component{
    // componentDidMount(){
    //     this.props.logout();
    // }
    // onClick = (e) => {
    //     console.log('clicked')
    //     this.props.logout
    // }
    render(){
        return(
            this.props.logout(),
            window.location.assign('/')
        )
    }
}

export default connect(null,{logout})(Logout);