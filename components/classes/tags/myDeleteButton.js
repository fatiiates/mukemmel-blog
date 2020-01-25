import React from "react";
import storage from "../../../lib/Firebase/index";

class MyFileUpload extends React.Component {

  constructor(props) {
    super(props);
  }

  async blogDelete(){
     const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
     const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
     const pageRequestSelect = `${host}/api/db/delete?tokenLocal=${tokenmd5}&que=blogDelete&blog_id=${}`;

     const resSelect = await fetch(pageRequestSelect);
     const jsonSelect = await resSelect.json();
     if(jsonSelect.posts.warningCount === 0 && (jsonSelect.posts.affectedRows > 0 || jsonSelect.posts.changedRows > 0)){
       window.location="#success";
     }
     else {
       window.location="#error";
     }
  }

  deleteImage(url){
    var imgName=url.toString().split("images%2F");
    imgName=imgName[1].toString().split("?alt");
    imgName=imgName[0];
    const desertRef = storage.ref().child('images/'+imgName);
    desertRef.delete().then(function() {
      // File deleted successfully
      return true;
    }).catch(function(error) {
      console.log(error);
    });
  }

  buttonOnClick = event => {
    
  }

  render () {
    const { onCustomClick, ...props } = this.props
    return <button {...props} onClick={this.buttonOnClick}>Sil</button>
  }
}

export default MyFileUpload;
