<script setup lang="ts">
const components = [
  'Monsters',
  'Locations',
  'Awards',
  'Weapons',
  'Armors',
  'Decorations',
  'Horn Melodies',
  'Kinsects',
  'Bowgun Ammo',
  'Palico Weapons',
  'Palico Armors',
];
</script>

<template>
  <nav class="menu">
    <ul class="menu">
      <li v-for="component in components" :key="component" class="menu__item">
        <img :src="component.toLocaleLowerCase() + '.png'" :alt="component + ' link image'" />
        <router-link :to="`/${component.toLowerCase()}`">
          {{ component }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  &__item {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
