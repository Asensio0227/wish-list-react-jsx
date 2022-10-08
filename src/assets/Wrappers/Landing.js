import styled from 'styled-components'

const Wrappers = styled.article`
padding: 2rem;
.page {
  display: grid;
  align-items: center;
  margin: 3rem auto;
}
img {
  display: none;
}
h1{
  font-weight: 700;
}
p {
  color: var(--clr-grey-8);
}
.info {
  display: block;
}
.login-btn {
  color: var(--clr-white);
  background: var(--clr-primary-4);
  :hover {
    background: var(--clr-primary-8);
  }
}
@media (min-width: 768px){
  .page{
    grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  }
  img {
    display: block;
  }
  .info {
    text-align: left;
  }
};
`

export default Wrappers;