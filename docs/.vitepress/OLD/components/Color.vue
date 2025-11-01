<template>
  <div class="color-card">
    <div class="color" :style="cssVars">
      <span>{{ color }}</span>
    </div>
    <p>{{ text }}</p>
  </div>
</template>


<style scoped>
.color-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.color {
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 1px 1px 1px #111;
  width: 150px;
  height: 150px;
  border-radius: 10%;
  outline: 1px solid #fff;
  background-color: var(--color);
  transition: .2s;
}

.color span {
  visibility: hidden;
}

.color:hover {
  transform: scale(1.05);
}

.color:hover span {
  visibility: visible;
}
</style>


<script>
export default {
  props: ['color', 'text'],
  computed: {
    cssVars () {
      return{
        '--color': this.color,
      }
    }
  }
};
</script>
