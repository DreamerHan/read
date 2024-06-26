const Koa = require("koa");
const { PassThrough } = require("stream");

const app = new Koa()

app.use(async (ctx, next) => {
  if (ctx.path !== "/stream") {
    return await next();
  }

  ctx.request.socket.setTimeout(0);
  ctx.req.socket.setNoDelay(true);
  ctx.req.socket.setKeepAlive(true);

  ctx.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
  });

  const stream = new PassThrough();

  ctx.status = 200;
  ctx.body = stream;

  // 发送 connecttime 事件
  stream.write("event: connecttime\n");

  // 发送 connecttime 事件的 data 数据
  stream.write(`data: connecttime 事件数据的前一半\n`)
  stream.write(`data: connecttime 事件数据的后一半\n\n`)


  // 这种默认发送 message 事件
  stream.write("data: " + ('第一条message测试数据') + "\n\n");

  setInterval(() => {
    stream.write(`data: ${new Date()}\n\n`);
  }, 3000);
})
  .use(ctx => {
    ctx.status = 200;
    ctx.body = "ok";
  })
  .listen(8855, () => console.log("Listening 8855"));