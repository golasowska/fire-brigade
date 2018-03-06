import axios from 'axios';

export const FETCH_FIRE = 'FETCH_FIRE';


const apiKey = 'XNMVlJaER2jr8JqqXpLA1EuYXMka8xJ-';

export function fetchFire(values) {
    const value = values.title;
    return dispatch => {
        axios
            .get(
                `https://api.mlab.com/api/1/databases/fire-brigades/collections/cities?apiKey=${apiKey}`
            )
            .then(function(response) {
                dispatch({
                    type: FETCH_FIRE,
                    payload: response.data[0].drogi
                });
            })
            .catch(function(error) {
                console.log(error.message);
            });
    };
}