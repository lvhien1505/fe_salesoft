import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import GroupCheckbox from 'components/common/GroupCheckbox';
import CardFilter from 'components/common/CardFilter';
import Icon from 'components/ui/icon/Icon';
import Select from 'components/ui/select/Select';
import { InputString } from 'components/ui/input/Input';
import Record from 'components/common/manage/Record';

const FilterPartner = () => {
    const options = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Khách hàng', value: 'customer' },
        { label: 'Nhà cung cấp', value: 'supplier' },
    ];
    return (
        <CardFilter title="Đối tượng nộp nhận">
            <Select
                style={{ width: '100%' }}
                placeholder="Tất cả"
                suffixIcon={false}
                options={options}
            />
            <Row style={{ marginTop: '0.5rem' }} gutter={[8, 8]}>
                <Col span={24}>
                    <InputString
                        placeholder="Tên, mã người nộp/nhận "
                        size="small"
                    />
                </Col>
                <Col span={24}>
                    <InputString placeholder="Điện thoại " size="small" />
                </Col>
            </Row>
        </CardFilter>
    );
};

const Filter = () => {
    const dataOverview = [
        { label: 'Tiền mặt', value: 'money' },
        { label: 'Ngân hàng', value: 'bank' },
    ];

    const dataTypeReceipt = [
        { label: 'Phiếu thu', value: 'in' },
        { label: 'Phiếu chi', value: 'out' },
    ];

    const dataStatus = [
        { label: 'Đã thanh toán', value: 'done' },
        { label: 'Đã hủy', value: 'damage' },
    ];

    const dataBussinessResult = [
        { label: 'Đưa vào hạch toán', value: 'yes' },
        { label: 'Không đưa vào hạch toán', value: 'no' },
        { label: 'Tất cả', value: 'all' },
    ];
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Tổng quan">
                    <GroupRadio data={dataOverview} defaultValue="money" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Thời gian"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Loại chứng từ">
                    <GroupCheckbox
                        data={dataTypeReceipt}
                        defaultValue={['in', 'out']}
                    />
                </CardFilter>
            </Col>

            <Col span={24}>
                <CardFilter title="Trạng thái">
                    <GroupCheckbox data={dataStatus} defaultValue={['done']} />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Kết quả kinh doanh">
                    <GroupRadio data={dataBussinessResult} defaultValue="all" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <FilterPartner />
            </Col>
            <Col span={24}>
                <Record />
            </Col>
        </Row>
    );
};

export default Filter;
