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
      return "n" === city.borough.toLowerCase()
    })
    console.log(area)
  }








findOpenStreet()

