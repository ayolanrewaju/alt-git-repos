import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRepos } from "../features/repos/reposSlice";

function Repos() {
  const { repos, isLoading } = useSelector((store) => store.repos)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)

  const total = repos?.length
  const pages = Math.ceil(total / postsPerPage);
  const skip = currentPage * postsPerPage - postsPerPage;

  useEffect(() => {
    dispatch(getRepos())
  }, [])

  if(isLoading) {
    return (
      <div className='loading loading-center'></div>
    )
  }

  return (
    <section className='repos'>
      <div className='container repos__container'>
        <h1 className="repos__title">Repositories</h1>
        {repos.slice(skip, skip + postsPerPage).map((repo, index) => {
          return (
            <div key={index} className="repo">
              <span>
              <Link to={`/repos/${repo.name}`}>
                Repository name: {repo.name}
              </Link>
              <span className="error repo__error">(Do not open in a new tab!)</span>
              </span>
              <p>Github url: {repo.owner?.html_url}</p>
              <p>Language: {repo.language}</p>
              {/* <p>HTTPS Clone url: {repo.clone_url}</p>
              <p>SSH Clone url: {repo.ssh_url}</p> */}
            </div>
          );
        })}

        <div className='repos__buttons'>
          {
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              aria-label="navigates to the previous page"
            >
              previous
            </button>
          }

          <p>
            Pages: {currentPage} of {pages}
          </p>

          {
            <button
              disabled={currentPage >= pages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              aria-label="navigates to the next page"
            >
              next
            </button>
          }
        </div>
      </div>
    </section>
  )
}

export default Repos