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
  //get req gets all the items in database
  public async index({ response }: HttpContextContract) {
    response.status(200)
    return Item.all()
  }
  //post req adds the item to db
  public async store({ request, response }: HttpContextContract) {
    //getting the body
    const body = request.body()
    const item = await Item.create(body)
    //storing the data

    response.status(201)
    return item
  }
  //no use just made for now
  public async show({ params }: HttpContextContract) {
    return 'GET item' + params.id
  }
  //updating sell -> will update the qty
  public async update({ params }: HttpContextContract) {
    const item = await Item.findOrFail(params.id)
    item.qty += 1

    return item.save()
  }
  //delte endpoint deletes the item with the id
  public async destroy({ params }: HttpContextContract) {
    const item = await Item.find(params.id)
    return item?.delete()
  }
}
