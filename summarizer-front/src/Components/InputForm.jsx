import React from 'react';
import { Form, Input, Button } from 'antd';

function InputForm() {

    return(
        <Form>
            <Form.Item
                name="text"
                wrapperCol={{span: 8, offset: 8}}
                rules={[
                {
                    required: true,
                    message: 'Text to summarize can\'t be empty!',
                },
                ]}
            >
                <Input.TextArea rows={15}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Summarize
                </Button>
            </Form.Item>

        </Form>
    );
}
export default InputForm;