// var tennis = $.getJSON("ninjatennis.json");


fetch('ninjatennis.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    alert (data.matches[0].id);
});