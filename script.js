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
    //const streetData = response.data
    
    displayBorough(response.data)
    console.log(filterdStreetData)
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
    const streetData = ( area.map((street) => {
      return [street.from_stree, " "+ street.to_street]
    }))
    const smallArray = streetData.slice(0, 30)
    console.log(smallArray)
    //console.log(streetData)
    const filterdStreetData = smallArray.filter((val, index, val2) => {
      return val2.indexOf(val) == index
    })
    console.log(filterdStreetData)
    console.log(area[0].to_street)
    const crossStreet = area.map((street) => {
      //return street.to_street
      })
    
    
    //console.log(streetData)
    //console.log(crossStreet)

    const boroughContainer = document.querySelector("#borough-name") 
    
    for (let i = 0; i < smallArray.length; i++){
      const boroughPtag = document.createElement("p")
      boroughContainer.appendChild(boroughPtag)
      boroughPtag.innerHTML = `${smallArray[i]}`
      i++
    }
    
}

  // function renderOpenStreet(data) {
    
  //   const location = document.createElement("open-streets")
  //   locationDiv.appendChild(location)
  //   //document.getElementById("#borough-name").innerHTML = location
  //   }





  
findOpenStreet()
// renderOpenStreet()
