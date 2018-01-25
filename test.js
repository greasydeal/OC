var dataRequest = new XMLHttpRequest();
var dataContainer = document.getElementById("data");

dataRequest.open('Get', 'test.json');

dataRequest.onload = function(){
    var dataPass = JSON.parse(dataRequest.responseText);
    renderHTML(dataPass);
};

dataRequest.send();


function renderHTML(data){
    for (i = 0; i < data.length; i++){
        
        dataContainer.insertAdjacentHTML("beforeend", "Temp: " + data[i].probe + "<br>");
        dataContainer.insertAdjacentHTML("beforeend", "Recipe: " + data[i].recipe + "<br>");
        dataContainer.insertAdjacentHTML("beforeend", "Time: " + data[i].time + "<br><br>");
        
    }
    
}

