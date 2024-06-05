import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
  background-color: ${(props) => {
    if (props.type === 'success') return '#58b259';
    if (props.type === 'error') return '#f44236';
    return '#6d94ff';
  }};
  color: #fff;
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`;

const Message = ({ message, removeMessage }) => {
  return (
    <Wrapper type={message.type}>
      {message.caption}
      <FontAwesomeIcon
        onClick={() => {
          removeMessage(message.id);
        }}
        icon={faXmark}
        style={{ fontSize: '22px' }}
      />
    </Wrapper>
  );
};

export default Message;
