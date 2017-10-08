<template>
  <v-app id="example-1" light toolbar footer>
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

<style scoped>

</style>

