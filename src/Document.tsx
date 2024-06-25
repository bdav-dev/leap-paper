import Block from "./pageElements/Block"
import Blockquote from "./pageElements/Blockquote"
import Code from "./pageElements/Code"
import CodeBlock from "./pageElements/CodeBlock"
import H1 from "./pageElements/H1"
import H2 from "./pageElements/H2"
import H3 from "./pageElements/H3"
import Highlight from "./pageElements/Highlight"
import LargeBr from "./pageElements/themeIndependent/LargeBr"

export default function Document() {

  return (
    <>
      <H1>Document Demo: Themes (First Heading, H1)</H1>

      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
      Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
      <LargeBr />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
      Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
      <LargeBr />

      <H2>Second Heading, H2</H2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
      Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
      <LargeBr />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
      Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
      <LargeBr />


      <H3>Third Heading, H3</H3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
      Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
      <LargeBr />

      This is some inline <Code>Code</Code>.

      <LargeBr />

      This is a code block:
      <CodeBlock language="java">
        <pre>
          public static void main(String[] args) &#123;<br />
          &nbsp;&nbsp;System.out.println("Hello world");<br />
          &#125;
        </pre>
      </CodeBlock>

      <LargeBr />

      <Blockquote>
        This is a blockquote with some text inside!
      </Blockquote>

      <LargeBr />

      <Block>
        This is a block full of text.<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
        Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
        Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
      </Block>

      <LargeBr />
      
      And this is <Highlight>highlighed</Highlight> text.

    </>
  )
}
