import Header from '../../../reusables/Header';
import { ComponentWrapper } from '../../../layouts/ComponentWrapper';
import { PageWrapper } from '../../../layouts/PageWrapper';
import {
  CountryPhoneSelect,
  CountryStateCitySelect,
} from '../../../components/1.Inputs/Select';

export default function Select() {
  return (
    <PageWrapper>
      <Header
        title={'Select'}
        description={`The Select components let you create lists of options for users to choose from.`}
      />
      <ComponentWrapper
        title={'1.CountryPhone Select'}
        description={`The Country Phone Select components let you create lists of options for users to choose from.`}
      >
        <CountryPhoneSelect />
      </ComponentWrapper>
      <ComponentWrapper
        title={'2.CountryStateCity Select'}
        description={`The Country Phone Select components let you create lists of options for users to choose from.`}
      >
        <CountryStateCitySelect />
      </ComponentWrapper>
    </PageWrapper>
  );
}
