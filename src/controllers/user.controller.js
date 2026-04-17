import { userService, createUserService } from '../services/user.service.js'

export async function userController(req, res) {
  const {email}=req.body
  const mensaje = await userService(email);
  res.send(mensaje);
}

export async function createUserController(req, res){
  const {email, nombre, apellido}=req.body
  console.log(email, nombre, apellido)
  res.send(await createUserService(email, nombre, apellido))
}
