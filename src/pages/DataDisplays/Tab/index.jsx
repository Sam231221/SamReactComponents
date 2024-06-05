import { useState } from 'react';
import { Tab } from '../../../components/2.DataDisplay/Tabs/Tab';
import { PageWrapper } from '../../../layouts/PageWrapper';
import Header from '../../../reusables/Header';
const index = () => {
  return (
    <PageWrapper>
      <Header
        title={'Tabs'}
        description={
          'Tabs make it easy to explore and switch between different views.'
        }
      />

      <Tab />
    </PageWrapper>
  );
};
export default index;
