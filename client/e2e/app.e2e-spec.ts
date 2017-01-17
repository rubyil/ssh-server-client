import { SshClientPage } from './app.po';

describe('ssh-client App', function() {
  let page: SshClientPage;

  beforeEach(() => {
    page = new SshClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
