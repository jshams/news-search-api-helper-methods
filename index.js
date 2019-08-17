var unirest = require("unirest");

var req = unirest("GET", "https://nuzzel-news-v1.p.rapidapi.com/news");
let response
req.headers({
    "x-rapidapi-host": "nuzzel-news-v1.p.rapidapi.com",
    "x-rapidapi-key": "3db411a3d6msh117b648df19b634p14faa3jsn315e1e5815e9"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);
    reposnse = res.body
    console.log(res.body);
});

const topFiveStories = () => {
    return response.results.stories.slice(0, 5)
}

const topFiveHeadlines = () => {
    const topFiveStories = topFiveStories()
    const topFiveHeadlines = []
    for (let i = 0; i < 5; i++) {
        topFiveHeadlines.push(topFiveStories[i].title)
    }
    return topFiveHeadlines
}

const getRandomStory = () => {
    const stories = response.results.stories
    return stories[parseInt(Math.random() * 10)] // returns a random index of stories from 0 - 9
}