<template>
  <section class="wrapper">
    <div class="slogan">
      <h1>Vue3-Pull-To</h1>
      <p>for Vue 3</p>
      <svg class="icon icon-face" aria-hidden="true">
        <use xlink:href="#icon-face-20"></use>
      </svg>
    </div>
    <pull-to class="scroller-view">
      <ul class="list">
        <li>
          <DemoLink href="/bounce-scroll">
            Bounce scroll
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </DemoLink>
        </li>
        <li>
          <DemoLink href="/simple-pullto-refresh">
            Simple pull to refresh
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </DemoLink>
        </li>
        <li>
          <DemoLink href="/simple-pullto-loadmore">
            Simple pull to load more
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </DemoLink>
        </li>
        <li>
          <DemoLink href="/infinite-scroll">
            Infinite scroll
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </DemoLink>
        </li>
      </ul>
    </pull-to>
  </section>
</template>

<script>
  import PullTo from '@lib';
  import DemoLink from '../components/DemoLink.vue';

  export default {
    name: 'home',
    components: {
      DemoLink,
      PullTo
    }
  };
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .scroller-view {
    flex: 1;
  }

  .slogan {
    margin-top: 50px;

    p {
      margin-top: 8px;
      font-size: 16px;
      text-align: center;
    }

    .icon-face {
      margin-top: 15px;
      width: 100%;
      height: 100px;
    }
  }

  h1 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  }

  .list {
    margin-top: 30px;
    font-size: 16px;

    li:nth-child(even) {
      background: #eee;
    }

    li {
      padding-left: 15px;
      height: 50px;
      line-height: 50px;
      background: #fff;

      a {
        display: block;
        height: 100%;
      }

      .icon-arrow {
        display: inline-block;
        float: right;
        margin-right: 15px;
        height: 100%;
        width: 20px;
        color: #444;
      }
    }
  }
</style>
