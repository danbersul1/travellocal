
$(document).ready(function(){

  var placeData=[];
  
  function renderAtt(arr){       //used vanilla javascript for rendering the bootstrap card using 
  
  var render= arr.map(function(data){
    var photos = '';
    
                if (typeof data.photos != 'undefined') {
                     photos = data.photos.map(function (photo) {
                         console.log(photo)
                       return `<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o" height="100" class="card-img" alt="..."/>`
                 });
              }
      var card =`<div id="render">
      <div class="card mb-3 "data-toggle="collapse" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">${photos}
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.formatted_address}</p>
            <p class="card-text">Rating ${data.rating}</p>
          </div>
          </div>
          <iframe width="600" height="450" frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:${data.place_id}&key=AIzaSyBJDqK23uOVafUHXPDZzEpQ7i4XiRWvwW8" allowfullscreen></iframe> 

      </div>
      </div>
    `
  
  return card;  
  })
  return render;
  }
  
  $("#concert-btn").click(function () {
    event.preventDefault();
    console.log("test");
  
    axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=concert+in+Houston&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o")
    
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
  $("#brewery-btn").click(function () {
    event.preventDefault();
    console.log("test");
   
    axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=breweries+in+Houston&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o")
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
  
  
  $("#food").click(function(){
      event.preventDefault();
     console.log("test");
   
     axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=barbeque+texmes+in+Houston&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o")
     .then(function(respond){
         placeData=respond.data.results
         console.log(placeData);
         var refernce=placeData.map(function(arr){
             var photoData=arr.s
            
             
  return photoData;
         })
  
         $("#search-container").html(renderAtt(placeData))
         
         return refernce;
     })
  
  
  })
  
      
  $("#attraction-btn").click(function(){
       event.preventDefault();
      console.log("test");
      
      axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=attractions+in+Houston&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o")
      .then(function(respond){
          placeData=respond.data.results
          console.log(placeData);
          var refernce=placeData.map(function(arr){
              var photoData=arr.photos
             
              
  return photoData;
          })
  
  
          $("#search-container").html(renderAtt(placeData))
          
          return refernce;
      })
  
  
  })
  $("#sport-btn").click(function(){
    event.preventDefault();
   console.log("test");
   
   axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=sporting+events+in+Houston&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o")
   .then(function(respond){
       placeData=respond.data.results
       console.log(placeData);
       var refernce=placeData.map(function(arr){
           var photoData=arr.photos
          
           
return photoData;
       })


       $("#search-container").html(renderAtt(placeData))
       
       return refernce;
   })


})

$("#shopping-btn").click(function(){
  event.preventDefault();
 console.log("test");
 
 axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=malls+in+Houston&key=AIzaSyBVXSDOOsztsFC2SSLf7kcxvLtVDgDwN3o")
 .then(function(respond){
     placeData=respond.data.results
     console.log(placeData);
     var refernce=placeData.map(function(arr){
         var photoData=arr.photos
        
         
return photoData;
     })


     $("#search-container").html(renderAtt(placeData))
     
     return refernce;
 })


})


  
  
  }) 
  
  