<template>
  <div>
    <h1>Default</h1>
    <me-radio v-model="value" :data="arrays" labelKey="name"> </me-radio>
    <h1>Button</h1>
    <me-radio v-model="value" :data="arrays" type="button" labelKey="name">
    </me-radio>
    <h1>Object</h1>
    <me-radio
      v-model="value"
      :data="{
        label: 'aaa',
        text: 111
      }"
    >
    </me-radio>
  </div>
</template>

<script>
import meRadio from '@/components/form/field/radio';

export default {
  components: {
    meRadio
  },
  data() {
    return {
      value: '',
      arrays: [
        {
          name: 'abc'
        },
        {
          name: 'eee'
        }
      ]
    };
  },
  methods: {
    onChange() {}
  }
};
</script>
