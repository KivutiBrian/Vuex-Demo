<template>
  <div>
    <div class="card">
        <div class="card-header">
            Tasks {{ tasksCount }}
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(task,index) in $store.state.tasks" :key="index">{{ task.title }}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Task',
    computed:{
        tasksCount(){
            return this.$store.getters.ALL_TASKS
        }
    }

}
</script>

<style>

</style>