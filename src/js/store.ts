import { EventBus } from "./event-bus";
import { set } from "./set";
import { User } from "./models/user-model";
import { Chat } from "./models/chat-model";
import { Message } from "./models/message-model";

export enum StoreEvents {
    Updated = "updated",
}

interface State {
	user: User | null;
	chat: Chat | null;
	selected_chat: Chat["id"];
	message: Record<Chat["id"], Message[]>;
}

// наследуем Store от EventBus, чтобы его методы были сразу доступны у экземпляра Store
class Store extends EventBus {
    private state: Indexed = {};

    public getState() {
        return this.state;
    }

    public set(path: string, value: unknown) {
        //to set value for an object placed on path endpoint
        set(this.state, path, value);
        // set(state, 'user.name', 'John'); 
        // console.log(state); // { user: { name: 'John' } } 

        //EventBus method
        this.emit(StoreEvents.Updated);
    }
}

export default new Store(); //store?

// in component

//import store, { StoreEvents } from './store';
class UserProfile extends Block {
    constructor(...args) {
        super(...args)

        //request fot data to Controller
        UserController.getUser();

        //sign for en event
        store.on(StoreEvents.Updated, () => {
            //call for component update by passign data from storage
            this.setProps(store.getState());
        });
    }
    render() {
        // внутри рендер в this.props будут достпны данные из хранилища
    }
}
