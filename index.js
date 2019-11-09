





document.addEventListener('DOMContentLoaded', function() {
    function renderBrewery(breweryArray) {
        var breweryHTML = breweryArray.map(function(brewery) {
            return 
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="renderPhoto()" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${brewery.name}</h5>
                            <p class="card-text">${brewery.opening_hours}</p>
                            <a href="${brewery.formatted_address}" class="btn btn-primary">Go to Address</a>
                        </div>
                    </div>
                </div>
            </div>`
        })
        return breweryHTML.join('');
    }
    $(document).ready(function() {
        $('#brewey-btn').click(getBrewery)
    });
    function getBrewery() {
        $.getJSON('https://maps.googleapis.com/maps/api/place/textsearch/json?query=breweries+in+Houston&key=AIzaSyBitP27AVOxIuXMYSh1w8YAxKcpVYk2_Pg'), function(response) {
            $('#search-container').attr(response.message)
            console.log(response)
        }
    }
    const searchBtn = document.getElementById("search-btn");
    var content = document.getElementById('search-container');
    const breweryBtn = document.getElementById('brewery-btn');
    breweryBtn.addEventListener('submit', function(e) {
        e.preventDefault()
        console.log(e)
    })
    console.log(getBrewery())
    
})








