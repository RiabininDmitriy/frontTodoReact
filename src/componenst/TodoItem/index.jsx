import React, { Component } from 'react';
import Check from '../Checkbox/index'
import DeleteItem from '../deleteTodo/index'
import { List, Segment } from 'semantic-ui-react'



export default function TodoItem(props) {
    console.log(props)
    return (
        <List.Item >
           
            <List.Content floated='right'>
            <Check done={props.todo.done} id={props.todo.id}></Check>

            <DeleteItem id = {props.todo.id} ></DeleteItem>
            </List.Content> 
            <List.Content>
                {props.todo.todoValue}
            </List.Content>
        </List.Item>
    )
}


