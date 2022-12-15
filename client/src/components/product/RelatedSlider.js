import React, { Component } from 'react';
// import axios from 'axios';
// import '../style/style.css';
import { connect } from 'react-redux';
import { relatedProducts } from '../../actions/categoryActions';
// import { addtocart } from '../../actions/categoryActions';
// import AliceCarousel from 'react-alice-carousel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import 'react-alice-carousel/lib/alice-carousel.css'
class RelatedSlider extends Component {

  componentDidMount(){
    this.props.relatedProducts()
  }

  render() {

    const responsive = {
      desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      },
    };

    const rproducts = this.props.rproducts.map(({ _id, categoryid, subcategoryid, productid, img_path_1, img_path_2, img_path_3, img_path_4, img_path_5, name, price, instock, features, discription }) => (
    // {console.log(rproducts)}
      // <div>
      //   <img src={img_path_1} alt="hii" style={{minWidth:'150px',maxWidth:'330px', height:'250px', width:'100%'}} />
      // </div>
      <section id = "boxes">
        <div class="containercss">
          <div className="boxcssslid" id={_id} onClick={this.onClick}>
            {/* <p name={_id} onClick={this.onClick}> */}
              <img src = {img_path_1} alt = "hi" id={_id}></img><br/>
              <p>
                {name}<br/>
                ₹ {price}
              </p>
              {/* <hr/> */}
            {/* </p> */}
          </div>
          </div>
      </section>

    ))

    return(
        <div className="RelatedSlider">
                <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                centerMode={this.props.deviceType !== "mobile" ? true : false}
                // centerMode={false}
                >
                {/* <div><img src="../home_dec.png" alt="hii" style={{minWidth:'150px',maxWidth:'330px', height:'250px', width:'100%'}}></img></div>
                <div><img src="../birthday.jpg" alt="hii" style={{minWidth:'150px',maxWidth:'330px', height:'250px', width:'100%'}}></img></div>
                <div><img src="../homemade.jpg" alt="hii" style={{minWidth:'150px',maxWidth:'330px', height:'250px', width:'100%'}}></img></div>
                <div><img src="../personal.jpg" alt="hii" style={{minWidth:'150px',maxWidth:'330px', height:'250px', width:'100%'}}></img></div>
                <div><img src="../electronic.jpg" alt="hii" style={{minWidth:'150px',maxWidth:'330px', height:'250px', width:'100%'}}></img></div> */}
                  {rproducts}
                </Carousel>
        </div>
    )
  }
}


const mapStateToProps = state => ({
    rproducts:state.categories.rproducts,
    // subcategoryerr:state.categories.itemerr,
    // auth:state.auth
});

export default connect(mapStateToProps, { relatedProducts })(RelatedSlider);
// export default RelatedSlider;
