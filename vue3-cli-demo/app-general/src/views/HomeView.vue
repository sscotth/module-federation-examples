<template>
  <HomeView />
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';

const isLoadingComponent = ref(true);

const HomeView = defineAsyncComponent(() => import('app_exposes/HomeView.vue')
  .finally(() => {
    isLoadingComponent.value = false;
  }));
</script>
