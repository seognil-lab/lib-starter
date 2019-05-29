// import theAnswer from '../src/index';
import theAnswer from '../dist/index.esm';

test('simple test', () => {
    expect(theAnswer).toBe(42);
});
