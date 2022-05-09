<template>
  <div>
    <h1 class="subtitle has-text-centered">Bucket List:</h1>
    <hr />
    <div class="field">
      <!--<div class="control is-expanded">
        <input
          class="input"
          v-model="description"
          type="text"
          placeholder="Go to mars..."
        />
      </div>
      <div class="control">
        <a class="button is-info" @click="addItem" :disabled="!description"
          >Add</a
        >
      </div>
    </div>-->
    <div class="notification" v-for="(item, i) in tasks" :key="item._id">
      <div class="columns">
        <p class="column">
          <span class="tag is-primary">{{ i + 1 }}</span>
          {{ item.name }}
        </p>
        <!--<div class="column is-narrow">

          <span
            class="icon has-text-info"
            
          >
            <i class="material-icons"></i>
          </span>
        </div>-->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import RepositoryFactory from "../repositories/RepositoryFactory";
const ApiRepository = RepositoryFactory.get("api");

export default {
  name: "Task",
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    const response = await ApiRepository.getAll();
    this.tasks = response;
  },
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
</style>
