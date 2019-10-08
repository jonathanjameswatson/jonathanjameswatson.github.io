<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-narrow">
            <div class="box">
              <h1 class="title is-1">jonathan<wbr />james<wbr />watson</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered is-multiline">
          <div class="column is-11">
            <div class="columns is-multiline">
              <div
                v-for="project in projects"
                :key="project.key"
                class="column is-6"
              >
                <project :project="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <canvas
      class="glslCanvas"
      data-fragment-url="background.frag"
      width="640"
      height="360"
    >
    </canvas>
  </div>
</template>

<script>
import Project from '~/components/Project.vue';

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          name: 'Truth Trick',
          link: 'https://github.com/jonathanjameswatson/truth-trick'
        },
        {
          name: 'Exhaustive search calculator',
          link:
            'https://github.com/jonathanjameswatson/exhaustive-search-calculator'
        },
        {
          name: 'bHive',
          link: 'https://github.com/CodeGuild-co/bHive'
        },
        {
          name: 'Numerically solving equations',
          link:
            'https://github.com/jonathanjameswatson/numerically-solving-equations'
        },
        {
          name: 'Maths Race',
          link: 'https://github.com/jonathanjameswatson/maths-race'
        },
        {
          name: 'My GitHub',
          link: 'https://github.com/jonathanjameswatson'
        }
      ]
    };
  }
};
</script>
