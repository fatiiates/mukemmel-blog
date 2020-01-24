import React from "react";
import axios from 'axios';
import firebase from 'firebase';

class MyFileUpload extends React.Component {

  state = {
    selectedFile:null
  };

  fileSelectedHandler = event =>{
    this.setState({
      selectedFile:event.target.files[0]
    });
  };

  fileUploadHandler = event => {
    const token = await firebase.auth().currentUser.getIdToken()
    const fd = new FormData();
    fd.append('image',this.state.selectedFile,this.state.selectedFile.name)
    axios({
      url:'',
      method:'POST',
      headers:{
        authorization:token
      },
      data:fd
    }).then(res => {
       console.log(res);
     });
  };

  render () {
    return (

          <div className="form-group col-md-6">
              <div className="form-group" >
                  <label className="control-label col-lg-4">Resim Yükleme*</label>
                  <div className="">
                      <div className="fileupload fileupload-new" data-provides="fileupload" style={{marginLeft:"15px"}}>
                          <div className="fileupload-preview thumbnail" style={{width:"200px",height:"150px"}}></div>
                          <div>
                              <span className="btn btn-file btn-warning">
                                <span className="fileupload-new">Resim Seç</span>
                                <span className="fileupload-exists">Değiştir</span>
                                <input id="blog_pic" type="file" name="blog_pic" onChange={this.fileSelectedHandler} required />
                              </span>
                              <span className="fileupload-previvew"></span>
                              <a href="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Sil</a>
                          </div>
                          <button className="btn btn-success m-t-12" onClick={this.fileUploadHandler}  >
                            Kaydet
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default MyFileUpload;
