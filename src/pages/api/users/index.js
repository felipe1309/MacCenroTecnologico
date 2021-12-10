import { dbconnetion } from "../../../utils/conection";
import User from "../../../models/User";
dbconnetion();
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const users = await User.find();
        return res.status(200).json(users);
      } catch (error) {
        return res.status(500).json({msg: error.message});
      }
    case "POST":
      try {
      const user = new User(req.body);
      const saveUser = await user.save();
      return res.status(201).json(saveUser);
      } catch (error) {
        return res.status(500).json({msg: "Server Error post"});
      }
    default:
      break;
  }
}
