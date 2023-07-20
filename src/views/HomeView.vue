<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <cv-text-input
      label="Who are you?"
      v-model="yourName"
      placeholder="your name"
    />
    <cv-button @click="onClick">Hello {{yourName}}</cv-button>
    <cv-modal :visible="visible" @modal-hidden="modalClosed">
      <template slot="title">Welcome to @carbon/vue {{yourName}}</template>
      <template slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </template>
    </cv-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "HomeView",
  data() {
      return {
        yourName: '',
        visible: false,
      };
    },
    methods: {
      onClick() {
        this.visible = true;
      },
      modalClosed() {
        this.visible = false;
      },
    },
});
</script>
<style>
  .sample {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 5% auto;
  }

  .cv-text-input {
    margin: 30px 0;
  }
</style>