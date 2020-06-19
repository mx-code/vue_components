import vmDownload from '@/utils/download';

const getProxy = (fn) => ({
  get() {
    return fn;
  },
  set() {}
});

function subCallback(fnOpts, params) {
  // 供子组件使用 isSub必须声明
  const self = this,
    subName = fnOpts.sub,
    dName = fnOpts.default,
    arr = self.isSub ? [ 'callback', subName || dName, params ] : [ dName, params ];
  self.$emit(...arr);
}

function updateValue(value) {
  const self = this,
    { disabled, readonly } = self;
  if (!disabled && !readonly) {
    self.$emit('update:value', value);
    self.$emit('input', value);
  }
}

async function download({ url, fileName, date } = {}) {
  // url: s3访问地址
  // fileName  原文件名
  // date 是否在文件名上加上日期 filename_2020-05-05.txt
  if (!url || !fileName) {
    return false;
  }
  const { data } = await this.$store.dispatch('common/download', {
    path: url
  });
  vmDownload(data, fileName, { date });
}

export default Object.assign({
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $subCallback: getProxy(subCallback),
      $updateValue: getProxy(updateValue),
      $download: getProxy(download)
    });
  }
});
