import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import { DateTime } from 'luxon'

interface item {
  id: number
  createdAt: DateTime
  updatedAt: DateTime
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
    const item: item = await Item.create(body)
    //storing the data

    response.status(201)
    return item
  }
  public async show({ params }: HttpContextContract) {
    return 'GET item' + params.id
  }
  public async update({ params }: HttpContextContract) {
    const item = await Item.findOrFail(params.id)
    item.qty += 1

    return item.save()
  }
}
