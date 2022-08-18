import moment from 'moment';

export enum PostType {
    NORMAL = 'normal',
    EVENT = 'event',
};

export type Post = {
    id: string;
    photo: string;
    description: string;
    creation_date: string;
    type: PostType;
    user_id: string;
    friend_id: string;
    friend_id2: string
};