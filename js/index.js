var allDate = [];
var connection = new XMLHttpRequest();
var category ="general";
getData(category);
var links = document.querySelectorAll(".nav-link");
for(var i = 0; i<links.length;i++)
{
    links[i].addEventListener("click",function(e){
       category =  e.target.text;
       getData(category);
    })
}
function getData(category)
{
    connection.open("GET","https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=949f972b5dad4d6c82266f7cf5b647ab");
    connection.send();
    connection.addEventListener("onreadystatechange",function()
    {
        if(connection.readyState == 4 && connection.status == 200)
        {
            allDate = JSON.parse(connection.response).articles;
            displayDate();
        }
    })
}

function displayDate()
{
    var temp =``;
    for(var i= 0; i<allDate.length ; i++)
    {
        temp +=`
        <div class="col-md-3 text-center">
            <div class="item">
                 <img src="`+allDate[i].urlToImage+`" class="img-fluid">
                <h5>`+allDate[i].title+`</h5>
                <p>`+allDate[i].description+`</p>
            </div>
        </div>`;
    }
    document.getElementById("disDa").innerHTML = temp;
}


