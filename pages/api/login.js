import fetch from 'isomorphic-unfetch'
const md5 = require('md5');

export default async (req, res) => {
  const { username } = await req.body
  const { userpass } = await req.body

  const adminToken="af43c0445a680a18d52b648e1cb51c97";
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
  const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
  const pageRequestSelect = `${host}/api/db/select?token=${tokenmd5}&adminToken=${adminToken}&que=userLogin&username=${md5(username)}&userpass=${md5(userpass)}`;

  try {
    const resSelect = await fetch(pageRequestSelect);

    if (resSelect.ok) {
      const jsonSelect = await resSelect.json();
      if(jsonSelect.posts["0"]["COUNT(*)"] == 1){

        const randFirst=10000 * (Math.random() * 40000);
        const randSecond=20000 * (Math.random() * 50000);
        const randThird=30000 * (Math.random() * 60000);
        const randFourth=40000 * (Math.random() * 70000);
        
        const uniqueKey=randFirst*randSecond*randThird*randFourth;

        return res.status(200).json({ token: md5(uniqueKey) });
      }
      else
        return res.status(401).send('Authorization nothing')
    } else {
      // https://github.com/developit/unfetch#caveats
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  } catch (error) {
    const { response } = error
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message })
  }
}
