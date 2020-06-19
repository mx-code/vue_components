import { Loading } from 'element-ui';

const ingArray = new Map();
let loading = null,
  timer = null;

function close() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    loading && loading.close();
    loading = null;
  }, 100);
}

export function append(id) {
  clearTimeout(timer);
  ingArray.set(id, 1);
  if (!loading) {
    loading = Loading.service({
      fullscreen: true,
      background: 'rgba(0,0,0,0.4)'
    });
  }
}

export function remove(id) {
  if (id) {
    ingArray.delete(id);
    ingArray.size === 0 && close();
  } else {
    close();
  }
}

export function clear() {
  ingArray.clear();
  close();
}
