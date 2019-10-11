import { PersonTitlePipe } from './person-title.pipe';

describe('PersonTitlePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
