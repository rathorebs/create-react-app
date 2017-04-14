import React from 'react';

const theme = {
  background: '#358be0',
  color: '#fff'
};

const one = { padding: '1rem' }
// const two = { padding: one.padding / 2 }

const Grid = (props) => {
  const mergedStyle = props.style ? Object.assign(theme, props.style, one) : one
  return (
    <div className={props.className + ' grid'} style={mergedStyle}>
      { props.children }
    </div>
  )
}

export const Row = (props) => (
  <Grid className="row" style={{'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center'}}>
    { props.children }
  </Grid>
)

export const Col = (props) => (
  <div className={props.className + " col"} style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-between'}}>
    { props.children }
  </div>
)

export const Page = (props) => (
  <Grid className="page grow">
    <h1>{ props.h1 }</h1>
    { props.children }
  </Grid>
)

export const Nav = (props) => (
  <Grid className="nav">
    <nav style={props.style}>
      { props.children }
    </nav>
  </Grid>
)

export const Search = () => (
  <form className="search">
    <input type="search" placeholder="Type anything..." />
    <button type="submit">Go!</button>
  </form>
)


