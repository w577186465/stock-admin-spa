<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(blue, A700), // The primary color of your application
    accent: md-get-palette-color(red, A200) // The accent or secondary color
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme
  body {
    font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: #4a70d6;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .clearfix:after {
    content:" ";
    display:block;
    height:0;
    visibility:hidden;
    clear:both;
  }

  .icon{
    width:1em;
    height:1em;
    vertical-align:-.15em;
    fill:currentColor;
    overflow:hidden;
  }
</style>
