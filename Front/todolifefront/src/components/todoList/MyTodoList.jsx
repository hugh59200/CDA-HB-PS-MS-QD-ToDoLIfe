import React, { Component } from 'react';
import TodolistService from '../../service/TodolistService';

class MyTodoList extends Component {





  receivedData = () => {

    TodolistService.getList().forEach(element => {
      console.log(element);
    });
    
  

    // TodolistService.MY_LIST().then((res) => {
    //     const data = res.data;
    //     // console.log(data);
    //     let postData = data.map(screen =>

    //         <tr key={screen.id}>
    //             {/* {this.getObject(screen)} */}
    //             {/* <td> {screen.id}</td> */}
    //             <td> {screen.title}</td>
    //             <td> {screen.describe}</td>
    //             <td> <img className="imgP" src={screen.pic} alt="" /></td>
    //             <td> <button className="boutonHisto" onClick={() => this.click(screen)}>Resolu</button> </td>
    //         </tr>
    //     )
    //     this.setState({
    //         list: postData
    //     })
    // });
}



  render() {
    return (
      <>
        {this.receivedData}
      </>
    );
  }
}

export default MyTodoList;


// import React from 'react'

// function MyTodoList() {
//   return (
//     <>
//     <div className="text-center text-white todolist-title">mes TodoList</div>
//     TodolistService.MY_LIST.map(() => (
//     <div
//       className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
//       key={index}
//     >
//       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
//         {todo.text}
//       </div>
//       <div className='icons'>
//         <RiCloseCircleLine
//           onClick={() => removeTodo(todo.id)}
//           className='delete-icon'
//         />
//         <TiEdit
//           onClick={() => setEdit({ id: todo.id, value: todo.text })}
//           className='edit-icon'
//         />
//       </div>
//     </div>
//     </>
//   )







    
// }

// export default MyTodoList






// {/* <table>
  
// </table>
// MY_LIST.map(  () element => {
//    */}
// })

