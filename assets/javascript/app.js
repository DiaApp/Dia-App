$("#submit-input").on("click", function (event) {
    event.preventDefault();
    var searchTerm = $("#search-input").val().trim();
    console.log(searchTerm);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=PXKd89OxBUGSE1Ptn1uQAXeN3hNlg5uc&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        for (var j = 0; j < response.data.length; j++) {
            var gifDiv = $("<div>");
            var animateUrl = response.data[j].images.original.url;
            var stillUrl = response.data[j].images.original_still.url;
            var gifRating = response.data[j].rating;
            console.log(stillUrl);
            var gifTitle = response.data[j].title;
            var gifHolder = $("<img>");
            gifHolder.attr("src", stillUrl);
            gifHolder.attr("alt", "giphy");
            gifHolder.attr("data-animate", animateUrl);
            gifHolder.attr("data-still", stillUrl);
            gifHolder.attr("data-state", "still");
            gifDiv.prepend(gifHolder);
            gifDiv.prepend("<div class='title-rating panel panel-default'> <strong>Title: </strong>" + gifTitle + "  <strong>Rating: </strong>" + gifRating + "</div>");
            //gifDiv.append("<button class='btn btn-default download' id='download'><a href=" + animateUrl + " target='blank' download>Download GIF</button");
            $("#gifs").prepend(gifDiv);
        }

        $("body").on("click", "img", function () {
            console.log($(this).attr("data-state"));
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
            then();

        })
    })
    //youtube stuff
    function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) { return t[n][r] }) } return res }
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent(searchTerm.replace(/%20/g, "+")),
            maxResults: 10,
            order: "viewCount",
        });
        // execute the request
        request.execute(function (response) {
            var results = response.result;
            $("#youtube-videos").html("");
            $.each(results.items, function (index, item) {
                $.get("tpl/item.html", function (data) {
                    $("#youtube-videos").append(tplawesome(data, [{ "title": item.snippet.title, "videoid": item.id.videoId }]));
                });
            });
            resetVideoHeight();
        });


        $(window).on("resize", resetVideoHeight);
    })

    function resetVideoHeight() {
        $(".video").css("height", $("#results").width() * 9 / 16);
    }

    function init() {
        gapi.client.setApiKey("AIzaSyCNBL_nvAFef_wJLbPQ9yIKBhAN341NeUo");
        gapi.client.load("youtube", "v3", function () {
            // yt api is ready
        });
    }



//youtube stuff
// function tplawesome(e, t) { res = e; for (var n = 0; n < t.length; n++) { res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) { return t[n][r] }) } return res }

// $(function () {
//     $("form").on("submit", function (e) {
//         e.preventDefault();
//         // prepare the request
//         var request = gapi.client.youtube.search.list({
//             part: "snippet",
//             type: "video",
//             q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
//             maxResults: 10,
//             order: "viewCount",
//             publishedAfter: "2015-01-01T00:00:00Z"
//         });
//         // execute the request
//         request.execute(function (response) {
//             var results = response.result;
//             $("#results").html("");
//             $.each(results.items, function (index, item) {
//                 $.get("tpl/item.html", function (data) {
//                     $("#results").append(tplawesome(data, [{ "title": item.snippet.title, "videoid": item.id.videoId }]));
//                 });
//             });
//             resetVideoHeight();
//         });
//     });

//     $(window).on("resize", resetVideoHeight);
// });

// function resetVideoHeight() {
//     $(".video").css("height", $("#results").width() * 9 / 16);
// }

// function init() {
//     gapi.client.setApiKey("AIzaSyCNBL_nvAFef_wJLbPQ9yIKBhAN341NeUo");
//     gapi.client.load("youtube", "v3", function () {
//         // yt api is ready
//     });
// }