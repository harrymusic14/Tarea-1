// src/controllers/user.controller.ts
import { Request, Response } from 'express'
import { AppDataSource } from '../config/data-source'
import { UserEntity } from '../models/user.entity'

export const createUser = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(UserEntity)
  const user = repo.create(req.body)
  await repo.save(user)
  res.status(201).json(user)
}
