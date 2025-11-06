[//]: # ([//]: # &#40;<?php Response::setMetaTitle&#40;__&#40;'title.join'&#41;&#41; ?>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php Response::setMetaDescription&#40;__&#40;'description.join'&#41;&#41; ?>&#41;)
[//]: # ()
[//]: # (<main class="ancillary">)

[//]: # (<section class="hero hero--plain">)

[//]: # (<div class="inner-wrap">)

[//]: # ()
[//]: # ([//]: # &#40;<h1>{{page.join}}</h1>&#41;)
[//]: # (</div>)

[//]: # (</section>)

[//]: # ()
[//]: # (<section>)

[//]: # (<div class="inner-wrap" style="position: relative;">)

[//]: # ()
[//]: # ([//]: # &#40;<?php if &#40;$confirmSuccess ?? false&#41;: ?>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php if &#40;IS_PRODUCTION&#41;: ?>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php js_start&#40;&#41; ?>&#41;)
[//]: # ([//]: # &#40;ga&#40;'send', 'event', 'Sign Up', 'Join List', 'lbryians'&#41;;&#41;)
[//]: # ([//]: # &#40;twttr.conversion.trackPid&#40;'nty1x'&#41;;&#41;)
[//]: # ([//]: # &#40;fbq&#40;'track', 'Lead'&#41;;&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php js_end&#40;&#41; ?>&#41;)
[//]: # ([//]: # &#40;<?php endif ?>&#41;)
[//]: # ([//]: # &#40;<div class="notice notice- spacer1">{{email.confirm_success}}</div>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php elseif &#40;$subscribeSuccess ?? false&#41;: ?>&#41;)
[//]: # ([//]: # &#40;<div class="notice notice-success spacer1">{{email.subscribe_needs_confirm}}</div>&#41;)
[//]: # (<br/>)

[//]: # ()
[//]: # ([//]: # &#40;<a class="link-primary" href="<?php echo $nextUrl ?? '/' ?>">{{email.return}}</a>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php else: ?>&#41;)
[//]: # (<p>{{// page.updates}}</p>)

[//]: # ()
[//]: # ([//]: # &#40;<?php if &#40;$error ?? false&#41;: ?>&#41;)
[//]: # ([//]: # &#40;<div class="notice notice-error spacer1"><?php echo $error ?></div>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php endif ?>&#41;)
[//]: # ([//]: # &#40;<?php echo View::render&#40;'mail/_subscribeForm', ['returnUrl' => $nextUrl ?? '/']&#41; ?>&#41;)
[//]: # ()
[//]: # ([//]: # &#40;<?php endif ?>&#41;)
[//]: # (</div>)

[//]: # (</section>)

[//]: # (</main>)
