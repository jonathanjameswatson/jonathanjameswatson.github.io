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
                <project-card :project="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'kwzz',
          link: 'https://github.com/jonathanjameswatson/kwzz',
        },
        {
          name: 'Numerically solving equations',
          link: 'https://jonathanjameswatson.com/numerically-solving-equations/',
        },
        {
          name: 'Truth Trick',
          link: 'https://jonathanjameswatson.com/truth-trick/',
        },
        {
          name: 'bHive',
          link: 'https://github.com/CodeGuild-co/bHive',
        },
        {
          name: 'Maths Race',
          link: 'https://github.com/jonathanjameswatson/maths-race',
        },
        {
          name: 'Exhaustive search calculator',
          link: 'https://jonathanjameswatson.com/exhaustive-search-calculator/',
        },
        {
          name: 'This website',
          link: 'https://github.com/jonathanjameswatson/jonathanjameswatson.github.io',
        },
        {
          name: 'My GitHub',
          link: 'https://github.com/jonathanjameswatson',
        },
      ],
    };
  },
};
</script>
