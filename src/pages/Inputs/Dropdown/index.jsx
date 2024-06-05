import DropDown from '../../../components/1.Inputs/DropDown';
import { PageWrapper } from '../../../layouts/PageWrapper';
import Header from '../../../reusables/Header';
const index = () => {
  return (
    <PageWrapper>
      <Header
        title={'Dropdown'}
        description={`The Dropdown Menu components provide end users with a list of options on temporary surfaces.`}
      />
      <DropDown />
    </PageWrapper>
  );
};

export default index;
