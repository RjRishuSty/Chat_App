

//* importing installed dependencies.......
import { Router } from 'express';

//* importing local created file..........
import { protectRoute } from '../middleware/auth.middleware.js';
import { getMessages, getUsersForSidebar, sendMessages } from '../controller/message.controller.js';

const router = Router();

router.get('/users', protectRoute, getUsersForSidebar); // This router work is show all user. who has in database.
router.get('/:id', protectRoute, getMessages); // Selected user for chat.
router.get('/send/:id', protectRoute, sendMessages); //Send content

export default router;  