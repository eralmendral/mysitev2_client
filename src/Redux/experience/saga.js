import { takeLatest, call, put, all } from 'redux-saga/effects';
import ExperienceActionTypes from './actiontypes';
import { fetchExperienceFailure, fetchExperienceSuccess } from './actions';
import { rsf , db} from '../../config/firebaseConfig';

export function* fetchExperiencesAsync() {
    try {
        const colRef = db.collection('experiences');
        const snapshot = yield call(rsf.firestore.getCollection, colRef.orderBy('date_from', 'desc'));
        
        let experiences;
        snapshot.forEach(experience => {
          experiences = {
              ...experiences,
              [experience.id]: {
                  id: experience.id,
                  ...experience.data(),
                  date_from: experience.data().date_from.toDate('MM/dd/yyyy'),
                  date_to: experience.data().date_to.toDate('MM/dd/yyyy')
              }
            }
        });
        
        yield put(fetchExperienceSuccess(experiences))
    }
    catch (error) {
        yield call(console.log('debug error', error))
        yield put(fetchExperienceFailure(error))
    }
}

export function* fetchExperienceStart() {
    yield takeLatest(
        ExperienceActionTypes.FETCH_EXPERIENCE_START,
        fetchExperiencesAsync
    )
}


export function* experienceSaga() {
    yield all([call(fetchExperienceStart)])
}