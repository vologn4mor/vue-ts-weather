<template>
    <div class="container">
        <input type="text" v-model.trim="inputData" @keyup.enter="btnHandler" placeholder="Введите город...">
        <AppButton @action="btnHandler">Поиск</AppButton>
    </div>
    <strong v-if="error.length">{{error}}</strong>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppButton from './ui/AppButton.vue'

export default defineComponent({
  data () {
    return {
      inputData: ''
    }
  },
  emits: ['sendReq'],
  methods: {
    btnHandler () {
      this.$emit('sendReq', this.inputData)
      this.inputData = ''
    }
  },
  components: {
    AppButton
  },
  props: ['error']

})
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
    }
</style>
