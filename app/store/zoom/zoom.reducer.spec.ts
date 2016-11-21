import { Map } from 'immutable';
import { zoomReducer } from './zoom.reducer';
import { INITIAL_STATE } from './zoom.initial-state';
import { ZoomActions } from '../../actions/zoom/zoom.actions';

// Testing for the errorHandler reducer
describe('Zoom Reducer', () => {
  let initialState = INITIAL_STATE;

  // before each test we will reset the state
  beforeEach(() => {
    initialState = zoomReducer(undefined, { type: 'TEST_INIT' });
  });

  // First test is the state object in fact is immutable
  it('should have an immutable initial state', () => {
    expect(Map.isMap(initialState)).toBe(true);
  });

  it('should update the timelines appropriatly', () => {
    const previousState = initialState;
    const nextState     = zoomReducer(previousState, {
      type: ZoomActions.UPDATE_TIMELINES,
      payload: {
        portraitTl: 'this is portrait',
        landscapeTl: 'this is landscape'
    }});

    expect(previousState.getIn(['showHide'])).toBe(true);
    expect(previousState.getIn(['portraitTl'])).toBe(null);
    expect(previousState.getIn(['landscapeTl'])).toBe(null);

    expect(nextState.getIn(['showHide'])).toBe(true);
    expect(nextState.getIn(['portraitTl'])).toBe('this is portrait');
    expect(nextState.getIn(['landscapeTl'])).toBe('this is landscape');

  });

  it('should be true or false', () => {
    const previousState = initialState;
    const nextState     = zoomReducer(previousState, {
      type: ZoomActions.UPDATE_SHOW_HIDE
    });

    expect(previousState.getIn(['showHide'])).toBe(true);
    expect(previousState.getIn(['portraitTl'])).toBe(null);
    expect(previousState.getIn(['landscapeTl'])).toBe(null);

    expect(nextState.getIn(['showHide'])).toBe(false);
    expect(nextState.getIn(['portraitTl'])).toBe(null);
    expect(nextState.getIn(['landscapeTl'])).toBe(null);


  });

});