$(document).ready(() => {
  const $newTweet = $("#tweet-text");

  $newTweet.on('keyup', function() {
    let $charCount = $(this).closest('form').find('output').val();         // traversal to find value of the charctercount
    let $remainingCount = 140 - $(this).val().length;                      
    
    $charCount = $(this).closest('form').find('output').text($remainingCount);// reassign value of character count in the html
    
  // Red error text conditionals
    if ($charCount.val() < 0) {
      $charCount.css('color', 'red');
    }

    if ($charCount.val() >= 0) {
      $charCount.css('color', 'revert');
    }
  })
});