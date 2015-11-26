var API_WRAPPER = function () {
  this.URL_BASE = window.location.origin;

  this.getSecret = function () {
    return $.ajax({
      url: this.URL_BASE + "/secret",
      method: "GET"
    });
  };

  this.getAttractions = function () {
    return $.ajax({
      url: this.URL_BASE + "/api/attractions",
      method: "GET"
    });
  };

  this.getOneAttraction = function(id) {
    return $.ajax({
      url: this.URL_BASE + "/api/attractions/" + id,
      method: "GET"
    });
  };


  this.createBookings = function (params) {
    return $.ajax({
      url: this.URL_BASE + "/api/bookings",
      method: "POST",
      data: params
    });
  };

  this.getOneBooking = function(id) {
    return $.ajax({
      url: this.URL_BASE + "/api/bookings/" + id,
      method: "GET"
    });
  };

  this.getBookings = function() {
    return $.ajax ({
      url: this.URL_BASE + "/api/bookings",
      method: "GET"
    });
  };

};

var API = new API_WRAPPER();
