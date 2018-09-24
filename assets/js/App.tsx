
import * as React from "react";
import * as Chatkit from "@pusher/chatkit"
import { instanceLocator, tokenProvider } from "../../config";
import MessageList from "./components/MessagesList";
import NewRoomsForm from "./components/NewRoomForm";
import RoomsList from "./components/RoomsList";
import SendMessageInput from "./components/SendMessageInput";

interface MessageInterface {
  senderId: string,
  text: string
}

interface roomsInterface {
  name: string,
  id: number
}

interface stateInterface {
  messages: MessageInterface[],
  currentUser: any,
  activeRoomId: [number, null],
  joinedRooms: roomsInterface[],
  joinableRooms: roomsInterface[],
}

export default class App extends React.Component <{}, stateInterface, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
      currentUser: {},
      activeRoomId: null,
      joinedRooms: [],
      joinableRooms: [],
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
        this.setState({
          currentUser: currentUser
        });

        this.getJoinableRooms();
      })
      .catch(error => {
        console.error("error:", error);
      });
  }

  sendMessage = (text) => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.activeRoomId,
    })
  }

  subscribeToRoom = (subscribeRoomId) => {
    this.setState({
      messages: [],
    })
    this.state.currentUser.subscribeToRoom({
      roomId: subscribeRoomId,
      hooks: {
        onNewMessage: message => {
          console.log(`Message text: ${message.text}`);
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(() => {
      console.log('Room joined.');
    })
    .catch(() => {
      console.error('Unable to join room!');
    });
  }

  getJoinableRooms = () => {
    this.state.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.state.currentUser.rooms
        })
      })
      .catch(err => {
        console.log(`Error getting joinable rooms: ${err}`)
      })
  }

  render() {
    return (
      <div className="wrapper flex flex--row">
        <div className="flex flex--col flex--row--small bg-dark-magenta">
          <div className="flex--col__big">
            <RoomsList
              rooms={ [...this.state.joinedRooms] }
              subscribeToRoom={ this.subscribeToRoom }
            ></RoomsList>
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
            <SendMessageInput sendMessage={ this.sendMessage }></SendMessageInput>
          </div>
        </div>
      </div>
    );
  }
}
