import { Title } from '@src/components/Title';
import { FiGithub } from 'react-icons/fi';
import { Flex } from './components/Flex';

const index = () => {
  return (
    <Flex>
      <Title>About this starter</Title>
      <h2 className="sub-heading">
        Simple starter aimed at providing the barebones to start an awesome
        project.
      </h2>
      <ul className="list">
        <li className="list-item">
          ✅ Emotion CSS - Styled components library
        </li>
        <li className="list-item">
          🚀 ESLint — Typescript / Javascript linter (airbnb config)
        </li>
        <li className="list-item">🔥 Prettier - Opinionated Code Formatter</li>
        <li className="list-item">🐕 Husky — Use git hooks with ease</li>
        <li className="list-item">
          🚫 lint-staged - Run linters against staged git files
        </li>
        <li className="list-item">
          😎 Absolute import - Import folders and files using the @ prefix
        </li>
        <li className="list-item">👻 Jest - Unit tests</li>
        <li className="list-item">💅 Cypress - e2e tests</li>
      </ul>
      <div className="source">
        <a
          href="https://github.com/luke-h1/nextjs-ts-starter"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub fontSize="25px" color="#000" />
        </a>
      </div>
    </Flex>
  );
};
export default index;
