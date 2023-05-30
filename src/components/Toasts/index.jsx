
import MessageQueue, { useMessageQueue } from './MessageQueue';

const Application = () => {
  const { addMessage, removeMessage, messages } = useMessageQueue();

  return (
    <>
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <div>
        <h1>React.js Message Queue (with Hooks) </h1>
        <p>Snackbars provide brief notifications. The component is also known as a toast.
          Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear.

          Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons. You can use them to display notifications.
        </p>

        {/* <button
          onClick={() => {
            if (messages.length % 3 === 0) {
              addMessage("Hello, this is an info message");
            } else if (messages.length % 3 === 1) {
              
            } else {
              addMessage("Yayyy", "success");
            }
          }}
        > */}
        <button
          onClick={() => {
            addMessage("Oh no :/", "error");
          }}
        >
          Add new Message
        </button>
      </div>
    </>
  );
};

export default Application;
