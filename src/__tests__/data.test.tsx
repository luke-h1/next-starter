import { AboutTech } from '../data/AboutTech';

test('Links data is correct', () => {
  expect(AboutTech).toHaveLength(9);
  expect(AboutTech.map((l) => l.name)).toEqual([
    '✅ Emotion CSS - Styled components library',
    '🚀 ESLint — Typescript / Javascript linter (airbnb config)',
    '🔥 Prettier - Opinionated Code Formatter',
    '🐕 Husky — Use git hooks with ease',
    '🚫 lint-staged - Run linters against staged git files',
    '😎 Absolute import - Import folders and files using the @ prefix',
    '👻 Jest - Unit tests',
    '💫 Cypress - e2e tests',
    '✨ Github Actions - Continuous integration builds / tests',
  ]);
});

for (let i = 0; i < AboutTech.length; i += 1) {
  test(`Link - [${i}] should have keys id & name`, () => {
    expect(AboutTech[i]).toHaveProperty('id');
    expect(AboutTech[i]).toHaveProperty('name');
  });
}

test('AboutTech returns with github actions as last item', () => {
  const Link1 = AboutTech[0];
  const Link2 = AboutTech[1];
  const Link3 = AboutTech[2];
  const Link4 = AboutTech[3];
  const Link5 = AboutTech[4];
  const Link6 = AboutTech[5];
  const Link7 = AboutTech[6];
  const Link8 = AboutTech[7];
  const Link9 = AboutTech[8];

  const i = jest.fn((l) => l.name);
  i(Link1);
  i(Link2);
  i(Link3);
  i(Link4);
  i(Link5);
  i(Link6);
  i(Link7);
  i(Link8);
  i(Link9);

  expect(i).toHaveLastReturnedWith(
    '✨ Github Actions - Continuous integration builds / tests'
  );
});
