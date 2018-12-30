import { NotDeletedPipe } from './not-deleted.pipe';

describe('NotDeletedPipe', () => {
  it('create an instance', () => {
    const pipe = new NotDeletedPipe();
    expect(pipe).toBeTruthy();
  });
});
