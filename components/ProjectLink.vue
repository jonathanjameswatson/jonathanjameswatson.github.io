<template>
  <a class="card-footer-item" :href="link.href">{{ link.name }}</a>
</template>

<script>
export default {
  props: { link: Object }
};
</script>
