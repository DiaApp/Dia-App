var searchTerm = "tesla";
var numberRecords = 5;
$("#submit-search").on("click", function () {
    searchTerm = $("#search").val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var apiKey = "bb134ec959784cc58e11ecfeb4e61900";
    url += '?' + "api-key=" + apiKey + "&q=" + searchTerm + "&fl=web_url, headline, byline, pub_date";
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
        var articles = result.response.docs

        for (var i = 0; i < numberRecords-1; i++) {
            var webUrl = articles[i].web_url;
            var headline = articles[i].headline.main;
            if ('byline' in articles[i]) { var byLine = articles[i].byline.original; }
            var pubDate = articles[i].pub_date;
        }
        var articleDiv = $("<div>");

      var number = $("<div>" + (i + 1) + "</div>");
      articleDiv.append(number);

      var title = $("<h1>");
      title.text(headline);
      articleDiv.append(title);

      if ('byline' in articles[i]) {
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
      $("#top-articles").append(articleDiv);
    
  }).fail(function (err) {
    throw err;
  });
});
