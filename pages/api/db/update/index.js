import {getCurrentDate} from '../../../../components/getCurrentDate'
const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  if(tokenmd5 == req.query.tokenLocal){

    function imgCreateLink(imgLink){
      const firebaseLink="https://firebasestorage.googleapis.com/v0/b/mytestproject-b19dd.appspot.com/o/images%2F";
      return firebaseLink.toString()+imgLink.toString()+"?alt=media";
    }

    const querySelect=["query"];//Sonradan değişebilmek için ilk değer veriyorum diziye

    switch (req.query.que) {

      case "blogUpdate":
          if(req.query.blog_pic == "")
            querySelect[0]=escape`Update blog_post set blog_title = ${req.query.blog_title}, blog_description = ${req.query.blog_description}, blog_author = ${req.query.blog_author}, blog_inDate = ${getCurrentDate()}, blog_issue = ${req.query.blog_issue} where blog_id = ${req.query.blog_id}`;
          else
            querySelect[0]=escape`Update blog_post set blog_title = ${req.query.blog_title}, blog_description = ${req.query.blog_description}, blog_src = ${imgCreateLink(req.query.blog_pic)}, blog_author = ${req.query.blog_author}, blog_inDate = ${getCurrentDate()}, blog_issue = ${req.query.blog_issue} where blog_id = ${req.query.blog_id}`;
        break;
      case "blogActiveToPassive" :
          querySelect[0]=escape`UPDATE blog_post set blog_publish=0 where blog_id=${req.query.blog_id}`;
        break;
      case "blogPassiveToActive" :
          querySelect[0]=escape`UPDATE blog_post set blog_publish=1 where blog_id=${req.query.blog_id}`;
        break;
      default:
          const posts = "error";
        break;
    }
    const posts = await db.query(querySelect[0]);

    res.status(200).json({ posts })

  }
  else{
    const posts = "error";
    res.status(200).json({ posts})
  }


}
