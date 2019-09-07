<template>
  <div>
    <h1>uppercase</h1>
    <input v-model="data" type="text" />
    <input type="button" @click="sendData" value="send" />
    <textarea v-model="chatRecord"></textarea>
  </div>
</template>
<script>
import protobuf from 'protobufjs'
export default {
  data () {


    // var loginMsg = protoRoot.lookup('LoginMsg');
    // const req = loginMsg.create({
    //   reqId: "1232",
    //   username: "hkd",
    //   password: "haha",
    //   timestamp: "123123123"
    // })
    // var bytes = protobuf.encoder(req)
    // console.log(bytes);

    return {
      msg: '12123',
      chatRecord: [],
      data: "default",
      websock: null,
    }
  },
  created () {
    this.initWebSocket();
  },
  methods: {
    sendData () {
      this.websocketsend(this.data);
      this.data = null;
    },
    initWebSocket () {
      //初始化weosocket

      const wsuri = "ws://127.0.0.1:8081/websocket";
      this.websock = new WebSocket(wsuri);
      //   this.websock.binaryType = "ArrayBuffer";
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen () {

      this.websocketsend(this.data);
      //连接建立之后执行send方法发送数据
      Notification.requestPermission().then(function (status) {
        if (Notification.permission !== status) {
          console.log("sss" + status);
          Notification.permission = status;
        }
      });
    },
    websocketonerror () {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage (e) {

      //数据接收

      protobuf.load("/some.proto", function (err, root) {
        if (err)
          throw err;
        //   Obtain a message type
        var AwesomeMessage = root.lookupType("somepackage.SomeMessage");
        var reader = new FileReader();
        reader.readAsArrayBuffer(e.data);
        reader.onload = function () {
          var buf = new Uint8Array(reader.result);
          var message = AwesomeMessage.decode(buf);
          new Notification("聊天", {
            title: "聊天",
            icon: "http://localhost:8080/assert/download.jpg",
            body: message.testField
          });
        }

      })

    },
    websocketsend (data) {
      //   this.websock.binaryType = "arraybuffer";
      var socket = this.websock;
      protobuf.load("/some.proto", function (err, root) {
        if (err)
          throw err;

        //   Obtain a message type
        var AwesomeMessage = root.lookupType("somepackage.SomeMessage");

        // Exemplary payload
        var payload = { testField: data };

        // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        var errMsg = AwesomeMessage.verify(payload);
        if (errMsg)
          throw Error(errMsg);

        // Create a new message
        var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

        // Encode a message to an Uint8Array (browser) or Buffer (node)
        var buffer = AwesomeMessage.encode(message).finish();
        console.log('buffer type' + typeof buffer);
        console.log(buffer);

        var ma = AwesomeMessage.decode(buffer);
        console.log(ma);


        // ... do something with buffer
        socket.send(buffer);

      });
      //数据发送
    },
    websocketclose (e) {
      //关闭
      console.log("断开连接", e);
    }
  },
}
</script>
<style>
</style>