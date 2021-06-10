import { Container } from '@src/components/Container';
import { Title } from '@src/components/Title';

export default function Home() {
  return (
    <Container>
      <Title data-testid="index-title">
        Next js typescript minimal starter
      </Title>
    </Container>
  );
}
