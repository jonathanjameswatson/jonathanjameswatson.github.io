<template>
  <a :href="project.link" target="_blank" rel="noopener">
    <div class="project box">
      <picture>
        <source :srcSet="webp" type="image/webp" />
        <img :src="png" :alt="project.name" class="project-abs" />
      </picture>
      <div class="columns is-centered is-vcentered is-mobile project-abs">
        <div class="column has-text-centered is-narrow">
          <div :class="randomBox" class="box has-text-white">
            <h1 class="subtitle">{{ project.name }}</h1>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-default-prop
  props: { project: Object },
  computed: {
    randomBox() {
      const transitions = ['rotateX', 'rotateY', 'zoom'];
      const transition =
        transitions[Math.floor(Math.random() * transitions.length)];
      return [transition];
    },
    webp() {
      return require(`~/assets/img/${this.project.name
        .toLowerCase()
        .replace(/\s/g, '')}.png?webp`);
    },
    png() {
      return require(`~/assets/img/${this.project.name
        .toLowerCase()
        .replace(/\s/g, '')}.png`);
    }
  }
};
</script>
