# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.create(sprites:["https://i.imgur.com/XocUSO6.png", "https://i.imgur.com/JtH23o7.png"], name: "bunny", energy_level: 10, hunger_level: 10, cleanliness: 10, mood: "calm")
User.create(username: "bunny_tamer", password: "123")
Pet.create(name: "angel", user_id: 1, animal_id: 1)
