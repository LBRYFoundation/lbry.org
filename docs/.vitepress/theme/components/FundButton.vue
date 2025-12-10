<script>
export default {
  props: ['link','text'],
};
</script>

<style>
.fund-button{
  display:inline-flex;
}

.fund-button button{
  background:#1EABB1;
  border-radius: 10px;
  color: var(--primaryBG);
  display: inline;
  font-weight: bold;
  line-height: 30px;
  margin: 14px 4px;
  padding: 0 12px;
}

.fund-button button:hover{
  background-color: #147276;
}
</style>

<template>
  <a :href="link" class="fund-button"><button>{{text}}</button></a>
</template>
