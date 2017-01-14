import { CloudActions } from '../../sky-segment/actions/cloud/cloud.actions';
import { ICloudStyle, IAnimaArray } from './cloud.types';
import { STYLE_INITIAL_STATE, ANIMA_INITIAL_STATE } from './cloud.initial-state';

// Since cloud actions requires two of the app attributes, bunlde both reducers here

export function cloudReducer(state: ICloudStyle = STYLE_INITIAL_STATE, action: any) {
  switch (action.type) {
    case CloudActions.CHANGE_STYLES:
      return state.size < 10 ? state.push(action.payload.asset) :
        state.update(action.payload.index, val => action.payload.asset);
    default:
      return state;
  }
}

export function animaReducer(state: IAnimaArray = ANIMA_INITIAL_STATE, action: any) {
  switch (action.type) {
    case CloudActions.CHANGE_ANIMA:
      return state.size < 10 ? state.push(action.payload.timeline) :
        state.updateIn([action.payload.index], val => action.payload.timeline);
    case CloudActions.PAUSE_ANIMA:
      state.toArray().forEach((anima) => {
        anima.paused(true);
      });
      return state;
    case CloudActions.RESUME_ANIMA:
      state.toArray().forEach((anima) => {
        anima.paused(false);
      });
      return state;
    default:
      return state;
  }
}
