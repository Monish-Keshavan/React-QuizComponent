import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json')

class Quiz extends React.Component{
    constructor(props){  
        super(props);  
        this.state = {  
            quiz_position: 1  
          }  
      }  
    render(){
        return(
            <div>
                <div className='QuizQuestion'><QuizQuestion /></div>
            </div>
        )
    }
}

export default Quiz;
