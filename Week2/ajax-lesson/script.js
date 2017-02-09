$.get('http://www.reddit.com/search.json', {
  q: 'kittens'
}).done(function(data){
  var kitPosts = data;
  var kitObjects = kitPosts.data.children;
  for(var i=0; i< kitObjects.length; i++){
    postToPage(kitObjects[i]);
  }
}).fail(function(error){
  console.log('there was an error. I sorry');
});


function postToPage(urls){
  var containerDiv = $('#link');
  console.log(urls.data.url)
  containerDiv.append('<a href="'+urls.data.url+'">');
}

// $.get('http://www.reddit.com/search.json',{
//   q: 'kittens'
// }).then(function(value){
//   console.log(value);
// }, function(reason){
//   console.log(reason);
// })

// $.ajax({
//   url: "https://www.reddit.com/search.json",
//   method: 'GET',
//   data: {
//     q: 'kittens'
//   }
// }).done(function(data){
//   console.log(data);
// })
