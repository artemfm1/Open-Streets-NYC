//const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
// axios.get(url)
//     .then((res) => {
//       for (let i = 0; i < res.data.length; i++)
//         console.log(res.data[i])
//     })
//     .catch((error) => {
//       console.error(error)
//     })




async function findOpenStreet() {
  const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
  try {
    const response = await axios.get(url)
    //console.log(response)
    console.log(response.data)
    //const streetData = response.data
    //removeOpenStreets()
    displayBorough(response.data)
    //console.log(filterdStreetData)
    // function displayOpenStreet(response) {
      // return response
    // }
  }
  catch (error) {
    console.error(error)
  }
}
findOpenStreet() 
function displayBorough(data) {
  const location = document.querySelector('input').value
  // if (location == "") {
  // return null
  // }
  // else {
    let area = data.filter(city => {
      return location === city.borough.toLowerCase()
      
    })
    console.log(area)
    const streetData = (area.map((street) => {
      return [street.from_stree, " " + street.to_street]
    }))
    const smallArray = streetData.slice(0, 30)
    console.log(smallArray)
    // const filterdStreetData = smallArray.filter((val, index, val2) => {
    // val2.indexOf(val) == index
    // })
    // console.log(filterdStreetData)
    //const crossStreet = area.map((street) => {
      //return street.to_street
    //})
    
    //console.log(streetData)
    //console.log(crossStreet)

  const boroughContainer = document.querySelector("#borough-name")
    
    for (let i = 0; i < smallArray.length; i++) {
      const boroughPtag = document.createElement("p")
      boroughContainer.appendChild(boroughPtag)
      boroughPtag.innerHTML = `${smallArray[i]}`
  }

  // function renderOpenStreet(data) {
    
  //   const location = document.createElement("open-streets")
  //   locationDiv.appendChild(location)
  //   //document.getElementById("#borough-name").innerHTML = location
  //   }

}

// function removeOpenStreets() {
//   const boroughContainer = document.querySelector('#borough-name')
//   while (boroughContainer.lastChild) {
//     boroughContainer.removeChild(boroughContainer.lastChild)
//   }
// }
  const searchButton = document.querySelector('#get-streets')
console.log(searchButton)
searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  displayBorough
})

