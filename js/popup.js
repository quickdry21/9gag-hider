$(document).ready(function() {
  var hiddenList = JSON.parse(localStorage.getItem("hiddenList"));
  console.log(hiddenList);
  for (var key in hiddenList) {
    var hiddenItem = hiddenList[key];
    var title = hiddenItem.title.trim() || "Unknown title";
    $("ul#hiddenList").append('<li>Hid '+hiddenItem.type+' post <a href="'+hiddenItem.url+'">'+hiddenItem.title+'</a></li>');
  }
});
