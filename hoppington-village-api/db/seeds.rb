# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.all.destroy_all
User.all.destroy_all
Pet.all.destroy_all
Item.all.destroy_all


Animal.create(sprites:{"main":"http://images6.fanpop.com/image/photos/38500000/Angel-Bunny-angel-bunny-38523354-963-829.png", "dancing":"https://i.imgur.com/JtH23o7.png", "clean": "https://pre00.deviantart.net/b02e/th/pre/f/2015/101/4/f/vector__153___angel_bunny_by_dashiesparkle-d8pdje6.png"}, name: "bunny"  )
User.create(username: "bunny_tamer", password: "123")
Pet.create(name: "angel", user_id: 1, animal_id: 1, cleanliness: 10, mood: "calm", energy_level: 10, hunger_level: 10)
Item.create(name: "carrot", sprite: "https://openclipart.org/image/2400px/svg_to_png/175279/carrot.png", type_of_item: "food")
Item.create(name: "party-hat", sprite: "http://clipground.com/images/party-hat-clipart-17.jpg", coordinates:{width: 150, left:140, top:20}, type_of_item: "clothing")
Item.create(name: "bow-tie", sprite: "http://www.clker.com/cliparts/V/9/n/V/4/X/teal-bow-tie-hi.png",coordinates:{width: 100, left:140, top:380}, type_of_item: "clothing")
Item.create(name: "shoes", sprite: "https://i.imgur.com/WX5geD2.png",coordinates:{width: 320, left:75, top:460}, type_of_item: "clothing")
Item.create(name: "brush", sprite: "http://vignette4.wikia.nocookie.net/clubpenguin/images/0/02/655px-Hairbrush_Pin.png/revision/latest?cb=20120624184724&path-prefix=es", type_of_item: "cleaner")
Item.create(name: "bed", sprite: "http://www.clker.com/cliparts/3/d/1/b/11954256271247028917liftarn_Cradle.svg.hi.png", type_of_item: "energy")
