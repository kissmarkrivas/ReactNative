export const TiposBasicos = () => {
  const nombre:string = 'Kissmark';
  const edad:number = 123;
  const estaActivo:boolean = false

  const poderes = ['Velocidad','Volar','Respira en el agua'];
  return (
    <>
      <h3>Tipos Basicos</h3>
      { nombre },{edad},{(estaActivo)?'activo':'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  )
}
