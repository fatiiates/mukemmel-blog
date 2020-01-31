const db = require('../../../../lib/db')
const escape = require('sql-template-strings')
const md5=require('md5');

module.exports = async (req, res) => {
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
  const adminToken="af43c0445a680a18d52b648e1cb51c97";
  if(tokenmd5 == req.query.token){
    var page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    if (page < 1) page = 1;
    const pageLow=` ${(page - 1) * limit}`;
    const pageHigh=`${limit}`;

    const querySelect=[""];//Sonradan değişebilmek için ilk değer veriyorum diziye
    const post=[""];
    switch (req.query.que) {
      case "pagination":
         querySelect[0]=escape`SELECT COUNT(*) FROM blog_post`;
        break;
      case "userLogin":
            const username=req.query.username.toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            const userpass=req.query.userpass.toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            querySelect[0]=escape`SELECT COUNT(*) FROM users WHERE username=${md5(username)} AND userpass=${md5(userpass)} AND role='admin' LIMIT 0, 1`;
        break;
      case "blogPost":
         querySelect[0]=escape`SELECT * FROM blog_post where blog_id =${req.query.blog_id} LIMIT ${(page - 1) * limit}, ${limit}`;
        break;
      case "blogsActive":
          querySelect[0]=escape`SELECT * FROM blog_post where blog_publish=1 ORDER BY blog_id desc LIMIT ${(page - 1) * limit}, ${limit}`;
        break;
      case "blogsPassive":
          if(req.query.adminToken == adminToken)
            querySelect[0]=escape`SELECT * FROM blog_post where blog_publish=0 ORDER BY blog_id desc`;
        break;
      default:
          post[0] = "error";
        break;
    }
    if(querySelect[0] == "")
      post[0] ="error";
    else
      post[0] = await db.query(querySelect[0]);
      const posts=post[0];
    res.status(200).json({ posts , page })

  }
  else{
    const posts = "error";
    res.status(200).json({ posts})
  }


}
