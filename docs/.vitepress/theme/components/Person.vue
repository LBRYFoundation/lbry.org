<script lang="ts">
export default {
  name: "person",
  props: ["avatar", "name", "subtitle", "imageClass"],
};
</script>

<style>
.person {
  border-radius: 0.5em;
  background-color: var(--secondaryBG);
  padding: 0.5em 1em;
  margin: 0.5em;
  display: flex;
}
.person .title {
  font-size: 24px;
}
.person .title.minimal {
  font-size: 16px;
  font-weight: normal;
}
.person .title,
.person .subtitle {
  margin: 0;
}
.person img {
  height: 5em;
}
.person img + .person-content {
  margin-left: 1em;
}
.person img.large {
  height: 10em;
}
.person img.rounded {
  border-radius: 50%;
}
.person .person-content {
  display: flex;
  flex-direction: column;
  flex: auto;
  justify-content: center;
}
.person .person-content .subtitle {
  color: var(--tertiaryText);
}
.person .person-content .buttons a {
  line-height: 2;
}
</style>

<template>
  <div class="person">
    <img
      v-if="!!avatar"
      no-zoom
      draggable="false"
      :alt="`${name}'s Avatar`"
      :src="avatar"
      :class="imageClass ? `image-title ${imageClass}` : 'image-title'"
    />
    <div class="person-content">
      <h4 :class="avatar || subtitle ? 'title' : 'title minimal'">
        {{ name }}
      </h4>
      <p v-if="!!subtitle" class="subtitle">{{ subtitle }}</p>
      <div class="buttons"><slot /></div>
    </div>
  </div>
</template>
