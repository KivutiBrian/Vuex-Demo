<template>
  <div>
      <input @keyup.enter="saveTask" v-model="title" type="text" class="form-control mb-3">
  </div>
</template>

<script>
export default {
    name:'Input',
    data(){
        return{
            title:''
        }
    },
    methods:{
        saveTask(){
            this.$store.dispatch('UPDATE_TASKS_LIST', this.title)
            this.title = ''
        }
    }

}
</script>

<style scoped>

input:focus{
    box-shadow: none;
    outline: none;
}

</style>