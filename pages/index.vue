<template>
  <section>
    <section id="intro" class="hero is-fullheight">
      <div id="p5-canvas" class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column has-text-centered is-narrow">
              <div class="box">
                <h1 class="title is-1">jonathan<wbr />james<wbr />watson</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline">
        <project
          v-for="project in projects"
          :key="project.key"
          :project="project"
        ></project>
      </div>
    </section>
  </section>
</template>

<script>
import Project from '~/components/Project.vue';

let background;
if (process.browser) {
  background = require('@/js/background.js');
}
export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          name: 'Exhaustive search calculator',
          links: [
            {
              name: 'Website',
              href: 'exhaustive-search-calculator'
            },
            {
              name: 'GitHub',
              href:
                'https://github.com/jonathanjameswatson/exhaustive-search-calculator'
            }
          ]
        },
        {
          name: 'Numerically solving equations',
          links: [
            {
              name: 'Website',
              href: 'numerically-solving-equations'
            },
            {
              name: 'GitHub',
              href:
                'https://github.com/jonathanjameswatson/numerically-solving-equations'
            }
          ]
        },
        {
          name: 'Truth Trick',
          links: [
            {
              name: 'Website',
              href: 'truth-trick'
            },
            {
              name: 'GitHub',
              href: 'https://github.com/jonathanjameswatson/truth-trick'
            }
          ]
        },
        {
          name: 'Maths Race',
          links: [
            {
              name: 'GitHub',
              href: 'https://github.com/jonathanjameswatson/maths-race'
            }
          ]
        },
        {
          name: 'bHive',
          links: [
            {
              name: 'GitHub',
              href: 'https://github.com/CodeGuild-co/bHive'
            }
          ]
        },
        {
          name: 'My GitHub',
          links: [
            {
              name: 'Link',
              href: 'https://github.com/jonathanjameswatson'
            }
          ]
        }
      ]
    };
  },
  mounted() {
    const P5 = require('p5');
    (() => new P5(background.main))();
  }
};
</script>
