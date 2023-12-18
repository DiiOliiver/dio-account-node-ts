import InAccountParameters from "../types/in-accountParameters";
import Account from "./account";

class PeopleAccount extends Account {
    private _doc_id: number

    constructor(doc_id: number, paramenters: InAccountParameters) {
        super(paramenters)
        this._doc_id = doc_id
    }
}

export default PeopleAccount;
