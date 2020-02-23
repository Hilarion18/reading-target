<template>
  <div class="home">
    <div>{{this.user.name}}</div>
    <table class="item-table">
      <thead>
        <th>No. {{this.target[0].id}}</th>
        <th>{{this.target[0].day}} Day target</th>
        <th>Total page target: {{this.target[0].page}}</th>
      </thead>
      <tbody>
        <td></td>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TargetSection',
  components: {
  },
  data () {
    return {
      store: this.$store.state,
      user: this.$store.state.user,
      target: this.$store.state.target,
      implementTarget: this.$store.state.implementTarget
    }
  }
}
</script>

<style scoped>
/* style for table data */
.item-table {
  margin-top: 20px;
}
.item-table td, .item-table th {
  padding: 10px 10px 10px 0px;
}
</style>
