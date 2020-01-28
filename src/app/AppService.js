import Axios from 'axios'
// import { ApiMocker } from './util/ApiMocker';
// import { DataFaker } from './data/DataFaker';

const LoadAppConfig = () => {
    // return ApiMocker.MockResponse(DataFaker.AppConfig)

    //   const headers = {
    //     'Content-Type': 'application/json',
    //   }

    const url = '/assets/data/app-config.json'

    return Axios.get(url)
}

export const AppService = {
    LoadAppConfig,
}
