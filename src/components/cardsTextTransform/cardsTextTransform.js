import './cardsTextTransform.css'

const Card = ({children, color, textUpper}) => {
    return (
        <div 
        className='card'
        style={{ 
                color: color,
                textTransform: textUpper,
            }}>
            { children }
        </div>
    )
}

Card.defaultProps = {
    color: 'blue',
    textUpper: 'uppercase'
}

export default Card