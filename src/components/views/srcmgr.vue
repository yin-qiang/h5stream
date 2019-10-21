<template>
  <div>
    <!-- 内容 -->
    <div class="row">
      <!-- 表格 -->
      <div class="col-sm-12">
        <!-- 模糊查询搜查 -->
        <div class="col-sm-2">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
        </div>
        <div style="margin-bottom: 10px;">
          <!-- 添加按钮 -->
          <el-button icon="el-icon-plus" @click="dialogVisible = true">添加
          </el-button>
        </div>
        <!-- 有按钮 -->
        <el-table
          :data="tableData1.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%;">
          <el-table-column
            prop="name"
            label="名称">
            <template slot-scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="token"
            label="token">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.token }}</span>
            </template>
          </el-table-column>
          <el-table-column
            width=310px>
            <template slot-scope="scope">
              <el-button size="mini" style="font-size: 18px;" icon="el-icon-caret-right" circle data-toggle="modal"
                         data-target="#myModal"
                         @click="liveview(scope.$index, scope.row)"></el-button>
              <el-button
                size="mini"
                type="info" @click="delSrc(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
          style="text-align: center;"
          layout="prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :total="total">
        </el-pagination>
      </div>
    </div>

    <!-- 添加模态框 -->
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="名称" prop="name">
          <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="user" prop="user">
          <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="rtspURL" prop="rtspURL">
          <el-input type="text" v-model="ruleForm.rtspURL" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 预览模态框 -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="Close()">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              预览
            </h4>
          </div>
          <div class="modal-body text-center">
            <div name='flex' class="videoColor" v-for="r in rows" :key="r">
              <div calss="videoflexitem" style="flex:1; border:1px solid black;" name="flex" v-for="c in cols" :key="c">
                <v-liveplayer v-bind:id="'h'+r+c" :h5id="'h'+r+c" :h5videoid="'hvideo'+r+c"></v-liveplayer>
              </div>
            </div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>
  </div>
</template>
<script>
  import '../../assets/material/js/custom.min.js'
  import '../../assets/adapter.js'
  import '../../assets/h5splayer.js'
  import Liveplayer from '../../components/widgets/liveplayer'

  export default {
    name: "srcmgr",
    components: {
      'v-liveplayer': Liveplayer
    },
    data() {
      var validator = (rule, value, callback) => {
        if (!value || value === '') {
          callback(new Error('不能为空'));
        } else {
          callback();
        }
      };
      return {
        filterText: '',
        dialogVisible: false,
        rows: 1,
        cols: 1,
        //分页
        currentPage: 1, // 当前页码
        total: 0, // 总条数
        pageSize: 10,//一页数量
        tableData1: [],
        data: [],
        //表单
        ruleForm: {
          name: '',
          token: this.$uuid.v1(),
          user: 'admin',
          password: 'Gt123456',
          rtspURL: 'rtsp://192.168.2.3:554/h265/ch1/main/av_stream'
        },
        rules: {
          name: [
            {validator: validator, trigger: 'blur'}
          ],
          user: [
            {validator: validator, trigger: 'blur'}
          ],
          password: [
            {validator: validator, trigger: 'blur'}
          ],
          rtspURL: [
            {validator: validator, trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.loadSrc();
    },
    methods: {
      // 加载资源
      loadSrc() {
        let _this = this;
        _this.tableDatak();
        var root = process.env.API_ROOT;
        var wsroot = process.env.WS_HOST_ROOT;
        if (root == undefined) {
          root = window.location.protocol + '//' + window.location.host + window.location.pathname;
        }
        if (wsroot == undefined) {
          wsroot = window.location.host;
        }
        //url
        var url = root + "/api/v1/GetSrcWithoutDevice?session=" + this.$store.state.token;
        console.log(url);
        this.$http.get(url).then(result => {
            if (result.status == 200) {
              var data = result.data;
              for (var i = 0; i < data.src.length; i++) {
                var item = data.src[i];
                var token = item['strToken'];
                var strName = item['strName'];
                _this.tableData1.push({
                  name: strName,
                  token: token
                });
              }
              _this.data = _this.tableData1;
              _this.total = _this.tableData1.length;
            }
          }
        )
      },
      // 添加资源
      addSrc(data) {
        let _this = this;
        var root = process.env.API_ROOT;
        var wsroot = process.env.WS_HOST_ROOT;
        if (root == undefined) {
          root = window.location.protocol + '//' + window.location.host + window.location.pathname;
        }
        if (wsroot == undefined) {
          wsroot = window.location.host;
        }
        // let name = 'addTest';
        // let token = 'addTest';
        // let rtspURL = 'rtsp://192.168.2.3:554/h265/ch1/main/av_stream';
        let url = root + "/api/v1/AddSrcRTSP?name=" + data.name + "&token=" + data.token + "&user=" + data.user + "&password=" + data.password + "&url=" + data.rtspURL + "&session=" + this.$store.state.token;
        this.$http.get(url).then(result => {
          if (result.status == 200) {
            _this.$Notice.info({
              title: name + " AddSrcRTSP successfully "
            })
            _this.resetForm('ruleForm')
            _this.dialogVisible = false;
            _this.loadSrc();
          }
        }).catch(error => {
          console.log('GetSrc failed', error);
        });
      },
      // 删除资源
      delSrc(index, row) {
        let _this = this;
        _this.$confirm('确认删除？')
          .then(_ => {
            var root = process.env.API_ROOT;
            var wsroot = process.env.WS_HOST_ROOT;
            if (root == undefined) {
              root = window.location.protocol + '//' + window.location.host + window.location.pathname;
            }
            if (wsroot == undefined) {
              wsroot = window.location.host;
            }
            let url = root + "/api/v1/delSrc?token=" + row.token + "&session=" + this.$store.state.token;
            this.$http.get(url).then(result => {
              if (result.status == 200) {
                _this.$Notice.info({
                  title: row.token + " DeleteSrc successfully "
                })
                _this.loadSrc();
              }
            })
          })
          .catch(_ => {
          });
      },
      liveview(index, row) {
        let _this = this;
        _this.$root.bus.$emit('liveplay', row.token, 'main', 'h11');
      },
      submitForm(formName) {
        let _this = this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.addSrc(_this.ruleForm);
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //关闭
      Close() {
        if (this.v1 != undefined) {
          this.v1.disconnect();
          delete this.v1;
          this.v1 = undefined;
        }
      },
      handleClose(done) {
        done();
      },
      //清空表格
      tableDatak() {
        this.tableData1 = [];
        this.total = 0;
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.currentPage = 1;
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      }
    },
    //模糊查询
    watch: {
      filterText(val) {
        let _this = this;
        let tmpArr = [];
        for (let i = 0; i < _this.data.length; i++) {
          if (_this.data[i].name.indexOf(val) != -1) {
            tmpArr.push(_this.data[i]);
          }
        }
        _this.tableData1 = tmpArr;
        _this.total = _this.tableData1.length;
      }
    },
  }
</script>
<style scoped>
  a {
    color: #FFFFFF;
  }

  .videoColor {
    background-color: rgb(73, 74, 75) !important;
  }
</style>
