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
        <div class="column has-text-centered is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="~assets/images/exhaustivesearchcalculator.png"
                  alt="Exhaustive search calculator"
                />
              </figure>
            </div>
            <div class="card-content">
              <h1 class="subtitle is-4">Exhaustive search calculator</h1>
            </div>
            <div class="card-footer">
              <a class="card-footer-item" href="exhaustive-search-calculator">
                Website
              </a>
              <a
                class="card-footer-item"
                href="https://github.com/jonathanjameswatson/exhaustive-search-calculator"
              >
                Github</a
              >
            </div>
          </div>
        </div>

        <div class="column has-text-centered is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="~assets/images/numericallysolvingequations.png"
                  alt="Numerically solving equations"
                />
              </figure>
            </div>
            <div class="card-content">
              <h1 class="subtitle is-4">Numerically solving equations</h1>
            </div>
            <div class="card-footer">
              <a class="card-footer-item" href="numerically-solving-equations"
                >Website</a
              >
              <a
                class="card-footer-item"
                href="https://github.com/jonathanjameswatson/numerically-solving-equations"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div class="column has-text-centered is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="~assets/images/truthtrick.png" alt="Truth Trick" />
              </figure>
            </div>
            <div class="card-content">
              <h1 class="subtitle is-4">Truth Trick</h1>
            </div>
            <div class="card-footer">
              <a class="card-footer-item" href="truth-trick">Website</a>
              <a
                class="card-footer-item"
                href="https://github.com/jonathanjameswatson/truth-trick"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div class="column has-text-centered is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="~assets/images/mathsrace.png" alt="Maths Race" />
              </figure>
            </div>
            <div class="card-content">
              <h1 class="subtitle is-4">Maths Race</h1>
            </div>
            <div class="card-footer">
              <a
                class="card-footer-item"
                href="https://github.com/jonathanjameswatson/maths-race/"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div class="column has-text-centered is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="~assets/images/bhive.png" alt="bHive" />
              </figure>
            </div>
            <div class="card-content">
              <h1 class="subtitle is-4">bHive</h1>
            </div>
            <div class="card-footer">
              <a
                class="card-footer-item"
                href="https://github.com/CodeGuild-co/bHive"
                >Github</a
              >
            </div>
          </div>
        </div>

        <div class="column has-text-centered is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img src="~assets/images/mygithub.png" alt="My GitHub" />
              </figure>
            </div>
            <div class="card-content">
              <h1 class="subtitle is-4">My GitHub</h1>
            </div>
            <div class="card-footer">
              <a
                class="card-footer-item"
                href="https://github.com/jonathanjameswatson/"
                >Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
let background;
if (process.browser) {
  background = require('@/js/background.js');
}
export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    const P5 = require('p5');
    (() => new P5(background.main))();
  }
};
</script>
