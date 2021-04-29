<template>
  <div class=" ">
    <!-- <input accept="image/*" id="image_upload" type="file" /> -->


    <Upload
      :before-upload="handleUpload"
      action="//jsonplaceholder.typicode.com/posts/">
      <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
    </Upload>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      file: null
    }
  },
  mounted () {},
  methods: {
    handleUpload (file) {
      console.log(file.name)
      var FR = new FileReader(); 
      FR.onload = function (event) { 
        var imgData = event.target.result.split(',')
        // if (imgData.indexOf(":image/jpeg;") != -1) { 
        // imgData = imgData.replace("data:image/jpeg;base64,", ""); 
        // } else { 
        // imgData = imgData.replace("data:image/png;base64,", ""); 
        // } 
        console.info("二进制图片流："+imgData[1]);
      }; 
      FR.readAsDataURL(file); 
      return false;
    }
  }
}
</script>

<style scoped lang="less">
</style>
