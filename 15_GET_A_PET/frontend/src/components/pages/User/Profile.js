import {useState, useEffect} from 'react'

import formStyles from '../../form/Form.module.css'
import styles from './Profile.module.css'
import Input from '../../form/Input'


function Profile() {

    function onFileChange () {}

    function handleChange () {}

    const [user, setUser] = useState({})

    return (
        <section >
            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                <p>Preview Imagem</p>
            </div>
            <form className={formStyles.form_container}>
                <Input
                text='Imagem'
                type='file'
                name='image'
                handleOnChange={onFileChange}
                />

                <Input
                text='E-mail'
                type='email'
                name='email'
                placeholder='Digite o seu e-mail'
                handleOnChange={handleChange}
                value={user.email || ''}
                />

                <Input
                text='Nome'
                type='text'
                name='name'
                placeholder='Digite o seu nome'
                handleOnChange={handleChange}
                value={user.name || ''}
                />

                <Input
                text='Telefone'
                type='text'
                name='phone'
                placeholder='Digite o seu telefone'
                handleOnChange={handleChange}
                value={user.phone || ''}
                />

                <Input
                text='Senha'
                type='password'
                name='password'
                placeholder='Digite a sua senha'
                handleOnChange={handleChange}
                value={user.password || ''}
                />

                <Input
                text='Confirmação de Senha'
                type='password'
                name='confirmpassword'
                placeholder='Confirme sua senha'
                handleOnChange={handleChange}
                />

                <input type="submit" value="Editar" />
            </form>
        </section>
    )
}

export default Profile