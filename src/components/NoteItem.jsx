import React, { Component } from 'react'
import { showFormattedDate } from '../utils'

class NoteItem extends Component {

  constructor(props) {
    super(props)

    this.onClickArchive = this.onClickArchive.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }

  onClickDelete = (noteId) => {
    this.props.onDeleteNote(noteId)
  }

  onClickArchive = (noteId) => {
    this.props.onArchiveNote(noteId)
  }

  render() {
    return (
      <div className="note-item">
        <div className="note-item__content">
          <h3 className="note-item__title">{this.props.title}</h3>
          <p className="note-item__date">{showFormattedDate(this.props.date)}</p>
          <p className="note-item__body">{this.props.body}</p>
        </div>
        <div className="note-item__action">
          <button className="note-item__delete-button" onClick={() => this.onClickDelete(this.props.id)}>Delete</button>
          <button className="note-item__archive-button" onClick={() => this.onClickArchive(this.props.id)}>{this.props.isArchive ? 'Pindahkan' : 'Arsipkan'}</button>
        </div>
      </div>
    )
  }
}

export default NoteItem