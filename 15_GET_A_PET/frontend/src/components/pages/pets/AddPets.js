import api from '../../../utils/api'

import styles from './AddPets.module.css'

import { useState } from 'react'

// hooks
import useFlashMessage from '../../../hooks/useFlashMessage'

const AddPets = () => {
  return (
    <section  className={styles.addpet_header}>
        <div>
            <h1>Cadastre um Pet</h1>
            <p>Depois ele ficará disponivel para adoção</p>
        </div>
        <p>formulário</p>
    </section>
  )
}

export default AddPets