<template>
  <div class="pagination">
    <div class="step prev">
      <Button type="secondary" :disabled="true">
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
      <Button type="transparent" class="item" :disabled="true">1</Button>
      <Button type="transparent" class="item" :disabled="true">2</Button>
      <Button type="transparent" class="item" :disabled="true">3</Button>
      <Button type="transparent" class="item" :disabled="true">...</Button>
      <Button type="transparent" class="item" :disabled="true">8</Button>
      <Button type="transparent" class="item" :disabled="true">9</Button>
      <Button type="transparent" class="item" :disabled="true">10</Button>
    </div>
    <div class="step next">
      <Button type="secondary" :disabled="true">
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
import { defineComponent } from "vue";
import Button from "../Button/Button.vue";
import Text from "../Text/Text.vue";

export default defineComponent({
  name: "Pagination",
  components: {
    Button,
    Text,
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
  }

  .items {
    display: flex;
    flex-direction: row;

    .item {
      &.active {
        background: $gray-50;
      }
    }
  }
}
</style>
