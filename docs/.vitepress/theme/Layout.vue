<script setup>
import {useData} from "vitepress";
import DefaultTheme from 'vitepress/theme';

const { page } = useData();
</script>

<style scoped>
.error-page {
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  width: auto;
  height: calc(100vh - 4rem);
}
.error-page > img {
  filter: grayscale();
  width: 200px;
  flex: none;
}
.error-page .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.error-page h1 {
  font-size: 48px;
  margin: 0;
}
.error-page .description {
  width: 100%;
  font-size: 26px;
  line-height: 1.3;
  color: var(--text);
  margin: 0;
}
.error-page .action-buttons {
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  flex-wrap: wrap;
  gap: 20px;
}
.error-page .action-buttons .action-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 500;
  flex-direction: row;
  color: var(--counterAccent);
  background-color: var(--tertiaryBG);
  border-radius: 8px;
  line-height: 1;
}
.error-page .action-buttons .action-button:hover {
  background-color: var(--secondaryBG);
  text-decoration: none;
}
@media (max-width: $MQNarrow) {
  .error-page {
    padding: 2rem;
  }
}
@media (max-width: $MQMobile) {
  .error-page {
    gap: 20px;
  }
  .error-page > img {
    width: 150px;
  }
  .error-page h1 {
    font-size: 24px;
  }
  .error-page .description {
    font-size: 20px;
  }
  .error-page .action-buttons .action-button {
    gap: 10px;
    padding: 10px 15px;
    font-size: 18px;
  }
}
</style>

<template>
  <div class="error-page" v-if="page.isNotFound">
    <img alt="Logo" src="/logo-fit.svg">
    <div class="content">
      <h1>Oh no!</h1>
      <p class="description">The page you have requested could not be found.</p>
      <div class="action-buttons">
        <a class="action-button" href="/">
          <Icon icon="fa-solid:arrow-circle-left" />
          <span>Go Back Home</span>
        </a>
      </div>
    </div>
  </div>
  <DefaultTheme.Layout v-else/>
</template>
