// var tennis = $.getJSON("ninjatennis.json");

function getMatchHTML(match, player1, player2) {
  return `
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="container">
      <div class="row scorebox">
        <div class="scorebox_pic border border-success bg-info text-white">P</div>
        <div class="scorebox_name border border-success bg-info text-white"><a href="${player1.profile_link}">${player1.name}</a></div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_1[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_2[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_3[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_4[0]}</div>
        <div class="scorebox_set border border-success bg-info text-white">${match.set_5[0]}</div>
      </div>
      <div class="row scorebox">
          <div class="scorebox_pic border border-danger">P</div>
          <div class="scorebox_name border border-danger"><a href="${player2.profile_link}">${player2.name}</a></div>
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

function AddLiveMatches(matches, players) {
  matches.forEach(function(match) {
    var player1 = players[match.player_1];
    var player2 = players[match.player_2];
    $('#LiveSection').append(getMatchHTML(match, player1, player2));
  });
};

function ProcessNinjaData(data) {
  AddLiveMatches(data.matches, data.players);
};

fetch('ninjatennis.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    ProcessNinjaData(data);
});