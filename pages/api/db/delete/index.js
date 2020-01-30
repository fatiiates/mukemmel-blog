const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {

  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
  const adminToken="af43c0445a680a18d52b648e1cb51c97";
  const post=[""];
  if(tokenmd5 == req.query.tokenLocal){


    const querySelect=[""];//Sonradan değişebilmek için ilk değer veriyorum diziye

    switch (req.query.que) {
      case "blogDelete" :
          if(req.query.adminToken == adminToken)
            querySelect[0]=escape`DELETE FROM blog_post where blog_id=${req.query.blog_id} AND blog_publish=0`;
        break;
      default:
          post[0] = "error";
        break;
    }
    if(querySelect[0] == "")
      post[0] = "error";
    else
      post[0] = await db.query(querySelect[0]);
    const posts=post[0];
    res.status(200).json({ posts })

  }
  else{
    const posts = "error";
    res.status(200).json({ posts})
  }


}
