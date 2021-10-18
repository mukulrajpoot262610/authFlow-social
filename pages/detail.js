import React from "react";
import {
  Steps,
  Button,
  message,
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { StepPanel } from "../components/StepPanel";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

function detail() {
  const [stepForm] = Form.useForm();

  const Step1 = () => {
    return (
      <div className="sm:w-1/2 sm:m-auto">
        <Form.Item
          className=""
          label="Display-Name"
          name="displayname"
          rules={[
            {
              required: true,
              message: "Please input your display name!",
            },
          ]}
        >
          <Input className="w-full" />
        </Form.Item>

        <Form.Item
          className=""
          label="Full-Name"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select allowClear>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="others">Others</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date of Birth" name="dob">
          <DatePicker />
        </Form.Item>
      </div>
    );
  };

  const Step2 = () => {
    return (
      <div className="sm:w-1/2 sm:m-auto">
        <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
      </div>
    );
  };

  const Step3 = () => {
    return (
      <div className="sm:w-1/2 sm:m-auto">
        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 Skill"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0
                    ? formItemLayout
                    : formItemLayoutWithOutLabel)}
                  label={index === 0 ? "Skill Sets" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input Skill Set or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="Skill Set" style={{ width: "100%" }} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button ml-1"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "100%" }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>

                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Upload>
          <Button icon={<UploadOutlined />} name="doc">
            Upload Resume
          </Button>
        </Upload>
        ,
      </div>
    );
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const steps = [
    {
      step: 1,
      title: "Personal",
      content: <Step1 />,
    },
    {
      step: 2,
      title: "Contact",
      content: <Step2 />,
    },
    {
      step: 3,
      title: "Skill-Set",
      content: <Step3 />,
    },
  ];

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div
      className="pt-24 px-10 h-full justify-center items-center"
      size="large"
    >
      <Form
        form={stepForm}
        onFinish={onFinish}
        layout="vertical"
        onReset={onReset}
      >
        <StepPanel steps={steps} />
      </Form>
    </div>
  );
}

export default detail;
