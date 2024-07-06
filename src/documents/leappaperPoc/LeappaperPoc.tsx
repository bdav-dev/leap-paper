import Block from "../../leappaper/pageElements/Block";
import Blockquote from "../../leappaper/pageElements/Blockquote";
import Code from "../../leappaper/pageElements/Code";
import CodeBlock from "../../leappaper/pageElements/CodeBlock";
import H1 from "../../leappaper/pageElements/H1";
import H2 from "../../leappaper/pageElements/H2";
import H3 from "../../leappaper/pageElements/H3";
import Marked from "../../leappaper/pageElements/Marked";
import LargeBr from "../../leappaper/pageElements/themeIndependent/LargeBr";
import Highlight from "../../leappaper/pageElements/Highlight";
import Reference from "../../leappaper/pageElements/themeIndependent/referencing/Reference";
import Identify from "../../leappaper/pageElements/themeIndependent/referencing/Identify";
import Page from "../../leappaper/paging/Page";

export default function LeappaperPoc() {

  return (
    <>

      <Page>
        <H1>Document Demo: Themes (First Heading, H1)</H1>

        Lorem <Marked green>ipsum dolor sit amet</Marked> consectetur adipisicing elit.
        Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
        Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
        <LargeBr />

        <Reference target={"testref"}>
          <Marked yellow>This</Marked>
        </Reference> is a reference to another page element!

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
          Also, lets try to <Reference target={"testref"}>reference</Reference> something!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
          Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Soluta provident possimus modi. Officia laborum fuga iste dolor distinctio!
          Minima, eius sapiente commodi tempora officiis deleniti assumenda. Nesciunt quaerat delectus fugit.
        </Block>

        This is some content, that overflows!
      </Page>


      <Page>
        this shold render on a new page.

        <LargeBr/>

        <Identify id="testref">This is the target of a reference!</Identify>
      </Page>

    </>
  )
}
