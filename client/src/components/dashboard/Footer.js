import React, { Component } from 'react';
import '../../style/style.css'

class Footer extends Component {

  render() {

      return (
        //   <div>
            <footer id="main-footer">
                <div class="containercss">
                        <div id="footer_left">
                            <div class="containercss">
                                <div class="subfooter_left">
                                    <b><h5>About</h5></b>
                                    <p>Home</p>
                                    <p>About Us</p>
                                    <p>Home</p>
                                </div>
                                <div class="subfooter_right">
                                    <b><h5>Policy</h5></b>
                                    <p>Privacy</p>
                                    <p>Return</p>
                                    <p>Terms and Condition</p>
                                </div>
                            </div>
                    </div>
                        <div id="footer_right">
                                <div class="containercss">
                                    <div class="subfooter_left">
                                        <b><h5>Social</h5></b>
                                        <p>Facebook</p>
                                        <p>Instagram</p>
                                        <p>Whatsapp</p>
                                    </div>
                                    <div class="subfooter_right">
                                        <b><h5>Address</h5></b>
                                        <p>Street</p>
                                        <p>U.p India</p>
                                        <p>Phone - 919249247</p>
                                    </div>
                            </div>
                        </div>
                </div>
                <br/>
                <hr id="footer-hr"/>
                <p id="footer-p"><b>S.M.Mohdin</b> Web Design copywite © 2020. All rights reserved.</p>
	        </footer>
        //    </div>
                
      )
    
    }
}


export default Footer;
