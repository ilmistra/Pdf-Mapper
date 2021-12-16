var comuni=[]
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
    matches = [];
    substrRegex = new RegExp('^'+q, 'i');
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });
    cb(matches);
  };
};
$('#comunidiv .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'comuni',
  source: substringMatcher(comuni)
});
$( document ).ready(function() {
	comuni_coord.map(function(e) { comuni.push(e[0]) })
});
function open_mapper() {
	comune_selezionato=comuni_coord.filter(e => e[0]==$("#comune").val())
	console.log(comune_selezionato)
	window.open("pdfmapper.html?link="+$("#link").val()+"&ln="+comune_selezionato[0][1]+"&lt="+comune_selezionato[0][2]+"&c="+$("#comune").val()+"&proj="+$("#projection option:selected").text())
}