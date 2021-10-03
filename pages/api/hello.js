// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../config/db'

connectDB()

export default function helloAPI(req, res) {
  res.status(200).json({ msg: 'Hello' })
}
