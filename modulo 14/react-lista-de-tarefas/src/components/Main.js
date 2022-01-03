import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('oi');

    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,

    });
  }

  handleEdit = (e, index) => {
console.log(e, index);

    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
  });
  }

  handleDelete = (e, index) => {
console.log(e, index);
const { tarefas } = this.state;

const novasTarefas = [...tarefas];
novasTarefas.splice(index, 1);

this.setState({
  tarefas: novasTarefas,

});
  }

    render() {
      const { novaTarefa, tarefas } = this.state;

        return (
          <div className="main">
            <h1>
              Lista de Tarefas
            </h1>

            <form onSubmit={this.handleSubmit} action="#" className="form">
              <input type="text" onChange={this.handleChange} value={novaTarefa} />
              <button type="submit">

                <FaPlus />
              </button>
            </form>

            <ul className="tarefas">
              {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                  {tarefa}
                  <span>
                    <FaEdit className="edit" onClick={(e) => { this.handleEdit(e, index); }} />
                    <FaWindowClose className="delete" onClick={(e) => { this.handleDelete(e, index); }} />
                  </span>

                </li>
              ))}
            </ul>

          </div>
        );
    }
}
