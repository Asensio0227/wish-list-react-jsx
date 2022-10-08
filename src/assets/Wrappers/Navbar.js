import styled from 'styled-components';

const Wrapper = styled.nav`
height: 6rem;
background: var(--clr-white);
box-shadow: var(--shadow-2);
.nav-header {

  display: grid;
  margin: 1rem auto;
text-align: center;
grid-template-columns: auto auto 100px;
justify-content: center;
gap: 1.5rem;
h4 {
  margin-bottom: 0;
  font-weight: 400;
  font-size: var(--small-text);
}
img {
  width: 35px !important;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
}
}
.links-container  {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
}
.links {
  display: none;
}
.social-icons {
  display: none;
}
@media (min-width: 768px) {
  .nav-center {
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  max-width: var(--max-width);
  padding: 1rem;
}
  .links-container {
    height: auto !important;
    margin: 1rem auto;
  }
  .links {
    display: flex;
  }
  li {
    margin-right: 1rem;
  }
  a {
    display: block;
    text-align: center;
    transition: var(--transition);
    margin: 1rem auto;
    color: var(--crl-secondary-5);
    text-transform: capitalize;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .links a:hover {
    color: var(--clr-grey-10);
  }
  .social-icons {
    display: flex;
    a {
      margin-right: 1rem;
      justify-content: center;
    color: var(--crl-secondary-5);
    }
  }
}
`;

export default Wrapper;