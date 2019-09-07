<template>
  <div>
    <el-card class="login-form-layout">
      <el-form ref="loginForm" :rules="rules" status-icon :model="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入用密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">登陆</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import axios from 'axios'
import { Message, Loading } from 'element-ui'
export default {
  name: 'login',
  data () {
    return {
      fullscreenLoading: false,
      loginForm: {
        username: '',
        password: '',

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      console.log(loginForm);


      var that = this;

      let username = this.loginForm.username;
      let password = this.loginForm.password;
      this.fullscreenLoading = true;
      this.$refs[loginForm].validate(function (valid) {
        if (valid) {
          const loading = Loading.service({ fullscreen: true })
          axios.post('http://localhost:10001/auth/login', {
            username: username,
            password: password
          }).then(resp => {
            loading.close()
            if (resp.data.code != 0) {
              Message.error(resp.data.message);
            } else {
              that.$router.push({ path: '/main' })
              Message.success('登陆成功');
            }
          }).catch(err => console.log(err));
        }
      })

    },
    resetForm (loginForm) {

      console.log(this.$refs[loginForm]);

      this.$refs[loginForm].resetFields();
    }
  }
}
</script>
<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
</style>>

