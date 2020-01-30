import fetch from 'isomorphic-unfetch'

export default async (req, res) => {
  if (!('authorization' in req.headers)){
    return res.status(401).send('Authorization header missing')

  }

  else {
    const auth = await req.headers.authorization
    const { token } = JSON.parse(auth)
    return res.status(200).json({ process:"success" })
  }
}
