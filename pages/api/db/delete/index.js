const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  if(tokenmd5 == req.query.tokenLocal){


    const querySelect=["query"];//Sonradan değişebilmek için ilk değer veriyorum diziye

    switch (req.query.que) {
      case "blogDelete" :
          querySelect[0]=escape`DELETE FROM blog_post where blog_id=${req.query.blog_id} AND blog_publish=0`;
        break;
      default:break;
    }
    const posts = await db.query(querySelect[0]);

    res.status(200).json({ posts })

  }
  else{
    const posts = "error";
    res.status(200).json({ posts})
  }


}
