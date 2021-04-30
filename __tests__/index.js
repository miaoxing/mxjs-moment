import moment from '..';
import originalMoment from 'moment';

describe('test', () => {
  test('basic', () => {
    expect(moment).toBe(originalMoment);

    expect(moment.locales()).toEqual(['en', 'zh-cn']);
  });
});

