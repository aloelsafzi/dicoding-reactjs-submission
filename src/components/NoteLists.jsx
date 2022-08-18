import React, { Component } from 'react'
import NoteItem from './NoteItem'


class NoteLists extends Component {

  constructor(props) {
    super(props)

    this.notesArchiveIsEmpty = this.notesArchiveIsEmpty.bind(this)
    this.notesIsEmpty = this.notesIsEmpty.bind(this)
    this.renderNoteItem = this.renderNoteItem.bind(this)
  }

  notesArchiveIsEmpty = (notes) => {
    const noteArchieved = notes.filter((note) => note.archived === true)
    return noteArchieved.length === 0
  }

  notesIsEmpty = (notes) => {
    const noteArchived = notes.filter((note) => note.archived === false)
    return noteArchived.length === 0
  }

  renderNoteItem = (note) => {
    let noteTitle = note.title.toLowerCase()
    let searchValue = this.props.searchValue.toLowerCase()
    let componentNoteItem = <NoteItem
      key={note.id}
      id={note.id}
      title={note.title}
      body={note.body}
      date={note.createdAt}
      isArchive={note.archived}
      onDeleteNote={this.props.onDeleteNote}
      onArchiveNote={this.props.onArchiveNote}
    />

    if (this.props.searchValue !== '') {
      if (noteTitle.includes(searchValue)) {
        return componentNoteItem
      }
    } else {
      return componentNoteItem
    }
  }

  render() {
    return (
      <>
        <h2>Catatan Aktif</h2>
        {this.notesIsEmpty(this.props.notes) ? <p className="notes-list__empty-message">Tidak ada catatan</p> :
          <div className="notes-list">
            {this.props.notes.filter((note) => note.archived === false).map(note => {
              return this.renderNoteItem(note)
            })}
          </div>
        }

        <h2>Arsip</h2>
        {this.notesArchiveIsEmpty(this.props.notes) ?
          <p className="notes-list__empty-message">Tidak ada catatan</p> :
          <div className="notes-list">
            {this.props.notes.filter((note) => note.archived === true).map(note => {
              return this.renderNoteItem(note)
            })}
          </div>
        }
      </>

    )
  }
}

export default NoteLists