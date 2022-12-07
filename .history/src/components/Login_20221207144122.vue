<template>

<div id="login_form">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
      <el-input v-model.number="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-row :span="24" class="identify">
            <el-col :span="13">
              <el-input v-model="ruleForm.code" auto-complete="off" placeholder="请输入验证码" size=""
                        ></el-input>
            </el-col>
            <el-col :span="11">
              <div class="login-code" width="100%" @click="refreshCode">
                <!--验证码组件-->
                <identify :identifyCode="identifyCode"></identify>
              </div>
            </el-col>
          </el-row>

    <el-form-item class="buttons">
      <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form></div>
</template>

  <script>
  import Identify from './identify'

    export default {
      components: { Identify },	//写在export default{}中与data同级表示使用组件

      data() {

        var validateUsername = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        return {
          ruleForm: {
            username: '',
            pass: '',
            code:''
          },
          identifyCodes: '1234567890abcdefjhijklinopqrsduvwxyz',//随机串内容
          identifyCode: '',
          rules: {
            username: [
              { validator: validateUsername, trigger: 'blur' }
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
          }
        };
      },
      mounted () {
  // 初始化验证码
  this.identifyCode = ''
  this.makeCode(this.identifyCodes, 4)
 },
      methods: {
        refreshCode () {
   this.identifyCode = ''
   this.makeCode(this.identifyCodes, 4)
  },
  makeCode (o, l) {
   for (let i = 0; i < l; i++) {
    this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
   }
  },
  randomNum (min, max) {
   return Math.floor(Math.random() * (max - min) + min)
  },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {

            if (this.formLogin.code.toLowerCase() !== this.identifyCode.toLowerCase()) {
    this.$message.error('请填写正确验证码')
    this.refreshCode()
    return
}
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
  </script>
  <style>
.buttons{
  text-align: center;
}
.demo-ruleForm{
  margin-left: 35%;
  margin-right: 40%;
  margin-top: 10%;
}
.identify{
  margin-left: 35%;
}
</style>