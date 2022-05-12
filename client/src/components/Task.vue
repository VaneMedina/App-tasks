<template>
  <div>
    <h1 class="subtitle has-text-centered">Bucket List:</h1>
    <hr />
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input"
          v-model="task"
          type="text"
          placeholder="Go to mars..."
        />
      </div>
      <div class="control">
        <a @click="addTask" class="button is-info">Add</a>
      </div>
    </div>
    <div class="notification" v-for="(item, i) in tasks" :key="item._id">
      <div class="columns">
        <input
          class="column input"
          v-if="isSelected(item)"
          v-model="editedDescription"
        />
        <p v-else class="column">
          <span class="tag is-primary">{{ i + 1 }}</span>
          {{ item.name }}
        </p>
        <div class="column is-narrow">
          <span class="icon has-text-info" @click="isSelected(item) ?  unselect() : select(item)">
            <i class="material-icons">{{isSelected(item) ? 'close': 'edit'}}</i>
          </span>
          <span class="icon has-text-info" @click="isSelected(item) ? updateTask(item, i) : removeTask(item, i)">
            <i class="material-icons">{{isSelected(item) ? 'save': 'delete'}}</i>
          </span>
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
      editedDescription: "",
      selected: {},
    };
  },
  async mounted() {
    const response = await ApiRepository.getAll();
    this.tasks = response.data;
  },
  methods: {
    async addTask() {
      var _this = this;
      const task = {
        name: _this.task,
      };
      const response = await ApiRepository.create(task);
      _this.tasks.push(response.data);
      _this.task = "";
    },
    async updateTask(item, i) {
      var _this = this;
      const task = {
        name: _this.editedDescription,
      };
      const response = await ApiRepository.update(item._id, task);
      _this.tasks[i] = response.data;
      this.unselect();
    },
    async removeTask(task, i) {
      await ApiRepository.deleteTask(task._id);
      this.tasks.splice(i, 1);
    },
    isSelected(item) {
      return item._id == this.selected._id;
      
    },
    unselect() {
      var _this = this;
      _this.selected = {};
      _this.editedDescription = "";
    },
    select(item) {
      var _this = this;
      _this.selected = item;
      _this.editedDescription = item.name;
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
.icon {
  cursor: pointer;
}
</style>
