<template>
  <div class="column has-text-centered is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image is-2by1">
          <img
            :src="`img/${project.name.toLowerCase().replace(/\s/g, '')}.png`"
            :alt="project.name"
          />
        </figure>
      </div>
      <div class="card-content">
        <h1 class="subtitle is-4">{{ project.name }}</h1>
      </div>
      <div class="card-footer">
        <project-link
          v-for="link in project.links"
          :key="link.key"
          :link="link"
        ></project-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectLink from '~/components/ProjectLink.vue';

export default {
  components: {
    ProjectLink
  },
  props: { project: Object }
};
</script>
