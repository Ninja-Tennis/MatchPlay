// var tennis = $.getJSON("ninjatennis.json");

function getMatchHTML(match) {
  return `
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="container">
      <div class="row scorebox">
        <div class="scorebox_pic border border-success bg-info text-white">P</div>
        <div class="scorebox_name border border-success bg-info text-white">${match.player_1}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_1[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_2[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_3[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_4[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_5[0]}</div>
      </div>
      <div class="row scorebox">
          <div class="scorebox_pic border border-danger">P</div>
          <div class="scorebox_name border border-danger">${match.player_2}</div>
          <div class="scorebox_set border border-danger">${match.set_1[1]}</div>
          <div class="scorebox_set border border-danger">${match.set_2[1]}</div>
          <div class="scorebox_set border border-danger">${match.set_3[1]}</div>
          <div class="scorebox_set border border-danger">${match.set_4[1]}</div>
          <div class="scorebox_set border border-danger">${match.set_5[1]}</div>
      </div>
      <div class="row minHeight"></div>
    </div>
  </div>
  `;
};

function AddLiveMatches(matches) {
  matches.forEach(function(match) {
    $('#LiveSection').append(getMatchHTML(match));
  });
};

function ProcessNinjaData(data) {
  AddLiveMatches(data.matches);
};

fetch('ninjatennis.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ProcessNinjaData(data);
});