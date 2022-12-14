import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist} from "./tasks/Task06(associative array)/Todolist";

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();


    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'completed'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todoListId: string, taskId: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(ts => ts.id !== taskId)})
    }

    function addTask(todoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        //    let newTasks = [task, ...tasks];
        //  setTasks(newTasks);*/
        setTasks({...tasks, [todoListId]: [task, ...tasks[todoListId]]})

    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        /*   let task = tasks.find(t => t.id === taskId);
           if (task) {
               task.isDone = isDone;
           }

           setTasks([...tasks]);*/

        setTasks({...tasks, [todoListId]: tasks[todoListId].map(ts => ts.id === taskId ? {...ts, isDone} : ts)})
    }


    function changeFilter(todoListId: string, value: FilterValuesType) {

        setTodolists(todolists.map(tl => tl.id === todoListId ? {...tl, filter: value} : tl))
    }

    function deleteTL(todoListId: string) {
        setTodolists(todolists.filter(tl => tl.id !== todoListId))
        delete tasks[todoListId]

    }


    return (
        <div className="App">

            {todolists.map(tl => {

                let tasksForTodolist = tasks[tl.id];

                if (tl.filter === "active") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
                }


                return (
                    <Todolist
                        key={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        todoListId={tl.id}
                        deleteTl={deleteTL}

                    />
                )
            })}

        </div>
    );
}

export default App;
