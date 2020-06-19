<template>
  <el-container class="layout">
    <el-header class="text-center">
      Demo
    </el-header>
    <el-container>
      <el-aside>
        <ul>
          <li v-for="item of menuKeyArr"
              :key="item"
          >
            <router-link replace
                         :to="{ params: { key: item } }"
            >{{
              item
            }}</router-link>
          </li>
        </ul>
      </el-aside>
      <el-main>
        <template v-if="menuObj[$route.params.key]">
          <component :is="menuObj[$route.params.key]"></component>
        </template>
        <template v-else>
          error
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
const meButton = () => import('./examples/button'),
  meLink = () => import('./examples/link'),
  meDropdown = () => import('./examples/dropdown'),
  meTable = () => import('./examples/table'),
  meRadio = () => import('./examples/radio'),
  meCheckbox = () => import('./examples/checkbox'),
  meInput = () => import('./examples/input'),
  mePagination = () => import('./examples/pagination'),
  meRate = () => import('./examples/rate'),
  meUpload = () => import('./examples/upload'),
  meDatePicker = () => import('./examples/datePicker'),
  meSlider = () => import('./examples/slider'),
  meSwitch = () => import('./examples/switch'),
  meCascader = () => import('./examples/cascader'),
  meSelect = () => import('./examples/select'),
  meInputValue = () => import('./examples/inputNumber'),
  meDialog = () => import('./examples/dialog'),
  meForm = () => import('./examples/form');


const menuObj = {
  button: 'meButton',
  link: 'meLink',
  dropdown: 'meDropdown',
  table: 'meTable',
  pagination: 'mePagination',
  radio: 'meRadio',
  checkbox: 'meCheckbox',
  input: 'meInput',
  rate: 'meRate',
  upload: 'meUpload',
  date: 'meDatePicker',
  slider: 'meSlider',
  switch: 'meSwitch',
  cascader: 'meCascader',
  select: 'meSelect',
  inputNumber: 'meInputValue',
  dialog: 'meDialog',
  form: 'meForm'
};

export default {
  components: {
    meButton,
    meLink,
    meDropdown,
    meTable,
    meRadio,
    meCheckbox,
    meInput,
    mePagination,
    meRate,
    meUpload,
    meDatePicker,
    meSlider,
    meSwitch,
    meCascader,
    meSelect,
    meInputValue,
    meDialog,
    meForm
  },
  data() {
    return {
      menuKeyArr: Object.keys(menuObj),
      menuObj
    };
  }
};
</script>
