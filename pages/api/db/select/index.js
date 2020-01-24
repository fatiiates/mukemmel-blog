const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  if(tokenmd5 == req.query.token){
    var page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    if (page < 1) page = 1;
    const pageLow=` ${(page - 1) * limit}`;
    const pageHigh=`${limit}`;

    const querySelect=["query"];//Sonradan değişebilmek için ilk değer veriyorum diziye

    switch (req.query.que) {
      case "userLogin":
         querySelect[0]=escape`SELECT * FROM users ORDER BY id LIMIT ${(page - 1) * limit}, ${limit}`;
        break;
      case "blogPost":
         querySelect[0]=escape`SELECT * FROM blog_post where blog_id =${req.query.blog_id} LIMIT ${(page - 1) * limit}, ${limit}`;
        break;
      case "blogsActive":
          querySelect[0]=escape`SELECT * FROM blog_post where blog_publish=1 ORDER BY blog_id desc LIMIT ${(page - 1) * limit}, ${limit}`;
        break;
      case "blogActiveToPassive" :
          querySelect[0]=escape`UPDATE blog_post set blog_publish=0 where blog_id=${req.query.blog_id}`;
      break;
      case "blogsPassive":
          querySelect[0]=escape`SELECT * FROM blog_post where blog_publish=0 ORDER BY blog_id desc`;
        break;
      case "blogPassiveToActive" :
          querySelect[0]=escape`UPDATE blog_post set blog_publish=1 where blog_id=${req.query.blog_id}`;
        break;
      case "blogDelete" :
          querySelect[0]=escape`DELETE FROM blog_post where blog_id=${req.query.blog_id} AND blog_publish=0`;
        break;
      default:break;
    }
    const posts = await db.query(querySelect[0]);

    res.status(200).json({ posts, page })

  }
  else{
    const posts = "error";
    res.status(200).json({ posts})
  }


}
