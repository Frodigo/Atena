import { connect } from 'react-redux'
import {
    switchView,
    toggleFilters,
    sortPosts,
    toggleTagSelection
} from './../actions/listing';
import {fetchPosts, fetchCategories, fetchTags} from './../sources/listing'
import PostsList from '../components/PostsListComponent';

const postsDataUrl = 'http://localhost:8000/data/posts.json';
const categoriesDataUrl = 'http://localhost:8000/data/categories.json';
const tagsDataUrl = 'http://localhost:8000/data/tags.json';

const mapStateToProps = (state) => ({
    config: {
        postsApiUrl: postsDataUrl,
        categoriesApiUrl: categoriesDataUrl,
        tagsDataUrl: tagsDataUrl
    },
    posts: state.posts,
    viewMode: state.viewMode,
    filters: state.filters,
    categories: state.categories,
    tags: state.tags
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchViewMode: (viewMode) => dispatch(switchView(viewMode)),
        onToggleFilters: () => dispatch(toggleFilters()),
        fetchPosts: (url, filters) => dispatch(fetchPosts(url, filters)),
        fetchCategories: (url) => dispatch(fetchCategories(url)),
        fetchTags: (url) => dispatch(fetchTags(url)),
        changeSortOrder: (sortOrder) => dispatch(sortPosts(sortOrder)),
        onToggleTagSelection: (tag) => dispatch(toggleTagSelection(tag))
    };
};

const Listing = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsList);

export default Listing
