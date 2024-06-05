import { Tooltip } from '../../../components/2.DataDisplay/Tooltip';
import { PageWrapper } from '../../../layouts/PageWrapper';
import Header from '../../../reusables/Header';

const ToolTip = () => {
  return (
    <PageWrapper>
      <Header
        title={'Tooltip'}
        description={
          'Tooltip is a normal text input enhanced by a panel of suggested options.'
        }
      />
      <Tooltip text={'Pressing this button destroys humanity'}>
        <span className='btn'>Info</span>
      </Tooltip>
    </PageWrapper>
  );
};

export default ToolTip;
