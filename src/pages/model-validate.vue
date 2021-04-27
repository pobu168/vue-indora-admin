<template>
  <div class=" ">
    <Button type="primary" style="margin:60px" @click="showForm">显示表单</Button>
    <ModelComponent :modalConfig="modalConfig"></ModelComponent>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      modalConfig: {
        showModal: false,
        modalTitle: '标题',
        isAdd: true,
        labelWidth: 80,
        config: [
          {
            label: '名称',
            value: 'name',
            placeholder: '必填',
            validateRules: 'required|between:2,6',
            disabled: false,
            type: 'Input'
          },
          {
            label: '年龄',
            value: 'age',
            placeholder: '必填',
            validateRules: '',
            disabled: false,
            type: 'Input'
          }
        ],
        addRow: {
          name: '',
          age: ''
        },
        selectOps: {}
      }
    }
  },
  methods: {
    showForm () {
      this.modalConfig.showModal = true
    },
  },
  components: {},
}
</script>

<style scoped lang="less">
</style>
