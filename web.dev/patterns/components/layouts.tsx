import styled from "styled-components"

const AspectRatioRaw: React.FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className={`parent`}>
        <div className="card">
          <h1>Video Title</h1>
          <div className="visual"></div>
          <p>Tony Stark is charismatic and eccentric, he is also very proud, but also very altruist and heroic.</p>
          <p>He did not have a good childhood, and this affects how he acts. Stark is very smart, and a very talented inventor.</p>
          <p>His technology is always very advanced, and Iron Man is his greatest piece of work.</p>
        </div>
      </div>
    </div>
  )
}
export const AspectRatio = styled(AspectRatioRaw)`
  display: inline-block;
  .parent {
    background-color: lightblue;
    border: 1px solid blue;
    display: grid;
    place-items: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .visual {
    background-color: lightgreen;
    border: 1px solid green;
    aspect-ratio: 16 / 9;
  }
`;

const AutobotRaw: React.FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <article className="autobot">
        <div>
          <h1>Autobot</h1>
          <p>description</p>
        </div>
      </article>
    </div>
  )
}

export const Autobot = styled(AutobotRaw)`
  .autobot {
    display: flex;
    border: 1px solid pink;
    background-color: gray;
  }
  .autobot > * {
    margin: auto;
    border: 1px solid pink;
    background-color: gray;
  }
`
