import React from 'react'
import {Copy} from 'react-feather'

import styles from './ColorCardDescription.module.css'

function ColorCardDescription({background, foreground}) {
  return (
    <div className={styles.colorCardDescription}>
      <div className={styles.iconContainer}>
        <button>
          <Copy size={18}/>
        </button>
      </div>
      <p>fondo: <span>{background}</span></p>
      <p>texto: <span>{foreground}</span></p>
    </div>
  )
}

export default ColorCardDescription