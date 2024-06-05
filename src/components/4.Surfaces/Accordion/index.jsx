import Accordion from './Accordion';
import Header from '../../../reusables/Header';
const render = () => {
  let items = [
    {
      name: 'Header 1',
      content: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          voluptate!
        </div>
      ),
    },
    {
      name: 'Header 2',
      content: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          voluptate!
        </div>
      ),
    },
    {
      name: 'Header 3',
      content: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          voluptate!
        </div>
      ),
    },
  ];
  return (
    <div className='p-10'>
      <Header
        title={'Accordion'}
        description={
          'The Accordion component lets users show and hide sections of related content on a page.'
        }
      />
      <Accordion multiple items={items} />
    </div>
  );
};

export default render;
