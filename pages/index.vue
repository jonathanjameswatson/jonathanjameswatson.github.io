<template>
  <div>
    <section class="hero is-fullheight start">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-narrow">
              <div class="box">
                <h1 class="title is-1">jonathan<br />james<br />watson</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="projects">
      <section
        v-for="(project, i) in projects"
        :key="project.key"
        :style="{ 'background-color': project.colour }"
        class="hero"
      >
        <div class="hero-body">
          <div class="container">
            <project :project="project" :left="i % 2 === 0" />
          </div>
        </div>
      </section>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          name: 'kwzz',
          link: 'https://github.com/jonathanjameswatson/kwzz',
          colour: '#972867',
        },
        {
          name: 'Numerically solving equations',
          link:
            'https://jonathanjameswatson.com/numerically-solving-equations/',
          colour: '#FE3860',
        },
        {
          name: 'Truth Trick',
          link: 'https://jonathanjameswatson.com/truth-trick/',
          colour: '#FFFFFF',
        },
        {
          name: 'bHive',
          link: 'https://github.com/CodeGuild-co/bHive',
          colour: '#EBB92D',
        },
        {
          name: 'Maths Race',
          link: 'https://github.com/jonathanjameswatson/maths-race',
          colour: '#6DF2CC',
        },
        {
          name: 'This website',
          link:
            'https://github.com/jonathanjameswatson/jonathanjameswatson.github.io',
          colour: '#FFFFFF',
        },
        {
          name: 'Exhaustive search calculator',
          link: 'https://jonathanjameswatson.com/exhaustive-search-calculator/',
          colour: '#E2EDFB',
        },
      ],
    }
  },
}
</script>
