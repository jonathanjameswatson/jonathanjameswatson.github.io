<template>
  <a :href="project.link" target="_blank" rel="noopener">
    <div class="project">
      <img
        :src="project | url"
        :alt="project.name"
        class="project-abs"
        :style="project | colour"
      />
      <div class="columns is-centered is-vcentered is-mobile project-abs">
        <div class="column has-text-centered is-narrow">
          <div class="box has-text-white" :class="randomBox">
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
      return require(`~/assets/img/${project.name
        .toLowerCase()
        .replace(/\s/g, '')}.png`);
    },
    colour(project) {
      const backgroundColor = require(`~/assets/img/${project.name
        .toLowerCase()
        .replace(/\s/g, '')}.png?lqip-colors`)[0];
      return { backgroundColor };
    }
  },
  props: { project: Object },
  computed: {
    randomBox() {
      const transitions = ['rotateX', 'rotateY', 'zoom'];
      const transition =
        transitions[Math.floor(Math.random() * transitions.length)];
      return [transition];
    }
  }
};
</script>
