<template>
  <div>
    <section class="hero is-fullheight start">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6 is-7-widescreen is-8-desktop is-9-tablet">
              <div class="tile is-ancestor">
                <div class="tile is-parent is-narrow">
                  <div
                    class="tile is-child columns is-mobile is-centered is-vcentered"
                  >
                    <div class="column is-narrow is-paddingless">
                      <div class="box has-text-centered">
                        <h1 class="title is-1">
                          jonathan<br />james<br />watson
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                  <div class="tile is-child box">
                    <div class="content">
                      <h1>About me</h1>
                      <ul>
                        <li>
                          Undergraduate computer science student at University
                          of Cambridge
                        </li>
                        <li>
                          Contact me at
                          <b>add email [at] here</b>
                        </li>
                        <li>
                          <a href="#projects"
                            >View some of my programming projects</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="projects" class="projects">
      <section
        v-for="(project, i) in projects"
        :key="project.key"
        :style="{ 'background-color': project.colour }"
        class="hero is-halfheight"
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
        <p>Add <b>footer text</b> here</p>
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
