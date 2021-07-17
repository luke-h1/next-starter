import { AboutTech } from '@src/data/AboutTech';

const Index = () => {
  return (
    <>
      <h1 data-testid="about-title">About this starter</h1>
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
    </>
  );
};
export default Index;
