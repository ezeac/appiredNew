import { AppiredNewPage } from './app.po';

describe('appired-new App', function() {
  let page: AppiredNewPage;

  beforeEach(() => {
    page = new AppiredNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
