import { ApiMocker } from './util/ApiMocker'
import { DataFaker } from './data/DataFaker'

const LoadAppConfig = () => {
    const headers = {
        'Content-Type': 'application/json',
    }
   
    return ApiMocker.MockResponse(DataFaker.AppConfig)
}

export const AppService = {
    LoadAppConfig,
}