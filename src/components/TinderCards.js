import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import database from './../firebase'
import './TinderCard.css'

function TinderCards() {
    const [people, setPeople] = useState([])
    console.log(people)
    useEffect(() => {
        database
          .collection('people')
          .onSnapshot(snapshot => 
            setPeople(snapshot.docs.map(doc => doc.data()))
        )
    }, [])

    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person=>(
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']} // prevents swipe up and down    
                >
                    <div style={{backgroundImage:`url(${person.url})`}} 
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>

        </div>
    )
}

export default TinderCards
