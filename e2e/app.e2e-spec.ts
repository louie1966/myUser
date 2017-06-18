import { MyUserPage } from './app.po';

describe('my-user App', () => {
  let page: MyUserPage;

  beforeEach(() => {
    page = new MyUserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
