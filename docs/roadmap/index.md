# Roadmap

[//]: # (<?php Response::setMetaDescription&#40;__&#40;'roadmap.description'&#41;&#41; ?>)

<main class="ancillary">
<section class="hero hero--half-height" style="background-image: url(/img/here-be-dragons.jpg); background-position: center;">
<div class="inner-wrap inner-wrap--center-hero">
<h1>{{roadmap.title}}</h1>
<h2>Future plans for the journey into the land of dragons</h2>
</div>
</section>

<section>
<div class="inner-wrap">
<div class="notice notice-warning spacer1 ">
For 2021, LBRY is not maintaining a public roadmap. Development is more active than ever and can be tracked on our <a href="https://github.com/lbryio">public GitHub</a>.
</div>
<p>Top priorities, definitions of success, status, and target completion dates for key initiatives in
<select id="roadmap-year-select">

[//]: # (<?php foreach &#40;$years as $aYear&#41;: ?>)
[//]: # (<option value="<?php echo $aYear ?>" <?php echo $aYear == $year ? 'selected="selected"' : '' ?>>)
[//]: # (<?php echo $aYear ?>)
[//]: # (</option>)

[//]: # (<?php endforeach ?>)
</select>

[//]: # (<?php js_start&#40;&#41; ?>)
[//]: # ($&#40;'#roadmap-year-select'&#41;.change&#40;function&#40;&#41; { window.location = '/roadmap/' + $&#40;this&#41;.val&#40;&#41;; }&#41;;)
[//]: # (<?php js_end&#40;&#41; ?>)
</p>
<div class="roadmap-container" id="project-roadmap">

[//]: # (<?php if &#40;count&#40;$items&#41;&#41;: ?>)
[//]: # (<?php foreach &#40;$items as $item&#41;: ?>)
[//]: # (<div class="roadmap-item" id="<?php echo strtolower&#40;trim&#40;preg_replace&#40;'/[^A-Za-z0-9-]+/', '-', $item['name']&#41;&#41;&#41; ?>">)
<h3 class="roadmap-item-title">

[//]: # (<?php if &#40;isset&#40;$item['url']&#41; && $item['url']&#41;: ?>)
[//]: # (<a href="<?php echo $item['url'] ?>" class="link-primary"><?php echo $item['name'] ?></a>)
[//]: # (<?php else: ?>)
[//]: # (<?php echo $item['name'] ?>)
[//]: # (<?php endif ?>)
</h3>

<div class="roadmap-item-date">

[//]: # (<?php if &#40;isset&#40;$item['quarter_date']&#41;&#41;: ?>)
[//]: # (<?php echo $item['quarter_date'] ?>)
[//]: # (<?php else: ?>)
[//]: # (<?php echo $item['date'] ? date&#40;'m-d-Y', strtotime&#40;$item['date']&#41;&#41; : '' ?>)
[//]: # (<?php endif ?>)
</div>

<div class="roadmap-item-content content markdown">

[//]: # (<?php echo $item['body'] ?: '<em class="no-results">No description</em>' ?>)
</div>
</div>

[//]: # (<?php endforeach ?>)
[//]: # (<?php else: ?>)
<div class="notice notice-warning">No roadmap items found for this year.</div>

[//]: # (<?php endif ?>)
[//]: # (</div>)
</div>
</section>
</main>
