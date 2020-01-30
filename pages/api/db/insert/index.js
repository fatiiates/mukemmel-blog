import {getCurrentDate} from '../../../../components/getCurrentDate'
const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
  const adminToken="af43c0445a680a18d52b648e1cb51c97";
  const post =[""];
  if(tokenmd5 == req.query.tokenLocal){

    function imgCreateLink(imgLink){
      const firebaseLink="https://firebasestorage.googleapis.com/v0/b/mytestproject-b19dd.appspot.com/o/images%2F";
      return firebaseLink.toString()+imgLink.toString()+"?alt=media";
    }

    const querySelect=[""];//Sonradan değişebilmek için ilk değer veriyorum diziye

    switch (req.query.que) {
      case "blogInsert":
        if(req.query.adminToken == adminToken)
          querySelect[0]=escape`INSERT INTO blog_post (blog_title,blog_description,blog_src,blog_publish,blog_author,blog_inDate,blog_issue,blog_views) VALUES (${req.query.blog_title},${req.query.blog_description},${imgCreateLink(req.query.blog_pic)},0,${req.query.blog_author},${getCurrentDate()},${req.query.blog_issue},'0') `;
        break;
      default:
          post[0] = "error";
        break;
    }
    if(querySelect[0] != "")
      post[0] = await db.query(querySelect[0]);
    else
      post[0] = "error";
    const posts=post[0];
    res.status(200).json({ posts })

  }
  else{
    const posts = req.query.token;
    res.status(200).json({ posts})
  }


}
