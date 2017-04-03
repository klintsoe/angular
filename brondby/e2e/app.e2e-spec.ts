import { BrondbyPage } from './app.po';

describe('brondby App', () => {
  let page: BrondbyPage;

  beforeEach(() => {
    page = new BrondbyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
