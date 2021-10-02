import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppState from '../context/AppState'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgba(0, 0, 0, 0.05)',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: '99999'
    },
    modalCard: {
        background: '#fff',
        borderRadius: '10px',
        width: '90%',
        maxWidth: 600,
        margin: '80px auto',
        padding: '20px'
    },

    modalAction: {
        display: 'flex',
        justifyContent: 'flex-end',

        '& button': {
            border: 'none',
            padding: '10px 30px',
            boxShadow: '0 0.6em 1em -0.6em rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            marginTop:'10px',

            '&:hover': {
                background: 'green',
                color: '#fff'
            }
        }
    }
}))


const Modal = ({ children }) => {
    const classes = useStyles();
    const { dispatch } = useContext(AppState)
    return (
        <div className={classes.root}>
            <div className={classes.modalCard}>
                {children}
                <div className={classes.modalAction}>
                    <button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
