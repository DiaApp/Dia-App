var searchTerm1 = "biology";
var searchTerm2 = "tesla";
var numberRecords = 5;

function firstTopic() {
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
firstTopic();

function topHeadlines() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=16b956cb8a71458390753d016979fc83';
    $.ajax({
        url: url,
        method: "GET",
    }).then(function (result) {
        console.log(result.articles[0]);
    })
}