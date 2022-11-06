import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { date } from '../utils/utils';

function Repo() {
  const { repos } = useSelector((store) => store.repos)
  const { repoName } = useParams()

  const repo = repos.find((repo) => repo.name === repoName)

  return (
    <div className="singleRepo container">
      <div className="singleRepo__img-box">
        <img src={repo.owner?.avatar_url} alt="owner avatar" className="singleRepo__img"/>
      </div>
      <div className="singleRepo__details">
        <p>Repository name: {repo.name}</p>
        <p>Repository Fullname: {repo.full_name}</p>
        <p>Language: {repo.language}</p>
        <p>HTTPS Clone url: {repo.clone_url}</p>
        <p>SSH Clone url: {repo.ssh_url}</p>
        <p>Date created: {date(repo.created_at)}</p>

        <div className="singleRepo__tags">
          <span>Repo url: {repo.html_url}</span>
          <span>visibility: {repo.visibility}</span>
          <span>watchers: {repo.watchers}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Repo