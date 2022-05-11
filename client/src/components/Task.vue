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
      <div class="field has-addons">
        <input
          v-model="task"
          class="input is-rounded"
          type="text"
          placeholder="Rounded input"
        />
      </div>
      <div class="control is-expanded">
        <a @click="addTask" class="button is-info">Add</a>
      </div>
      <div class="notification" v-for="(item, i) in tasks" :key="item._id">
        <div class="columns">
          <p class="column">
            <span class="tag is-primary">{{ i + 1 }}</span>
            {{ item.description }}
          </p>
          <div class="column is-narrow">
            <span
              class="icon has-text-primary"
              @click="isSelected(item) ? unselect() : select(item)"
            >
              <i class="material-icons">{{
                isSelected(item) ? "close" : "edit"
              }}</i>
            </span>

            <span
              class="icon has-text-info"
              @click="
                isSelected(item) ? updateItem(item, i) : removeItem(item, i)
              "
            >
              <i class="material-icons">{{
                isSelected(item) ? "save" : "delete"
              }}</i>
            </span>
          </div>
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
      task: "",
      selected: {}
    };
  },
  async created() {
    const response = await ApiRepository.getAll();
    this.tasks = response;
  },
  methods: {
    async addTask() {
      const task = {
        name: this.task,
      };
      const response = await ApiRepository.create(task);
      this.tasks.push(response);
      this.task = "";
    },
    async updateItem(task, i) {
      await ApiRepository.updateTask(task._id);
    },
    async removeTask(task, i) {
      await ApiRepository.deleteTask(task._id);
      this.tasks.splice(i, 1);
    },
    isSelected(task) {
      return task._id === this.selected._id;
    },
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
