<script>
export default {
  props: ['link','text'],
};
</script>

<style>
.tech-button{
  display:flex;
}

.tech-button button{
  background:var(--accent);
  border-radius: 10px;
  color: var(--primaryBG);
  display: inline;
  font-weight: bold;
  line-height: 30px;
  margin: 14px 4px;
  padding: 0 12px;
}

.tech-button button:hover{
  background-color: var(--accent-darker);
}
</style>

<template>
  <a :href="link" class="tech-button"><button>{{text}}</button></a>
</template>
