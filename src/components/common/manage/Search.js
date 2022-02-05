import { useState } from 'react';
import { Input, Row, Col, Form } from 'antd';
import Icon from 'components/ui/icon/Icon';
import ButtonCustom from 'components/ui/button/Button';
import { InputString } from 'components/ui/input/Input';

import '../styles/search.scss';

const Search = ({ listField,placeholderMain }) => {
	const { Item } = Form;
	const [showDropdown, setShowDropdown] = useState(false);

	const onFinishSearch = () => setShowDropdown(false);

	return (
		<div className="dropdown-search">
			<div className="icon-left">
				<Icon className="ri-search-line" />
			</div>
			<Input
				placeholder={placeholderMain}
				style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem' }}
				onFocus={() => setShowDropdown(false)}
				allowClear
			/>
			<div
				className="icon-right"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<Icon className="ri-arrow-down-s-fill" />
			</div>
			{showDropdown ? (
				<div className="dropdown">
					<Form >
						{listField.map((field,index) => (
							<Item name={field.name} key={index} style={{marginBottom:'0.5rem'}}>
								<InputString placeholder={field.placeholder} size="small"/>
							</Item>
						))}
						<Row justify="end" style={{ marginTop: '1rem' }}>
							<Col>
								<ButtonCustom
									text="Tìm kiếm"
									icon={<Icon className="ri-search-line" />}
									onClick={onFinishSearch}
								/>
							</Col>
						</Row>
					</Form>
				</div>
			) : null}
		</div>
	);
};

export default Search;
