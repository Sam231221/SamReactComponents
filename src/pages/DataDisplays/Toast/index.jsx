import styled from 'styled-components';
import Message from '../../../components/2.DataDisplay/Toasts/MessageQueue/Message';

export { default as useMessageQueue } from '../../../components/2.DataDisplay/Toasts/MessageQueue/provider';

const StyledMessageQueue = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 10px;
  max-width: 350px;
  min-width: 100px;
  align-items: stretch;
`;

const MessageQueue = ({ messages = [], removeMessage }) => {
  return (
    <StyledMessageQueue>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} removeMessage={removeMessage} />
      ))}
    </StyledMessageQueue>
  );
};

export default MessageQueue;
