const Menus = require('../resources/menus')

module.exports = (app) => {
  app.get('/api/menus', (request, response) => {
    const menusData = Menus.getData()
    response.json(menusData)
  })
}
