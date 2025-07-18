// Importo o Router do Express para criar as rotas
import { Router } from 'express';
// Importo o controller de usuário para lidar com as requisições
import userController from '../controllers/userController.js';

import validarToken from '../middleware/authMiddleware.js';
// Crio uma instância do router
const router = Router();

// Rota para criar um novo usuário
router.post('/users', userController.create);
// Rota para listar todos os usuários
router.get('/users', validarToken,userController.getAll);
// Rota para buscar um usuário pelo id
router.get('/users/:id', userController.getById);

router.post('/login', userController.loginUser);

// Exporto o router para ser usado no index.js
export default router;
