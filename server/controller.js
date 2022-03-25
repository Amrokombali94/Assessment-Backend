// const file = require('./index')
// file.compliments
// /* I try to do this but it did not work */




module.exports = {

    deleteCompliment: (req, res) =>{
        const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
         ];
         console.log(req.params)
         let index = compliments.findIndex(elem => elem === req.params.newCompliment)
         console.log(index)
         console.log(compliments.splice(index, 1))
         res.status(200).send(compliments)
    },



}