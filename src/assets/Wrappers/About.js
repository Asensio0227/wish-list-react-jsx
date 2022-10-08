import styled from 'styled-components'

const Wrapper = styled.section`
min-height: calc(100vh - 6rem);
display: grid;
place-items: center;
article {
  h2 {
    color: var(--clr-primary-2);
  }
  text-align: left;
  margin: 3rem auto;
  justify-items: center;
  p {
    letter-spacing: 1px;
  }
}

`

export default Wrapper