import { Router } from "express";
import stateController from "../controllers/state.controller";

const stateRoutes = Router();
/**
 * @swagger
 * /state:
 *   get:
 *     summary: Get a list of States
 *     description: Retrieve a list of states from the database.
 *     responses:
 *       '200':
 *         description: A successful response with a list of states.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for a states.
 *                   name:
 *                     type: string
 *                     description: The name of the user.
 *                   description:
 *                     type: string
 *                     description: A description of the user.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the states was created.
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the states was last updated.
 */
stateRoutes.get("/state", stateController.get);
stateRoutes.post("/state", stateController.add);
/**
 * @swagger
 * /state/{stateId}:
 *   post:
 *     summary: Create a new state
 *     description: Create a new state with the provided data.
 *     parameters:
 *       - name: stateId
 *         in: path
 *         description: The ID of the state
 *         required: true
 *         type: string
 *     consumes:
 *       - text/plain
 *     requestBody:
 *       content:
 *         text/plain:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: integer
 *                 description: The page number.
 *               limit:
 *                 type: integer
 *                 description: The maximum number of items to return.
 *     responses:
 *       '200':
 *         description: State created successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

stateRoutes.post("/state/:id", stateController.find);

export { stateRoutes };
