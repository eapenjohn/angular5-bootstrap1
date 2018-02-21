import { Angular5BootstrapPage } from './app.po';

describe('angular5-bootstrap App', () => {
  let page: Angular5BootstrapPage;

  beforeEach(() => {
    page = new Angular5BootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
