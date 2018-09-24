
import * as React from "react";
import * as Chatkit from "@pusher/chatkit"
import { instanceLocator, tokenProvider } from "../../config";
import MessageList from "./components/MessagesList";
import NewRoomsForm from "./components/NewRoomForm";
import RoomsList from "./components/RoomsList";
import SendMessageInput from "./components/SendMessageInput";

interface MessageInterface{
  senderId: string,
  text: string
}

export default class App extends React.Component <{}, {messages: MessageInterface[]}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
    }

  }
  componentDidMount() {

    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "Admin",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenProvider
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        console.log("Connected as user ", currentUser.name);
        currentUser.subscribeToRoom({
          roomId: 16725237,
          hooks: {
            onNewMessage: message => {
              console.log(`Message text: ${message.text}`);
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
      .catch(error => {
        console.error("error:", error);
      });
  }

  render() {
    return (
      <div className="wrapper flex flex--row">
        <div className="flex flex--col flex--row--small bg-dark-magenta">
          <div className="flex--col__big">
            <RoomsList></RoomsList>
          </div>
          <div className="flex--col__small">
            <NewRoomsForm></NewRoomsForm>
          </div>
        </div>
        <div className="flex flex--col flex--row__big">
          <div className="flex--col__big">
            <MessageList messages={ this.state.messages }></MessageList>
          </div>
          <div className="flex--col__small">
            <SendMessageInput></SendMessageInput>
          </div>
        </div>
      </div>
    );
  }
}
