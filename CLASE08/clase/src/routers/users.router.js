import { Router } from "express";
//import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
const users = [];

router.get('/', (req, res) => {
    res.json({message: 'users', users});
}
);

router.post('/',(req, res) => {
    const user = req.body;

    let id = 0
    if(users.length === 0) {
        id = 1;
    } else {
        id = users[users.length - 1].id + 1;
    }

    const newUser = {...user, id};
    users.push(newUser);
    res.json({message: 'user added', newUser});
}
);

export default router;