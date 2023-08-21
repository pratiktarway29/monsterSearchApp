import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className='card-list-container'>
        <div className='card-list'>
            {monsters.map(monster => {
                return <Card monster={monster} key={monster.id} />;
            })}
        </div>
    </div>
);

export default CardList;