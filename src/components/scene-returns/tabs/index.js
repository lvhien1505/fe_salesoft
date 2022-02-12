import { useState, useContext } from 'react';
import { Tabs } from 'antd';
import Icon from 'components/ui/icon/Icon';
import Content from './Content';
import SceneReturnsContext from 'contexts/createContext/SceneReturnsContext';

const TabsSale = () => {
	const { activeKey, changeActiveKey, addTab, removeTab }  = useContext(SceneReturnsContext);
	const initialPanes = [
		{
			title: 'Trả hàng 1',
			content: <Content nameBill="Trả hàng 1" activeKey="1" />,
			key: '1',
		},
	];

	const [panes, setPanes] = useState(initialPanes);
	const { TabPane } = Tabs;

	const onChange = (activeKey) => {
		changeActiveKey(activeKey);
	};

	const onEdit = (targetKey, action) => {
		if (action === 'add') {
			return addPane();
		}
		if (action === 'remove') {
			return removePane(targetKey);
		}
	};

	const addPane = () => {
		let lastKey = panes[panes.length - 1].key;
		const activeKey = parseInt(lastKey) + 1;
		const newPanes = [...panes];
		newPanes.push({
			title: `Trả hàng ${activeKey}`,
			content: (
				<Content
					nameBill={`Trả hàng ${activeKey}`}
					activeKey={`${activeKey}`}
				/>
			),
			key: `${activeKey}`,
		});
		setPanes(newPanes);
		addTab(
			{
				key: `${activeKey}`,
				products: [],
			},
			`${activeKey}`
		);
	};

	const removePane = (targetKey) => {
		let newActiveKey = activeKey;
		let lastIndex;
		panes.forEach((pane, i) => {
			if (pane.key === targetKey) {
				lastIndex = i - 1;
			}
		});
		const newPanes = panes.filter((pane) => pane.key !== targetKey);
		if (newPanes.length && newActiveKey === targetKey) {
			if (lastIndex >= 0) {
				newActiveKey = newPanes[lastIndex].key;
			} else {
				newActiveKey = newPanes[0].key;
			}
		}
		setPanes(newPanes);
		removeTab(targetKey, newActiveKey);
	};

	return (
		<>
			<Tabs
				type="editable-card"
				onChange={onChange}
				onEdit={onEdit}
				activeKey={activeKey}
				addIcon={<Icon className='ri-add-fill'/>}
			>
				{panes.map((pane) => (
					<TabPane
						tab={pane.title}
						key={pane.key}
						closable={panes.length === 1 ? false : true}
					>
						{pane.content}
					</TabPane>
				))}
			</Tabs>
		</>
	);
};

export default TabsSale;
