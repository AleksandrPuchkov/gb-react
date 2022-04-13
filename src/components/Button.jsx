import './styles/Button.css'

export const Button = (props) => {
    return <button onClick={props.click}  className="inputButton">Изменить Message</button>
}