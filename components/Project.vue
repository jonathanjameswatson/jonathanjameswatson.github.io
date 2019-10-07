<template>
  <a :href="project.link" target="_blank">
    <div class="project">
      <img :src="project | url" :alt="project.name" class="project-abs" />
      <div class="columns is-centered is-vcentered is-mobile project-abs">
        <div class="column has-text-centered is-narrow">
          <div class="box has-text-white">
            <h1 class="subtitle">{{ project.name }}</h1>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  filters: {
    url(project) {
      return `img/${project.name.toLowerCase().replace(/\s/g, '')}.png`;
    }
  },
  props: { project: Object }
};
</script>
