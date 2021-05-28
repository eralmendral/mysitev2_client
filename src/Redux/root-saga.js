import { all, call } from 'redux-saga/effects';

import { projectSaga } from './projects/saga'
import { experienceSaga } from './experience/saga'
import { skillSaga } from './skills/saga'

export default function* rootSaga() {
    yield all([call(projectSaga), call(experienceSaga), call(skillSaga)])
}