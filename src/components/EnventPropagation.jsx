import "./EV.css"
export const EventPropagation = () => {
  const grandParent = (event) => {
    console.log("Grand Parent Clicked");
    event.stopPropagation()
  }
  const parent = (event) => {
    console.log("Parent Clicked");
    event.stopPropagation();
  }
  const child = (event) => {
    console.log(event)
    console.log("Child Clicked");
    event.stopPropagation();
  }
  return(
    <>
    <section className="main-div">
      <div className="g-div" onClick={grandParent}>
        <div className="p-div" onClick={parent}>
          <div className="child-div" onClick={child}>
            clickMe
          </div>
        </div>
      </div>
    </section>
    </>
  )
}