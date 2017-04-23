import { ApppoPage } from './app.po';

describe('apppo App', function() {
  let page: ApppoPage;

  beforeEach(() => {
    page = new ApppoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
