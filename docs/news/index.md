[//]: # (<?php Response::setMetaDescription&#40;__&#40;'description.news'&#41;&#41; ?>)

<main class="news ancillary">
<section class="hero hero--news" style="background-image: url(/img/bangalore.jpg); background-position: center 15%;">
<div class="inner-wrap inner-wrap--center-hero">
<h1>{{news.desk}}</h1>
<h2>{{news.musings}}</h2>
</div>
</section>

<section>
<div class="inner-wrap">
<div class="notice notice-warning spacer1">For more regular updates, see <a href="https://open.lbry.com/@lbry">the official @lbry channel</a> on LBRY itself.</div>
<ul class="news-items bulletless">

[//]: # (<?php foreach &#40;$posts as $post&#41;: ?>)
<li class="news-item">
<h3>

[//]: # (<a href="<?php echo $post->getRelativeUrl&#40;&#41; ?>" class="link-primary">)
[//]: # (<?php echo $post->getTitle&#40;&#41; ?>)
[//]: # (</a>)
</h3>

[//]: # (<small class="meta" title="<?php echo $post->getDate&#40;&#41;->format&#40;'F jS, Y'&#41; ?>">)
[//]: # (<?php echo $post->getDate&#40;&#41;->format&#40;'M j, Y'&#41; ?> &middot;)
[//]: # (<?php echo $post->getAuthorName&#40;&#41; ?>)
[//]: # (</small>)
</li>

[//]: # (<?php endforeach ?>)
</ul>
</div>
</section>
</main>
