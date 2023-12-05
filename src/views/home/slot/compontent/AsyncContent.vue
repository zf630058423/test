<template>
  <div>
    <slot name="loading" v-if="isLoading"></slot>
    <slot name="error" v-else-if="error" :error="error">{{error}}</slot>
    <slot name="default" v-else :content="content">{{content}}</slot>
  </div>
</template>

<script>
export default {
  props:{
    contentPromise: Promise,
  },
  data(){
    return {
      isLoading: true,
      content: null,
      error: null,
    }
  },
  async created(){
    try{
      this.content = await this.contentPromise;
      this.error = null;
    }catch(err){
      this.content = null;
      this.error = {originError: err, message: err.message}
    }finally{
      this.isLoading = false;
    }
  },
}
</script>

<style>

</style>