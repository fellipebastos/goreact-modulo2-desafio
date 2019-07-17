import React from 'react';
import PropTypes from 'prop-types';

// Import Styles
import { Container, Repository } from './styles';

const CompareList = ({ repositories, removeRepository, refreshRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
          <i
            onClick={() => refreshRepository(repository.id)}
            className="fa fa-fw fa-refresh refresh"
          />
          <i
            onClick={() => removeRepository(repository.id)}
            className="fa fa-fw fa-times dismiss"
          />
        </header>

        <ul>
          <li>
            <i className="icon fa fa-fw fa-star" />
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            <i className="icon fa fa-fw fa-code-fork" />
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            <i className="icon fa fa-fw fa-exclamation-circle" />
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            <i className="icon fa fa-fw fa-clock-o" />
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
