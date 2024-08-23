<script setup>
// Define props with default value and type check
const props = defineProps({
  date: {
    type: Object,
    required: true,
    default: () => ({ time: 0, string: '' })
  }
})

// Function to get ISO date string
function getDateTime() {
  return new Date(props.date.time).toISOString()
}
</script>

<template>
  <dl>
    <dt class="sr-only">Published on</dt>
    <dd class="text-base leading-6 font-medium text-gray-500 dark:text-gray-300">
      <time :datetime="getDateTime()">{{ props.date.string }}</time>
    </dd>
  </dl>
</template>
