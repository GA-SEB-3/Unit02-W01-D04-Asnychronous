const axios = require('axios')

// axios: package allows me to send requests anywhere

axios.get("https://swapi.py4e.com/api/people/1")
.then((firstCharacter)=>{console.log(firstCharacter)})

