import * as yup from 'yup';

export let searchFormSchima = yup.object().shape({
    search: yup.string(),
});