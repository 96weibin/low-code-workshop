import Heading from './Heading';
import Section from './Section';

const ContextTest: React.FC = ()=>{
    return (
        <Section level={1}>
          <Heading>主标题</Heading>
          <Section level={2}>
            <Heading>副标题</Heading>
            <Heading>副标题</Heading>
            <Heading>副标题</Heading>
            <Section level={3}>
              <Heading>子标题</Heading>
              <Heading>子标题</Heading>
              <Heading>子标题</Heading>
              <Section level={4}>
                <Heading>子子标题</Heading>
                <Heading>子子标题</Heading>
                <Heading>子子标题</Heading>
              </Section>
            </Section>
          </Section>
        </Section>)
}

export default ContextTest