import User from "../../../models/userModel";
import { dbconnetion } from "../../../utils/connection";
dbconnetion();
export default async (req, res) => {
  const {
    query: { id },
    body,
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ message: "server error" });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    case "PUT":
      try {
          const user = await User.findByIdAndUpdate(id, body, { new: true });
            if (!user) return res.status(404).json({ message: "server error" });
            return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    case "DELETE":
        try {
          const user = await User.findByIdAndDelete(id);
          if (!user) return res.status(404).json({ message: "not user" });
          return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message: error.message });}
    default:
      return res.status(405).json({ msg: "Method not allowed" });
  }
};
