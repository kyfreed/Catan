var hex_border_hexes = [
  [1, 3, 4],
  [0, 2, 4, 5],
  [1, 5, 6],
  [0, 4, 7, 8],
  [0, 1, 3, 5, 8, 9],
  [1, 2, 4, 6, 9, 10],
  [2, 5, 10, 11],
  [3, 8, 12],
  [3, 4, 7, 9, 12, 13],
  [4, 5, 8, 10, 13, 14],
  [5, 6, 9, 11, 14, 15],
  [6, 10, 15],
  [7, 8, 13, 16],
  [8, 9, 12, 14, 16, 17],
  [9, 10, 13, 15, 17, 18],
  [10, 11, 14, 18],
  [12, 13, 17],
  [13, 14, 16, 18],
  [14, 15, 17]
];

var vertex_border_vertices = [
  [1, 29],
  [0, 2],
  [1, 3, 31],
  [2, 4],
  [3, 5, 33],
  [4, 6],
  [5, 7],
  [6, 8, 34],
  [7, 9],
  [8, 10, 36],
  [9, 11],
  [10, 12],
  [11, 13, 37],
  [12, 14],
  [13, 15, 39],
  [14, 16],
  [15, 17],
  [16, 18, 40],
  [17, 19],
  [18, 20, 42],
  [19, 21],
  [20, 22],
  [21, 23, 43],
  [22, 24],
  [23, 25, 45],
  [24, 26],
  [25, 27],
  [26, 28, 46],
  [27, 29],
  [0, 28, 30],
  [29, 31, 47],
  [2, 30, 32],
  [31, 33, 49],
  [4, 32, 34],
  [7, 33, 35],
  [34, 36, 50],
  [9, 35, 37],
  [12, 36, 38],
  [37, 39, 51],
  [14, 38, 40],
  [17, 39, 41],
  [40, 42, 52],
  [19, 41, 43],
  [22, 42, 44],
  [43, 45, 53],
  [24, 44, 46],
  [27, 45, 47],
  [30, 46, 48],
  [47, 49, 53],
  [32, 48, 50],
  [35, 49, 51],
  [38, 50, 52],
  [41, 51, 53],
  [44, 48, 52]
];

var hex_border_vertices = [
  [0, 1, 2, 31, 30, 29],
  [2, 3, 4, 33, 32, 31],
  [4, 5, 6, 7, 34, 33],
  [28, 29, 30, 47, 46, 27],
  [30, 31, 32, 49, 48, 47],
  [32, 33, 34, 35, 50, 49],
  [34, 7, 8, 9, 36, 35],
  [26, 27, 46, 45, 24, 25],
  [46, 47, 48, 53, 44, 45],
  [48, 49, 50, 51, 52, 53],
  [50, 35, 36, 37, 38, 51],
  [36, 9, 10, 11, 12, 37],
  [24, 45, 44, 43, 22, 23],
  [44, 53, 52, 41, 42, 43],
  [52, 51, 38, 39, 40, 41],
  [38, 37, 12, 13, 14, 39],
  [22, 43, 42, 19, 20, 21],
  [42, 41, 40, 17, 18, 19],
  [40, 39, 14, 15, 16, 17]
];

var vertex_border_hexes = [
  [0],
  [0],
  [0, 1],
  [1],
  [1, 2],
  [2],
  [2],
  [2, 6],
  [6],
  [6, 11],
  [11],
  [11],
  [11, 15],
  [15],
  [15, 18],
  [18],
  [18],
  [17, 18],
  [17],
  [16, 17],
  [16],
  [16],
  [12, 16],
  [12],
  [7, 12],
  [7],
  [7],
  [3, 7],
  [3],
  [0, 3],
  [0, 3, 4],
  [0, 1, 4],
  [1, 4, 5],
  [1, 2, 5],
  [2, 5, 6],
  [5, 6, 10],
  [6, 10, 11],
  [10, 11, 15],
  [10, 14, 15],
  [14, 15, 18],
  [14, 17, 18],
  [13, 14, 17],
  [13, 16, 17],
  [12, 13, 16],
  [8, 12, 13],
  [7, 8, 12],
  [3, 7, 8],
  [3, 4, 8],
  [4, 8, 9],
  [4, 5, 9],
  [5, 9, 10],
  [9, 10, 14],
  [9, 13, 14],
  [8, 9, 13]
];

var hex_resource_array = [
  "Forest",
  "Forest",
  "Forest",
  "Forest",
  "Pasture",
  "Pasture",
  "Pasture",
  "Pasture",
  "Fields",
  "Fields",
  "Fields",
  "Fields",
  "Hills",
  "Hills",
  "Hills",
  "Mountains",
  "Mountains",
  "Mountains",
  "Desert"
];
var hex_prob_array = [
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12
];

