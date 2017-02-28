console.log('front end javascript goes here');
$(document).ready(function(){
  $('.delete-link').on('click', function(e){
    e.preventDefault();
    var teamElement = $(this);
    var teamUrl = teamElement.attr('href');
    $.ajax({
      method: 'DELETE',
      url: teamUrl
    }).done(function(data){
      console.log(data);
      teamElement.remove();
      window.location = '/teams'
    })
  })

  $('.put-form').on('submit', function(e){
    e.preventDefault();
    var teamElement = $(this);
    var teamUrl = teamElement.attr('action');
    var teamData = teamElement.serialize();
    $.ajax({
      method: 'PUT',
      url: teamUrl,
      data: teamData
    }).done(function(data){
      teamElement.remove();
      window.location = '/teams';
    })
  })
});
