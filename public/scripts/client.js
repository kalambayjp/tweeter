/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweetObj) => {
  // create new tweet aricle
  let $newTweet = $(`<article class="tweet"></article>`);

  // new tweet header
  $(`<header><p><img src=${tweetObj.user.avatars}>&nbsp${tweetObj.user.name}</p><p>${tweetObj.user.handle}</p></header>`).appendTo($newTweet);

  // new tweet text
  $(`<p class="tweet-text">`).text(tweetObj.content.text).appendTo($newTweet);

  // new tweet footer
  $(`<footer><p>${timeago.format(tweetObj.created_at)}</p><p class="icons"><i class="fa-solid fa-flag"></i>&nbsp<i class="fa-solid fa-retweet">&nbsp</i><i class="fa-solid fa-heart"></i></p>`).appendTo($newTweet);

  return $newTweet;
};

const renderTweets = (tweets) => {
  tweets.forEach(element => {
    let $newTweet = createTweetElement(element);
    $(".tweets-container").prepend($newTweet);
  })
};

const loadTweets = () => {
  $.get("tweets", function(data, status) {

  renderTweets(data);
  })
};

$(document).ready(() =>  {

  loadTweets();

  $("form").submit(function(event) {
    event.preventDefault();

    let tweetLength = $(`#tweet-text`).val().length;

    if (tweetLength === 0) {
      $(".empty-str").slideDown(400); // make "no value" error message visible
    } else if (tweetLength > 140) {
      $(".too-long").slideDown(400);  // make "too long" error message visible
    } else {
      $.post("tweets", $(this).serialize(), function(data, status) {
        // remove any potential error messages
        $(".empty-str").hide();
        $(".too-long").hide();

        // reset character count
        $(".counter").val('140');
        
        loadTweets();

        // clear text feild
        $(`#tweet-text`).val('');
      })
    }
  });
  
});
