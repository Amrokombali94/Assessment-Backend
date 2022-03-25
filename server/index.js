const express = require("express");
const cors = require("cors");
// export {compliments}

const app = express();


app.use(cors());

const {deleteCompliment} = require('./controller')

app.use(express.json()); // When we want to be able to accept JSON.


 const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

app.get("/api/compliment", (req, res) => {

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});


app.get("/api/fortune", (req, res) => {
  const fortune = ["A light heart carries you through all the hard times.",
					 "A lifetime friend shall soon be made",
					 "Adventure can be real happiness",
           "A smooth long journey! Great expectations.",
           "A hunch is creativity trying to tell you something."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});


app.get("/api/allCompliment", (req, res) => {
  
  res.status(200).send(compliments);
});

app.post("/api/Compliment/:newCompliment", (req, res) => {
  
  compliments.push(req.params.newCompliment)

  res.status(200).send(compliments);
  
});

app.delete("/api/Compliment/:newCompliment",  deleteCompliment);

// exports.compliments  = ["Gee, you're a smart cookie!",
// "Cool shirt!",
// "Your Javascript skills are stellar.",
// ];

app.listen(4000, () => console.log("Server running on 4000"));


