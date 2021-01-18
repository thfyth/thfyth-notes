<template>
  <div>
	  <a-table
	    :columns="columns"
	    :row-key="record => record.login.uuid"
	    :data-source="data"
	    :pagination="pagination"
	    :loading="loading"
	    @change="handleTableChange"
	  >
	    <template slot="name" slot-scope="name"> {{ name.first }} {{ name.last }} </template>
	  </a-table>
  </div>
</template>
<script>
// import reqwest from 'reqwest';
const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    sorter: true,
    width: '20%',
    scopedSlots: { customRender: 'username' },
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: '20%',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },{
    title: '用户状态',
    dataIndex: 'status',
  },{
    title: '手机号码',
    dataIndex: 'mobile',
  },{
    title: '邮箱',
    dataIndex: 'email',
  },
  
  
  
  
];

export default {
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
    };
  },
  props:{
	columns:{
		type:Array,
		default:()=>{
			return []
		}
	}
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch(params = {}) {
      console.log('params:', params);
      // this.loading = true;
	  // uni.request({
	  // 	  url: 'https://randomuser.me/api',
	  // 	  data: {
	  // 	    results: 10,
	  // 	    ...params,
	  // 	  },
	  // 	  type: 'json',
	  // 	}).then(data => {
			// console.log(data);
	  // 	  const pagination = { ...this.pagination };
	  // 	  // Read total count from server
	  // 	  // pagination.total = data.totalCount;
	  // 	  pagination.total = 200;
	  // 	  this.loading = false;
	  // 	  this.data = data[1].results;
	  // 	  this.pagination = pagination;
	  // 	});
	 
      // reqwest({
      //   url: 'https://randomuser.me/api',
      //   method: 'get',
      //   data: {
      //     results: 10,
      //     ...params,
      //   },
      //   type: 'json',
      // }).then(data => {
      //   const pagination = { ...this.pagination };
      //   // Read total count from server
      //   // pagination.total = data.totalCount;
      //   pagination.total = 200;
      //   this.loading = false;
      //   this.data = data.results;
      //   this.pagination = pagination;
      // });
    },
  },
};
</script>