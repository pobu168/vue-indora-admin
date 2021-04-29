<template>
  <Modal
    v-model="modalConfig.showModal"
    :title="modalConfig.modalTitle">
      <ValidationObserver v-slot="{ invalid }" ref="form">
        <Form class="class-form" :model="modalConfig.addRow" :label-width="modalConfig.labelWidth">
          <template v-for="(config, configIndex) in modalConfig.config">
            <div :key="configIndex">
              <FormItem v-if="config.type === 'Input'" :label="config.label">
                <ValidationProvider mode="aggressive" :rules="config.validateRules" :name="config.value" v-slot="{ errors }">
                  <Input 
                    v-model="modalConfig.addRow[config.value]" 
                    type="text"
                    style="width:96%"
                    :placeholder="config.placeholder" />
                  <Icon size='12' style="margin-left:2px;color:red" type="ios-medical" />
                  <span style="color:red">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                  <input v-model="value" type="text" placeholder="type something" />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </FormItem>
            </div>
          </template>
        </Form>
      <div slot="footer">
        <Button type="primary" :disabled="invalid">保存</Button>
        <Button type="primary" @click="onSubmit">出错处理</Button>
      </div>
      </ValidationObserver>

  </Modal>
</template>
<script>
  export default {
    data () {
      return {
        modal1: false,
        value: ''
      }
    },
    props: ['modalConfig'],
    watch: {
      'modalConfig.showModal': function (val) {
        if (!val) {
          this.resetValidate()
        }
      },
    },
    methods: {
      resetValidate () {
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      },
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.modalConfig.showModal = false
        this.$Message.info('Clicked cancel');
      }, 
      onSubmit () {
        this.$refs.form.validate().then(success => {
          // if (!success) {
          //   return;
          // }
          console.log(success)
          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            this.$refs.form.reset();
          });
        });
      }
    }
  }
</script>
<style scoped>
  .class-form .ivu-form-item {
    margin-bottom: 12px;
  }
</style>
