<template>
  <div>
    <button @click="add">Add</button>
    <transition-group name="list" tag="div">
      <p v-for="(item, index) in items" v-bind:key="item" class="list-item">
        <span>{{ item }}</span>
        <span @click="remove(index)">×</span>
      </p>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    nextNum: 10
  }),
  methods: {
    add: function () {
      this.items.unshift(this.nextNum++)
    },
    remove(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style>
.list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 10px;
  background-color: #369;
  padding: 20px;
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
