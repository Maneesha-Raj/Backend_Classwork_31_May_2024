


function fetchData(url) {
  return new Promise((resolve, reject) => {
     fetch(url)
      .then(response =>response.json())
      .then(json=>{
        console.log('Data fetched successfully:');
        console.log(json)
    })
      .catch(error=>{
        console.error('Error fetching data:', error);
        
    });
  });
}



fetchData("https://jsonplaceholder.typicode.com/todos/57")

