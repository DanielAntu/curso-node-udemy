import styles from './Dashboard.module.css'

import api from '../../../utils/api'

import {useState, useEffect} from 'react'

import RoundedImage from '../../layouts/RoundedImage'

const MyAdoptions = () => {
    const [pet, setPet] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('/pets/myadoptions', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token).token}`
            }
        })
        .then((response) => {
            setPet(response.data.pet)
        })
    }, [token])
  return (
    <div>MyAdoptions</div>
  )
}

export default MyAdoptions