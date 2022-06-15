<template>
  <a :href="project.link" target="_blank" rel="noopener">
    <div class="project box">
      <nuxt-picture
        :src="src"
        :img-attrs="{ alt: project.name, class: 'project-abs' }"
      />
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
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    randomBox() {
      const transitions = ['rotateX', 'rotateY', 'zoom'];
      const transition =
        transitions[Math.floor(Math.random() * transitions.length)];
      return [transition];
    },
    src() {
      return `/img/${this.project.name.toLowerCase().replace(/\s/g, '')}.png`;
    },
  },
};
</script>
