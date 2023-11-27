// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    progressoInvestimento();
    progressoTecnologia()
    progressoMarketing()
})

// progresso em cada curso
porcentagemProgressoInvestimento = 100;
porcentagemProgressoTecnologia = 75;
porcentagemProgressoMarketing = 75;

// funcoes para exibir o progresso em cada curso
function progressoInvestimento() {
    let circuloInvestimento = document.querySelector('#circuloProgressoInvestimento');

    document.getElementById("porcentagemProgressoInvestimento").innerHTML = porcentagemProgressoInvestimento + "%";

    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemProgressoInvestimento) / 100;
}
function progressoTecnologia() {
    let circuloInvestimento = document.querySelector('#circuloProgressoTecnologia');

    document.getElementById("porcentagemProgressoTecnologia").innerHTML = porcentagemProgressoTecnologia + "%";

    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemProgressoTecnologia) / 100;
}
function progressoMarketing() {
    let circuloInvestimento = document.querySelector('#circuloProgressoMarketing');

    document.getElementById("porcentagemProgressoMarketing").innerHTML = porcentagemProgressoMarketing + "%";

    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemProgressoMarketing) / 100;
}

// funcoes trocar pagina
alteracaoPerfil = document.getElementById('alteracaoPerfil')
dashboard = document.getElementById('dashboard');
cursosDashboard = document.getElementById('cursos');
ranking = document.getElementById('ranking');
atividades = document.getElementById('atividades');

function exibirAlteracaoPerfil() {
    if (alteracaoPerfil.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "flex"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "none";
        ranking.style.display = "none";
        atividades.style.display = "none";
    }
}

function exibirDashboard() {
    if (dashboard.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "flex";
        cursosDashboard.style.display = "none";
        ranking.style.display = "none";
        atividades.style.display = "none";
    }
}
function exibirCursos() {
    if (cursosDashboard.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "flex";
        ranking.style.display = "none";
        atividades.style.display = "none";
    }
}
function exibirRanking() {
    if (ranking.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "none";
        ranking.style.display = "flex";
        atividades.style.display = "none";
    }
}
function exibirAtividades() {
    if (atividades.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "none";
        ranking.style.display = "none";
        atividades.style.display = "flex";
    }
}

// ---------- CURSOS ----------
let cursos = document.querySelectorAll('.curso');

cursos.forEach(curso => {
    curso.addEventListener("mouseover", extenderInformacoes);
    curso.addEventListener("mouseleave", retrairInformacoes);
});

function extenderInformacoes(event) {
    let informacoesCurso = event.currentTarget.querySelector('.informacoesCurso');
    if (informacoesCurso.style.height !== "300px") {
        informacoesCurso.style.height = "300px";


    }
}

function retrairInformacoes(event) {
    let informacoesCurso = event.currentTarget.querySelector('.informacoesCurso');
    if (informacoesCurso.style.height !== "125px") {
        informacoesCurso.style.height = "125px";
    }
}

cursos.forEach(curso => {
    curso.addEventListener("mouseover", function(event) {
        let informacoesTexto = event.currentTarget.querySelector('.informacoesTexto');
        if (informacoesTexto) {
            informacoesTexto.textContent = "Descubra o poder das finanças e transforme sua relação com o dinheiro neste curso abrangente sobre finanças.";
        }
    });

    curso.addEventListener("mouseleave", function(event) {
        let informacoesTexto = event.currentTarget.querySelector('.informacoesTexto');
        if (informacoesTexto) {
            informacoesTexto.textContent = "";
        }
    });
});

// popup imagem
popupImagem = document.getElementById('alteracaoPerfil-imagem')

function popupFoto() {
    popupImagem.style.display = "flex";
}

function fecharPopupFoto() {
    popupImagem.style.display = "none";
}

// gerar foto
var mediaStream;

function abrirCamera() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            mediaStream = stream;
            const areaVideo = document.getElementById('camera');
            areaVideo.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Erro ao acessar a câmera', error)
        })
};

function tirarFoto() {
    const areaVideo = document.getElementById('camera');
    const canvas = document.createElement('canvas');

    canvas.width = areaVideo.videoWidth;
    canvas.height = areaVideo.videoHeight;

    const context = canvas.getContext('2d');

    context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height)

    const imageDataURL = canvas.toDataURL();
    const fotoDiv = document.getElementById('foto');

    fotoDiv.style.backgroundImage = `url(${imageDataURL})`;

    const downloadLink = document.createElement('a');
    downloadLink.href = imageDataURL;
    downloadLink.download = 'foto.png';
    downloadLink.textContent = 'Clique para baixar';
    document.body.appendChild(downloadLink);
}

function fecharCamera() {
    navigator.mediaDevices.getUserMedia({ video: false });

    const areaVideo = document.getElementById('camera')

    areaVideo.srcObject = null;
    mediaStream = null;
}
