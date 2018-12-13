const Router = require('nextjs-dynamic-routes')
 
const router = new Router()
 
router.add({ name: 'character', pattern: '/characters/:id' })

router.add({ name: 'category', pattern: '/category/:id/:slug' })

router.add({ name: 'character-and-film', pattern: '/character-and-film/:characterId/:filmId' })
 
router.add({ name: 'film', pattern: '/films/:id' })

 
// if the name of your route is different from your component file name:
// router.add({
//   name: 'characterAndFilm',
//   pattern: '/character-and-film/:characterId/:filmId',
//   page: 'character-and-film'
// })
 
module.exports = router