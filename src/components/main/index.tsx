import styled from "styled-components"

export default function Main() {
  return (
    <Container>
      <Posts>
        <Post>
          <span>02 de jul, 2021</span>
          <h3>Now it's official, Windows 11 is coming!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam distinctio delectus numquam voluptatum in.</p>
        </Post>
        <Post>
          <span>02 de jul, 2021</span>
          <h3>Now it's official, Windows 11 is coming!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam distinctio delectus numquam voluptatum in.</p>
        </Post>
        <Post>
          <span>02 de jul, 2021</span>
          <h3>Now it's official, Windows 11 is coming!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam distinctio delectus numquam voluptatum in.</p>
        </Post>
        <Post>
          <span>02 de jul, 2021</span>
          <h3>Now it's official, Windows 11 is coming!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam distinctio delectus numquam voluptatum in.</p>
        </Post>
      </Posts>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 2rem auto;
`;

const Posts = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Post = styled.div`
  width: 60%;
  padding: 1rem;
  background-color: #eee;
  border-radius: 4px;
  box-shadow: 1px  1px 4px gray;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  margin-bottom: 4rem;

  flex-wrap: wrap;

  span {
    font-size: 16px;
    color: #9b9b9b;
  }
  p {
    font-size: 18px;
    color: #646464;
  }

`;
