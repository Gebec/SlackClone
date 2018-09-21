
import * as React from "react";
import MessageList from "./components/MessagesList";
import NewRoomsForm from "./components/NewRoomForm";
import RoomsList from "./components/RoomsList";
import SendMessageInput from "./components/SendMessageInput";

export default class App extends React.Component <{}> {
  render() {
    return (
      <div className="wrapper flex flex--row">
        <div className=" flex flex--col flex--row--small">
          <div className="flex--col__big">
            <RoomsList></RoomsList>
          </div>
          <div className="flex--col__small">
            <NewRoomsForm></NewRoomsForm>
          </div>
        </div>
        <div className="flex flex--col flex--row__big">
          <div className="flex--col__big">
            <MessageList></MessageList>
          </div>
          <div className="flex--col__small">
            <SendMessageInput></SendMessageInput>
          </div>
        </div>
      </div>
    );
  }
}