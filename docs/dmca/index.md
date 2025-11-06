[//]: # (<?php $valuse = $values ?? [] ?>)

[//]: # (<?php $errors = $errors ?? [] ?>)

[//]: # ()
[//]: # (<main class="ancillary">)

[//]: # (<section class="hero hero--half-height">)

[//]: # (<div class="inner-wrap inner-wrap--center-hero">)

[//]: # (<h1>{{dmca.header}}</h1>)

[//]: # (</div>)

[//]: # (</section>)

[//]: # ()
[//]: # (<section>)

[//]: # (<div class="inner-wrap">)

[//]: # (<?php echo View::render&#40;'nav/_flashes'&#41; ?>)

[//]: # ()
[//]: # (<form action="<?php echo Request::getRelativeUri&#40;&#41; ?>" method="POST">)

[//]: # (<?php echo View::render&#40;'form/_formRow', [)

[//]: # ('field'    => 'name',)

[//]: # ('value'    => $values['name'] ?? null,)

[//]: # ('error'    => $errors['name'] ?? null,)

[//]: # ('label'    => __&#40;'dmca.form_labels.name'&#41;,)

[//]: # ('required' => true)

[//]: # (]&#41; ?>)

[//]: # ()
[//]: # (<?php echo View::render&#40;'form/_formRow', [)

[//]: # ('field'    => 'rightsholder',)

[//]: # ('value'    => $values['rightsholder'] ?? null,)

[//]: # ('error'    => $errors['rightsholder'] ?? null,)

[//]: # ('label'    => __&#40;'dmca.form_labels.rightsholder'&#41;,)

[//]: # ('help'     => __&#40;'dmca.form_help.rightsholder'&#41;,)

[//]: # ('required' => true)

[//]: # (]&#41; ?>)

[//]: # ()
[//]: # (<?php echo View::render&#40;'form/_formRow', [)

[//]: # ('field'    => 'email',)

[//]: # ('type'     => 'email',)

[//]: # ('value'    => $values['email'] ?? null,)

[//]: # ('error'    => $errors['email'] ?? null,)

[//]: # ('label'    => __&#40;'dmca.form_labels.email'&#41;,)

[//]: # ('help'     => __&#40;'dmca.form_help.email'&#41;,)

[//]: # ('required' => true)

[//]: # (]&#41; ?>)

[//]: # ()
[//]: # (<?php echo View::render&#40;'form/_formRow', [)

[//]: # ('field'    => 'identifier',)

[//]: # ('value'    => $claimId ?? null,)

[//]: # ('error'    => $errors['identifier'] ?? null,)

[//]: # ('label'    => __&#40;'dmca.form_labels.identifier'&#41;,)

[//]: # ('help'     => __&#40;'dmca.form_help.identifier'&#41;,)

[//]: # ('required' => true)

[//]: # (]&#41; ?>)

[//]: # ()
[//]: # (<input type="submit" value="{{dmca.form_submit}}"/>)

[//]: # (</form>)

[//]: # ()
[//]: # (<small class="meta">You may also submit content that you want to flag for being illegal, not marked Mature, or abusing the tag system. To learn more about reporting infringing or illegal content and DMCA procedures, please see our <a href="/faq/dmca">DMCA article</a>.</small>)

[//]: # (</div>)

[//]: # (</section>)

[//]: # (</main>)
