import React from 'react';
import { Button } from 'reactstrap';
import { useState, useEffect   } from 'react';

function EmailForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [ dialogDismissed, setdialogDismissed ] = useState(false);
  
    const emailPopOver = () => {
      if(!dialogDismissed){
        setTimeout(function () { 
          setIsOpen(true)
          }, 8000);
      }
    };

    const closeDialog = () => {
        setdialogDismissed(true);
        setIsOpen(false);
    }
    
    useEffect(() => {
        emailPopOver()
    });

    return (
        <>
        <dialog open={isOpen}>
            <Button className="close-icon" onClick = {() => closeDialog()}><i className="fa-regular fa-circle-xmark"></i></Button>
            <iframe width="540" height="805" title="brevo" src="https://13b530f6.sibforms.com/serve/MUIFALqV-y18ak_SLmait_u_9iOA1l1_P7IZPZAGeWW8O-rczLKOj-OoWiKHJnd0vfB5lPRK1ob8f2icowaQhjhaxv1D_W6Ds0wAjrGp6SOrQzWj01-ttEUFBo4QVX5gRgBsnBIshVRI8jUM-9XtGvZSojxYzcsekrKQYrXQdeNiMFtaDVrtj40m26j4TZ7451q7muvnxLXQVg_3" frameborder="0" scrolling="auto" allowfullscreen style={{marginLeft: "auto", marginRight: "auto", maxWidth: "100%"}}></iframe>
        </dialog>
        </>
    )
}
export default EmailForm