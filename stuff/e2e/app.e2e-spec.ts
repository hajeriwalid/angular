import { StuffPage } from './app.po';

describe('stuff App', () => {
  let page: StuffPage;

  beforeEach(() => {
    page = new StuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
