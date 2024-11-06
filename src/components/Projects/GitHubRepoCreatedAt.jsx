import React, { useState, useEffect } from 'react';

function GitHubRepoCreatedAt({ repoName }) {
  const [createdAt, setCreatedAt] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = `https://api.github.com/repos/${repoName}`;
  console.log(apiUrl);

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Hsiang.eu.org'
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      setCreatedAt(data.created_at);
    }).catch(error => {
      setError(error.message);
    });
  }, [repoName]);
  
  return (
    <i>
      {error ? (
        <span>Error fetching repo created date data: {error}</span>
      ) : createdAt ? (
        <span>{createdAt.split('T')[0]}</span>
      ) : (
        <span>Repo Date Loading...</span>
      )}
    </i>
  );
}

export default GitHubRepoCreatedAt;