var player_colours = ["#000000", "#000000", "#000000", "#000000"];
var player_number = 0;
var settlement_number = 5;
var road_number = 15;
$("#settlement-num").html(settlement_number.toString());
$("#road-num").html(road_number.toString());
var edges = {};
var vertices = [];
for (var i = 0; i < 54; i++) {
  vertices.push(new Vertex());
}

const v_index_to_ordinal = [
  "vertex-nw",
  "vertex-n",
  "vertex-ne",
  "vertex-se",
  "vertex-s",
  "vertex-sw"
];

const e_index_to_ordinal = [
  "edge-nw",
  "edge-ne",
  "edge-e",
  "edge-se",
  "edge-sw",
  "edge-w"
];

function Vertex() {
  this.owner = null;
  this.port = null;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function assign_hex_resources() {
  hex_resource_array = shuffle(hex_resource_array);
  var resource_colours = {
    Forest: "#006400",
    Hills: "#782827",
    Pasture: "#19e619",
    Mountains: "#7f7f7f",
    Fields: "#ffd600",
    Desert: "#edc9af",
    Generic: "#ffffff"
  };
  for (var i = 0; i < 19; i++) {
    document
      .getElementById("hex-" + i.toString())
      .querySelector(".top").style.borderBottom =
      "30px solid " + resource_colours[hex_resource_array[i]];
    document
      .getElementById("hex-" + i.toString())
      .querySelector(".middle").style.background =
      resource_colours[hex_resource_array[i]];
    document
      .getElementById("hex-" + i.toString())
      .querySelector(".bottom").style.borderTop =
      "30px solid " + resource_colours[hex_resource_array[i]];
  }
  const initial_desert = document
    .getElementById("hex-" + hex_resource_array.indexOf("Desert").toString())
    .querySelector(".middle .prob");
  const robber = document.createElement("div");
  robber.classList.add("robber");
  initial_desert.parentNode.replaceChild(robber, initial_desert);
}

function assign_hex_probabilities() {
  hex_prob_array = shuffle(hex_prob_array);
  hex_prob_array.splice(hex_resource_array.indexOf("Desert"), 0, 0);
  while (sixes_or_eights_adjacent()) {
    hex_prob_array.splice(hex_prob_array.indexOf(0), 1);
    hex_prob_array = shuffle(hex_prob_array);
    hex_prob_array.splice(hex_resource_array.indexOf("Desert"), 0, 0);
  }
  for (var i = 0; i < 19; i++) {
    if (i != hex_resource_array.indexOf("Desert")) {
      document
        .getElementById("hex-" + i.toString())
        .querySelector(".middle .prob").innerHTML = hex_prob_array[
        i
      ].toString();
      if (hex_prob_array[i] == 6 || hex_prob_array[i] == 8) {
        document.getElementById("hex-" + i.toString()).style.color = "#f00";
      }
    }
  }
}

function sixes_or_eights_adjacent() {
  for (var i = 0; i < 19; i++) {
    if (hex_prob_array[i] == 6 || hex_prob_array[i] == 8) {
      for (var j = 0; j < hex_border_hexes[i].length; j++) {
        if (
          hex_prob_array[hex_border_hexes[i][j]] == 6 ||
          hex_prob_array[hex_border_hexes[i][j]] == 8
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function refresh_vertices() {
  for (var i = 0; i < vertices.length; i++) {
    if (vertices[i].owner != null) {
      $("#vertex-" + i.toString()).addClass("settlement");
      $("#vertex-" + i.toString()).css(
        "border-bottom-color",
        player_colours[vertices[i].owner]
      );
      for (var j = 0; j < vertex_border_vertices[i].length; j++) {
        $("#vertex-" + vertex_border_vertices[i][j]).removeClass("available");
      }
    }
  }
}

function refresh_edges() {
  $.each(edges, function (key, value) {
    $("#" + key)
      .addClass("road")
      .css("background", player_colours[value]);
  });
}

function get_vertex_location(index) {
  for (var i = 0; i < hex_border_vertices.length; i++) {
    for (var j = 0; j < hex_border_vertices[i].length; j++) {
      if (hex_border_vertices[i][j] == index) {
        return [i, j];
      }
    }
  }
  return -1;
}

function edge_already_drawn(i, j) {
  for (var k = 0; k < i; k++) {
    if (
      hex_border_vertices[k].indexOf(hex_border_vertices[i][j]) != -1 &&
      hex_border_vertices[k].indexOf(hex_border_vertices[i][(j + 1) % 6]) != -1
    ) {
      return true;
    }
  }
  return false;
}

function allowed_edges(){
  var allowed = [];
  for(var i = 0; i < vertices.length; i++){
    if(vertices[i].owner == player_number){
      for(var j  = 0; j < vertex_border_vertices[i].length; j++){
        if(vertex_border_vertices[i][j] > i){
          allowed.push(i.toString() + "-" + vertex_border_vertices[i][j].toString());
        } else {
          allowed.push(vertex_border_vertices[i][j].toString() + "-" + i.toString());
        }
      }
    }
  }
  $.each(edges, function(key, value){
    if(value == player_number){
      var endpoints = key.replace("edge-", "").split("-")
      for(var i = 0; i < 2; i++){
        for(var j  = 0; j < vertex_border_vertices[parseInt(endpoints[i])].length; j++){
        if(vertex_border_vertices[parseInt(endpoints[i])][j] > parseInt(endpoints[i])){
          allowed.push(endpoints[i] + "-" + vertex_border_vertices[parseInt(endpoints[i])][j].toString());
        } else {
          allowed.push(vertex_border_vertices[parseInt(endpoints[i])][j].toString() + "-" + endpoints[i]);
        }
      }
      }
    }
  });
  return allowed;
}

function allowed_vertices(){
  var allowed = [];
  $.each(edges, function(key, value){
    if(value == player_number){
      var endpoints = key.replace("edge-", "").split("-")
      for(var i = 0; i < 2; i++){
        allowed.push(parseInt(endpoints[i]));
      }
    }
  });
  return allowed;
}

assign_hex_resources();
assign_hex_probabilities();

//$("#4").append('<div class="location vertex vertex-ne empty available" id="vertex-22"></div>')

for (var i = 0; i < 54; i++) {
  $("#hex-" + get_vertex_location(i)[0].toString()).append(
    '<div class="location vertex empty available ' +
      v_index_to_ordinal[get_vertex_location(i)[1]] +
      '" id="vertex-' +
      i.toString() +
      '"></div>'
  );
}

for (var i = 0; i < 19; i++) {
  for (var j = 0; j < 6; j++) {
    if (edge_already_drawn(i, j)) {
      continue;
    }
    if (hex_border_vertices[i][j] < hex_border_vertices[i][(j + 1) % 6]){
      $("#hex-" + i.toString()).append(
        '<div class="location edge empty available ' +
          e_index_to_ordinal[j] +
          '" id="edge-' +
          hex_border_vertices[i][j].toString() +
          "-" +
          hex_border_vertices[i][(j + 1) % 6].toString() +
          '"></div>'
    );
    } else {
      $("#hex-" + i.toString()).append(
        '<div class="location edge empty available ' +
          e_index_to_ordinal[j] +
          '" id="edge-' +
          hex_border_vertices[i][(j + 1) % 6].toString() + 
          "-" +
          hex_border_vertices[i][j].toString() +
          '"></div>'
    );
    }
  }
}

$(".location").hide();

$("#settlement-image").draggable({
  revert: true
});

$("#road-image").draggable({
  revert: true
});

$(".location.vertex.empty").droppable({
  accept: "#settlement-image",
  tolerance: "intersect"
});

$(".location.edge.empty").droppable({
  accept: "#road-image",
  tolerance: "intersect"
});

$("#settlement-image").on("dragstart", function (event, ui) {
  if(settlement_number > 3){
    $(".location.vertex.empty.available").show();
  } else {
    var allowed = allowed_vertices();
    for(var i = 0; i < allowed.length; i++){
      $("#vertex-" + allowed[i].toString() + ".empty.available").show();
    }
  }
});

$("#settlement-image").on("dragstop", function (event, ui) {
  $(".location.vertex.empty").hide();
  $(".location.vertex :not(empty)").droppable("destroy");
  $(".location.vertex :not(available)").droppable("destroy");
});

$("#road-image").on("dragstart", function (event, ui) {
  var allowed = allowed_edges();
  for(var i = 0; i < allowed.length; i++){
    $("#edge-" + allowed[i] + ".empty.available").show();
  }
});

$("#road-image").on("dragstop", function (event, ui) {
  $(".location.edge.empty").hide();
  $(".location.edge :not(empty)").droppable("destroy");
  $(".location.edge :not(available)").droppable("destroy");
});

$(".location.vertex.empty").on("drop", function (event, ui) {
  var $this = $(this);
  var vertex_id = parseInt($this.attr("id").replace("vertex-", ""));
  $this.removeClass("empty");
  $this.removeClass("available");
  vertices[vertex_id].owner = player_number;
  $("#settlement-num").html((--settlement_number).toString());
  refresh_vertices();
});

$(".location.edge.empty").on("drop", function (event, ui) {
  var $this = $(this);
  var edge_id = $this.attr("id");
  $this.removeClass("empty");
  $this.removeClass("available");
  edges[edge_id] = player_number;
  $("#road-num").html((--road_number).toString());
  refresh_edges();
});

$("#player-colour").change(function () {
  $this = $(this);
  player_colours[player_number] = $this.val();
  $("#settlement-image").css("border-bottom-color", $this.val());
  $("#road-image").css("background", $this.val());
  refresh_vertices();
  refresh_edges();
});

var socket = io();
socket.on('message', function(data) {
  console.log(data);
});
