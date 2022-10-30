<template>
  <div class="step">
    <slot v-if="isActive"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref, watch } from "vue";
import Progress from "@/base/Progress/Progress.vue";

export default defineComponent({
  name: "Step",
  props: {
    name: String,
    title: String,
    description: String,
  },
  setup(props) {
    const isActive = ref(false);
    const parent = inject<InstanceType<typeof Progress>>("progress");
    let index = 1;
    console.log("parent", parent);
    onBeforeMount(() => {
      if (parent && parent.progress) {
        index = Number(parent.progress.length) + 1;
        parent.progress.push({
          name: props.name,
          title: props.title,
          index,
        });
        console.log("index", index);
        isActive.value = index === parent.activeIndex;
      }
    });

    watch(
      () => parent?.activeIndex,
      () => {
        console.log("parent", parent?.activeIndex);
        isActive.value = index === parent?.activeIndex;
      }
    );

    return {
      isActive,
      index,
    };
  },
});
</script>

<style lang="scss" scoped></style>
