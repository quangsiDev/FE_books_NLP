import React, { useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useSelector } from "react-redux";
import { postAPI, putAPI } from "../services/axiosCofig";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function ProfilePage() {
  const userInfor = useSelector((state) => state.userReducer.userInfor);
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
    }
  };
  const updateUser = async (data) => {
    const res = await putAPI("user", data);
    console.log(res);
  };
  const onFinish = (values) => {
    console.log({ ...userInfor, ...values });
    updateUser({ ...userInfor, ...values });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  useEffect(() => {
    form.setFieldsValue({
      name: userInfor.name,
      account: userInfor.account,
      //   avatar(pin):"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_UIT_updated.jpg/1200px-Logo_UIT_updated.jpg"
      // role(pin):"user"
      // type(pin):"register"
      // address(pin):""
      // email(pin):""
      // phone(pin):""
      // birthDay(pin):null
      // gender(pin):0
      // height(pin):0
      // weight(pin):0

      // createdAt(pin):"2022-01-10T14:28:49.142Z"
    });
  }, []);
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="w-full"
      >
        <Form.Item
          name="account"
          label="Tài khoản"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên"
          rules={[
            {
              required: true,
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
          <Select placeholder="Giới tính" onChange={onGenderChange} allowClear>
            <Option value="male">Nam</Option>
            <Option value="feNam">Nữ</Option>
            <Option value="other">Khác</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item label="Ngày sinh">
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="weight"
          label="Cân nặng"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="height"
          label="Chiều cao"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item name={["user", "introduction"]} label="Thói quen">
          <Input.TextArea />
        </Form.Item> */}
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className=" bg-blue-theme rounded-md border-none font-medium px-5 w-24"
          >
            Lưu
          </Button>
          {/* <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button> */}
          {/* <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button> */}
        </Form.Item>
      </Form>
    </div>
  );
}
