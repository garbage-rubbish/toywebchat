<template>
  <div>
    <el-card class="regeister-form-layout">
      <el-form ref="regeisterForm" :model="regeisterForm" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="regeisterForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="regeisterForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            type="password"
            v-model="regeisterForm.confirmPassword"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="regeister('regeisterForm')"
            >注册</el-button
          >
          <el-button @click="resetForm('regeisterForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    regeister (regeisterForm) {
      this.$refs[regeisterForm].validate((valid) => {
        if (valid) {
          console.log('regeister...')
          console.log('regeister!');
        } else {
          console.log('error regeister');
        }
      })
    },
    resetForm (regeisterForm) {
      console.log('resetFrom');
      this.$refs[regeisterForm].resetFields();
    }
  },
  data: function () {

    var validaconfirmPasswordValidatetePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.regeisterForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      regeisterForm: {
        username: "",
        password: "",
        confirmPassword: ""
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, validator: validaconfirmPasswordValidatetePass2, trigger: 'blur' }
        ]
      }
    }
  }
}
</script>
<style scoped>
.regeister-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}
</style>