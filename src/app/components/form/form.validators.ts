//login.validator.ts
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

//Ejemplo estructura función
export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let valorCampo = control.value

    let today = new Date();
    let expirationDate: Date = new Date(valorCampo);

    if (expirationDate >= today) {
      return null;
    }

    return {'invalidDate': true};

  };
}



export function customValidatorDNI(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valorCampo = control.value;

    // Comprobar que el valor tiene 8 dígitos seguidos de una letra
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;

    if (!dniRegex.test(valorCampo)) {
      return { 'invalidDNIFormat': true }; // Error personalizado
    }


    // Si el valor es válido, no hay errores
    return null;
  };
}
