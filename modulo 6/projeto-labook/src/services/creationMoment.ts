import moment from 'moment';

export const creationMoment = (date: string) => {
    return moment(date).fromNow();
}