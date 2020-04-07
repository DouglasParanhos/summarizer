import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postSummary } from '../actions/summarize';

class InputForm extends React.Component  {

    formRef = React.createRef();

    submitData = () => {
        console.log(this.formRef.current.getFieldsValue);

        let data = {
            summaryPercent: this.formRef.summaryPercent,
            originalText: this.formRef.originalText,
            summaryText: this.formRef.summaryText
        };

        // this.postSummary(data);
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Form ref={this.formRef} 
                initialValues={{ summaryPercent: this.props.summaryPercent,
                                originalText: this.props.originalText,
                                summaryText: this.props.summaryText}}>
                <Form.Item
                    name="summaryPercent"
                    rules={[
                    {
                        type: 'number',
                        min: 1,
                        max: 99,
                    },
                    {
                        required: true,
                        message: 'Compression rate can\'t be empty!',
                    }
                    ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="originalText"
                    wrapperCol={{span: 8, offset: 8}}
                    rules={[
                    {
                        required: true,
                        message: 'Text to summarize can\'t be empty!',
                    },
                    ]}>
                    <Input.TextArea rows={15}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={ () => this.submitData()}>
                        Summarize
                    </Button>
                </Form.Item>

            </Form>
        );
    }
}

const mapStateToProps = state => ({
    summaryPercent: state.summary.summaryPercent,
    originalText: state.summary.originalText,
    summaryText: state.summary.summaryText
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postSummary
    }, dispatch)    
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);