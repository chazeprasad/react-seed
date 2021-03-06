import { takeLatest } from 'redux-saga/effects'
import { AppAction } from '../AppState'
import { AppSaga } from '../AppSaga'

function* Watcher() {
    yield takeLatest(
        AppAction.REQUEST_GET_APP_CONFIG,
        AppSaga.LoadAppConfigWorker,
    )
}

export const Saga = {
    Watcher,
}
