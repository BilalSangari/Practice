import "./Ev.css";
export const EventHandling = () => {

  const handleWelcomeUser = (user) => {
    alert(`Welcome ${user} to our page`)
  }
  const handleMouseEnter = () => {
    alert("Mouse is Hovered")
  }
  return(
    <>
    <WelcomeUser
    onClick={() => handleWelcomeUser("Bilal")}
    onMouseEnter={handleMouseEnter}

    />
    </>
  )
}

const WelcomeUser = (props) => {
  const goodby = () => {
    alert("goodby")
  }
  

  return(
  <>
  <button onClick={props.onClick}>onclickEvent</button>
  <button onMouseEnter={props.onMouseEnter}>mouseOver</button>
  <button onClick={goodby}>by</button>
  </>
  );
}