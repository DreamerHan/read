const http = require('http')

http.createServer(function (req, res) {
  var fileName = "." + req.url;

  if (fileName === "./stream") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": '*',
    });
    // 服务端开或报错后 10s 重试一次
    res.write("retry: 10000\n");

    // 发送 connecttime 事件
    res.write("event: connecttime\n");

    // 发送 connecttime 事件的 data 数据
    res.write(`data: connecttime 事件数据的前一半\n`)
    res.write(`data: connecttime 事件数据的后一半\n\n`)

    // 这种默认发送 message 事件
    res.write("data: " + ('第一条message测试数据') + "\n\n");

    // 注释数据
    res.write(`: 测试数据发送完毕\n\n`)

    const interval = setInterval(function () {
      res.write("data: " + (new Date()) + "\n\n");
    }, 3000);

    req.connection.addListener("close", function () {
      console.log('前端断开链接了')
      clearInterval(interval);
    }, false);
  }
}).listen(8844, "127.0.0.1");