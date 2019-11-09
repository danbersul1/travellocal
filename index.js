var apiKey = "AIzaSyBitP27AVOxIuXMYSh1w8YAxKcpVYk2_Pg";

$(document).ready(function () {

    var placeData = [];

    function renderAtt(arr) {

        var render = arr.map(function (data) {
            var photos = '';
            if (typeof data.photos != 'undefined') {
                photos = data.photos.map(function (photo) {
                    console.log(photo)
                    return `<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${apiKey}" class="card-img" alt="..."/>`
                });
            }

            var card = `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            ${photos}
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${data.name}</h5>
                                    <p class="card-text">${data.formatted_address}</p>
                                    <p class="card-text">Rating ${data.rating}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>`

            return card;

        })
        return render;
    }

    

    $("#brewery-btn").click(function () {
        event.preventDefault();
        console.log("test");

        axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=breweries+in+Houston&key=AIzaSyBitP27AVOxIuXMYSh1w8YAxKcpVYk2_Pg")
            .then(function (respond) {
                placeData = respond.data.results
                console.log(placeData);
                var refernce = placeData.map(function (arr) {
                    var photoData = arr.photos


                    return photoData;
                })

                console.log(refernce);



                $("#search-container").html(renderAtt(placeData))

                return refernce;
            })


    })
})


