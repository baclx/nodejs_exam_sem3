import http from '../http-common'

class TutorialDataService {
    getAll() {
        return http.get("");
    }

    create(data) {
        return http.post("", data);
    }
}

export default new TutorialDataService();