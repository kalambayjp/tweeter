$(document).ready(() => {
  const $newTweet = $("#tweet-text");

  $newTweet.on('keyup', function() {
    let $charCount = $(this).closest('form').find('output').val();
    let $remainingCount = 140 - $(this).val().length;
    
    $charCount = $(this).closest('form').find('output').text($remainingCount);
    

    if ($charCount.val() < 0) {
      $charCount.attr("id", "exceeds-count");
    }

    if ($charCount.val() >= 0) {
      $charCount.removeAttr('id');
    }
  })

  



























})