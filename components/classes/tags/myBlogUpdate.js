import React from "react";
import storage from "../../../lib/Firebase/index";

class MyFileUpload extends React.Component {

  constructor(props) {
    super(props);
    const randFirst=10000 * (Math.random() * 40000);
    const randSecond=20000 * (Math.random() * 50000);
    const randThird=30000 * (Math.random() * 60000);
    const randFourth=40000 * (Math.random() * 70000);

    this.uniqueKey=randFirst*randSecond*randThird*randFourth;
    this.uniqueKey=this.uniqueKey.toString().replace(/[^a-zA-Z0-9]/g, '');
    this.state = {
      image: null,
      url: "",
      progress: "Yükleniyor..."
    };

  }


  async blogUpdate(){
     const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
     const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";

     const imgName= this.state.image == null ? "" :this.state.image.name.toString().replace(/[^a-zA-Z0-9]/g, '')
         .replace('.jpg','.jpeg')
         .replace(' ','');

     const pageRequestSelect = `${host}/api/db/update?tokenLocal=${tokenmd5}&que=blogUpdate&blog_title=${$('#blog_title').val()}&blog_description=${$('#blog_description').val()}&blog_author=${$('#blog_author').val()}&blog_issue=${$('#blog_issue').val()}&blog_pic=${this.state.image == null ? "":this.uniqueKey.toString() + imgName}&blog_id=${$('#tokenId').val()}`;
     console.log(pageRequestSelect);
     const resSelect = await fetch(pageRequestSelect);
     const jsonSelect = await resSelect.json();
     if(jsonSelect.posts.warningCount === 0 && (jsonSelect.posts.affectedRows > 0 || jsonSelect.posts.changedRows > 0)){
       window.location="#success";
     }
     else {
       window.location="#error";
     }
     $('#loading').removeClass("lds-facebook");
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

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {

    this.deleteImage($('#temp_pic').val());
      const { image } = this.state;
      const imgName=this.state.image.name.toString().replace(/[^a-zA-Z0-9]/g, '')
      .replace(' ','');

      const uploadTask = storage.ref(`images/${this.uniqueKey.toString() + imgName}`).put(image);
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
            .child(this.uniqueKey.toString() + imgName)
            .getDownloadURL()
            .then(url => {
              this.setState({url});
              this.blogUpdate();
              $('#loading').removeClass("lds-facebook");
            });

        }
      );
  };

  buttonOnSubmit = event => {
      if($('#blog_title').val() == ""){
        $('#blog_title').css({'border-color':'red'});
        return true;
      }
      else
        $('#blog_title').removeAttr("style");

      if($('#blog_description').val() == ""){
        $('#blog_description').css({'border-color':'red'});
        return true;
      }
      else
        $('#blog_description').removeAttr("style");

      if($('#blog_author').val() == ""){
        $('#blog_author').css({'border-color':'red'});
        return true;
      }
      else
        $('#blog_author').removeAttr("style");

      if($('#blog_issue').val() == ""){
        $('#blog_issue').css({'border-color':'red'});
        return true;
      }
      else
        $('#blog_issue').removeAttr("style");

  }
  buttonOnClick = event => {
    if(this.buttonOnSubmit())
      alert('"*" ile belirtilmiş alanlar girilmelidir');
    else if(this.state.image == null){
      $('#loading').addClass("lds-facebook");
      this.blogUpdate();
    }
    else {
      $('#loading').addClass("lds-facebook");
      this.handleUpload();
    }

  }

  render () {
    return (
      <div className="form-group col-md-6">
      <style jsx>{`
        .lds-facebook {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-facebook div {
          display: inline-block;
          position: absolute;
          left: 8px;
          width: 16px;
          background: #fcf;
          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .lds-facebook div:nth-child(1) {
          left: 8px;
          animation-delay: -0.24s;
        }
        .lds-facebook div:nth-child(2) {
          left: 32px;
          animation-delay: -0.12s;
        }
        .lds-facebook div:nth-child(3) {
          left: 56px;
          animation-delay: 0;
        }
        @keyframes lds-facebook {
        0% {
          top: 8px;
          height: 64px;
        }
        50%, 100% {
          top: 24px;
          height: 32px;
        }
        }

      `}</style>
          <div className="form-group" >
              <label className="control-label col-lg-4">Resim Yükleme*</label>
              <div className="">
                  <div className="fileupload fileupload-new" data-provides="fileupload" style={{marginLeft:"15px"}}>
                      <div className="fileupload-preview thumbnail" style={{width:"200px",height:"150px"}}>{this.props.children}</div>
                      <div>
                          <span className="btn btn-file btn-warning">
                            <span className="fileupload-new">Resim Seç</span>
                            <span className="fileupload-exists">Değiştir</span>
                            <input id="blog_pic" type="file" name="blog_pic" onChange={this.handleChange} required />
                          </span>
                          <span className="fileupload-previvew"></span>
                          <a href="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Sil</a>
                      </div>
                      <a className="btn btn-success m-t-12" onClick={this.buttonOnClick}  >
                        Kaydet
                      </a>
                      <div id="loading" >
                        <div>
                          </div><div>
                          </div><div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default MyFileUpload;
