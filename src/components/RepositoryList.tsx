import { Repository, RepositoryItem } from './RepositoryItem';
import { useState } from 'react';
import { useEffect } from 'react';

import '../styles/repositories.scss';

export function RepositoryList() {
  const [respositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  9;
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {respositories.map((repository) => {
          return <RepositoryItem key={repository?.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
