import Axios from 'axios'
// import { ApiMocker } from './util/ApiMocker';
// import { DataFaker } from './data/DataFaker';

const LoadAppConfig = (data) => {
    // return ApiMocker.MockResponse(DataFaker.AppConfig)

    //   const headers = {
    //     'Content-Type': 'application/json',
    //   }

    const url = `${data.url}`

    return Axios.get(url)
}

export const AppService = {
    LoadAppConfig,
}
