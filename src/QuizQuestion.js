import React, { Component } from 'react'


class QuizQuestion extends React.Component{
    render(){
        return(
            <main>
                <section>
                <p>// instruction text goes here</p>
                </section>
                <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options[0]}
                </ul>
                </section>
            </main>
        )
    }

}

export default QuizQuestion;