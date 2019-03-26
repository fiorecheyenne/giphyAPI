$(document).ready(function () {
    makeButtons();
    $(document).on("click", ".topic", showMyGifs);
})

var gifApp = ['space', 'bobs burgers', 'fluid painting', 'disney', 'sloth', 'koala', 'elephants', 'rick and morty', 'workout', 'aliens'];

var isFav = false;

function makeButtons() {
    //uncertain if I want to empty or not but lets give it a go
    $("#butt").empty();

    // loop through topics array 
    for (var i = 0; i < gifApp.length; i++) {

        //makin' the buttons 
        var btn = $("<button>");
        btn.addClass("topic");
        btn.addClass("btn btn-outline-dark");
        btn.attr("data-topic", gifApp[i]);

        btn.text(gifApp[i]);
        $("#butt").append(btn);


    }
}
//add new button with user input 
$("#searchGif").on("click", function () {
    var New = $("#search-input").val().trim();

    if (New == "") {
        return false; //if user enters blank inut dont make no button 
    }
    gifApp.push(New);
    makeButtons();
    return false;
})

// function showMyGifs() {
function showMyGifs() {
    $("#results").empty(); //empty last results
    var New = $(this).attr("data-topic");

    var offsetNum = Math.floor((Math.random() * 100 + 1));
    //change offset to a random number so different gifs are displayed each time
    var offset = "&offset=" + offsetNum;

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q="
        + New + "&api_key=Qyr4YoQEdVfICWNhG95bfDWjT5B05bdq&limit=10" + offset;
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    })

        .then(function (response) {
            console.log(response)
            var response = response.data;

            for (var i = 0; i < response.length; i++) {
                //new div for gifs
                var gifBlock = $("<div>");
                gifBlock.addClass("gifs-here");




                //images
                var topicGif = $("<img>");
                topicGif.attr("src", response[i].images.fixed_height_small_still.url);//initial img called
                topicGif.attr("data-still", response[i].images.fixed_height_small_still.url); //still state
                topicGif.attr("data-animate", response[i].images.fixed_height_small.url); //animated state
                topicGif.attr("data-state", "still"); // set initial state 
                topicGif.addClass("data-favorite", isFav);
                topicGif.addClass("image");
                (gifBlock).append(topicGif);


                //favorites button NOT WORKING ANYMORE
                // $(favBtn).on("click", function add() {
                //     var fav = $(this).prev().clone(true).appendTo("#favs").addClass("favorites")
                // })

                //Add image to favorites

                // fav.attr(favorite);
                // // console.log(JSON.stringify(fav));

                // // local storage for image NOT WORKING



                // localStorage.setItem("Favorites", favorite);
                // localStorage.getItem(favorite);
                // $("#favs").text(localStorage.getItem("favorites")
                // );
                // })

                var favBtn = $("<button>");
                favBtn.addClass("btn btn-outline-dark btn-sm");
                favBtn.addClass("favorites");
                favBtn.addClass("data-favorite", isFav);
                favBtn.addClass("badge badge-pill badge-light");
                favBtn.text("+");
                var figC = $("<figcaption>");
                figC.addClass("figure-caption");
                gifBlock.append(figC);
                (figC).append(favBtn);

                //rating
                var rating = response[i].rating;
                console.log(response[i].rating);
                //rating text
                var r = $("<p>").text("Rated: " + rating);
                (gifBlock).append(r);

                $("#results").prepend(gifBlock);
            }
        })
}

//change the state of the image 
$(document).on("click", ".image", function () {
    var imgState = $(this).attr('data-state');
    //if image still then animate 
    if (imgState == 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    //if image animated change to still 
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still')
    }
})
$(document).on("click", ".favorites", function () {
    if (isFav == false) {
        isFav = true;


        // $("#favs").append();
        console.log(isFav);
        // console.log();
    }
});


