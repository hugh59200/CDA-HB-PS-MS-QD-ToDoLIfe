const LIST = {
    'list1': { id: 1,text: 'list1'}
    ,'list2': {id: 2,text: 'list2'}
    ,'list3': {id: 3,text: 'list3'}
    ,'list4': {id: 4,text: 'list4'}
    ,'list5': {id: 5,text: 'list5'}
    ,'list6': {id: 6,text: 'list6'}
    ,'list7': {id: 7,text: 'list7'}
    ,'list8': {id: 8,text: 'list8'}
};

class TodolistService {
    getList() {
        return LIST
    }

}

export default new TodolistService()