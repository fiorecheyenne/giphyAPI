$(document).ready(function () {

});

var topics = ["space", "bobs burgers", 'fluid painting', 'disney', 'sloth', 'koala', 'elephants', 'rick and morty', 'workout', 'aliens'];

console.log(topics);
makeButtons();
function makeButtons() {
    //uncertain if I want to empty or not but lets give it a go
    $("#butt").empty();

    // loop through topics array 
    for (var i = 0; i < topics.length; i++) {

        //makin' the buttons 
        var btn = $("<button type='button'>");
        btn.addClass("btn btn-outline-dark");
        btn.attr("data-topic", topics[i]);
        console.log(topics[i]);
        btn.text(topics[i]);
        $("#butt").append(btn);


    }

    console.log(topics);

}