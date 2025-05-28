import { createUser } from "../repositorys/user.repository";

export const create = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};
