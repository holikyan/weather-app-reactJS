import Form from "./Form"
import CardTop from "./CardTop"
import CardBody from "./CardBody"
import CardBottom from "./CardBottom"

const Card = () => {
  return (
    <>
      <Form />
      <div>
        <CardTop />
        <CardBody />
        <CardBottom />
      </div>
    </>
  )
}

export default Card
