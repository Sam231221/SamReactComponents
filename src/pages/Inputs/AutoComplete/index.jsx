import AutocompleteInputDebounce from '../../../components/1.Inputs/AutoComplete';
import Header from '../../../reusables/Header';
import { PageWrapper } from '../../../layouts/PageWrapper';
function index() {
  return (
    <PageWrapper>
      <Header
        title={'AutoComplete'}
        description={
          'The autocomplete is a normal text input enhanced by a panel of suggested options.'
        }
      />

      <AutocompleteInputDebounce />
    </PageWrapper>
  );
}

export default index;
