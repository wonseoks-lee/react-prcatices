import React from 'react'
import styles from './assets/scss/Email.scss'

const Email = ({email}) => {
    return (
            <li className={styles.Email}>
            {email.firstName}{email.lastName}
            <br/>
            <span>{email.email}</span>
            </li>
        
    )
}

export default Email