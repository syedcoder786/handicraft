import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    // UncontrolledCarousel
} from 'reactstrap'
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';
// import { Logout } from '../auth/Logout';

class Dashboard extends Component {
  state = {
    isOpen: false
  }

    // componentDidMount(){

    // }

 toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
 }

 

  render() {

    // const items = [
    //     {
    //       src: 'test3.jpg',
    //       altText: 'Slide 1',
    //       caption: 'Slide 1',
    //       header: 'Slide 1 Header',
    //       key: '1'
    //     },
    //     {
    //       src: 'test5.jpg',
    //       altText: 'Slide 2',
    //       caption: 'Slide 2',
    //       header: 'Slide 2 Header',
    //       key: '2',
    //       height:'100%'
    //     },
    //     {
    //       src: './test4.jpg',
    //       altText: 'Slide 3',
    //       caption: 'Slide 3',
    //       header: 'Slide 3 Header',
    //       key: '3'
    //     }
    //   ];

    const authLinks = (
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <span style={{color:'white'}}>{this.props.auth.user?this.props.auth.user.name:"User"}</span>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem href="/logout">
                                {/* <NavLink href="/logout" style={{color:'black'}}>Logout</NavLink> */}
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
    )

    const guestLinks = (
        <NavItem>
            <LoginModal/>
        </NavItem>
    )

    const authnoti = (
        <NavItem>
            <NavLink href="/noti" ><img src="./notif3.png" alt="hi" style={{width:'23px'}}></img></NavLink>
        </NavItem>
    )

    const guestReg = (
        <NavItem>
            <RegisterModal/>
        </NavItem>
    )
    // const handleOnDragStart = (e) => e.preventDefault()

      return (
        <div>
            {/* color="primary" */}
            <Navbar style={{backgroundColor:'#172337'}} dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Handicrafts</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    
                    {/* <Nav navbar>
                            <NavItem>
                                <NavLink href="/cart">Cart</NavLink>
                            </NavItem>
                        </Nav> */}
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            { this.props.auth.token ? authLinks : guestLinks }
                            { this.props.auth.token ? authnoti : guestReg }
                            
                            {/* <NavItem>
                                    <LoginModal/>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="/cart"><img src="./cart.png" alt="hi" style={{width:'22px'}}></img></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            

        
            <div class="topnav">
                {/* <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a> */}
                <div class="dropdowncss">
                    <button class="dropbtn">Home Decoration 
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Hamdemade Gifts 
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Invitation Cards
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Birthday Cards 
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                    </div> 
                    <div class="dropdowncss">
                    <button class="dropbtn">Personal Gifts
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                <div class="dropdowncss">
                    <button class="dropbtn">Electronic Gift Items 
                    {/* <i class="fa fa-caret-down"></i> */}
                    </button>
                    <div class="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                    </div>
                </div> 
                </div>

        </div>
      )
    
    }
}

const mapStateToProps=state=>({
    // posts:state.post.items,
    // postLoading:state.post.postLoading,
    auth:state.auth
});

export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;
