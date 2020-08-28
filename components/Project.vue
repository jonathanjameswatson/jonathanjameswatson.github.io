<template>
  <div
    v-observe-visibility="{ callback: visibilityChanged, once: true }"
    class="columns"
    :class="leftClass"
  >
    <div class="column is-5">
      <a :href="project.link" target="_blank" rel="noopener">
        <figure class="image is-2by1">
          <picture>
            <source :srcSet="webp" type="image/webp" />
            <img :src="png" :alt="project.name" class="image" />
          </picture>
        </figure>
      </a>
    </div>
    <div class="column is-1" />
    <div class="column has-text-centered is-6">
      <div :class="randomBox" class="box">
        <h1 class="subtitle has-text-black">{{ project.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-default-prop
  props: { project: Object, left: Boolean },
  data() {
    const transitions = [
      'rotateX',
      'rotateY',
      'zoom',
      'translateX',
      'translateY'
    ]
    const translateX = this.left ? 'translateXLeft' : 'translateXRight'
    transitions.push(translateX)
    const transition =
      transitions[Math.floor(Math.random() * transitions.length)]
    return { transition, visible: false }
  },
  computed: {
    randomBox() {
      if (this.visible) {
        return []
      }
      return [this.transition]
    },
    leftClass() {
      return {
        'reverse-columns': this.left
      }
    },
    webp() {
      return require(`~/assets/img/${this.project.name
        .toLowerCase()
        .replace(/\s/g, '')}.png?webp`)
    },
    png() {
      return require(`~/assets/img/${this.project.name
        .toLowerCase()
        .replace(/\s/g, '')}.png`)
    }
  },
  methods: {
    visibilityChanged(visible) {
      this.visible = visible
    }
  }
}
</script>
