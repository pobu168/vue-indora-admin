<template>
  <div>
    <p>
      <Button type="primary" @click="formValidate" style="margin:60px">表单校验</Button>
    </p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  methods: {
    formValidate () {
      this.$router.push({path: '/modelValidate'})
    }
  },
  components: {},
}
</script>

<style scoped lang="less">
</style>
