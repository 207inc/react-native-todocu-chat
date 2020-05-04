# Installation
```
yarn add react-native-todocu-chat react-native-linear-gradient
```

# Example
```jsx
let room = {
  icon: "",
  name: "",
  description: "",
  deliverName: "",
  deliverAvatar: "",
  deliveryInvoice: "",
  deliveryStatus: "",
}

let messages = [{
  id: "",
  text: "",
  senderId: 1,
  senderName: "",
  senderType: "",
  senderAvatar: "",
  createdAt: new Date(),
  ts: new Date(),
  messageAttachment: null
}]

const _onSend = (messages) => {
  // handle messages
}

const _onAttachmentIconPress = () => {
}

const _onModalOpen = (messages) => {
  // getMessages()
}

...
  <Chat
    room={room}
    messages={messages}
    currentUserId={1}
    productId={1}
    onSend={(messages) => _onSend(messages)}
    placeholderVisible={true}
    typingUser={null}
    onAttachmentIconPress={() => _onAttachmentIconPress()}
    typingDisabled={false}
    onModalOpen={() => _onModalOpen()} />
```