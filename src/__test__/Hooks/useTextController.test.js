import { renderHook, act } from '@testing-library/react-hooks';
import { useTextController } from '../../Hooks/useTextController';
describe('test useTextController', () => {
  test('should initialize correctly', async () => {
    const { result } = renderHook(() => useTextController('Testing'));
    const {
      current: { index },
    } = result;
    expect(index).toBe(1);
  });

  // test('should evaluate letter correctly', async () => {
  //   const { result, waitForNextUpdate } = renderHook(() =>
  //     useTextController('Testing'),
  //   );
  //   const {
  //     current: { evaluateLetter, index },
  //   } = result;
  //   const resultOfEvaluation = {};

  //   act(() => {
  //     const result = evaluateLetter('T');
  //     Object.assign(resultOfEvaluation, result);
  //   });

  //   expect(resultOfEvaluation.match).toBe(true);
  //   expect(resultOfEvaluation.expected).toEqual('T');

  //   await waitForNextUpdate();

  //   expect(index).toBe(2);

  //   act(() => {
  //     const result = evaluateLetter('');
  //     Object.assign(resultOfEvaluation, result);
  //   });

  //   expect(resultOfEvaluation.match).toBe(true);
  //   expect(resultOfEvaluation.expected).toEqual('T');
  // });
});
