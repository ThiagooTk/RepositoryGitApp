import React, { Component } from "react";
import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

import api from "../../services/api";

import Container from "../../components/Container";
import { Form, SubmitButton, List } from "./styles";

export default class Main extends Component {
  state = {
    newRepo: " ",
    repositories: [],
    loading: false,
  };

  // Metodo para carregas os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem("repositories");

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Metodo para salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories != this.state.repositories) {
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
  }

  /** Essa função recebe um evento 'onChange do input'
   * e armazena uma valor na variável newRepo
   * */
  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault(); // evitar que o formulário faça o refresh na página

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    // Armazeno na variável data os dados que eu quero da minha resposta.
    const data = {
      name: response.data.full_name,
    };
    /* Vou setar no meu repositories o que armazenei em data
    ... significa estou pegando tudo que já tem em repositories e passando novamente
    Toda vez que vou alterar o vetor do meu estado, eu preciso passar tudo que está nele
    pois no react tem o conceito de imutabilidade de estado, ou seja não posso altera-lo
    diretamente.
    */
    this.setState({
      repositories: [...repositories, data],
      newRepo: "",
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state; // desestruturação da variável

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton disable loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
      /** Verificação no react poss utilizar condicional handler )
       * se tal coisa ? .... se não : .....
       */
    );
  }
}
