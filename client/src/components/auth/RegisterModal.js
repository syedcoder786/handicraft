import React, { Component } from 'react';
import '../../style/style.css';
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
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component{
    state = {
        name:'',
        email:'',
        password:'',
        password2:'',
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
        if(error.id ==='REGESTER_FAIL'){
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
          name:this.state.name,
          email:this.state.email,
          password:this.state.password,
          password2:this.state.password2
        };
        console.log(user)
        this.props.register(user)
    }

    onClick=(e)=>{
      this.props.clearErrors();
    }

render(){
    return(
        <div>
        <NavLink onClick={this.toggle} href="#">
          <span style={{color:'white'}}>Register</span>
        </NavLink>
  
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="mb-3"
                  onChange={this.onChange}
                />
  
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
                <Label for="password">Rewrite Password</Label>
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  placeholder="Rewrite Password"
                  className="mb-3"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Register
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

export default connect(mapStateToProps, { register, clearErrors } )(RegisterModal);
// export default RegisterModal;

