import React, { Component } from 'react'

class NoteHeader extends Component {

  constructor(props) {
    super(props)

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
  }

  onSearchNoteHandler = (event) => {
    this.props.setSeachValue(event.target.value)
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan ..." onChange={this.onSearchNoteHandler} />
        </div>
      </div>
    )
  }
}

export default NoteHeader