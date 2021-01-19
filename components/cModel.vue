<template>
  <div>
    <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form-model :model="form" ref="form" :label-col="labelCol" :wrapper-col="wrapperCol">
		<template v-for="(item,index) in formLable">
			<a-form-model-item ref="item.name" :label="item.label + '：' " :key="index">
				<a-input v-model="form[item.name]" />
			</a-form-model-item>
		</template>
      </a-form-model>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmLoading: false,
	  rules:[],
	  labelCol: { span: 6 },
	  wrapperCol: { span: 12 },
    };
  },
  props:{
	visible:{
		type:Boolean,
		default:()=>{
			return false
		},
	},
	form:{
		type:Object,
		default:()=>{
			return {}
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
	formLable:{
		type:Array,
		default:()=>{
			return []
		},
	},
	
  },
  methods: {
    handleOk(e) {
      this.confirmLoading = true;
      // setTimeout(() => {
		this.$emit('saveEdit',false)
        this.confirmLoading = false;
      // }, 2000);
    },
    handleCancel(e) {
      this.$emit('closeModel',false)
    },
  },
};
</script>
