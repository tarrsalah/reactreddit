require('whatwg-fetch');

var URL = 'http://www.reddit.com/r/';

function fetchSubreddit(id) {
  return window.fetch(URL + id + '.json')
    .then(function(response) {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then(function(response){
      return {
        id: id,
        links: response.data.children
      };
    });
}

module.exports = fetchSubreddit;
