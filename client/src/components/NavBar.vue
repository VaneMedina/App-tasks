<template>
  <div>
    <nav class="nav">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" :href="link">link</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
        >Disabled</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
      link: String
  }
}
</script>

<style>
</style>