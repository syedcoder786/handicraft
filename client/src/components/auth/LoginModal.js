import React, { Component } from 'react';
// import '../../style/style.css';
import { connect } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
  } from 'reactstrap';
// import PropTypes from 'prop-types'
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LoginModal extends Component{
    state = {
        email:'',
        password:'',
        msg:null,
        modal:false
    }

    // static propTypes = {
    //     isAuthenticated: PropTypes.bool
    //     // error:PropTypes.error.Required
    // }

    componentDidUpdate(prevProps){
      const {error} = this.props;
      if(error !== prevProps.error){
        if(error.id ==='LOGIN_FAIL'){
          this.setState({msg:this.props.error.msg.msg})
        }else{
          this.setState({msg:null})
        }
      }
    }

    toggle = () =>{
        this.setState({ modal: !this.state.modal })
        this.setState({ msg:null })
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const user = {
          email:this.state.email,
          password:this.state.password
        };
        console.log(user)
        this.props.login(user)
    }

    // onClick=(e)=>{
    //   this.props.clearErrors();
    // }

render(){
    return(
        <div>
        <NavLink onClick={this.toggle} href="#">
          <span style={{color:'white'}}>Login</span>
        </NavLink>
  
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>  
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  onChange={this.onChange}
                />
  
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
}
}

const mapStateToProps=state=>({
    // token:state.auth.token,
    error:state.error
});

export default connect(mapStateToProps, { login, clearErrors } )(LoginModal);
// export default RegisterModal;

