import React, { Component } from 'react';
// import axios from 'axios';
import '../style/style.css';
import {connect} from 'react-redux';
import { findSubcategory } from '../actions/categoryActions';
// import Footer from '../components/dashboard/Footer'
class Subcategories extends Component {


componentDidMount() {
  console.log(this.props.match.params.id)
    this.props.findSubcategory({id:this.props.match.params.id})
  // console.log(this.props.categories)

}

onClick = (e) => {
  console.log('clicked')
  window.location.assign("/subcategory/"+e.target.id)
  // window.top.close();
}

  render() {

    const subcategories = this.props.subcategories.map(({ _id, categoryid, img_path, subcategory, discription }) => (
        <div class="boxcsssub" id={_id} onClick={this.onClick}>
                    <img src={img_path} alt="hi" id={_id} onClick={this.onClick}></img><br/>
                      <p id={_id} onClick={this.onClick}>
                        <b id={_id} onClick={this.onClick}>{subcategory}</b><br/>
                        {discription}<br/>
                        <br/>
                      </p>
          </div>
    ))

    return(
        <div>
            <div style={{backgroundColor:'white'}}>
              <section id="main">
                <section id="boxes">
                <div class="containercss">
                  {subcategories}
                  {/* <div className="boxcsssub">
                    <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                      <p>
                        <b>subcategory</b><br/>
                        subcategories<br/>
                        <br/>
                      </p>
                  </div>
                  <div className="boxcsssub">
                      <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                        <p>
                          <b>subcategory</b><br/>
                          subcategories<br/>
                          <br/>
                        </p>
                  </div>
                  <div className="boxcsssub">
                      <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                        <p>
                          <b>subcategory</b><br/>
                          subcategories<br/>
                          <br/>
                        </p>
                  </div>
                  <div className="boxcsssub">
                      <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                        <p>
                          <b>subcategory</b><br/>
                          subcategories<br/>
                          <br/>
                        </p>
                  </div> */}
                </div>
                </section>
              </section>
              <section>
                <aside id="sidebar">
                  <div class="containercss">
                    <center>
                      <p>
                        <b>Categories</b><br/>
                        Home decoration<br/>
                        Handmade Gifts<br/>
                        Invitation cards<br/>
                        Birthday Cards<br/>
                        Personal Gifts<br/>
                        Electronic Gift Items<br/>
                      </p>
                    </center>
                  </div>
                </aside>
              </section>
            </div>
            {/* <div class="containerfooter">
            <Footer/>
            </div> */}
            
        </div>
    )
  }
}


const mapStateToProps= state => ({
    subcategories:state.categories.subitems, // check for posts
    subcategoryerr:state.categories.itemerr,
    // token:state.auth.token
});

export default connect(mapStateToProps, { findSubcategory })(Subcategories);
// export default Subcategories;
