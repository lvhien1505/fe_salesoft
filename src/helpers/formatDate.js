import moment from 'moment';

export const formatDateToServer = (date) => {
    return moment(date).format('DD-MM-YYYY HH:mm');
};

export const formatDateToClient = (date) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
};

export const getDateToClient = (date)=>{
    return moment(date).format('DD/MM/YYYY');
}
