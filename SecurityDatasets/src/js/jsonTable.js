$(document).ready(function () {

    var url = "/datasets.json";
    $.getJSON(url,
    function (json) {
      console.log(json);
        var tr;
        var tmp;
        for (var i = 0; i < json.length; i++) {
          tmp = '';
          tr = $('<tr/>');

          tr.append('<th scope="row">' + json[i].name + '</th>');
          tr.append('<td>' + json[i].category + '</td>');
          tr.append('<td>' + json[i].format + '</td>');

          $.each(json[i].link, function(key, value) {
            tmp += '<a href="' + value + '">' + value + '</a><br />';
          });
          console.log(tmp);
          tr.append('<td>'+tmp+'</td>');

          $('table').append(tr);
        }
    });
});
