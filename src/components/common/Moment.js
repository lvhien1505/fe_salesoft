import Moment from 'react-moment';
import moment from 'moment';

const currentTime = moment();
const MomentHour = () => {
	return <Moment format="HH:mm">{currentTime}</Moment>;
};

const MomentDate = () => {
	return <Moment format="DD/MM/YYYY">{currentTime}</Moment>;
};

export { MomentHour, MomentDate };
