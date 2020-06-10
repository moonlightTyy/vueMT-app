<template>
  <div class="m-header">
      <el-row 
        :gutter="0" 
        class="m-header">
        <el-col :span="6">
            <geo/>
        </el-col>
        <el-col :span="5">
            <user/>
        </el-col>
        <el-col :span="13">
            <navbar/>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from './geo'
import User from './user'
import Navbar from './nav'
export default {
    components:{
        Geo,
        User,
        Navbar
    }
}
</script>
<style lang="scss">
</style>