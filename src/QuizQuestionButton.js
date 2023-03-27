import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'


class QuizQuestionButton extends React.Component{
    render(){
        return(
            <li>
                <button>
                    {button_text}
                </button>
            </li>
        )
    }
}

export default QuizQuestionButton