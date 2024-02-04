export default function RestartButton({dispatch, index, numQuestions}){
    if(index === numQuestions-1)
    return (<button className="btn btn-ui" onClick={() => dispatch({type: 'restart'})}>Restart Quiz</button>
    );
}