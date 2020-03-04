<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form">
      <a-form-item
        label="标题"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'title',
            {rules: [{ required: true, message: '请输入标题' }]}
          ]"
          name="name"
          placeholder="" />
      </a-form-item>

      <a-form-item
        label="内容"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'content',
            {rules: [{ required: true, message: '请输入内容' }]}
          ]"
          name="name"
          placeholder="" />
      </a-form-item>

      <a-form-item
        label="类型"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'type',
            {rules: [{ required: true, message: '请输入类型' }]}
          ]"
          name="name"
          placeholder="" />
      </a-form-item>


      <a-form-item
        label="描述"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder=""
          v-decorator="[
            'description',
            {rules: [{ required: true, message: '请输入描述' }]}
          ]" />
      </a-form-item>

      <a-form-item
        :wrapperCol="{ span: 24 }"
        style="text-align: center"
      >
        <a-button htmlType="submit" type="primary">提交</a-button>
        <a-button style="margin-left: 8px">保存</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
  import NoteService from "@/api/note"
export default {
  name: 'BaseForm',
  data () {
    return {
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,

      // form
      form: this.$form.createForm(this)

    }
  },
  methods: {

    // addNote

    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)

          let random = String(parseInt(Math.random()*100000000))

          NoteService.addNote(
            {
              "noteId":random,
              "noteType":values.type,
              "noteTitle":values.title,
              "noteDescription":values.description,
              "noteContent":values.content,
              "userId":"905019230"
            }
          ).then(res=>{
            console.log(res)
          })
        }
      })
    }
  }
}
</script>
