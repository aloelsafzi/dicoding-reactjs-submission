import React, { Component } from 'react'
import NoteForm from './components/NoteForm'
import NoteHeader from './components/NoteHeader'
import NoteLists from './components/NoteLists'
import { getInitialData } from './utils'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      searchValue: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.getLastIdNote = this.getLastIdNote.bind(this)
    this.onDeleteNote = this.onDeleteNote.bind(this)
    this.onArchiveNote = this.onArchiveNote.bind(this)
    this.setSeachValue = this.setSeachValue.bind(this)
  }

  onSubmitHandler = (note) => {
    this.state.notes.push(note)
    this.setState(() => {
      return {
        notes: this.state.notes
      }
    })
  }

  getLastIdNote = () => {
    if (this.state.notes.length === 0) return 0
    return this.state.notes.at(-1).id
  }

  onDeleteNote = (noteId) => {
    let currentNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState(() => {
      return {
        notes: currentNotes
      }
    })
  }

  onArchiveNote = (noteId) => {
    let currentNotes = this.state.notes
    let note = this.state.notes.filter(note => note.id === noteId)
    let noteIndex = this.state.notes.findIndex((note) => note.id === noteId)
    note[0].archived = !note[0].archived
    currentNotes[noteIndex] = note[0]

    this.setState(() => {
      return {
        notes: currentNotes
      }
    })
  }

  setSeachValue = (value) => {
    this.setState(() => {
      return {
        searchValue: value
      }
    })
  }



  render() {
    return (
      <>
        <div className='note-app__body'>
          <NoteHeader setSeachValue={this.setSeachValue} />
          <NoteForm onSubmitHandler={this.onSubmitHandler} getLastIdNote={this.getLastIdNote} />
          <NoteLists notes={this.state.notes} onDeleteNote={this.onDeleteNote} onArchiveNote={this.onArchiveNote} searchValue={this.state.searchValue} />
        </div>
      </>
    )
  }
}

export default App