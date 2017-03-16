import {
    postsIsLoading,
    postsHasErrored,
    getPosts,
    categoriesHasError,
    categoriesLoading,
    getCategories,
    tagsHasError,
    tagsLoading,
    getTags
} from './../actions/listing'


export function fetchPosts(url, filters) {
    let requestUrl = `${url}?sort_order=${filters.sortOrder}`;
    return (dispatch) => {
        dispatch(postsIsLoading(true));
        fetch(requestUrl)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(postsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(getPosts(items)))
            .catch(() => dispatch(postsHasErrored(true)));
    };
}

export function fetchCategories(requestUrl) {
    return (dispatch) => {
        dispatch(categoriesLoading(true));
        fetch(requestUrl)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(categoriesLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((categories) => {
                dispatch(getCategories(categories))
            })
            .catch((error) => dispatch(categoriesHasError(error)));
    };
}

export function fetchTags(requestUrl) {
    return (dispatch) => {
        dispatch(tagsLoading(true));
        fetch(requestUrl)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tagsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((tags) => {
                dispatch(getTags(tags))
            })
            .catch((error) => dispatch(tagsHasError(error)));
    };
}
