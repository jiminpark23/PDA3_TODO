import React, { useState } from 'react';
import TodoItems from "./TodoItems.js"
import "./todoList.css";

export default function TodoList() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedIndex, setEditedIndex] = useState(null);
    const [color, setColor] = useState('rgb(255, 203, 203)');
    const [backgroundColor, setBackgroundColor] = useState([]);

    const handleInputChange = (e) => {
        //console.log(e);
        setInputText(e.target.value);
    };

    const addTodo = () => {
        if (inputText.trim() !== '') {
            setItems([...items, inputText]);
            setInputText('');
            setBackgroundColor([...backgroundColor, color]);
        }
    }

    const deleteTodo = (index) => {
        if (items.length > 0) {
            //console.log(items);
            items.splice(index, 1);     // 받아온 index부터 1개 원소 삭제
            setItems([...items]);
            //console.log(items);
            backgroundColor.splice(index, 1);
            setBackgroundColor([...backgroundColor]);
        }
    }

    const startEditing = (index) => {
        setIsEditing(true);
        setEditedIndex(index);
        setInputText(items[index]);
    }

    const cancelEditing = () => {
        setIsEditing(false);
        setEditedIndex(null);
        setInputText('');
    }

    const confirmEditedText = () => {
        if (inputText.trim() !== '') {
            const newItems = [...items];
            newItems[editedIndex] = inputText;
            setItems(newItems);
            setIsEditing(false);
            setEditedIndex(null);
            setInputText('');
        }
    }

    const changeColor = (color) => {
        setColor(color);
    }
    
    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={inputText} onChange={handleInputChange} style={{ backgroundColor: `${color}` }}></input>
            <button onClick={addTodo}>입력</button>
            <div class="color-select">
                <button style={{backgroundColor: 'rgb(255, 203, 203)'}} onClick={()=> changeColor('rgb(255, 203, 203)')}></button>
                <button style={{backgroundColor: 'rgb(255, 219, 154)'}} onClick={()=> changeColor('rgb(255, 219, 154)')}></button>
                <button style={{backgroundColor: 'rgb(187, 236, 255)'}} onClick={()=> changeColor('rgb(187, 236, 255)')}></button>
                <button style={{backgroundColor: 'rgb(216, 255, 210)'}} onClick={()=> changeColor('rgb(216, 255, 210)')}></button>
            </div>
            <div className="todolist-container">
                <TodoItems
                    items={items}
                    isEditing={isEditing}
                    editedIndex={editedIndex}
                    startEditing={startEditing}
                    deleteTodo={deleteTodo}
                    cancelEditing={cancelEditing}
                    confirmEditedText={confirmEditedText}
                    backgroundColor={backgroundColor}
                />
            </div>
        </div>
    );
}
