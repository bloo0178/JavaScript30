const cityLocation = function() {
    this.city = "Paris";
}

cityLocation.prototype.get = function() {
    console.log(this.city);
}

cityLocation.prototype.set = function(newCity) {
    this.city = newCity;
}


  const myLocation = new cityLocation();
  console.log(myLocation);
  
  myLocation.get();           // output: Paris
  myLocation.set('Sydney');
  myLocation.get();           // output: Sydney
  myLocation.test = 3;
  console.log(myLocation.test);