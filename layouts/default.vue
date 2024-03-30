<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'data-theme',
  valueDark: 'night',
  valueLight: 'winter'
})
const toggleDark = useToggle(isDark)

</script>

<template>
  <div class="section">  
    <slot />
  </div>
</template>

<style scoped>
.section {
  @apply flex justify-center min-h-screen p-8;
}
</style>
