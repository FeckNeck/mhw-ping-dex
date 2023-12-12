<script setup lang="ts">
import useMonsters from '../../hooks/monster';

const { monsters, isLoading } = useMonsters();
</script>
<template>
  <div class="monster-list">
    <h1>Monsters</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-for="monster in monsters" :key="monster.id">
        <router-link :to="`/monsters/${monster.id}`">
          {{ monster.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
