import Code from "./components/Code"
import H1 from "./components/H1"
import Highlight from "./components/Highlight"
import LargeBr from "./components/LargeBr"
import Panel from "./components/Panel"

function Document() {

  return (
    <div className="">


      <H1>First Leap-Paper Demo!</H1>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat non, iusto dolor iste hic possimus recusandae delectus fugit voluptatibus!
        Libero eum aliquam facere adipisci laborum modi saepe recusandae blanditiis placeat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat non, iusto dolor iste hic possimus recusandae delectus fugit voluptatibus!
        Libero eum aliquam facere adipisci laborum modi saepe recusandae blanditiis placeat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat non, iusto dolor iste hic possimus recusandae delectus fugit voluptatibus!
        Libero eum aliquam facere adipisci laborum modi saepe recusandae blanditiis placeat!
      </div>


      <LargeBr/>

      I even can show some <Code>Code</Code>!

      <LargeBr/>

      <Panel>
        This is a panel and it contains a lot of text.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam, vero! Blanditiis obcaecati, quod nihil ipsum aut dolor dignissimos animi inventore id.
        Laudantium inventore quod sit quos eius ipsa blanditiis ea.
        Magnam, vero! Blanditiis obcaecati, quod nihil ipsum aut dolor dignissimos animi inventore id.
        Laudantium inventore quod sit quos eius ipsa blanditiis ea.
        Magnam, vero! Blanditiis obcaecati, quod nihil ipsum aut dolor dignissimos animi inventore id.
        Laudantium inventore quod sit quos eius ipsa blanditiis ea.
      </Panel>

      <LargeBr/>
      This is <Highlight>highlighed</Highlight> Text!
     
    </div>
  )
}

export default Document
