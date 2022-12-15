import React, { Component } from 'react';
import '../style/style.css';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
class Categories extends Component {

  componentDidMount(){
    this.props.fetchCategories();
  }

  onClick = (e) => {
    // const categoryid = e.target.value;
    console.log(e.target.id)
    // this.props.fetchSubCategories({ id:categoryid });
    window.location.assign("/category/"+e.target.id)
  }

  render() {

    const categoryItems = this.props.categories.map(({ _id, img_path, category, subcategories }) => (
      <div className="boxcss" id={_id} onClick={this.onClick}>
        {/* <p name={_id} onClick={this.onClick}> */}
          <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img><br/>
          <p id={_id} onClick={this.onClick}>
            <b id={_id} onClick={this.onClick}>{category}</b><br/>
            {subcategories}<br/>
            <br/>
          </p>
          {/* <hr/> */}
        {/* </p> */}
      </div>
    ));
      
      return (
      <div id="bg">
        
      <section id="boxes">
        <div className="containercss">
          {categoryItems}
        {/* <div className="boxcss">
          <img src = './home_dec.png' alt = "hi"></img><br/>
          <p>
            Home Decoration<br/>
            Post<br/>
            <b>type</b><br/>
          </p>
          </div>
          <div className="boxcss">
          <img src = './homemade.jpg' alt = "hi"></img><br/>
          <p>
            Handmade Gifts<br/>
            Post<br/>
            <b>type</b><br/>
          </p>
          </div>
          <div className="boxcss">
          <img src = './invitation.jpg' alt = "hi"></img><br/>
          <p>
            Invitation Cards<br/>
            Post<br/>
            <b>type</b><br/>
          </p>
          </div>
          <div className="boxcss">
          <img src = './birthday.jpg' alt = "hi"></img><br/>
          <p>
            Birthday Cards<br/>
            Post<br/>
            <b>type</b><br/>
          </p>
          </div>
          <div className="boxcss">
          <img src = './personal.jpg' alt = "hi"></img><br/>
          <p>
            Personal Gifts<br/>
            Post<br/>
            <b>type</b><br/>
          </p>
          </div>
          <div className="boxcss">
          <img src = './electronic.jpg' alt = "hi"></img><br/>
          <p>
            Electronic Gift Items<br/>
            Post<br/>
            <b>type</b><br/>
          </p>
          </div> */}
        </div>
      </section>
  
      {/* <footer>
        <p>About us</p>
      </footer> */}
  
  
        </div>
      )
    
}
}

const mapStateToProps=state=>({
    categories:state.categories.items,
    categoriesLoading:state.categories.categoriesLoading,
    auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, { fetchCategories })(Categories);
// export default Categories;
