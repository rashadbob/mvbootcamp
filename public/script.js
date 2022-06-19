
axios.get("http://localhost:3000/resturants/29")//calls api from server
.then(function (response) {
  return response.data;
})
.then(function (data) {
  data.forEach(data => {
    const menuItemElement = document.createElement("li")//create a list item
    const item = document.createTextNode(`NAME = ${data.NAME} ,`)//item propertie = data.NAME
    const image = document.createTextNode(` IMAGE =  ${data.IMAGELINK},  `)//item propertie = data.NAME
    const id = document.createTextNode(`    ID =  ${data.ID}`)//item propertie = data.NAME
 
    
    menuItemElement.appendChild(item)//ad item to list
    menuItemElement.appendChild(image)//ad item to list
    menuItemElement.appendChild(id)//ad item to list
    div.appendChild(menuItemElement)//put list on div created from html
    })
    
})
.catch(function (error) {
  console.error(error);
});

function processForm(form) {
  axios.post('/resturants', {
    NAME: rname.value,
    IMAGELINK: rurl.value,
  
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 console.log(rname.value)
}
  