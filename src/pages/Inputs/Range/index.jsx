import { PageWrapper } from '../../../layouts/PageWrapper';
import { ComponentWrapper } from '../../../layouts/ComponentWrapper';
import Header from '../../../reusables/Header';
import EmojiRange from '../../../components/1.Inputs/Range';

const index = () => {
  return (
    <PageWrapper>
      <Header
        title={'Range'}
        description={
          'The Range allow users to make selections from a range of values'
        }
      />
      <ComponentWrapper
        title={'1.Emoji Range'}
        description={`This is emoji range`}
      >
        <EmojiRange />
      </ComponentWrapper>
    </PageWrapper>
  );
};
export default index;
