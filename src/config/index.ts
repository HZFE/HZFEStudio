export interface IMenuItem {
  title: string;
}

export interface IConfig {
  api: string;
  menu: Array<IMenuItem>;
}

export const menu: Array<IMenuItem> = [
  { title: 'Member' },
  { title: 'Works' },
  { title: 'About us' },
];

const config: IConfig = {
  api: '',
  menu,
};

export default config;
