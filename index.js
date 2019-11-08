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
                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">Address</a>
                        </div>
                    </div>
                </div>
            </div>`
        })
    }
})






`<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="renderPhoto()" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="#" class="btn btn-primary">Address</a>
      </div>
    </div>
  </div>
</div>`