import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'

interface item {
  title: string
  img: string
  qty: number
  price: number
}
export default class ItemsController {
  public async index({ response }: HttpContextContract) {
    response.status(200)
    return Item.all()
  }
  public async store({ request, response }: HttpContextContract) {
    //getting the body
    const body = request.body()
    const item = await Item.create(body)
    //storing the data

    response.status(201)
    return item
  }
  public async show({ params }: HttpContextContract) {
    return 'GET item' + params.id
  }
}
