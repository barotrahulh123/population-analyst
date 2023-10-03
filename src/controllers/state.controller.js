import * as Yup from "yup";
import State from "../models/State";
import User from "../models/User";
import { BadRequestError, ValidationError, InternalServerError } from "../utils/ApiError";

let postController = {
  add: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),

      });

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      const stateExists = await State.findOne({
        where: { name: req.body.name },
      });

      if (stateExists) throw new BadRequestError('State Already Exist');

      const post = await State.create(req.body);

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },

  get: async (req, res, next) => {
    try {
      const post = await State.findAll();

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },

  find: async (req, res, next) => {
    try {
      const { id } = req.params;

      const page = req.body.page; // Replace with the desired page number
      const perPage = req.body.limit; // Replace with the desired number of items per page
      const offset = (page - 1) * perPage;

      const post = await State.findByPk(id,{
        include: [
          {
            model: User,
            as: 'users', // Assuming 'users' is the alias for the User association
            limit: perPage,
            offset: offset
          }
        ]
      });

      if (!post) throw new InternalServerError('No State found', 500);

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },
};

export default postController;
