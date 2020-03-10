<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-12">
          <input-comp></input-comp>
          <tasks-comp></tasks-comp>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
import InputComp from './components/Input'
import TasksComp from './components/Tasks'

export default {
  name: 'App',
  components: {
    InputComp,
    TasksComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
