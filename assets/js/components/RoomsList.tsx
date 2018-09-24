// Wrapper for all the rooms

import * as React from "react";

interface roomsInterface {
  name: string,
  id: number
}

interface propsInterface {
  rooms: roomsInterface[],
  subscribeToRoom: (roomId: number) => void,
}

export default class ChatRoomsList extends React.Component <propsInterface> {
  render() {
    return (
      <div>
        <h3>Your rooms</h3>
        <ul>
          { this.props.rooms.map(
            (room) =>
              <li key={ room.id }>
                <a onClick={ (e: React.MouseEvent<HTMLElement>) => this.props.subscribeToRoom(room.id)}>
                  { room.name }
                </a>
              </li>
            )}
        </ul>
      </div>
    );
  }
}