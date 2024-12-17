import GeraCpf from './modules/GeraCpf'
import './css/index.css';

(function(){
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();
