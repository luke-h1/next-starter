import { Title } from '@src/components/Title';
import { FiGithub } from 'react-icons/fi';
import { AboutTech } from '@src/data/AboutTech';
import { Flex } from './components/Flex';

const index = () => {
  return (
    <Flex>
      <Title data-testid="about-title">About this starter</Title>
      <h2 className="sub-heading">
        Simple starter aimed at providing the barebones to start an awesome
        project.
      </h2>
      <ul className="list">
        {AboutTech
          && AboutTech.map((item) => (
            <li className="list-item" key={item.id}>
              {item.name}
            </li>
          ))}
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
