import api from '../../../utils/api'

import styles from './AddPets.module.css'

import { useState } from 'react'

// hooks
import useFlashMessage from '../../../hooks/useFlashMessage'
import PetForm from '../../form/PetForm'

const AddPets = () => {
  const [token] = useState(localStorage.getItem('token') || '')
  const {setFlashMessage} = useFlashMessage()

  async function registerPet(pet) {
    let msgType = 'sucess'

    const formData = new FormData()

    const petFormData = await Object.keys(pet).forEach((key) => {
      if (key === 'images') {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append('images', pet[key][i])
        }
      } else {
        formData.append(key, pet[key])
      }
    })

    formData.append('pet', petFormData)

    const data = await api.post('pets/create', formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token).token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      msgType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, msgType)

  }

  return (
    <section  className={styles.addpet_header}>
        <div>
            <h1>Cadastre um Pet</h1>
            <p>Depois ele ficará disponivel para adoção</p>
        </div>
        <PetForm handleSubmit={registerPet} btnText='Cadastrar Pet' />
    </section>
  )
}

export default AddPets