# News Search Library



![npm](https://img.shields.io/npm/v/news-search-lib.svg?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/min/news-search-lib.svg?style=plastic)
[![Build Status](https://travis-ci.com/jshams/news-search-lib.svg?branch=master)](https://travis-ci.com/jshams/news-search-api-helper-methods)
![Codecov](https://img.shields.io/codecov/c/github/jshams/news-search-api-helper-methods)

[NPM](https://www.npmjs.com/package/news-search-lib)

## Installation

Start by running this command in your project's directory
```
npm install news-search-lib --save
```
And then requring it on the top of your index.js file 
```
require('news-search-lib')
```

## Methods

### Top Five Stories

Returns the top five stories of the day

Coding samples:
```javascript
const topFive = topFiveStories()
console.log(topFive) // will log an array of story objects
```

### Top Five Headlines

Returns the top five headlines of the day. If you're in a rush and you need the quick scoop on the day this will do it for you.

Coding samples:
```javascript
const topFive = topFiveHeadlines()
console.log(topFive) // will log an array of story headlines (strings)
```

### Get random story

Returns a random story from the top 10. Good for when you're feeling spontaneous.

Coding samples:
```javascript
const story = getRandomStory()
console.log(story) // will log a single story object
```

