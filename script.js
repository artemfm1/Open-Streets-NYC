const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
axios.get(url)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++)
        console.log(res.data[i])
    })
    .catch((error) => {
      console.error(error)
    })




async function findOpenStreet(location) {
  const url = "https://data.cityofnewyork.us/resource/uiay-nctu.json"
  try {
    const response = await axios.get(url)
    function displayOpenStreet(response) {
      return response
    }
  }
  catch (error) {
    console.error(error)
  }

  
  function displayBorough(location) {
  // let borough = response.data[i].borough
  //   console.log(response.data[i]) 
  let borough =
  `<h4 id = "borough-name">${response.data[i].borough}</h4>`
    return borough
  }




}

displayBorough()

findOpenStreet()

