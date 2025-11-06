[//]: # (<?php Response::addMetaImage&#40;Request::getHostAndProto&#40;&#41; . '/img/og-faq.png?_cache=' . date&#40;'Y-m-d'&#41;&#41; ?>)

[//]: # (<?php Response::setMetaDescription&#40;__&#40;'description.faq'&#41;&#41; ?>)

<main class="ancillary">
<section class="hero hero--half-height">
<div class="inner-wrap inner-wrap--center-hero">

[//]: # (<h1>{{page.faq.header}}</h1>)
</div>
</section>

<section>
<div class="inner-wrap">
<form method="get" action="/faq" id="faq-filter-form">

[//]: # (<?php echo View::render&#40;'form/_select', [)

[//]: # ('choices' => $categories,)

[//]: # ('label' => 'Category',)

[//]: # ('name' => 'category',)

[//]: # ('selected' => $selectedCategory)

[//]: # (]&#41; ?>)
</form>

[//]: # (<?php js_start&#40;&#41; ?>)

[//]: # (if &#40;window.location.href.includes&#40;"/faq?category"&#41;&#41;)

[//]: # (document.querySelector&#40;"select"&#41;.insertAdjacentHTML&#40;"afterbegin", "<option value='back-to-faq'>Back to FAQ</option>"&#41;;)

[//]: # ()
[//]: # (document.getElementById&#40;"faq-filter-form"&#41;.addEventListener&#40;"change", function&#40;&#41; {)

[//]: # (this.submit&#40;&#41;;)

[//]: # (}&#41;;)

[//]: # (<?php js_end&#40;&#41; ?>)

[//]: # (<?php foreach &#40;$postGroups as $category => $posts&#41;: ?>)

[//]: # (<?php if &#40;count&#40;$posts&#41;&#41;: ?>)

[//]: # (<h2><?php echo $categories[$category] ?></h2>)

<ul>

[//]: # (<?php foreach &#40;$posts as $post&#41;: ?>)

[//]: # (<li>)

[//]: # (<a href="<?php echo $post->getRelativeUrl&#40;&#41; ?>">)

[//]: # (<?php echo $post->getTitle&#40;&#41; ?>)

[//]: # (</a>)

[//]: # (</li>)

[//]: # (<?php endforeach ?>)

</ul>

[//]: # (<?php endif ?>)

[//]: # (<?php endforeach ?>)
</div>
</section>

<section>
<div class="inner-wrap">
<h3>Ask A Question</h3>
<p>See something not answered above? <a href="mailto:hello@lbry.com?subject=Question%20for%20the%20FAQ" rel="noopener noreferrer" target="_blank" title="">Send us your question</a>!</p>
</div>
</section>
</main>
