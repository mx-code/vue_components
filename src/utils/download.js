/**
 * 下载文件 设置文件名
 *
 * @param {*} content
 * 文件流
 * @param {*} fileName
 * 文件名
 * @param {*} [opts={}]
 */
export default function download(content, fileName, opts = {}) {
  // response: result.data;
  if (!fileName || !content) {
    return false;
  }
  const reader = new FileReader();
  reader.readAsText(content, 'utf-8');
  reader.onload = function() {
    const blobData = Object.toJson(this.result);

    if (!blobData || String(blobData) === String(this.result)) {
      const { date } = opts,
        resultFileName = date
          ? fileName.replace(
            /(_\d{4}-\d{1,2}-\d{1,2})*(\.[a-z]+)$/,
            `_${ new Date().format(
              typeof date === 'string' ? date : undefined
            ) }$2` // $2 === /\.[a-z]+$/.exec(fileName)[0]
          )
          : fileName;

      // 下载文件 设置文件名
      if (navigator.msSaveOrOpenBlob) {
        //IE
        navigator.msSaveOrOpenBlob(content, resultFileName);
      } else {
        let url = URL.createObjectURL(content);
        let link = document.createElement('a');
        link.href = url;
        // link.target = '_blank';
        link.download = resultFileName; //设置文件名
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url); // 让链接失效
        document.body.removeChild(link);
      }
    }
  };
}
