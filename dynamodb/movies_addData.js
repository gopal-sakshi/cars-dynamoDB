var fs = require("fs");
var { docClient } = require("../config/aws-config-v2");


var allMovies = JSON.parse(fs.readFileSync("dynamodb/movies_loaddata.json", "utf8"));

allMovies.forEach(function (movie) {
    var params = {
        TableName: "Movies",
        Item: {
            year: movie.year,
            title: movie.title,
            info: movie.info,
        },
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2) );
        } else {
            console.log("PutItem succeeded:", movie.title);
        }
    });
});
