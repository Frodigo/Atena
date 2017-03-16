export const POSTS_IS_LOADING = 'POSTS_IS_LOADING';
export const GET_POSTS = 'GET_POSTS';
export const POSTS_HAS_ERRORED = 'POSTS_HAS_ERRORED';
export const SORT_POSTS = 'SORT_POSTS';
export const SWITCH_VIEW = 'SWITCH_VIEW';
export const TOGGLE_FILTERS = 'TOGGLE_FILTERS';
export const CATEGORIES_LOADING = 'CATEGORIES_LOADING';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const CATEGORIES_HAS_ERRORED = 'CATEGORIES_HAS_ERRORED';
export const TAGS_LOADING = 'TAGS_LOADING';
export const GET_TAGS = 'GET_TAGS';
export const TAGS_HAS_ERRORED = 'TAGS_HAS_ERRORED';
export const TOGGLE_TAG_SELECTION = 'TOGGLE_TAG_SELECTION';

export const postsIsLoading = (isLoading) => ({
    type: POSTS_IS_LOADING,
    isLoading
});

export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
});

export const sortPosts = (sortOrder) => ({
    type: SORT_POSTS,
    sortOrder
});


export const postsHasErrored = (hasError) => ({
    type: POSTS_HAS_ERRORED,
    hasError
});

export const switchView = (viewMode) => ({
    type: SWITCH_VIEW,
    viewMode
});

export const toggleFilters = () => ({
    type: TOGGLE_FILTERS
});


export const categoriesLoading = (isLoading) => ({
    type: CATEGORIES_LOADING,
    isLoading
});

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
});

export const categoriesHasError = (hasError) => ({
    type: CATEGORIES_HAS_ERRORED,
    hasError
});

export const tagsLoading = (isLoading) => ({
    type: TAGS_LOADING,
    isLoading
});

export const getTags = (tags) => ({
    type: GET_TAGS,
    tags
});

export const tagsHasError = (hasError) => ({
    type: TAGS_HAS_ERRORED,
    hasError
});

export const toggleTagSelection = (tag) => ({
    type: TOGGLE_TAG_SELECTION,
    tag
});
