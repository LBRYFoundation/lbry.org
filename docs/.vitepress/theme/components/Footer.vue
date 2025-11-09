<script setup>
import NavLink from "./NavLink.vue";

const config = {
  logo: '/logo-vertical.svg',
  columns: [
    {
      title: 'More',
      rows: [{
        text: 'Privacy Policy',
        link: '/privacy/'
      },
        {
          text: 'Branding',
          link: '/branding/'
        },
//        {
//         text: 'Ko-fi Donations',
//         link: 'https://ko-fi.com/lbryfoundation'
//        },
        {
          text: 'GitHub Repo',
          link: 'https://github.com/LBRYFoundation/lbry.org'
        }]
    },
    {
      title: 'Other Sites',
      rows: [{
        text: 'LBRY.tech',
        link: 'https://lbry.tech/'
      }
      ]
    }
  ],
};
</script>

<style>
.footer {
  background-color: var(--tertiaryBG);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  padding: 1rem;
  width: calc(100% - 2rem);
  margin-top: 5rem;
}
.footer .footer-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: $contentWidth;
  margin: 0 auto;
}
.footer .footer-main img {
  flex: none;
  height: 100px;
}
.footer .columns {
  display: flex;
  gap: 40px;
}
.footer .columns .column-opener {
  max-width: 200px;
}
.footer .columns .column {
  display: flex;
  flex-direction: column;
}
.footer .columns .column .col-title {
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--headerText);
}
.footer .columns .column .links {
  display: flex;
  align-self: center;
  flex-direction: column;
  align-self: flex-start;
}
.footer .columns .column .links a {
  font-weight: 400;
  color: var(--text);
}
.footer .columns .column .links a svg {
  display: none;
}
.footer .columns .column .links a:hover {
  text-decoration: underline;
}
.footer .fine-print {
  color: var(--text);
  font-size: 10px;
  max-width: $contentWidth;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  gap: 10px;
}
@media (max-width: $MQMobile) {
  .footer {
    background-image: none;
  }
  .footer .columns {
    flex-wrap: wrap;
    gap: 20px;
  }
  .footer .columns .column-opener {
    max-width: none;
    margin-bottom: 2rem;
  }
  .footer .columns .column {
    align-self: flex-start;
  }
  .footer .columns .column .links {
    justify-content: center;
  }
  .footer .fine-print {
    margin-top: 2rem;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="footer-main">
      <img alt="Logo" v-if="config.logo" :src="config.logo" draggable="false" />
      <div class="columns" v-if="config.columns && config.columns.length">
        <div class="column" :key="i" v-for="(column, i) in config.columns">
          <span class="col-title">{{ column.title }}</span>
          <div class="links" v-if="column.rows">
            <NavLink :key="j" v-for="(cell, j) in column.rows" :item="cell" />
          </div>
        </div>
      </div>
    </div>
    <div class="fine-print" v-if="config.finePrints">
      <span>{{ config.finePrints[0].replace('{year}', new Date().getFullYear().toString()) }}</span> <i>{{ config.finePrints[1] }}</i>
    </div>
  </footer>
</template>
