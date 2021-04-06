import React, { useEffect, useState } from 'react'
import { Redirect, useLocation, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const Home = (): JSX.Element => {
  const query = useQuery()

  const [cookie, setCookie] = useCookies(['token'])
  const id = query.get('id')
  console.log(cookie)
  setCookie('token', id, {
    path: '/',
    //sameSite: true,
    //httpOnly: true,
    //secure: true,
  })
  const [redirect, setRedirect] = useState(false)
  useEffect(() => setRedirect(true), [setRedirect])
  return (
    <>
      {/* {redirect ? <Redirect to="/dashboard" /> : null} */}
      <Link to="/dashboard">Got to Dashboard </Link>
      <h1>This is the App</h1>
    </>
  )
}
