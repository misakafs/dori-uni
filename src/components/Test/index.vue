<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: 'text',
  },
})

const t = 'TEXT: ' + props.text
</script>
<template>
  <view>{{ t }}</view>
</template>
<style lang="scss" scoped></style>
