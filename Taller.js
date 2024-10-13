//Dependencia necesaria para poder hacer input
// Descargable con el paquete npm install prompt-sync en la terminal
const prompt = require('prompt-sync')({sigint: true});

//Objeto de mouse del link https://www.amazon.com/-/es/Pulsar-Gaming-Gears-inal%C3%A1mbrico-interruptores/dp/B0CR1L9NL9/ref=pd_ci_mcx_pspc_dp_d_2_t_2?pd_rd_w=XoUmu&content-id=amzn1.sym.568f3b6b-5aad-4bfd-98ee-d827f03151e4&pf_rd_p=568f3b6b-5aad-4bfd-98ee-d827f03151e4&pf_rd_r=V07G0XBC30GFD5QDX02V&pd_rd_wg=5BUBT&pd_rd_r=c784fb85-a147-40fd-9ee4-c8be74d4fe00&pd_rd_i=B0CLGSVYYV&th=1
const mouseGamer = {
    name: 'Pulsar Xlite V3 Mini',
    price: 99.99,
    features:{
        weight: 52,
        RGB_Lighting: false,
        wireless: true,
        batteryLife: 100,
        sensor: 'PAW3395',
        optic_switch: true
    },
    discount: true, //verifica si el mouse tiene descuento
    discount_Amount: 0.3 //descuento del mouse
}

const showFeatures = () => {
    console.log(`Características del mouse ${mouseGamer.name}`);
    console.log(`\t- Diseño con peso ultraligero de ${mouseGamer.features.weight} gramos`);

    if (mouseGamer.features.RGB_Lighting==true){ console.log('\t- Increibles luces RGB completamente personalizables'); } 
    else { console.log('\t- Diseño sobrio y minimalista sin luces RBG');}

    if (mouseGamer.features.wireless==true){ console.log('\t- Tecnologia inalambrica a 2.4GHz con 1ms de respuesta');} 
    else { console.log('\t- Cable USB duradero y ligero para una concetividad segura e instantanea');}

    console.log(`\t- Bateria es de ${mouseGamer.features.batteryLife} horas de uso de juego`)
    console.log(`\t- Poderoso sensor optico ${mouseGamer.features.sensor} de ultima generacion`);
    
    if (mouseGamer.features.optic_switch==true){ console.log('\t- Switches Opticos para una respuesta a la velocidad de la luz');} 
    else { console.log('\t- Switeches mecanicos con una durabilidad y sonido increible');}

    console.log(`\nEl precio del mouse es $${mouseGamer.price}`);
    if (mouseGamer.discount==true){
        console.log(`El mouse tiene un descuento del ${mouseGamer.discount_Amount*100}%`)
        newPrice = mouseGamer.price - mouseGamer.price*mouseGamer.discount_Amount //calcula el descueto del mouse
        console.log(`\nEl nuevo precio del mouse ahora es de $${newPrice.toFixed(2)}\n`); 
    } 
    else{ console.log(`\nEl mouse no tiene descuento\n`)}
}

const shop = () => {
    console.log(`¿Desea comprar el mouse ${mouseGamer.name}?`);
    console.log('1. Si\n2. No');
    const answer = prompt('Ingrese su respuesta: '); //input para la accion

    if (answer==1){ 
        console.log(`\nUsted ha comprado el increible mouse ${mouseGamer.name} por $${newPrice.toFixed(2)}\n¡Gracias por su compra!`) //.toFixed(2) redondea la cantidad de decimales
    } else{ 
        console.log('\nQuizas en otra ocasion');
    }
}

showFeatures()
shop()