import React, { ReactNode, useMemo, useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from '@mui/material';


type Props = {
  show: boolean,
  title: string,
  message: string,
  confirmButtonText: string,
  cancelButtonText?: string,
  onConfirm: () => void,
  onCancel?: () => void,
}


const ConfirmDialog = (props: Props) => {
  const [show, setShow] = useState<boolean>(props.show);

  useMemo(() => {
    setShow(props.show);
  }, [props.show]);

  const onConfirm = () => {
    props.onConfirm();
    setShow(false);
  }

  const onCancel = () => {
    if (props.onCancel) props.onCancel();
    setShow(false);
  }

  return (
    <>
      {
        show &&
        <SweetAlert
          error
          title={props.title}
          onConfirm={onConfirm}
          onCancel={onCancel}
          placeholder='hello'
          customButtons={
            <React.Fragment>
              {
                props.cancelButtonText &&
                <Button 
                  onClick={ onCancel } 
                  color='secondary'
                  sx={{ marginRight: 2 }}
                >
                  { props.cancelButtonText }
                </Button>
              }
              <Button variant='contained' color='error' onClick={ onConfirm }>{ props.confirmButtonText }</Button>
            </React.Fragment>
          }
        />
      }
    </>
  )
}

export default ConfirmDialog;