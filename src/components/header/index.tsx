import styled from "styled-components";

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderContents>
        <div className="text-container">
          <p>Codelandia</p>
          <p>Blog</p>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Pesquisar no blog"/>
        </div>
      </HeaderContents>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
  width: 100%;
  height: 200px;

  background: linear-gradient(to right, #574ae8, #3ea1db);

  display: flex;
  flex-direction: column;
`;

const HeaderContents = styled.div`
  width: 50%;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-direction: column;

  margin: 3rem auto;
  padding: 1rem;

  .text-container {
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    p {
      color: #fefefe;
      font-size:18px;
    }
  }

  .input-container {
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    input {
      width: 100%;
      padding: 0.5rem;
      background-color: #ffffffb2;
      border-radius: 4px;
      border: transparent;
      outline: transparent;
    }
  }
`;
