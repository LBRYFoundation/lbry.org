[//]: # (<?php Response::setMetaTitle&#40;__&#40;'title.join'&#41;&#41; ?>)

[//]: # (<?php Response::setMetaDescription&#40;__&#40;'description.join'&#41;&#41; ?>)

<main class="ancillary">
<section class="hero hero--plain">
<div class="inner-wrap">
<h1>{{page.join}}</h1>
</div>
</section>

<section>
<div class="inner-wrap" style="position: relative;">

[//]: # (<?php if &#40;$confirmSuccess ?? false&#41;: ?>)

[//]: # (<?php if &#40;IS_PRODUCTION&#41;: ?>)

[//]: # (<?php js_start&#40;&#41; ?>)
[//]: # (ga&#40;'send', 'event', 'Sign Up', 'Join List', 'lbryians'&#41;;)
[//]: # (twttr.conversion.trackPid&#40;'nty1x'&#41;;)
[//]: # (fbq&#40;'track', 'Lead'&#41;;)

[//]: # (<?php js_end&#40;&#41; ?>)
[//]: # (<?php endif ?>)
<div class="notice notice- spacer1">{{email.confirm_success}}</div>

[//]: # (<?php elseif &#40;$subscribeSuccess ?? false&#41;: ?>)
<div class="notice notice-success spacer1">{{email.subscribe_needs_confirm}}</div>
<br/>

[//]: # (<a class="link-primary" href="<?php echo $nextUrl ?? '/' ?>">{{email.return}}</a>)

[//]: # (<?php else: ?>)
<p>{{page.updates}}</p>

[//]: # (<?php if &#40;$error ?? false&#41;: ?>)
[//]: # (<div class="notice notice-error spacer1"><?php echo $error ?></div>)

[//]: # (<?php endif ?>)
[//]: # (<?php echo View::render&#40;'mail/_subscribeForm', ['returnUrl' => $nextUrl ?? '/']&#41; ?>)

[//]: # (<?php endif ?>)
</div>
</section>
</main>
