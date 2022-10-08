import styled from 'styled-components'


const Wrapper = styled.section`
.page{

  padding: 2rem 2.5rem;
  background: var(--clr-white);
  min-height: calc(100vh 6rem);
  border-radius: 1rem;
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 3rem auto;
  border-top: 10px solid var(--clr-dodger);
}
h2 {
  text-align: center;
  color: var(--clr-secondary-2);
  text-decoration: underline;
}
.form-row {
  display: flex;
}
input {
  width: 100%;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background: var(--clr-grey-1);
  border:transparent;
  padding: .375rem .75rem;
}
.submit-btn {
  font-size: 1.2rem;
  padding: .35rem .75rem;
   border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: transparent;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  text-transform: capitalize;
  font-weight: 700;
  :hover {
    background: var(--clr-primary-10);
  }
}
.container {
   overflow: hidden;
  transition: var(--transition);
  text-align: center;
  background-color: var(--clr-white);
  padding: 2rem 2.5rem;
  box-shadow: var(--shadow-2);
  border-radius: var(--radius);
  margin-top: 2rem;
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 3rem auto;
}
`;

export default Wrapper