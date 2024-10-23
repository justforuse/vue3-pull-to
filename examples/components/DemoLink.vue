<template>
  <RouterLink
    :to="href">
    <slot></slot>
  </RouterLink>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    }
  };
</script>
