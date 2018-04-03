var searchTerm1;
var numberRecords = 5;

//if the search-topic is in local storage 
if(localStorage.getItem("search-topic")){
    $(".show-this").css("display", "none");
    $(".hide-this").css("display", "block");
    firstTopic();
    topHeadlines();
}
// do the search and set the data


$("body").on("click", "#submit-button", function (event) {
    event.preventDefault();
    $(".show-this").css("display", "none");
    $(".hide-this").css("display", "block");
    var topic = $("#search-term").val();
    localStorage.clear();
    localStorage.setItem("search-topic", topic);
    firstTopic();
    topHeadlines();
})

function firstTopic() {
    searchTerm1 = localStorage.getItem("search-topic");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var apiKey = "bb134ec959784cc58e11ecfeb4e61900";
    url += '?' + "api-key=" + apiKey + "&q=" + searchTerm1 + "&fl=web_url, headline, byline, pub_date";
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
        var articles = result.response.docs

        for (var j = 0; j < numberRecords; j++) {
            var webUrl = articles[j].web_url;
            var headline = articles[j].headline.main;
            if ('byline' in articles[j]) { var byLine = articles[j].byline.original; }
            var pubDate = articles[j].pub_date;

            var articleDiv = $("<div>");
            articleDiv.attr("id", "article-div");
            var number = $("<div>" + (j + 1) + "</div>");
            articleDiv.append(number);

            var title = $("<h1>");
            title.text(headline);
            articleDiv.append(title);

            if ('byline' in articles[j]) {
                var author = $("<p>");
                author.text(byLine);
                articleDiv.append(author);
            }

            var date = $("<p>");
            date.text(pubDate);
            articleDiv.append(date);

            var link = $("<a>");
            link.text(webUrl);
            link.attr("href", webUrl);
            articleDiv.append(link);

            $("#topic0").append(articleDiv);
        }

    }).fail(function (err) {
        throw err;
    });
}


function topHeadlines() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=16b956cb8a71458390753d016979fc83';
    $.ajax({
        url: url,
        method: "GET",
    }).then(function (result) {
        console.log(result.articles[0]);
        var results = result.articles;
        for (var i = 0; i < 5; i++) {
            console.log(results[i].title);
            console.log(results[i].url);

            var webUrl = results[i].url;
            var headline = results[i].title;
            if ('author' in results[i]) { var byLine = results[i].author; }
            var pubDate = results[i].publishedAt;

            var articleDiv = $("<div>");

            var number = $("<div>" + (i + 1) + "</div>");
            articleDiv.append(number);

            var title = $("<h1>");
            title.text(headline);
            articleDiv.append(title);

            if ('author' in results[i]) {
                var author = $("<p>");
                author.text(byLine);
                articleDiv.append(author);
            }

            var date = $("<p>");
            date.text(pubDate);
            articleDiv.append(date);

            var link = $("<a>");
            link.text(webUrl);
            link.attr("href", webUrl);
            articleDiv.append(link);

            $("#trending").append(articleDiv);
        }
    })
}
