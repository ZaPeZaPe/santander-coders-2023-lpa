const ano = Number(prompt("Digite o ano"))
if (ano%4==0) {
  if (ano%100==0) {
    window.alert(`${ano} é bissexto`)
  } else {
    window.alert(`${ano} não é bissexto`)
  }
} else {
  window.alert(`${ano} não é bissexto`)
}
