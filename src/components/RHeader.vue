<template>
  <v-toolbar class="white" flat light prominent>
    <v-toolbar-title >RANKIST</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      prepend-icon="search"
      hide-details
      label="Search..."
      single-line />
    <v-spacer></v-spacer>
  </v-toolbar>
</template>


<script>
export default {
  name: 'r-header'
}
</script>
