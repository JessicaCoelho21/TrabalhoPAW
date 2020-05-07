const express = require('express')

const userController = require('../controllers/userController')
const userRouter = express.Router()

//Código em falta 
//userRouter.get('/signup', userController.getSign);

userRouter.post('/signup', userController.createUser);
//userRouter.get('/login',userController.getLog)
userRouter.post('/login', userController.loginUser);

//vou colocar aqui as rotas que sao responsaveis pelo criar, editar, atualizar e remover utlizidador
//como o create ja esta a ser utilizado no signup , penso que nao preciso de colocar outra vez
userRouter.get("/:userId", userController.getUserById)
userRouter.put("/:userId",userController.updateUser);
userRouter.delete("/:userId",userController.deleteUser)


module.exports = userRouter