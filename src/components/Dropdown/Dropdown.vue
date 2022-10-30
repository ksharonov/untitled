<template>
  <div class="dropdown">
    <div class="button" @click="onActive">
      <slot name="button"></slot>
    </div>
    <div class="content" v-if="active && enable">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="items">
        <template v-for="group of items" :key="group.title">
          <div class="group">
            <div class="items">
              <template v-for="item of group.items" :key="item.title">
                <div class="item" @click="onSelect(item)">
                  <div class="item-content">
                    <div class="icon" v-if="item.icon">
                      {{ item.icon }}
                    </div>
                    <div class="title">
                      <Text type="text" size="sm">{{ item.title }}</Text>
                    </div>
                    <div class="description">
                      <Text type="text" size="xs">{{ item.description }}</Text>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
      <div class="footer" v-if="slots.footer && slots.footer().length">
        <div class="footer-content">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import Text from "../Text/Text.vue";

export interface IDropdownItem {
  icon?: string;
  link?: string;
  title: string;
  description: string;
}

export interface IDropdownGroup {
  title: string;
  items: IDropdownItem[];
}

export default defineComponent({
  name: "Dropdown",
  components: {
    Text,
  },
  props: {
    enable: {
      type: Boolean,
      default: true,
    },
    mode: String as PropType<any>,
    items: Object as PropType<IDropdownGroup[]>,
  },
  emits: ["onSelect"],
  setup(props, { slots, emit }) {
    const active = ref(false);

    function onActive() {
      if (!props.enable) {
        return;
      }
      active.value = !active.value;
    }

    function onSelect(item: IDropdownItem) {
      emit("onSelect", item);
    }

    return {
      slots,
      active,
      onActive,
      onSelect,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

.dropdown {
  position: relative;
  width: 100%;
  .content {
    min-height: 50px;
    width: 100%;
    min-width: 300px;
    background: white;
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 10000;
    overflow: hidden;

    border: 1px solid $gray-200;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);

    border-radius: 8px;

    .group + .group {
      border-top: 1px solid $gray-200;
    }

    .items {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        padding: 2px 6px;

        &:hover {
          background: $gray-50;
        }

        .item-content {
          display: flex;
          flex-direction: row;
          padding: 10px;

          .icon {
            flex-grow: 1;
          }

          .title {
            color: $gray-700;
            flex-grow: 10;
          }

          .description {
            color: $gray-500;
          }
        }
      }
    }
  }

  .footer {
    padding: 2px 6px;
    border-top: 1px solid $gray-200;
    cursor: pointer;

    &:hover {
      background: $gray-50;
    }

    .footer-content {
      display: flex;
      flex-direction: row;
      padding: 10px;

      color: $gray-700;
    }
  }
}
</style>
