import styled from 'styled-components'


const Wrappers = styled.section`
display:grid;
justify-content: center;
align-items: center;
text-align: center;
h1{
  color: var(--clr-secondary-5);
}
img{
  height: 20rem;
}
p {
  margin: 0 auto;
  max-width:40em;
  color: var(--clr-secondary-5);
}
a {
  text-transform: capitalize;
  text-decoration: underline;
  color: var(--clr-primary-6);
  :hover {
    color: var(--clr-secondary-1
      );
  }
}
`

export default Wrappers