import Realm from 'realm';

export const TODOLIST_SCHEMA = 'TodoList';
export const TODO_SCHEMA = "Todo";

export const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',  //primary key
        name: { type: 'string', indexed: true },
        done: { type: 'bool', default: false },
    }
};

export const TodoListSchema = {
    name: TODOLIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',  //primary key
        name: 'string',
        creationDate: 'date',
        todos: { type: 'list', objectType: TODO_SCHEMA },
    }
};

const databaseOptions = {
    path: 'todoListApp.realm',
    schema: [TodoSchema, TodoListSchema],
    schemaVersion: 0
};

// Todo list functions
export const insertNewTodoList = newTodoList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(TODOLIST_SCHEMA, newTodoList);
            resolve(newTodoList);
        });
    }).catch((error) => reject(error));
});

export const updateTodoList = todoList => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updateTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoList.id);
            updateTodoList.name = todoList.name;
            resolve();
        });
    }).catch((error) => reject(error));
});

export const deleteTodoList = todoListID => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deletingTodoList = realm.objectForPrimaryKey(TODOLIST_SCHEMA, todoListID);
            realm.delete(deletingTodoList);
            resolve();
        })
    }).catch((error) => reject(error));
});

export const deleteAlltodos = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodos = realm.objects(TODOLIST_SCHEMA);
            realm.delete(allTodos);
            resolve();
        })
    }).catch((error) => reject(error));
});

export const queryAllTodoLists = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allTodoList = realm.objects(TODOLIST_SCHEMA);
            resolve(allTodoList);
        })
    }).catch((error) => reject(error));
});

export default new Realm(databaseOptions);
