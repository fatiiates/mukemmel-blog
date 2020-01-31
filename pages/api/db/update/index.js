import {getCurrentDate} from '../../../../components/getCurrentDate'
const db = require('../../../../lib/db')
const escape = require('sql-template-strings')
const md5=require('md5');

module.exports = async (req, res) => {
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
  const adminToken="af43c0445a680a18d52b648e1cb51c97";
  if(tokenmd5 == req.query.tokenLocal){

    function imgCreateLink(imgLink){
      const firebaseLink="https://firebasestorage.googleapis.com/v0/b/mytestproject-b19dd.appspot.com/o/images%2F";
      return firebaseLink.toString()+imgLink.toString()+"?alt=media";
    }

    const querySelect=[""];//Sonradan değişebilmek için ilk değer veriyorum diziye
    const post=[""];
    switch (req.query.que) {
      case "viewPlus":
        const blog = await db.query(escape`SELECT blog_views FROM blog_post where blog_id=${req.query.blog_id} LIMIT 0,1`);
        if(blog[0] != undefined)
          querySelect[0]=escape`UPDATE blog_post set blog_views = ${parseInt(blog[0].blog_views)+1} where blog_id=${req.query.blog_id}`
        break;
      case "blogUpdate":
        if(req.query.adminToken == adminToken)
            if(req.query.blog_pic == "")
              querySelect[0]=escape`Update blog_post set blog_title = ${req.query.blog_title}, blog_description = ${req.query.blog_description}, blog_author = ${req.query.blog_author}, blog_inDate = ${getCurrentDate()}, blog_issue = ${req.query.blog_issue} where blog_id = ${req.query.blog_id}`;
            else
              querySelect[0]=escape`Update blog_post set blog_title = ${req.query.blog_title}, blog_description = ${req.query.blog_description}, blog_src = ${imgCreateLink(req.query.blog_pic)}, blog_author = ${req.query.blog_author}, blog_inDate = ${getCurrentDate()}, blog_issue = ${req.query.blog_issue} where blog_id = ${req.query.blog_id}`;
        break;
      case "blogActiveToPassive" :
          if(req.query.adminToken == adminToken)
            querySelect[0]=escape`UPDATE blog_post set blog_publish=0 where blog_id=${req.query.blog_id}`;
        break;
      case "blogPassiveToActive" :
          if(req.query.adminToken == adminToken)
            querySelect[0]=escape`UPDATE blog_post set blog_publish=1 where blog_id=${req.query.blog_id}`;
        break;
      case "passChange" :
          if(req.query.adminToken == adminToken){
            const { new_pass } = await req.body
            const { new_pass_r } = await req.body
            const { available_pass } = await req.body
            if(new_pass == new_pass_r){
              const user = await db.query(escape`SELECT userpass FROM users where role='admin' LIMIT 0,1`);
              if(user[0].userpass == md5(available_pass)){
                const userpass=new_pass.toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'');
                querySelect[0]=escape`UPDATE users set userpass=${md5(userpass)} where role='admin'`;
              }
            }
          }
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
    const posts = "error";
    res.status(200).json({ posts})
  }


}
