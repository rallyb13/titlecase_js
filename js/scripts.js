var titleCase = function(title) {
  var words = title.toLowerCase().split(" ");
  var new_title = [];
  var ignores = ["a", "an", "and", "at", "but", "by", "for", "from", "in", "nor", "of", "on", "or", "so", "the", "to", "yet"]
  words.forEach(function(word) {
    if ((ignores.indexOf(word) != -1) && (word != words[0])) {
      new_title.push(word)
    } else {
      var first_letter = word.charAt(0).toUpperCase();
      var new_word = first_letter + word.slice(1);
        new_title.push(new_word)
    }
  });
  return new_title.join(" ");
};


$(document).ready(function() {
  $("form#title-case").submit(function(event) {
    var title = $("input#title").val();
    var output = titleCase(title);

    $(".titlecase").text(output);
    $("#result").show();

    event.preventDefault();
  });
});
