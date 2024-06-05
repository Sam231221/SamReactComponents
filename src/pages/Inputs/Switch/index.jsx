import { useState } from 'react';
import Header from '../../../reusables/Header';
import { PageWrapper } from '../../../layouts/PageWrapper';
import Switch from '../../../components/1.Inputs/Switch';

const index = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <PageWrapper>
      <Header
        title={'Switch'}
        description={`Switches toggle the state of a single setting on or off.Switches are
          the preferred way to adjust settings on mobile. The option that the
          switch controls, as well as the state it's in, should be made clear
          from the corresponding inline label.`}
      />

      <Switch
        isToggled={isToggled}
        onToggle={() => setToggle(!isToggled)}
        rounded={true}
      />
    </PageWrapper>
  );
};
export default index;
