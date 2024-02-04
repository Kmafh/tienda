export namespace Forms {
   
    const title = 'title';

    const emailLogin: any[] = [
        {
            type: 'text', 
            name: 'email', 
            label: 'Email', 
            inputType: 'text' // Opcional, solo para type === 'text'
        }
    ]

    export const loginGroup:any = [
        { type: 'text', name: 'email', label: 'Email', inputType: 'email' },
        { type: 'text', name: 'password', label: 'Contraseña', inputType: 'password' },
    ]

    export const registerGroup:any = [
        { type: 'text', name: 'nombre', label: 'Nombre', inputType: 'text' },
        { type: 'text', name: 'email', label: 'Email', inputType: 'email' },
        { type: 'text', name: 'password', label: 'Contraseña', inputType: 'password' },
    ]
  }