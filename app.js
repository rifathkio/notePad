console.log('Hello World!');

var date = document.getElementById("date");


var note = document.getElementById("note");

function dateset() {
  var today = new Date();

  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var vdate = day + "/" + month + "/" + year;
  date.value = vdate;
}

function setstoreg() {
  dateset();
  var dateu = document.getElementById("date").value;
  localStorage.setItem('1date', dateu);
}

function backdate() {
  var bdate = localStorage.getItem("1date");

  date.value = bdate;

}
backdate();

function savetitle() {
var titleData =  document.getElementById("title5").value;
  localStorage.setItem('title', titleData);
}

function logger() {
  var rust = localStorage.getItem('title');
 document.getElementById("title5").value = rust;
var titleData = document.getElementById("title");

}
logger();

function onnote() {
  var valuenote = note.value;
  localStorage.setItem('note', valuenote);
}

function setnote(e) {
  var servernote = localStorage.getItem('note');
  note.value = servernote;
}
setnote();