const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS'
  });
  return formatter.format(valor);
}

export {
  formatearDinero
}