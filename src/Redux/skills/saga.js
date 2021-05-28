import { takeLatest, call, put, all } from 'redux-saga/effects';
import SkillActionTypes from './actiontypes';
import { fetchSkillsFailure, fetchSkillsSuccess } from './actions';
import { rsf } from '../../config/firebaseConfig';

export function* fetchSkillsAsync() {
    try {
        const snapshot = yield call(rsf.firestore.getCollection, 'skills');
        
        let skills;
        snapshot.forEach(skill => {
            skills = {
              ...skills,
              [skill.id]: {
                  id: skill.id,
                  ...skill.data()
              }
            }
        });
        
        yield put(fetchSkillsSuccess(skills))
    }
    catch (error) {
        yield put(fetchSkillsFailure(error))
    }
}

export function* fetchSkillsStart() {
    yield takeLatest(
        SkillActionTypes.FETCH_SKILLS_START,
        fetchSkillsAsync
    )
}

export function* skillSaga() {
    yield all([call(fetchSkillsStart)])
}