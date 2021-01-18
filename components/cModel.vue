<template>
  <div>
    <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      confirmLoading: false,
    };
  },
  props:{
	visible:{
		type:Boolean,
		default:()=>{
			return false
		},
	},
	title:{
		type:String,
		default:()=>{
			return '标题'
		},
	},
	//请求数据的
	requertUrl:{
		type:String,
		default:()=>{
			return ''
		},
	},
  },
  methods: {
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
		this.$emit('closeModel',false)
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.$emit('closeModel',false)
    },
  },
};
</script>
