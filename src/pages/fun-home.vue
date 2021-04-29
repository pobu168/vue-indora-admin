<template>
  <div>
     <Menu mode="horizontal" :active-name="activeName">
      <div class="menu-right">
        <Dropdown @on-click="changeLang">
          <a href="javascript:void(0)">
            {{activeLang}}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <template v-for="(langItem, langIndex) in lang">
              <DropdownItem
                :selected="langItem.label===activeLang"
                :name="langItem.label"
                :key="langIndex"
              >{{langItem.label}}</DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown> 
      </div>
    </Menu>
    <p>
      <Button type="primary" @click="routeChange('/modelValidate')" style="margin:60px">表单验证</Button>
      <Button type="primary" @click="routeChange('/uploadImage')" style="margin:60px">图片上传测试</Button>
    </p>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      activeName: '',
      activeLang: '中文',
      langConfig: {
        'zh-CN': '中文',
        'en-US': 'English'
      },
      lang: [{ label: '中文', value: 'zh-CN'}, { label: 'English', value: 'en-US' }]
    }
  },
  methods: {
    changeLang(name) {
      this.activeLang = name;
    },
    setLocale(lang) {
      localStorage.setItem('lang', lang)
    },
    routeChange (path) {
      this.$router.push({path: path})
    }
  },
  components: {},
}
</script>

<style scoped lang="less">
</style>
