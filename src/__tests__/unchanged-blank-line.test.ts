import { getFixture } from './test-utils';
import parseGitDiff from '../parse-git-diff';

describe('unchanged blank line', () => {
  const fixture = getFixture('unchanged-blank-line');

  it('parse `unchanged-blank-line`', () => {
    expect(parseGitDiff(fixture)).toMatchSnapshot();
  });
});
