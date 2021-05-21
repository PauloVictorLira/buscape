//JSON

var data = {
    "itens": [
        {
            "id": 1,
            "name": "Smart TV Samsung Série 4",
            "name2": "UN32J4300AG 32 polegadas LED Plana",
            "idHtml": "tv",
            "parcelas": 134.11,
            "aVista": 1139.90,
            "img": "img/layout_0000s_0002s_0003_tv.png",
            "active": false
        },
        {
            "id": 2,
            "name": "Smartphone Apple Iphone 7 128GB",
            "name2": "",
            "idHtml": "iphone",
            "parcelas": 366.56,
            "aVista": 3199.00,
            "img": "img/iphone.png",
            "active": false
        }
    ]
}

//Variáveis

var totalAVista = totalParcelado = 0.00;
var tv = iphone = false;



//Adicionar ao carrinho

function addCart(clicked_id) {
    
    var indice;
    if (clicked_id == "addCart0") {
        indice = 0;
    }
    else if (clicked_id == "addCart1") {
        indice = 1;
    }

    var div = document.createElement('div');
    div.className = 'itemCart';
    div.id = 'itemCart' + indice;
    var close = '<a href="#" class="itemCartDel" id="delCart' + indice + '" onclick="delCart(this.id)">X</a>';
    var img = '<img src="' + data.itens[indice].img + '" alt="' + div.id + '" class="imgProdutoCart" id="' + div.id + '">';
    var titulo = '<p class="tituloProdutoCart" id="' + div.id + '">' + data.itens[indice].name; 
    var titulo2 = '<br>' + data.itens[indice].name2 + '</p>';
    var parcelas = '<p class="valorProdutoCart" id="' + div.id + '">10x R$ ' + data.itens[indice].parcelas;
    var aVista = '<br>ou R$ ' + data.itens[indice].aVista + ' à vista </p>';
    div.innerHTML = close + img + titulo + titulo2 + parcelas + aVista;
    

    if (data.itens[indice].active == false) {
        var element = document.getElementById("dropdownMenu");
        element.insertBefore(div, element.firstChild);
        data.itens[indice].active = true;
        
        //Cálculos
        totalParcelado += data.itens[indice].parcelas;
        totalAVista += data.itens[indice].aVista;

        document.getElementById("valorParcelas").innerHTML = totalParcelado.toFixed(2);
        document.getElementById("valorAVista").innerHTML = totalAVista.toFixed(2);
    }
}

//Remover do carrinho

function delCart(clicked_id) {

    var indice;
    if (clicked_id == "delCart0") {
        indice = 0;
    }
    else if (clicked_id == "delCart1") {
        indice = 1;
    }

    var element = document.getElementById('itemCart' + indice);
    element.parentNode.removeChild( element );
    data.itens[indice].active = false;

    totalParcelado -= data.itens[indice].parcelas;
    totalAVista -= data.itens[indice].aVista;
    
    document.getElementById("valorParcelas").innerHTML = totalParcelado.toFixed(2);
    document.getElementById("valorAVista").innerHTML =  Math.abs(totalAVista.toFixed(2)).toFixed(2);
}

//Abre o dropdownMenu
function openDropdownMenu() {
    document.getElementsByClassName("dropdownMenu")[0].style.transform = "scaleY(1)";
    document.getElementsByClassName("backgroundSide")[0].style.height = "100%";
}

//Fecha o dropdownMenu em Mobile
document.addEventListener('click', evt => {
    var width = $(window).width();    
        if (evt.path.indexOf(document.querySelector('div.dropdownMenu')) < 0) {
            document.getElementsByClassName("dropdownMenu")[0].style.transform = "scaleY(0)";
            document.getElementsByClassName("backgroundSide")[0].style.height = "0";
        }    
}, true);