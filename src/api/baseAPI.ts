export default class BaseAPI {
    // На случай, если забудете переопределить метод и используете его, — выстрелит ошибкa
    create() { throw new Error("create not implemented")}

    request() { throw new Error("request not implemented")}
    
    update() { throw new Error("update not implemented")}
    
    delete() { throw new Error("delete not implemented")}
}
