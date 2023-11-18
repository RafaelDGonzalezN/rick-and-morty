const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) =>{

    try {
        const {id} = req.params
        const {status, name, species, origin, image, gender} = (await axios(URL + id)).data 
        const ch = {id, status, name, species, origin, image, gender}
        
        if(ch.name){ 
            res.json(ch)
        }else{
            res.status(404).send("Not fount")
        }
    } catch (reason) {
        return res.status(500).send(reason.message)
    }
}

module.exports = getCharById;