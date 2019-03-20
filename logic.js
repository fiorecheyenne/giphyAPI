$(document).ready(function () {
    gifApp.makeButtons();
})
var gifApp = {
    topics: ['space', 'bobs burgers', 'fluid painting', 'disney', 'sloth', 'koala', 'elephants', 'rick and morty', 'workout', 'aliens'],


    makeButtons: function () {
        //uncertain if I want to empty or not but lets give it a go
        $("#butt").empty();

        // loop through topics array 
        for (var i = 0; i < gifApp.topics.length; i++) {

            //makin' the buttons 
            var btn = $("<button>");
            btn.addClass("btn btn-outline-dark");
            btn.attr("data-topic", gifApp.topics[i]);

            btn.text(gifApp.topics[i]);
            $("#butt").append(btn);


        }

        console.log(gifApp.topics);

    },
};
