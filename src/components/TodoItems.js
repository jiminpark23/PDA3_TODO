import React from 'react';

export default function TodoList({ items, isEditing, editedIndex, startEditing, deleteTodo, cancelEditing, confirmEditedText, backgroundColor }) {
    return (
        <div>
            <div className="todolist-container">
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {items.map((item, index) => (
                        <li key={index} class="todo-list" style={{ backgroundColor: `${backgroundColor[index]}` }}>
                            {item}
                            {isEditing && editedIndex === index ? (
                                <>
                                    <div class="btn-container">
                                        <button onClick={cancelEditing}>취소</button>
                                        <button onClick={confirmEditedText}>확인</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div class="btn-container">
                                        <button onClick={() => startEditing(index)}>수정</button>
                                        <button onClick={() => deleteTodo(index)}>삭제</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}