import React, { Component } from 'react'

class NoteForm extends Component {

  constructor(props) {
    super(props)

    this.INPUT_LIMIT = 50

    this.state = {
      noteTitle: '',
      noteBody: '',
      inputLimit: this.INPUT_LIMIT
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)

  }

  onTitleChangeHandler = (event) => {

    let title = event.target.value
    let lengthTitle = title.length

    if (Number(lengthTitle) > this.INPUT_LIMIT) return
    if (Number(lengthTitle) < 0) return

    this.setState(() => {
      return {
        noteTitle: title.slice(0, this.INPUT_LIMIT),
        inputLimit: this.INPUT_LIMIT - lengthTitle
      }
    })
  }

  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return {
        noteBody: event.target.value
      }
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    const idNote = Number(this.props.getLastIdNote()) + 1
    const currentDate = new Date(Date.now()).toISOString()

    let note = {
      id: idNote,
      title: this.state.noteTitle,
      body: this.state.noteBody,
      createdAt: currentDate,
      archived: false,
    }
    this.props.onSubmitHandler(note)
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.inputLimit}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required value={this.state.noteTitle} onChange={this.onTitleChangeHandler} />
          <textarea className="note-input__body" type="text" value={this.state.noteBody} onChange={this.onBodyChangeHandler} placeholder="Tuliskan catatanmu di sini ..." required />
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteForm