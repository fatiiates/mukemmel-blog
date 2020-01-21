import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

HomePage.getInitialProps = async ({ req, query }) => {
  const pageRequest = `http://localhost:3000/api/db/select?page=${query.page ||
    1}&limit=${query.limit || 9}`
    console.log(pageRequest);
  const res = await fetch(pageRequest)
  const json = await res.json()
  return json
}

function HomePage({ postsSelect, page, pageCount }) {
  return (
    <>
      <ul>
        {postsSelect.map(p => (
          <li className="profile" key={p.id}>
            <Link href={`/profile?id=${p.id}`}>
              <a>
                <img src={p.avatar} />
                <span>{p.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        {page > 1 && (
          <Link href={`/?page=${page - 1}&limit=9`}>
            <a>Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
    </>
  )
}

export default HomePage
