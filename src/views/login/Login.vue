<template>
 <div class="box">
    <div class="login">
        <el-input class="userName" v-model="userName" tyle="width: 240px" placeholder="请输入用户名" />
        <el-input
            class="password"
            v-model="passWord"
            style="width: 240px"
            type="password"
            placeholder="请输入密码"
            show-password
        />
        <el-button class="log" type="primary" @click="onSubmit(userName)">登录</el-button>
    </div>
 </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const userName = ref('')
const passWord = ref('')

const route = useRoute()
const router = useRouter()


const onSubmit = () => {
  const token = userName.value + passWord.value
//   console.log('token',token)
  localStorage.setItem('token', token)
  const path = decodeURIComponent((route.query.redirect as string) || '/')
  router.push(path)
}


</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right,#63b6f5,#4278d4) no-repeat;
    .login{
        position: absolute;
        top:30%;
        right: 15%;
        width: 260px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: rgb(239, 239, 239);
        padding: 10px;
        border-radius: 8px;
    .password{
        height: 30px;
    }
    .userName{
        height: 30px;
    }
    .log{
        height: 30px;
        width: 100%;
    }
}
}

</style>
