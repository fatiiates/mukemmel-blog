import React from "react";

class Notification extends React.Component{
  render(){
    return (
          <div className="notification" >
          <style jsx global>{`

          #success,#error {
            display:none;
          }
          #success:target,#error:target{
            display:block;
          }
          `}</style>
            <div id="success" className="alert alert-success alert-dismissable">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                İşleminiz Başarılı!.
            </div>
            <div id="error" className="alert alert-danger alert-dismissable">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                İşleminiz Başarısız!.
            </div>
           </div>
         );
  }
}
export default Notification;
