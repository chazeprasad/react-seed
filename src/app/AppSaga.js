import { call, put } from 'redux-saga/effects'
import { Action } from './core/Action'
import { AppService } from './AppService'
import { AppAction } from './AppState'
import { Logger } from './util/Logger'

function* LoadAppConfigWorker(action) {
    try {
        const response = yield call(AppService.LoadAppConfig)
        if (response.status >= 200 && response.status < 300) {
            const { data } = response
            Logger.Info(AppAction.REQUEST_LOAD_APP_CONFIG_SUCCESS)
            yield put(
                Action.Create(AppAction.REQUEST_LOAD_APP_CONFIG_SUCCESS, {
                    config: data,
                })
            )
        } else {
            throw response.error
        }
    } catch (error) {
        Logger.Error(error)
        yield put(Action.Create(AppAction.REQUEST_LOAD_APP_CONFIG_ERROR, { error }))
    }
}

export const AppSaga = {
    LoadAppConfigWorker
}