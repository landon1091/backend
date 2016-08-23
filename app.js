

function getAPI(url, prop1, prop2, prop3){
    
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
        console.log(response);
        let parent = document.getElementById('list1');


        for(let i = 0; i < response.length; i++){
            let element = document.createElement('li');
            if(response[i] !== null){
            element.textContent = "Name: " + response[i][prop1] + " Price $" + response[i][prop2] + ' Rating: ' + response[i][prop3];
            parent.appendChild(element); 
            }
        }
    })
    request.send();
}



function postAPI(){
    let addAPI = {
        name: document.getElementById('namebox').value,
        price: document.getElementById('pricebox').value,
        rating: document.getElementById('ratingbox').value,
        greatness_rating: document.getElementById('greatnessbox').value,
    };
    let request = new XMLHttpRequest();
    request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.send(JSON.stringify(addAPI));
}






window.addEventListener('load', function(){
    getAPI('http://charlotte-coffee-shops.herokuapp.com/coffee-shops', 'name', 'price', 'rating');
    
    let submitBtn = document.querySelector('button');
    submitBtn.addEventListener('click', function () {
        postAPI();
    })
});