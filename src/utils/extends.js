Object.defineProperties(Array.prototype, {
  last: {
    // 获取数组最后一项
    get() {
      const self = this,
        len = self.length;

      return len ? self[len - 1] : undefined;
    }
  }
});

Object.defineProperties(Object.prototype, {
  toJson: {
    // 对象深复制 函数会丢失
    // 字符串转成对象
    get() {
      return function (args) {
        const params = args || this;
        if (typeof params === 'string' || params instanceof String) {
          let obj = null;
          try {
            obj = JSON.parse(params.toString());
          } catch (err) {
            err;
          }
          return obj;
        }
        return params && JSON.parse(JSON.stringify(params));
      };
    }
  },
  toCopy: {
    // 浅复制
    get() {
      return function (...args) {
        return Object.assign({}, this, ...args);
      };
    }
  },
  cull: {
    // 剔除多余字段   返回新对象
    get() {
      return function (delArrays = [], vm) {
        const vim = vm || this;
        if (!Array.isArray(delArrays)) {
          return vim;
        }
        const obj = vim.toJson();
        delArrays.forEach((item) => delete obj[item]);
        return obj;
      };
    }
  },
  cover: {
    // 收集所属字段 多余丢弃 返回新对象
    get() {
      return function (arrays, vm) {
        const vim = vm || this;
        if (!Array.isArray(arrays)) {
          return vim;
        }
        const obj = vim.toJson(),
          resultObj = {};
        arrays.forEach((item) => (resultObj[item] = obj[item]));
        return resultObj;
      };
    }
  },
  isSuccess: {
    // 判断接口是否返回20* 20*代表成功
    get() {
      return function (str) {
        return /^20\d{1}$/.test(str || this);
      };
    }
  }
});

Object.defineProperties(Date.prototype, {
  format: {
    get() {
      return function (format = 'yyyy-MM-dd') {
        let date = this;
        if (date.toString() === 'Invalid Date' || typeof format !== 'string') {
          return false;
        }
        let year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate(),
          hour = date.getHours(),
          minutes = date.getMinutes(),
          second = date.getSeconds();

        return format
          .replace(/y+/, year)
          .replace(/M+/, month < 10 ? '0' + month : month)
          .replace(/d+/, day < 10 ? '0' + day : day)
          .replace(/h+/, hour < 10 ? '0' + hour : hour)
          .replace(/m+/, minutes < 10 ? '0' + minutes : minutes)
          .replace(/s+/, second < 10 ? '0' + second : second);
      };
    }
  }
});
