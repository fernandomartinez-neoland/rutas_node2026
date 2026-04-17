import { userModel } from '../models/user.model.js'

export async function userService(email) {
  const usuario = await userModel()
  return await usuario.findOne({ 'email': email });
}

export async function createUserService(email, nombre, apellido) {

  const usuario = await userModel()
  return await usuario.create({ email, nombre, apellido })
}
