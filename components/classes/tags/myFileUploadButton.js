import React from "react";
import storage from "../../../lib/Firebase/index";

class MyFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
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
                            <input id="blog_pic" type="file" name="blog_pic" onChange={this.handleChange} required />
                          </span>
                          <span className="fileupload-previvew"></span>
                          <a href="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Sil</a>
                      </div>
                      <button className="btn btn-success m-t-12" onClick={this.handleUpload}  >
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
