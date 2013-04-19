//These scripts are the backbone behind the share buttons used on the tiny couch blog: http://tinycouchbigconcepts.com/category/blog/
//The markup that is meant to be paired with them is below
/*
  <a href="http://www.facebook.com/sharer.php?s=100&p[title]=<?php the_title(); ?>&p[summary]=<?php echo urlencode("Tiny Couch, Big Concepts: " . get_the_title()); ?>&p[url]=<?php the_permalink(); ?>" class="post_share_facebook">Share</a>
  
  <a href="<?php  the_permalink(); ?>" title="<?php echo 'I just read ' . get_the_title() .' on Tiny Couch\'s Blog and so should you!' ?>" class="post_share_tweet">Tweet</a>
*/

$('a.post_share_tweet', this).on('click', function(e){
  e.preventDefault();
  
  // Because we're not using the regular twitter.com/intent/tweet or whatever,
  // we store the url of the card in the href of the link.
  var loc = $(this).attr('href');
  
  //Get the title of the link (which is our tweet...clever huh?)
  var tweet  = $(this).attr('title');
  
  //Trigger a new window with the Twitter dialog, and do it in the middle of the page
  window.open('http://twitter.com/share?url=' + loc + '&text=' + tweet, 'twitterwindow', 'height=300, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});//(a.tweet).bind()


$('a.post_share_facebook', this).on('click', function(e){
  e.preventDefault();
  
  var fb_link = $(this).attr('href');
  
  //Trigger a new window with the Facebook dialogue
  window.open( fb_link, 'popup', 'height=300, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});