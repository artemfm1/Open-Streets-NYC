const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
// axios.get(url)
//     .then((res) => {
//       for (let i = 0; i < res.data.length; i++)
//         console.log(res.data[i])
//     })
//     .catch((error) => {
//       console.error(error)
//     })




async function findOpenStreet(location) {
  const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
  try {
    const response = await axios.get(url)
    console.log(response.data)
    displayBorough(response.data)
    // function displayOpenStreet(response) {
      // return response
    // }
  }
  catch (error) {
    console.error(error)
  }
}
  
  function displayBorough(data) {
    let location = document.querySelector('#borough').value
    let area = data.filter(city => {
      return "queens" === city.borough.toLowerCase()
    })
    console.log(area)
    console.log(area[0].from_stree)
    const streetData = new Set( area.map((street) => {
      return [street.from_stree,street.to_street]
    }))
    
    //console.log(area[0].to_street)
    const crossStreet = area.map((street) => {
      //return street.to_street
      })
    
    
    console.log(streetData)
    //console.log(crossStreet)

    const boroughContainer = document.querySelector("#borough-name") 
    const boroughPtag = document.createElement("p")
    boroughContainer.appendChild(boroughPtag)
    boroughPtag.innerHTML = `${streetData}`
}

  // function renderOpenStreet(data) {
    
  //   const location = document.createElement("open-streets")
  //   locationDiv.appendChild(location)
  //   //document.getElementById("#borough-name").innerHTML = location
  //   }





  
findOpenStreet()
// renderOpenStreet()
