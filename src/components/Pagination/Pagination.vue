<template>
  <div class="pagination">
    <div class="step prev">
      <Button
        type="transparent"
        class="action"
        @click="onSelect(currentPage - 1)"
      >
        <div class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8337 10.0001H4.16699M4.16699 10.0001L10.0003 15.8334M4.16699 10.0001L10.0003 4.16675"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Text class="title">Назад</Text>
      </Button>
    </div>
    <div class="items">
      <template v-for="item of items" v-bind:key="item">
        <Button
          type="transparent"
          class="item"
          @click="typeof item === 'number' ? onSelect(item) : null"
          :class="{ active: currentPage === item }"
          :disabled="currentPage === item"
          >{{ item }}</Button
        >
      </template>
    </div>
    <div class="step next">
      <Button
        type="transparent"
        class="action"
        @click="onSelect(currentPage + 1)"
      >
        <Text class="title">Далее</Text>
        <div class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16699 10.0001H15.8337M15.8337 10.0001L10.0003 4.16675M15.8337 10.0001L10.0003 15.8334"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import Button from "../Button/Button.vue";
import Text from "../Text/Text.vue";

export default defineComponent({
  name: "Pagination",
  components: {
    Button,
    Text,
  },
  emits: ["onSelectPage"],
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    lastPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const items = ref<(string | number)[]>([]);

    onMounted(() => {
      items.value = pagination(props.currentPage, props.lastPage);
    });

    watch(
      () => props.currentPage,
      () => {
        items.value = pagination(props.currentPage, props.lastPage);
      }
    );

    watch(
      () => props.lastPage,
      () => {
        items.value = pagination(props.currentPage, props.lastPage);
      }
    );

    function onSelect(page: number): void {
      if (page > 0 && page <= props.lastPage) {
        emit("onSelectPage", page);
      }
    }

    function pagination(current: number, last: number): (string | number)[] {
      const delta = 2,
        left: number = current - delta,
        right: number = current + delta + 1,
        range: number[] = [],
        rangeWithDots: (number | string)[] = [];

      let l = 0;

      for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || (i >= left && i < right)) {
          range.push(i);
        }
      }

      for (const i of range) {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push("...");
          }
        }
        rangeWithDots.push(i);
        l = i;
      }

      return rangeWithDots;
    }

    return {
      onSelect,
      items,
    };
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/colors";
@import "src/scss/adaptive";

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .step {
    display: flex;
    flex-direction: row;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .action {
      background: #ffffff;
      &:hover {
        background: $gray-50;
      }
    }
  }

  .items {
    display: flex;
    flex-direction: row;

    .item {
      &.active {
        background: #ffffff;
      }

      &:hover {
        background: $gray-50 !important;
      }
    }
  }
}
</style>
