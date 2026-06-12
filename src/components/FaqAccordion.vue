<template>
  <div class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bg-white border border-pink-100 rounded-lg overflow-hidden"
    >
      <button
        class="w-full flex items-center justify-between gap-4 p-5 text-left"
        @click="toggle(index)"
      >
        <span class="font-bold text-gray-900">{{ item.question }}</span>
        <span
          class="text-pink-500 text-2xl flex-shrink-0 transition-transform duration-200"
          :class="{ 'rotate-45': openIndex === index }"
        >
          +
        </span>
      </button>
      <div v-show="openIndex === index" class="px-5 pb-5 text-gray-600">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true
  }
});

const openIndex = ref(0);

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index;
}
</script>
