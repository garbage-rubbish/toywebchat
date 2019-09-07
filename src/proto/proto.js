/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  java_package: "com.hkd.common.proto",
  java_outer_classname: "ChatProtocol"
})
.addJSON({
  ChatProto: {
    oneofs: {
      body: {
        oneof: [
          "loginMsg",
          "hbMsg",
          "chatMsg",
          "fileMsg"
        ]
      }
    },
    fields: {
      type: {
        type: "MsType",
        id: 1
      },
      loginMsg: {
        type: "LoginMsg",
        id: 2
      },
      hbMsg: {
        type: "HeartbeatMsg",
        id: 3
      },
      chatMsg: {
        type: "ChatMsg",
        id: 4
      },
      fileMsg: {
        type: "FileMsg",
        id: 5
      }
    },
    nested: {
      MsType: {
        values: {
          CAHT: 0,
          FILE: 1,
          HEARTBEATA: 2,
          LOGIN: 3
        }
      }
    }
  },
  LoginMsg: {
    fields: {
      reqId: {
        type: "string",
        id: 4
      },
      username: {
        type: "string",
        id: 1
      },
      password: {
        type: "string",
        id: 2
      },
      timestamp: {
        type: "string",
        id: 3
      }
    }
  },
  HeartbeatMsg: {
    fields: {
      reqId: {
        type: "string",
        id: 4
      },
      timestamp: {
        type: "string",
        id: 3
      },
      body: {
        type: "string",
        id: 1
      }
    }
  },
  HeartbeanRespMsg: {
    fields: {
      reqId: {
        type: "string",
        id: 1
      }
    }
  },
  ChatMsg: {
    fields: {
      reqId: {
        type: "int32",
        id: 2
      },
      timestamp: {
        type: "string",
        id: 3
      },
      body: {
        type: "string",
        id: 1
      },
      from: {
        type: "string",
        id: 4
      },
      to: {
        type: "string",
        id: 5
      }
    }
  },
  FileMsg: {
    fields: {
      reqId: {
        type: "int32",
        id: 2
      },
      timestamp: {
        type: "string",
        id: 3
      },
      body: {
        type: "bytes",
        id: 1
      },
      filename: {
        type: "string",
        id: 4
      },
      from: {
        type: "string",
        id: 5
      },
      to: {
        type: "string",
        id: 6
      }
    }
  }
});

module.exports = $root;
