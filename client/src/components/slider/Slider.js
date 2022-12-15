import React, { Component } from 'react';
// import {connect} from 'react-redux';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

class Slider extends Component {

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

    // const authLinks = (
    //     <Logout />
    // )

    // const guestLinks = (
    //     <a href="register">Login</a>
    // )
    const handleOnDragStart = (e) => e.preventDefault()

      return (
        <div>
            {/* <div style={{marginTop:'-48px'}}> */}
            <div>
            {/* <div style={{ height:'100%',alignItems:'center',marginTop:'-48px' }}><UncontrolledCarousel items={items}/></div> */}
            <AliceCarousel dotsDisabled={true} buttonsDisabled={true} autoPlayInterval={2000} autoPlay={true} mouseTrackingEnabled={true}>
              <div>
                <img src="./test1.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" style={{width:'100%',minHeight:'250px',maxHeight:'280px'}} alt="hii"/>
              </div>
              <div>
                <img src="./test4.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" style={{width:'100%',minHeight:'250px',maxHeight:'280px'}} alt="hii"/>
              </div>
              <div>
                <img src="./test3.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" style={{width:'100%',minHeight:'250px',maxHeight:'280px'}} alt="hii"/>
              </div>
                
                
                
                {/* <img src="/img4" onDragStart={handleOnDragStart} className="yours-custom-class" />
                <img src="/img5" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
            </AliceCarousel>
            </div>
        </div>
      )
    
    }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

// export default connect(mapStateToProps)(Dashboard);
export default Slider;
