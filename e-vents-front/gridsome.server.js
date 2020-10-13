// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })
//
//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

const nodeExternals = require('webpack-node-externals')
const axios = require('axios')

module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {

      const res = await axios.delete(`http://localhost:1337/events/4`)
      const { data } = await axios.get(`http://localhost:1337/events`)





        console.log(res)

      const collection = actions.addCollection({
        typeName: 'Event',
        path: '/events/:id',
      })

      console.log('test')
      for (const event of data) {
        collection.addNode({
          id: event.id,
          title: event.title,
          path: '/events/' + event.id,
          image: event.image.url,
          description: event.description,
          price: event.price,
          duration: event.duration,
          date: event.date,
          categoryName: event.categories[0].name
        })
      }
    })

}
