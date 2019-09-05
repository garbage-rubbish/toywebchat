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
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      console.log(loginForm);
      let username = this.loginForm.username;
      let password = this.loginForm.password;
      this.$refs[loginForm].validate(function (valid) {
        if (valid) {
          axios.post('http://localhost:10001/auth/login', {
            username: username,
            password: password
          }).then(resp => {
            console.log(resp);
            alert(resp.data.code + '=========' + resp.data.message + '========' + resp.data.data);

          }).catch(err => console.log(err));
          console.log('valided');
          console.log('login...');
        } else {
          console.log('error valided');
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

