import styles from './Dashboard.module.css'

import api from '../../../utils/api'

import {useState, useEffect} from 'react'

import RoundedImage from '../../layouts/RoundedImage'

const MyAdoptions = () => {
    const [pets, setPets] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('/pets/myadoptions', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token).token}`
            }
        })
        .then((response) => {
            setPets(response.data.pets)
        })
    }, [token])
  return (
    <section>
        <div className={styles.petlist_header}>
            <h1>Minhas adoções</h1>
        </div>
        <div className={styles.petlist_container}>
            {pets.length > 0 &&
                pets.map((pet) => {
                    <div className={styles.petlist_row} key={pet._id}>
                  <RoundedImage 
                  src={`${process.env.REACT_APP_API}/images/pets/${pet.image[0]}`}
                  alt={pet.name}
                  width='px75'
                  />
                  <span className="bold">{pet.name}</span>
                  <div className={styles.contacts}>
                    <p>
                        <span className="bold">Ligue para:</span> {pet.user.phone}
                    </p>
                    <p>
                        <span className="bold">Fale com:</span> {pet.user.name}
                    </p>
                  </div>
                  <div className={styles.actions}>
                    {pet.available ? 
                    (
                      <p>Adoção em processo</p>
                    ) 
                    : 
                    (
                      <p>Parabéns por concluir a adoção</p>
                    )}
                  </div>
                </div>
                })
            }
            {pets.length === 0 && <p>Ainda não há adoções de Pets.</p>}
        </div>
    </section>
  )
}

export default MyAdoptions