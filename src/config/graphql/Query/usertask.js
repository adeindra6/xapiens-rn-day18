import {gql} from '@apollo/client';

const QUERY_USERTASK = gql`
    query {
        user {
            id
            name
            usertask {
            id
            task
            userId
            }
        }
    }
`;

export {QUERY_USERTASK};
export default {};