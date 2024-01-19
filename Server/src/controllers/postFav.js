const {Favorite} = require ("../DB_connection")

const postFav = async (req, res) => {
    const {id, name, origin, status, image, species, gender} = req.body
    
    try {
        if(id && name && origin && status && image && species && gender){
            await Favorite.findOrCreate({
                where: {id, name, origin, status, image, species, gender}
            })
            const favs = await Favorite.findAll()
            return res.status(201).json(favs)
        }
        return res.status(401).json({message: "Faltan datos"})
    } catch (error) {
        return res.status(500).json({message:error})
    }
} 

module.exports = postFav;