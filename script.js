
//=========AXIOS request=========//

async function findOpenStreet() {
  const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
  try {
    const response = await axios.get(url)
    displayBorough(response.data)
  }
  catch (error) {
    console.error(error)
  }
}
//==========Filtering the data==========//
function displayBorough(data) {
  const location = document.querySelector('input').value
    let area = data.filter(city => {
      return location === city.borough.toLowerCase()
    })
    console.log(area)
    const streetData = (area.map((street) => {
      return `${street.from_stree} ${street.to_street}`
    }))
  
    //=== filtering for unique values===//
    const filteredArray = new Set(streetData)
    const uniqueArray = Array.from(filteredArray)
    const boroughContainer = document.querySelector("#borough-name")
  
    //clearing the rendered data
    boroughContainer.innerHTML = ""
    document.querySelector('#streets-search').value = ""

    //looping through the data & appending 
    for (let i = 0; i < uniqueArray.length; i++) {
      const boroughPtag = document.createElement("p")
      boroughContainer.appendChild(boroughPtag)
      boroughPtag.innerHTML = `${uniqueArray[i]}`
  }



}
// Event listener to run the function//
const searchButton = document.querySelector('#get-streets')
searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  findOpenStreet()
})

