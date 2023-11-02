// // const axios = require("axios")

// // const getCharByID = (res, id) =>{
// //     axios
// //         .get(`https://rickandmortyapi.com/api/character/${id}` )
// //         .then((response) => {

// //           const ch = response.data
          
// //           return {
// //             id,
// //             name: ch.name,
// //             gender: ch.gender,
// //             species: ch.species,
// //             origin: ch.origin.name,
// //             image: ch.image,
// //             status: ch.status,
// //         };
// //     })    
// //         .then((response) =>{
// //             res.writeHead(200,{"Content-Type": "application/json"})
// //             return res.end(JSON.stringify(response)) 
// //     })
// //         .catch((reason) =>{
// //             res.writeHead(500, {"Content-Type": "text/plain"})
// //             return res.end(reason.response.data.error)
// //         })
// //     }

// // module.exports = getCharByID


// const axios = require("axios")
// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (req, res) =>{
//     const {id} = req.params
//     axios(URL + id)
//     .then(({data}) => {
//         const {status, name, species, origin, image, gender} = data 
//         const ch = {id, status, name, species, origin, image, gender}
        
//         if(ch.name){ 
//             res.json(ch)
//         }else{
//             res.status(404).send("Not fount")
//         }
//     })
//     .catch((reason) => {
//         return res.status(500).send(reason.message)
//     })
// }

// module.exports = getCharById;

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