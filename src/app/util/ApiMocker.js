const sleep = (duration, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, duration)
    })
}

const MockResponse = (json, delay = 100, status = 200) => {
    const data = {
        status,
        data: json,
    }

    return sleep(delay, data)
}

export const ApiMocker = {
    MockResponse,
}
