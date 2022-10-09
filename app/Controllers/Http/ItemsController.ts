import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class ItemsController {
  public async index(ctx: HttpContextContract) {
    return 'GET items'
  }
  public async store({ request }: HttpContextContract) {
    return {
      msg: 'post req',
      body: request.body(),
    }
  }
  public async show({ params }: HttpContextContract) {
    return 'GET item' + params.id
  }
}
