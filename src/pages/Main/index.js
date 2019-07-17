import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

// Import assets
import logo from '../../assets/logo.png';

// Import Styles
import { Container, Form } from './styles';

// Import Components
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState(
        {
          repositoryInput: '',
          repositories: [...this.state.repositories, repository],
          repositoryError: false,
        },
        async () => await localStorage.setItem('repositories', JSON.stringify(this.state.repositories)),
      );
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  // Get local repositories from localStorage
  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('repositories')) || [];

  // Remove repository from localStorage
  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;
    const resultRepositories = repositories.filter(repository => repository.id !== id);

    this.setState(
      { repositories: resultRepositories },
      async () => await localStorage.setItem('repositories', JSON.stringify(this.state.repositories)),
    );
  };

  // Refresh repository stats
  handleRefreshRepository = async (id) => {
    const { repositories } = this.state;
    const repository = repositories.find(repository => repository.id === id);

    try {
      const { data } = await api.get(`/repos/${repository.full_name}`);

      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: repositories.map(repository => (repository.id === data.id ? data : repository)),
      });

      await localStorage.setItem('repositories', JSON.stringify(repositories));
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            value={this.state.repositoryInput}
            placeholder="usuário/repositório"
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList
          repositories={this.state.repositories}
          removeRepository={this.handleRemoveRepository}
          refreshRepository={this.handleRefreshRepository}
        />
      </Container>
    );
  }
}
