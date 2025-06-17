import express from 'express'
import userRoutes from './routes/user.routes'
import { AppDataSource } from './config/data-source'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)

AppDataSource.initialize()
  .then(() => {
    console.log('📦 Conectado a la base de datos')
    app.listen(3000, () => console.log('🚀 Servidor corriendo en http://localhost:3000'))
  })
  .catch((err) => console.error(err))

