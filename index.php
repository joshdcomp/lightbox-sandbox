<!DOCTYPE html>

<html class="no-js" lang="en"><!-- the "no-js" class is for Modernizr. -->

<head id="lightbox-sandbox" data-template-set="html5-skeleton">

	<meta charset="UTF-8">
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title>Playing with Lightboxing and Scroll events</title>

	<meta name="author" content="Josh Compton">
	<meta name="description" content="He got on well with his siblings and did not hate his mother or father even though they had been very good to him">
	
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">

	<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="style.css" type="text/css">
	
	<script type="text/javascript" src="js/modernizr.custom-2.6.2.min.js"></script>

</head>

<body>

  <article id="fluff">
    <p><a href="#_" class="open_lightbox">Launch the lightbox</a></p>
    <p>"Be thankful you're healthy."</p>
    <p>"Be bitter you're not going to stay that way"</p>
    <p>"Be glad you're even alive."</p>
    <p>"Be furious you're going to die."</p>
  </article><!-- #fluff -->
  
  <aside id="lightbox">
    <a href="#_" class="close_lightbox">x</a>
    <ul class="gallery">
         <li><img src="http://placehold.it/900x600&text=hai" alt="Placeholding fun image" /></li><!-- whitespace issues with inline-block
      --><li><img src="http://placehold.it/900x600&text=hai" alt="Placeholding fun image" /></li><!--
      --><li><img src="http://placehold.it/900x600&text=hai" alt="Placeholding fun image" /></li><!--
      --><li><img src="http://placehold.it/900x600&text=hai" alt="Placeholding fun image" /></li><!--
      --><li><img src="http://placehold.it/900x600&text=hai" alt="Placeholding fun image" /></li><!--
      --><li><img src="http://placehold.it/900x600&text=hai" alt="Placeholding fun image" /></li>
    </ul><!-- .gallery -->
    
    <div class="content_wrapper">
      <h1 class="inline">Everyone has a share&hellip;</h1>
      
      <p>One day Milo flew away to England to pick up a load of Turkish halvah and came flying back from Madagascar leading four German bombers filled with yams, collards, mustard greens and black-eyed Georgia peas. Milo was dumbfounded when he stepped down to the ground and found a contingent of armed M.P.s waiting to imprison the German pilots and confiscate their planes. Confiscate! The mere word was anathema to him, and he stormed back and forth in excoriating condemnation, shaking a piercing finger of rebuke in the guilt-ridden faces of Colonel Cathcart, Colonel Korn and the poor battle-scarred captain with the submachine gun who commanded the M.P.s.</p>
  
      <p>"Is this Russia?" Milo assailed them incredulously at the top of his voice. "Confiscate?" he shrieked, as though he could not believe his own ears. "Since when is it the policy of the American government to confiscate the private property of its citizens? Shame on you! Shame on all of you for even thinking such a horrible thought."</p>
  
      <p>"But Milo," Major Danby interrupted timidly, "we're at war with Germany and those are German planes."</p>
  
      <p>"They are no such thing!" Milo retorted furiously. "Those planes belong to the syndicate, and everybody has a share. Confiscate? How can you possibly confiscate your own private property? Confiscate, indeed! I've never heard anything so depraved in my whole life."</p>
    </div><!-- .content_wrapper -->
    
  </aside><!-- #lightbox -->
  
  <div id="overlay"></div><!-- #overlay -->





  <!-- You're all clear kid. Now let's blow this thing and go home -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/jquery-1.9.0.min.js"><\/script>')</script>

	<!-- Great shot kid that was one in a million -->
	<script type="text/javascript" src="js/main.js"></script>
  
</body>
</html>
