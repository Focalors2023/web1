<template>
    <div class="tab">
        <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>活动</span>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
    </div>
</template>
  

<style>
.card-header {
display: flex;
justify-content: space-between;
align-items: center;
}

.text {
font-size: 14px;
}

.item {
margin-bottom: 18px;
}

.box-card {
width: 480px;
}
</style>