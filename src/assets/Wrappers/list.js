import styled from 'styled-components'

const Wrapper = styled.section`
  .items { 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  div {
    display: grid;
    grid-template-columns: 20px 1fr;
    column-gap: .5rem;
  }
}
.title {
  margin-bottom: 0;
  color: var(--clr-grey-10);
  text-transform: capitalize;
  font-size: var(--extra-small-text);
  letter-spacing: 1px;
}
.check-btn{
  color: var(--primary-2);
  background: var(--primary-7);
  margin-bottom: 0;
}
.check-btn:hover {
  color: var(--clr-primary-1);
}
.edit-btn{
  background: transparent;
  border: transparent;
  font-size: var(--small-text);
  color: hsl(125,44%, 67%);
}
.edit-btn:hover {
  color: hsl(125, 67%, 44%);
}
.delete-btn{
  color: hsl(360,44%, 67%);
  background: transparent;
  font-size: var(--small-text);
  border: transparent;

}
.delete-btn:hover {
  color: hsl(360,67%, 44%);
}
`;

export default Wrapper;