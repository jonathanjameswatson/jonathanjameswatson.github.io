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
                class="column is-4-desktop is-3-widescreen is-half"
              >
                <project :project="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <canvas class="glslCanvas" data-fragment-url="background.frag" />
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
          link: 'https://jonathanjameswatson.com/truth-trick/'
        },
        {
          name: 'kwzz',
          link: 'https://github.com/jonathanjameswatson/kwzz'
        },
        {
          name: 'bHive',
          link: 'https://github.com/CodeGuild-co/bHive'
        },
        {
          name: 'Numerically solving equations',
          link: 'https://jonathanjameswatson.com/numerically-solving-equations/'
        },
        {
          name: 'Maths Race',
          link: 'https://github.com/jonathanjameswatson/maths-race'
        },
        {
          name: 'Exhaustive search calculator',
          link: 'https://jonathanjameswatson.com/exhaustive-search-calculator/'
        },
        {
          name: 'This website',
          link:
            'https://github.com/jonathanjameswatson/jonathanjameswatson.github.io'
        },
        {
          name: 'My GitHub',
          link: 'https://github.com/jonathanjameswatson'
        }
      ]
    };
  },
  mounted() {
    this.resizeCanvas();
  },
  methods: {
    resizeCanvas() {
      const canvas = document.getElementsByClassName('glslCanvas')[0];
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }
};
</script>
