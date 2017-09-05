<template>
  <v-app id="example-1" light toolbar footer>
    <v-toolbar class="white" flat light prominent>
      <v-toolbar-title >Rankist</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        prepend-icon="search"
        hide-details
        label="Search..."
        single-line />
      <v-spacer></v-spacer>
    </v-toolbar>
    <div style='height: 200px; padding: 70px 0' class="orange lighten-2 ">
      <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
          
          <h4 class="white--text">Discover the best ranking lists of any topic</h4>
        </v-flex>
      </v-layout>
    </div>
    <main>
      <v-layout column>
        <v-flex xs12 sm6 offset-sm3>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              <v-flex
                v-bind="{ [`xs${card.flex}`]: true }"
                v-for="card in cards"
                :key="card.title">
                <v-card>
                  <v-card-media
                    :src="card.src"
                    height="200px">
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-actions class="white">
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
            <!--v-router-->
          </v-container>
        </v-flex>
      </v-layout>
    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'http://lorempixel.com/500/350/', flex: 6 },
        { title: 'Pre-fab homes', src: 'http://lorempixel.com/500/300/', flex: 6 },
        { title: 'Favorite road trips', src: 'https://unsplash.it/300/350', flex: 4 },
        { title: 'Best airlines', src: 'https://unsplash.it/350/300', flex: 4 },
        { title: 'Favorite road trips', src: 'https://unsplash.it/350/350', flex: 4 }
      ]
    })
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>
