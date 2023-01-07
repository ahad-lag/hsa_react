import { withFormik } from "formik";
import InnerSearchForm from "../../components/global/search/innerSearchFrom";
import { SearchValuesProps } from "../../contracts/searchContractInterface";
import { searchFormSchima } from "../../validate/global/searchFromValidate";

interface SearchFormProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    searchBoxHandler: () => void
}

const SearchForm = withFormik<SearchFormProps, SearchValuesProps>({
    mapPropsToValues: props => {
        return {
            search : ''
        }
    },
    handleSubmit: async (values , props) => {
        props.props.searchBoxHandler();
    },
    validate(values, props) {
        props.setSearch(values.search);
    },
    validationSchema : searchFormSchima
})(InnerSearchForm)

export default SearchForm;