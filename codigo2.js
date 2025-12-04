// ---------- QUIZ SISTEMAS EMBARCADOS E MICROCONTROLADORES ----------

// Função de embaralhar
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/*
 Imagens substituídas por versões leves e confiáveis (PNG/JPG)
*/

let quizQuestions = [

    // ---------------------------------------------------------------------
    // 🟦 10 QUESTÕES — CATEGORIA: HISTÓRIA
    // ---------------------------------------------------------------------
    {
        category: "História",
        image: "https://www.thesun.co.uk/wp-content/uploads/2021/07/NINTCHDBPICT000665338105.jpg?strip=all&w=960",
        question: "Em qual país o projeto Arduino foi criado?",
        options: ["Itália", "Estados Unidos", "Alemanha", "Japão"],
        correctAnswer: 0,
        explanation: "O Arduino nasceu na Itália, no Interaction Design Institute Ivrea."
    },
    {
        category: "História",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dIaOKvBnmuNY7fRvC8LYZT0diqnnrpED_w&s",
        question: "Quem é considerado um dos fundadores principais do Arduino?",
        options: ["Massimo Banzi", "Elon Musk", "Dennis Ritchie", "Mark Zuckerberg"],
        correctAnswer: 0,
        explanation: "Massimo Banzi é um dos criadores mais conhecidos do Arduino."
    },
    {
        category: "História",
        image: "https://victorvision.com.br/wp-content/uploads/2021/10/o-que-e-arduino.jpg",
        question: "Qual era o objetivo original do Arduino quando foi criado?",
        options: [
            "Facilitar o ensino de eletrônica e programação para estudantes",
            "Substituir computadores pessoais",
            "Criar um videogame portátil",
            "Automatizar servidores de internet"
        ],
        correctAnswer: 0,
        explanation: "O Arduino foi criado para ser uma plataforma educacional simples e barata."
    },
    {
        category: "História",
        image: "https://i.pinimg.com/736x/63/b2/e8/63b2e8abaf50b45476e2e74f40d14a4d.jpg",
        question: "Em que ano o Arduino foi criado?",
        options: ["2005", "1995", "2010", "2018"],
        correctAnswer: 0,
        explanation: "O Arduino surgiu oficialmente em 2005."
    },
    {
        category: "História",
        image: "https://i.ytimg.com/vi/frVxbb5rB6U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUV3khnVbL3579VBH3yHxjqKhXYg",
        question: "O nome 'Arduino' foi inspirado em:",
        options: [
            "Um bar chamado Bar di Re Arduino",
            "Um antigo rei romano",
            "Um componente eletrônico",
            "Um acrônimo técnico"
        ],
        correctAnswer: 0,
        explanation: "O nome vem do ‘Bar di Re Arduino’, frequentado pelos criadores. O nome 'Arduino' foi inspirado em um bar na cidade de Ivrea, Itália, chamado Bar di Re Arduino. "
    },
    {
        category: "História",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOztJ-jNCYNaws0rUl7vxWv9lIUYmFKY7zJg&s",
        question: "Qual foi uma das primeiras versões da placa Arduino?",
        options: ["Arduino Serial", "Arduino Mega", "Arduino Nano", "Arduino Due"],
        correctAnswer: 0,
        explanation: "O Arduino Serial foi um dos primeiros modelos lançados."
    },
    {
        category: "História",
        image: "https://blog.smartkits.com.br/wp-content/uploads/2020/05/open_source_Smart_kits-e1589910552534.png",
        question: "O Arduino ficou famoso por ser:",
        options: [
            "Hardware e software open-source",
            "Um sistema fechado proprietário",
            "Um hardware militar exclusivo",
            "Um produto industrial sigiloso"
        ],
        correctAnswer: 0,
        explanation: "A filosofia open-source é uma das bases do Arduino."
    },
    {
        category: "História",
        image: "https://cdn.tindiemedia.com/images/resize/SJPTltnLAJO2ezuQ6Lf_jiFGrs0=/p/1200x630/smart/i/284494/products/2024-09-28T13%3A28%3A12.197Z-PXL_20240602_134938229.jpg?1727517862",
        question: "Um dos motivos da popularização do Arduino foi:",
        options: [
            "Baixo custo e facilidade de uso",
            "Alta complexidade",
            "Dependência de ferramentas caras",
            "Uso exclusivo em universidades"
        ],
        correctAnswer: 0,
        explanation: "Seu baixo custo e simplicidade atraíram estudantes e hobistas."
    },
    {
        category: "História",
        image: "https://cdn.tindiemedia.com/images/resize/SJPTltnLAJO2ezuQ6Lf_jiFGrs0=/p/1200x630/smart/i/284494/products/2024-09-28T13%3A28%3A12.197Z-PXL_20240602_134938229.jpg?1727517862",
        question: "Um dos motivos da popularização do Arduino foi:",
        options: [
            "Baixo custo e facilidade de uso",
            "Alta complexidade",
            "Dependência de ferramentas caras",
            "Uso exclusivo em universidades"
        ],
        correctAnswer: 0,
        explanation: "Seu baixo custo e simplicidade atraíram estudantes e hobistas."
    },
    {
        category: "História",
        image: "https://cdn.tindiemedia.com/images/resize/SJPTltnLAJO2ezuQ6Lf_jiFGrs0=/p/1200x630/smart/i/284494/products/2024-09-28T13%3A28%3A12.197Z-PXL_20240602_134938229.jpg?1727517862",
        question: "Um dos motivos da popularização do Arduino foi:",
        options: [
            "Baixo custo e facilidade de uso",
            "Alta complexidade",
            "Dependência de ferramentas caras",
            "Uso exclusivo em universidades"
        ],
        correctAnswer: 0,
        explanation: "Seu baixo custo e simplicidade atraíram estudantes e hobistas."
    },
    {
        category: "História",
        image: "https://cdn.tindiemedia.com/images/resize/SJPTltnLAJO2ezuQ6Lf_jiFGrs0=/p/1200x630/smart/i/284494/products/2024-09-28T13%3A28%3A12.197Z-PXL_20240602_134938229.jpg?1727517862",
        question: "Um dos motivos da popularização do Arduino foi:",
        options: [
            "Baixo custo e facilidade de uso",
            "Alta complexidade",
            "Dependência de ferramentas caras",
            "Uso exclusivo em universidades"
        ],
        correctAnswer: 0,
        explanation: "Seu baixo custo e simplicidade atraíram estudantes e hobistas."
    },
    {
        category: "História",
        image: "https://cdn.tindiemedia.com/images/resize/SJPTltnLAJO2ezuQ6Lf_jiFGrs0=/p/1200x630/smart/i/284494/products/2024-09-28T13%3A28%3A12.197Z-PXL_20240602_134938229.jpg?1727517862",
        question: "Um dos motivos da popularização do Arduino foi:",
        options: [
            "Baixo custo e facilidade de uso",
            "Alta complexidade",
            "Dependência de ferramentas caras",
            "Uso exclusivo em universidades"
        ],
        correctAnswer: 0,
        explanation: "Seu baixo custo e simplicidade atraíram estudantes e hobistas."
    },
    {
        category: "História",
        image: "https://i.ytimg.com/vi/x0NOS7EFxYA/maxresdefault.jpg",
        question: "A comunidade Arduino é conhecida por:",
        options: [
            "Compartilhar projetos e códigos abertamente",
            "Manter tudo fechado e secreto",
            "Focar apenas em robótica avançada",
            "Criar hardware incompatível entre si"
        ],
        correctAnswer: 0,
        explanation: "A comunidade sempre trocou projetos abertamente."
    },
    {
        category: "História",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaqHEJefZhc2BHrH6RRdPOPDUSon-y9TXHWFGhZDeigzfy_z8FichrpI5eRyaeVvyD7zzmqT_7r0OztjcJEqjYkZkC8riEemS2kjjfv0BGE_ZthX2Os9uGAskHGWy-tn4lzSE-ijxnkdo/s1600/Intgerface+IDE.jpg",
        question: "A IDE do Arduino foi criada para:",
        options: [
            "Programar as placas de forma simples e acessível",
            "Criar jogos 3D",
            "Desenvolver sites",
            "Modelagem 3D profissional"
        ],
        correctAnswer: 0,
        explanation: "A IDE foi feita para facilitar a programação dos microcontroladores."
    },

    // ---------------------------------------------------------------------
    // ✅ APLICAÇÕES — BLOCO ÚNICO (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "Aplicações",
        image: "https://i.ytimg.com/vi/TtogVN2rEqQ/maxresdefault.jpg",
        question: "Qual é uma das aplicações mais comuns do Arduino, citada na apostila?",
        options: [
            "Automação residencial e industrial",
            "Criação de antivírus",
            "Edição de vídeo avançada",
            "Compilação de sistemas operacionais"
        ],
        correctAnswer: 0,
        explanation: "O Arduino é amplamente usado em automação devido à sua facilidade de uso."
    },
    {
        category: "Aplicações",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBgMGzEsP9tRSTlf6sZ1W8NePsLqHeF9_2Q&s",
        question: "Um dos usos educacionais do Arduino é:",
        options: [
            "Aprendizado de eletrônica e programação",
            "Treinamento em edição musical",
            "Aulas de design gráfico",
            "Modelagem 3D avançada"
        ],
        correctAnswer: 0,
        explanation: "A apostila destaca o uso do Arduino como ferramenta pedagógica."
    },
    {
        category: "Aplicações",
        image: "https://static.efetividade.net/img/43f6edc3b46f6f6cdfab298fb2c7669dlarge-650px-64847.jpg",
        question: "Robótica é uma aplicação comum do Arduino porque:",
        options: [
            "Ele permite controlar motores, sensores e atuadores",
            "Ele possui o Windows 11 integrado",
            "Ele renderiza gráficos em 3D",
            "Ele substitui um notebook completo"
        ],
        correctAnswer: 0,
        explanation: "Arduino facilita controle de sensores e motores, essenciais em robótica."
    },
    {
        category: "Aplicações",
        image: "https://arduinoecia.com.br/wp-content/uploads/2018/12/Imagem-Destaque-Arduino-Sensor-de-temperatura-HDC1080.jpg",
        question: "O Arduino pode ser usado em sistemas de monitoramento porque:",
        options: [
            "Lê dados de sensores facilmente",
            "Gera vídeos automaticamente",
            "Processa imagens de alta resolução",
            "Executa jogos complexos"
        ],
        correctAnswer: 0,
        explanation: "O Arduino lê dados de sensores de temperatura, luz, umidade, etc."
    },
    {
        category: "Aplicações",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_ec6NJlZJ0Dri19prCDYBGa_EZgUQtxUBg&s",
        question: "A apostila cita o uso do Arduino para prototipagem. Por quê?",
        options: [
            "Porque é barato e fácil de testar circuitos",
            "Porque substitui servidores profissionais",
            "Porque roda aplicativos móveis",
            "Porque é usado em filmagens de Hollywood"
        ],
        correctAnswer: 0,
        explanation: "Seu custo baixo e simplicidade tornam o Arduino ideal para protótipos."
    },
    {
        category: "Aplicações",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaY6EZ9ZPDtEhGgR9PbCkSn7VfUejO2ERegA&s",
        question: "Projetos com sensores, como LM35 e LDR, são comuns no Arduino porque:",
        options: [
            "Ele possui entradas analógicas dedicadas",
            "Ele executa softwares de escritório",
            "Ele é usado como modem",
            "Ele roda jogos pesados"
        ],
        correctAnswer: 0,
        explanation: "As entradas analógicas permitem leitura direta de sensores."
    },
    {
        category: "Aplicações",
        image: "https://cdn.awsli.com.br/2500x2500/468/468162/produto/55385033/8-vtixgl.jpg",
        question: "Em automação residencial, o Arduino pode controlar:",
        options: [
            "Luzes, portas e sistemas de segurança",
            "Servidores de email",
            "Impressoras industriais",
            "Lojas virtuais"
        ],
        correctAnswer: 0,
        explanation: "Ele pode controlar relés, sensores e atuadores domésticos."
    },
    {
        category: "Aplicações",
        image: "https://m.media-amazon.com/images/I/618jfCqUFnL.jpg",
        question: "Em projetos de iluminação, o Arduino é útil porque:",
        options: [
            "Permite controlar LEDs via PWM",
            "Renderiza efeitos especiais em vídeo",
            "Ilumina ambientes sozinho",
            "Produz energia elétrica"
        ],
        correctAnswer: 0,
        explanation: "PWM permite variar brilho de LEDs com precisão."
    },
    {
        category: "Aplicações",
        image: "https://i.ytimg.com/vi/NHdWNFYTEIY/maxresdefault.jpg",
        question: "Em projetos com motores, o Arduino pode:",
        options: [
            "Controlar velocidade e direção",
            "Criar novos motores automaticamente",
            "Substituir uma bateria automotiva",
            "Gerar energia solar"
        ],
        correctAnswer: 0,
        explanation: "Através de PWM e drivers como L298N, o Arduino controla motores."
    },
    {
        category: "Aplicações",
        image: "https://content.instructables.com/FT1/1NOB/K5MHSKLO/FT11NOBK5MHSKLO.jpg?auto=webp&fit=bounds&frame=1&width=1024",
        question: "O Arduino é usado em estações meteorológicas caseiras porque:",
        options: [
            "Conecta sensores de temperatura, umidade e pressão",
            "Preve furacões sozinho",
            "Simula satélites artificiais",
            "Substitui radares meteorológicos"
        ],
        correctAnswer: 0,
        explanation: "Com sensores como DHT11, BMP280 e outros, o Arduino coleta dados ambientais."
    },

    // ---------------------------------------------------------------------
    // ✅ HARDWARE — USB (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "Hardware",
        image: "https://cdn.awsli.com.br/78/78150/produto/14336474/0711a64daf.jpg",
        question: "Qual tipo de conector USB é usado no Arduino Uno para programação e alimentação?",
        options: ["USB Tipo B", "USB-C", "Micro-USB", "Mini-USB"],
        correctAnswer: 0,
        explanation: "O Arduino Uno utiliza o conector USB Tipo B."
    },
    {
        category: "Hardware",
        image: "https://i.ytimg.com/vi/PbjlZlYXsCw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH8CYAC0AWKAgwIABABGF0gXShdMA8=&rs=AOn4CLClERUuNCMBrhykTM7zN1EN8D_Uuw",
        question: "Para que serve a porta USB no Arduino Uno?",
        options: [
            "Programar o microcontrolador e fornecer alimentação",
            "Conectar a internet",
            "Enviar áudio para caixas de som",
            "Ler cartões de memória"
        ],
        correctAnswer: 0,
        explanation: "A porta USB permite enviar código para o Arduino e alimentá-lo."
    },
    {
        category: "Hardware",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TlrcNLo6gLIfstW6iQyYRpcXpfvtlyRirg&s",
        question: "Qual chip no Arduino Uno é responsável pela comunicação USB-Serial?",
        options: ["ATmega16U2", "ESP8266", "PIC16F84", "ARM Cortex-M0"],
        correctAnswer: 0,
        explanation: "O ATmega16U2 faz a ponte USB ↔ Serial no Arduino Uno."
    },
    {
        category: "Hardware",
        image: "https://wiki.ifsc.edu.br/mediawiki/images/6/67/Comunser.jpg",
        question: "Quando o Arduino é conectado via USB ao computador, ele é reconhecido como:",
        options: [
            "Uma porta serial (COM)",
            "Um teclado",
            "Uma impressora",
            "Uma webcam"
        ],
        correctAnswer: 0,
        explanation: "O Arduino aparece como uma porta serial virtual."
    },
    {
        category: "Hardware",
        image: "https://wiki.foz.ifpr.edu.br/wiki/images/thumb/6/63/ArduinoIDE.png/400px-ArduinoIDE.png",
        question: "Qual é a função da porta USB no carregamento do sketch?",
        options: [
            "Enviar o programa compilado para a memória do microcontrolador",
            "Aumentar a velocidade do processador",
            "Limpar automaticamente a EEPROM",
            "Atualizar o Windows"
        ],
        correctAnswer: 0,
        explanation: "A porta USB envia o código compilado para o ATmega328P."
    },
    {
        category: "Hardware",
        image: "https://europe1.discourse-cdn.com/arduino/original/4X/1/4/5/145d96ddb9f02263923032239e0081bc796e870b.png",
        question: "O que acontece se o Arduino estiver alimentado via USB e fonte externa ao mesmo tempo?",
        options: [
            "O hardware seleciona automaticamente a melhor fonte",
            "O Arduino queima imediatamente",
            "A USB deixa de funcionar",
            "A placa entra em modo de segurança"
        ],
        correctAnswer: 0,
        explanation: "O circuito de seleção de energia escolhe a fonte de forma automática."
    },
    {
        category: "Hardware",
        image: "https://png.pngtree.com/png-clipart/20200401/original/pngtree-gold-number-5-png-image_5330870.jpg",
        question: "Qual tensão a porta USB fornece normalmente ao Arduino?",
        options: ["5V", "3.3V", "7V", "12V"],
        correctAnswer: 0,
        explanation: "A alimentação via USB fornece 5V."
    },
    {
        category: "Hardware",
        image: "https://www.icloud.com.br/wp-content/uploads/2016/06/Usando-um-Internet-Service-Provider.png",
        question: "Sem a conexão USB, o Arduino pode ser programado?",
        options: [
            "Sim, usando um gravador externo ISP",
            "Não, é impossível",
            "Apenas com cartão SD",
            "Somente usando Bluetooth"
        ],
        correctAnswer: 0,
        explanation: "É possível programar via ISP sem USB."
    },
    {
        category: "Hardware",
        image: "https://kikee.com.br/wp-content/uploads/2024/10/image.png",
        question: "Qual protocolo de comunicação é transportado pelo cabo USB no Arduino?",
        options: ["Serial (UART)", "I2C", "SPI", "CAN"],
        correctAnswer: 0,
        explanation: "O USB carrega dados convertidos para comunicação serial."
    },
    {
        category: "Hardware",
        image: "https://meetarduino.wordpress.com/wp-content/uploads/2012/03/img_00702.jpg",
        question: "Ao conectar o Arduino via USB, um LED acende indicando:",
        options: [
            "Que a placa está recebendo energia",
            "Que o código já foi enviado",
            "Que o sketch tem erro",
            "Que a porta USB está bloqueada"
        ],
        correctAnswer: 0,
        explanation: "O LED ‘ON’ indica alimentação, seja por USB ou fonte externa."
    },

    // ---------------------------------------------------------------------
    // ✅ PINOS ANALÓGICOS — ADC (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "Pinos Analógicos",
        image: "https://www.sta-eletronica.com.br/resources/artigos/quaissaoascaracteristicasdasprincipaisplacasdearduino2.jpg",
        question: "Quantos pinos analógicos o Arduino Uno possui?",
        options: ["6", "4", "8", "10"],
        correctAnswer: 0,
        explanation: "O Arduino Uno possui 6 entradas analógicas: A0 a A5."
    },
    {
        category: "Pinos Analógicos",
        image: "https://preview.redd.it/help-build-the-ultimate-ben-10-meme-collection-v0-220uayl2lldd1.jpg?width=640&crop=smart&auto=webp&s=dcb5e5c56ae2096f72bdf6e49b8ff1c3123e8841",
        question: "Qual é a resolução do conversor analógico-digital (ADC) do Arduino Uno?",
        options: ["10 bits", "8 bits", "12 bits", "16 bits"],
        correctAnswer: 0,
        explanation: "O ADC do Uno é de 10 bits, produzindo valores de 0 a 1023."
    },
    {
        category: "Pinos Analógicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cmhnkHfdmYPFCZxkyfwELxj4WZmpIqbusw&s",
        question: "Qual é a faixa de valores que o ADC retorna?",
        options: ["0 a 1023", "0 a 255", "0 a 4095", "0 a 999"],
        correctAnswer: 0,
        explanation: "Com 10 bits, o ADC gera valores inteiros entre 0 e 1023."
    },
    {
        category: "Pinos Analógicos",
        image: "https://preview.redd.it/was-listening-to-the-part-about-the-ps5-design-in-this-v0-87no2et68tbb1.jpg?width=640&crop=smart&auto=webp&s=5a22d15d266b7c412ce8926e5b4857973a81af82",
        question: "Qual tensão o Arduino considera como valor máximo no ADC?",
        options: ["5V", "3.3V", "12V", "1.8V"],
        correctAnswer: 0,
        explanation: "No Uno, a referência padrão do ADC é 5V."
    },
    {
        category: "Pinos Analógicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEGeWrg4V2T_rZeQi8E8iT0xO1LZApanTbw&s",
        question: "O ADC do Arduino é responsável por:",
        options: [
            "Converter sinais analógicos em digitais",
            "Modificar frequência PWM",
            "Controlar portas USB",
            "Interpretar códigos de rádio"
        ],
        correctAnswer: 0,
        explanation: "ADC converte tensão analógica em um valor digital."
    },
    {
        category: "Pinos Analógicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aYp1eav9z20It0_-MPUGLp7Xjx28EaUhdQ&s",
        question: "O pino A0 pode ser usado como:",
        options: [
            "Entrada analógica",
            "Saída digital obrigatória",
            "Pino PWM",
            "Barramento I2C"
        ],
        correctAnswer: 0,
        explanation: "A0 é tradicionalmente usado como entrada analógica."
    },
    {
        category: "Pinos Analógicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYszsOI0h1YNqryTQvYI-2X20iQNZteZrFA&sg",
        question: "O comando para ler um valor analógico é:",
        options: ["analogRead()", "analogWrite()", "digitalRead()", "readADC()"],
        correctAnswer: 0,
        explanation: "analogRead() faz a leitura do valor ADC."
    },
    {
        category: "Pinos Analógicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioohoyJziIdayzIkWjKhmVCkCtHcgkEuwhw&s",
        question: "Se a tensão lida no pino A2 for 2.5V, o ADC deve retornar aproximadamente:",
        options: ["512", "1023", "250", "750"],
        correctAnswer: 0,
        explanation: "2.5V é metade de 5V, portanto o ADC retorna cerca de 512 (metade de 1023)."
    },
    {
        category: "Pinos Analógicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmq2jmKrBdslY0ofvII3hcp6L523G4eb7iA&s",
        question: "Sensores como LDR, LM35 e potenciômetros usam os pinos analógicos porque:",
        options: [
            "Variam sua saída de acordo com a tensão",
            "São sempre digitais",
            "Precisam de comunicação I2C",
            "Usam protocolo SPI"
        ],
        correctAnswer: 0,
        explanation: "Esses sensores geram sinais de tensão variáveis, ideais para entradas ADC."
    },
    {
        category: "Pinos Analógicos",
        image: "https://i.sstatic.net/ybUtu.jpg",
        question: "O ADC pode ter sua referência alterada usando:",
        options: ["analogReference()", "adcConfig()", "setADC()", "pinMode()"],
        correctAnswer: 0,
        explanation: "analogReference() ajusta a tensão de referência utilizada pelo ADC."
    },

    // ---------------------------------------------------------------------
    // ✅ PWM — RESOLUÇÃO (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "PWM",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNiLJv7j7wWEoYG_yIR2x1x4_HBsSO9RUdA&s",
        question: "O que significa PWM?",
        options: [
            "Modulação por Largura de Pulso",
            "Potência Máxima de Watts",
            "Protocolo Modular Wireless",
            "Pulsação Mecânica Wave"
        ],
        correctAnswer: 0,
        explanation: "PWM é a técnica que controla potência variando a largura do pulso."
    },
    {
        category: "PWM",
        image: "https://i.ytimg.com/vi/JceS4a9F1t0/maxresdefault.jpg",
        question: "Qual é a resolução típica dos pinos PWM no Arduino Uno?",
        options: ["8 bits (0–255)", "10 bits", "12 bits", "16 bits"],
        correctAnswer: 0,
        explanation: "O Arduino Uno usa resolução de 8 bits para PWM: valores de 0 a 255."
    },
    {
        category: "PWM",
        image: "https://www.shutterstock.com/image-illustration/number-255-black-on-white-260nw-2348909073.jpg",
        question: "Qual valor PWM representa 100% do ciclo ativo no Arduino?",
        options: ["255", "1023", "128", "1"],
        correctAnswer: 0,
        explanation: "Com resolução de 8 bits, 255 representa ciclo ativo de 100%."
    },
    {
        category: "PWM",
        image: "https://i.ytimg.com/vi/PxRSXbU7tbA/maxresdefault.jpg",
        question: "Qual comando é usado para gerar PWM no Arduino?",
        options: ["analogWrite()", "analogRead()", "digitalWrite()", "setPWM()"],
        correctAnswer: 0,
        explanation: "analogWrite() envia um sinal PWM para o pino definido."
    },
    {
        category: "PWM",
        image: "https://www.gradoiluminacao.com.br/wp-content/uploads/temperatura-de-cor.gif",
        question: "O PWM é frequentemente usado para:",
        options: [
            "Controlar o brilho de LEDs",
            "Ler sensores analógicos",
            "Converter sinais digitais em texto",
            "Medir a temperatura da CPU"
        ],
        correctAnswer: 0,
        explanation: "Variar o ciclo ativo altera a intensidade do LED."
    },
    {
        category: "PWM",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Electric_motor.gif",
        question: "Para motores DC, o PWM permite:",
        options: [
            "Controlar a velocidade",
            "Alterar o design da placa",
            "Modificar o firmware do motor",
            "Habilitar comunicação Bluetooth"
        ],
        correctAnswer: 0,
        explanation: "Motores variam a velocidade conforme o ciclo ativo do PWM."
    },
    {
        category: "PWM",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI2co15IyPwg5pQz9MiAXDgWVNL_AcnCKYA&s",
        question: "O que é ciclo ativo (duty cycle) no contexto de PWM?",
        options: [
            "A porcentagem do tempo em que o sinal fica em nível alto",
            "O número de bits enviados por segundo",
            "O número de pinos digitais utilizados",
            "O tamanho do buffer do ADC"
        ],
        correctAnswer: 0,
        explanation: "Duty cycle indica a proporção de tempo em nível alto durante o período."
    },
    {
        category: "PWM",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShSBJc7jyXYBo65dUUvKuJH8Z8JcWeV3sAIw&s",
        question: "Se analogWrite(128) é usado, qual é aproximadamente o ciclo ativo?",
        options: ["50%", "25%", "75%", "5%"],
        correctAnswer: 0,
        explanation: "128 está no meio do intervalo de 0 a 255 → cerca de 50%."
    },
    {
        category: "PWM",
        image: "https://clubedomaker.com/wp-content/uploads/2024/11/image-1-1024x578.png",
        question: "Quais pinos do Arduino Uno suportam PWM?",
        options: ["3, 5, 6, 9, 10 e 11", "0, 1, 2, 4, 7 e 8", "A0 a A5", "Somente o pino 13"],
        correctAnswer: 0,
        explanation: "Esses pinos possuem timers configurados para gerar PWM."
    },
    {
        category: "PWM",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9Yi2mJD7bOedzTe6GE_CvCUgweTU_fJ3bw&s",
        question: "Em controle de servos, o PWM é usado:",
        options: [
            "Para definir a posição do eixo",
            "Somente para ligar e desligar o motor",
            "Para armazenar códigos na EEPROM",
            "Para limpar a memória RAM"
        ],
        correctAnswer: 0,
        explanation: "Servos usam pulsos PWM para definir ângulos específicos."
    },


    // ---------------------------------------------------------------------
    // ✅ COMPONENTES — LED ON (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "Componentes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL0D1EDYk-5Yt_bG1GQLVCJSPiW9ZZTYP6A&s",
        question: "O que indica o LED ON no Arduino?",
        options: [
            "Que a placa está recebendo alimentação",
            "Que o código foi enviado com sucesso",
            "Que o pino 13 está em HIGH",
            "Que há erro na porta USB"
        ],
        correctAnswer: 0,
        explanation: "O LED ON acende sempre que a placa está sendo alimentada por USB ou fonte externa."
    },
    {
        category: "Componentes",
        image: "https://europe1.discourse-cdn.com/arduino/original/4X/1/4/5/145d96ddb9f02263923032239e0081bc796e870b.png",
        question: "O LED ON está conectado diretamente a qual linha da placa?",
        options: ["Linha de 5V", "Linha de 3.3V", "Pino 13", "GND"],
        correctAnswer: 0,
        explanation: "O LED ON é ligado diretamente na linha de 5V."
    },
    {
        category: "Componentes",
        image: "https://f.i.uol.com.br/fotografia/2023/08/15/169211235264db95e08e0a5_1692112352_3x2_md.jpg",
        question: "Quando o LED ON NÃO acende, isso geralmente indica:",
        options: [
            "Ausência de alimentação",
            "Sketch corrompido",
            "Problema no pino 13",
            "Erro no compilador"
        ],
        correctAnswer: 0,
        explanation: "Se o LED ON não acende, a placa não está recebendo energia."
    },
    {
        category: "Componentes",
        image: "https://img.olx.com.br/images/60/602533156125190.jpg",
        question: "O LED ON acende quando a placa é alimentada via:",
        options: ["USB ou fonte externa", "Apenas USB", "Apenas VIN", "Apenas bateria LiPo"],
        correctAnswer: 0,
        explanation: "Qualquer tipo de alimentação energiza a linha de 5V e acende o LED ON."
    },
    {
        category: "Componentes",
        image: "https://curtocircuito.com.br/media/wysiwyg/blog/componentes_basicos/valor_do_resistor.png",
        question: "Qual a função do resistor próximo ao LED ON?",
        options: [
            "Limitar corrente e proteger o LED",
            "Aumentar a intensidade luminosa",
            "Ativar o pino digital 13",
            "Proteger a porta USB de dados"
        ],
        correctAnswer: 0,
        explanation: "O resistor garante que o LED receba a corrente adequada."
    },
    {
        category: "Componentes",
        image: "https://m.media-amazon.com/images/I/518GKwV41pL._AC_UF894,1000_QL80_.jpg",
        question: "O LED ON é considerado:",
        options: ["Um indicador de energia", "Um LED programável", "Um sensor analógico", "Um atuador de motor"],
        correctAnswer: 0,
        explanation: "Ele apenas indica que a placa está energizada."
    },
    {
        category: "Componentes",
        image: "https://pm1.aminoapps.com/6379/f6b0c077fab912f2a0bd35f414361c3b2394dbae_hq.jpg",
        question: "O LED ON pode ser controlado pelo usuário?",
        options: ["Não", "Sim, com digitalWrite()", "Sim, com analogWrite()", "Sim, com Serial.begin()"],
        correctAnswer: 0,
        explanation: "O LED ON não é programável; ele sempre acende com alimentação."
    },
    {
        category: "Componentes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxiW4k4jMR7mJTokTYAjoALfYjvOuBWJ8SQ&s",
        question: "Qual LED da placa Arduino o usuário normalmente controla?",
        options: ["O LED do pino 13", "O LED ON", "O LED da porta USB", "O LED de reset"],
        correctAnswer: 0,
        explanation: "O LED ligado ao pino 13 é o LED programável padrão."
    },
    {
        category: "Componentes",
        image: "https://i.pinimg.com/originals/5a/c7/6e/5ac76e25669855c2c162805d5b0a0361.gif",
        question: "O LED ON permanece aceso enquanto:",
        options: [
            "A placa estiver energizada",
            "O `loop()` estiver executando",
            "Houver dados na porta serial",
            "O pino 13 estiver em HIGH"
        ],
        correctAnswer: 0,
        explanation: "Ele só depende da energia e não do código."
    },
    {
        category: "Componentes",
        image: "https://i.makeagif.com/media/4-07-2021/_mQBO-.gif",
        question: "Se o LED ON piscar ou apagar durante o uso, isso pode indicar:",
        options: [
            "Problema de alimentação ou cabo USB",
            "Erro no sketch",
            "Erro no compilador",
            "Loop infinito na função setup()"
        ],
        correctAnswer: 0,
        explanation: "Quedas ou falhas no LED ON geralmente indicam falha de energia."
    },


    // ---------------------------------------------------------------------
    // ✅ SENSORES — LM35 (10 QUESTÕES)
    // ---------------------------------------------------------------------

    {
        category: "Sensores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstQZQBYi1zthFYSkL4tg0dahnSxYqgUP_8A&s",
        question: "O que o sensor LM35 mede?",
        options: ["Temperatura", "Umidade", "Luz ambiente", "Pressão"],
        correctAnswer: 0,
        explanation: "O LM35 é um sensor analógico que mede temperatura em graus Celsius."
    },
    {
        category: "Sensores",
        image: "https://preview.redd.it/show-the-best-ben-10-memes-or-frames-u-have-i-just-wanna-v0-s49fan72octf1.png?auto=webp&s=788780f475f0ba7cf738c5a1c86564377f0ff7c5",
        question: "Qual é a saída típica do LM35 por grau Celsius?",
        options: ["10 mV/°C", "1 V/°C", "100 mV/°C", "0,1 mV/°C"],
        correctAnswer: 0,
        explanation: "O LM35 aumenta cerca de 10 mV para cada grau Celsius."
    },
    {
        category: "Sensores",
        image: "https://i0.wp.com/portal.vidadesilicio.com.br/wp-content/uploads/2017/03/Imagem-lm35-2.png?fit=1024%2C572&ssl=1",
        question: "Qual tipo de sinal o LM35 produz?",
        options: ["Analógico", "Digital", "PWM", "Serial"],
        correctAnswer: 0,
        explanation: "O LM35 gera uma tensão analógica proporcional à temperatura."
    },
    {
        category: "Sensores",
        image: "https://www.sta-eletronica.com.br/resources/artigos/utilizandoosensordetemperaturalm35comoarduinouno1.jpg",
        question: "Qual pino do Arduino é usado para ler o LM35?",
        options: ["Entradas analógicas (A0–A5)", "Somente pinos digitais", "Pino 13", "Porta USB"],
        correctAnswer: 0,
        explanation: "Como ele gera tensão variável, deve ser lido nas entradas analógicas."
    },
    {
        category: "Sensores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrHq-Q-ygwFFvMz-h7t9bXiZmwuV3yNV1Cg&s",
        question: "Se o LM35 gerar 250 mV, qual é a temperatura aproximada?",
        options: ["25°C", "2.5°C", "50°C", "75°C"],
        correctAnswer: 0,
        explanation: "Como 10 mV = 1°C, então 250 mV = 25°C."
    },
    {
        category: "Sensores",
        image: "https://microcontrollerslab.com/wp-content/uploads/2018/12/AnalogRead-Arduino.jpg",
        question: "Qual comando do Arduino lê o valor do LM35?",
        options: ["analogRead()", "digitalRead()", "analogWrite()", "readTemp()"],
        correctAnswer: 0,
        explanation: "analogRead() lê valores analógicos do ADC."
    },
    {
        category: "Sensores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8NaEDJd-Ao-U3YuAftdp0ZZKIUdTnaJwbw&s",
        question: "Em uma leitura ADC (0–1023), o valor depende de:",
        options: [
            "Tensão de saída do LM35",
            "Velocidade do processador",
            "Quantidade de LEDs conectados",
            "Modo de comunicação serial"
        ],
        correctAnswer: 0,
        explanation: "O ADC converte a tensão analógica do LM35 em valor digital."
    },
    {
        category: "Sensores",
        image: "https://arduinogetstarted.com/images/cover/arduino-lm35-temperature-sensor.jpg",
        question: "O LM35 deve ser alimentado normalmente com:",
        options: ["5V", "12V", "3.3V apenas", "VIN (7–12V)"],
        correctAnswer: 0,
        explanation: "O LM35 funciona perfeitamente com 5V, fornecendo saída proporcional."
    },
    {
        category: "Sensores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2TYjFxmlTKF_MWdyE_9yuHV9P8zmXuZ5Dw&s",
        question: "Para converter o valor ADC em temperatura, é necessário:",
        options: [
            "Converter mV para °C usando a razão 10 mV = 1°C",
            "Multiplicar por 5V diretamente",
            "Usar bibliotecas Wi-Fi",
            "Alterar o clock do Arduino"
        ],
        correctAnswer: 0,
        explanation: "A saída do LM35 é linear: 10 mV por grau Celsius."
    },
    {
        category: "Sensores",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL0p1IE57YMQUhxzqLAO5LQVczIBKYu5jpA&s",
        question: "O LM35 é preferido em projetos iniciantes porque:",
        options: [
            "Não precisa de calibração e tem alta precisão",
            "É digital e usa comunicação I2C",
            "É mais barato que sensores de luz",
            "É o único sensor compatível com Arduino"
        ],
        correctAnswer: 0,
        explanation: "O LM35 já vem calibrado de fábrica e é muito fácil de usar."
    },

    // ---------------------------------------------------------------------
    // ✅ PROTOBOARD — (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "Protoboard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmoKCqSyBhnhP1RlRcgzmJzRFGb0-HdQV9Sg&s",
        question: "Para que serve uma protoboard?",
        options: [
            "Montar circuitos sem necessidade de solda",
            "Armazenar códigos do Arduino",
            "Controlar motores PWM",
            "Programar microcontroladores"
        ],
        correctAnswer: 0,
        explanation: "A protoboard permite montar e testar circuitos de forma rápida, sem solda."
    },
    {
        category: "Protoboard",
        image: "https://i.ytimg.com/vi/WxnqQF-Nn2I/maxresdefault.jpg",
        question: "Como as fileiras horizontais da protoboard são normalmente conectadas?",
        options: [
            "Cada linha inteira é conectada internamente",
            "Não possuem conexão interna",
            "São conectadas apenas no centro",
            "Mudam conforme o tipo de LED usado"
        ],
        correctAnswer: 0,
        explanation: "As linhas horizontais são conectadas internamente para facilitar o uso."
    },
    {
        category: "Protoboard",
        image: "https://www.besterpcba.com/wp-content/uploads/2024/10/protoboard-vs-breadboard.jpg",
        question: "As trilhas verticais geralmente são usadas para:",
        options: [
            "Distribuição de energia (VCC e GND)",
            "Conectar sensores digitais",
            "Enviar PWM",
            "Criar trilhas de dados I2C"
        ],
        correctAnswer: 0,
        explanation: "As colunas laterais são usadas como barramento de energia."
    },
    {
        category: "Protoboard",
        image: "https://images.tcdn.com.br/img/img_prod/672486/kit_500_jumpers_dupont_macho_femea_20_cm_2007_1_f16e740756d14fd65a3d62d6b08f9929_20241128103839.jpg",
        question: "Qual ferramenta muitas vezes acompanha a protoboard?",
        options: [
            "Jumpers (cabos de ligação)",
            "Controle remoto",
            "Sensor ultrassônico",
            "Display LCD"
        ],
        correctAnswer: 0,
        explanation: "Jumpers permitem conectar componentes entre furos da protoboard."
    },
    {
        category: "Protoboard",
        image: "https://i0.wp.com/portal.vidadesilicio.com.br/wp-content/uploads/2018/03/Protoboard.jpg?resize=431%2C324&ssl=1",
        question: "A protoboard é ideal para:",
        options: [
            "Testar circuitos temporários",
            "Produzir placas definitivas",
            "Substituir um microcontrolador",
            "Gravar firmware USB"
        ],
        correctAnswer: 0,
        explanation: "Ela é usada principalmente para testes e prototipagem."
    },
    {
        category: "Protoboard",
        image: "https://nitmaker.com.br/wp-content/uploads/2021/04/protoboard-1.png",
        question: "O que divide a protoboard em dois lados independentes?",
        options: [
            "O canal central",
            "A linha azul do GND",
            "O pino VCC",
            "O LED de alimentação"
        ],
        correctAnswer: 0,
        explanation: "O canal central isola os lados, permitindo encaixar ICs no meio."
    },
    {
        category: "Protoboard",
        image: "https://blog.eletrogate.com/wp-content/uploads/2020/10/diagrama-componentes.png",
        question: "Componentes como sensores, resistores e LEDs:",
        options: [
            "Podem ser ligados diretamente na protoboard",
            "Só funcionam se forem soldados",
            "Precisam de placas especiais",
            "Não funcionam em protoboard"
        ],
        correctAnswer: 0,
        explanation: "A protoboard aceita componentes de terminais rígidos, como resistores e LEDs."
    },
    {
        category: "Protoboard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZp064k2Rg2eUO2ryitkxQWZPU8dopW01hEg&s",
        question: "Qual é uma vantagem da protoboard?",
        options: [
            "Permite modificar circuitos rapidamente",
            "Aumenta a tensão automaticamente",
            "Substitui a função de um osciloscópio",
            "Controla diretamente motores DC"
        ],
        correctAnswer: 0,
        explanation: "A principal vantagem é a facilidade para alterar circuitos."
    },
    {
        category: "Protoboard",
        image: "https://media1.tenor.com/m/CcCDRhgwP78AAAAC/overheat-computer.gif",
        question: "O que acontece se você ligar VCC e GND incorretamente na protoboard?",
        options: [
            "Pode causar curto-circuito",
            "A protoboard corrige automaticamente",
            "Nada acontece",
            "O Arduino desliga temporariamente e volta"
        ],
        correctAnswer: 0,
        explanation: "Ligações incorretas podem causar danos ao circuito."
    },
    {
        category: "Protoboard",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbDEJwQ71RySXYTt1YPwBPaEzP3-U-g0rAA&s",
        question: "Para testar rapidamente um sensor no Arduino, usamos a protoboard porque:",
        options: [
            "Facilita conectar pinos do sensor aos pinos do Arduino",
            "Compila o código mais rápido",
            "Aumenta a corrente dos pinos",
            "Substitui a porta USB"
        ],
        correctAnswer: 0,
        explanation: "A protoboard facilita conexões rápidas e seguras durante testes."
    },

    // ---------------------------------------------------------------------
    // ✅ FUNÇÕES DO ARDUINO — (10 QUESTÕES)
    // ---------------------------------------------------------------------

    {
        category: "Funções",
        image: "https://arduino.italolelis.com/images/screenshot_arduino_ide_blink.png",
        question: "Qual função do Arduino é executada apenas uma vez na inicialização?",
        options: ["setup()", "loop()", "main()", "begin()"],
        correctAnswer: 0,
        explanation: "A função setup() roda uma única vez ao iniciar o programa."
    },
    {
        category: "Funções",
        image: "https://ai.thestempedia.com/wp-content/uploads/2022/07/A19-e1507464693744.png",
        question: "Qual função é executada repetidamente enquanto o Arduino está ligado?",
        options: ["loop()", "setup()", "start()", "repeat()"],
        correctAnswer: 0,
        explanation: "A função loop() roda sem parar enquanto a placa estiver ligada."
    },
    {
        category: "Funções",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRjaIJBlMZw3WoOGJZDJoUBYAkua600iQNw&s",
        question: "A função pinMode() serve para:",
        options: [
            "Configurar pinos como entrada ou saída",
            "Enviar texto para o monitor serial",
            "Ler sensores analógicos",
            "Reiniciar o Arduino"
        ],
        correctAnswer: 0,
        explanation: "pinMode() define se o pino será INPUT, OUTPUT ou INPUT_PULLUP."
    },
    {
        category: "Funções",
        image: "https://docs.m2stud.io/cs/arduino/images/%28Arduino_Tutorials%29_Arduino_Program_Flow.jpg",
        question: "digitalWrite() é usada para:",
        options: [
            "Colocar um pino digital em HIGH ou LOW",
            "Ler valor analógico",
            "Enviar PWM",
            "Alterar a porta serial"
        ],
        correctAnswer: 0,
        explanation: "digitalWrite() controla o nível lógico de um pino digital."
    },


    {
        category: "Funções",
        image: "https://pijaeducation.com/wp-content/uploads/2020/05/Serial-communication-in-arduino.gif",
        question: "Serial.begin(9600) serve para:",
        options: [
            "Iniciar a comunicação serial",
            "Apagar a memória EEPROM",
            "Aumentar o clock do Arduino",
            "Ligar o LED do pino 13"
        ],
        correctAnswer: 0,
        explanation: "Serial.begin() define o baud rate da comunicação serial."
    },
    {
        category: "Funções",
        image: "https://explicamelhor.com/wp-content/uploads/2023/07/screenshot-from-2023-07-20-16-34-44.png?w=496",
        question: "A função delay(1000) faz o Arduino:",
        options: [
            "Esperar 1 segundo",
            "Reiniciar o programa",
            "Ligar a porta USB",
            "Desativar interrupções"
        ],
        correctAnswer: 0,
        explanation: "delay() pausa o código pelo tempo especificado em milissegundos."
    },
    {
        category: "Funções",
        image: "https://i.ytimg.com/vi/eT3gKkxrYIg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzwBzIgseGmwzK1ABWOGnxKQ9WPg",
        question: "digitalRead() é usada para:",
        options: [
            "Ler sinais digitais (HIGH/LOW)",
            "Enviar PWM",
            "Configurar pinos",
            "Limpar o monitor serial"
        ],
        correctAnswer: 0,
        explanation: "digitalRead() lê o estado de um pino digital."
    },
    {
        category: "Funções",
        image: "https://freaklabs.org/wp-content/uploads/2021/11/01-IDE-1.jpg",
        question: "Por que setup() e loop() são obrigatórios em um sketch?",
        options: [
            "Porque definem a estrutura mínima do programa Arduino",
            "Porque controlam a porta USB",
            "Porque ativam o bootloader",
            "Porque permitem usar Wi-Fi"
        ],
        correctAnswer: 0,
        explanation: "Todo sketch precisa de setup() e loop() como estrutura básica."
    },


    // ---------------------------------------------------------------------
    // ✅ COMUNICAÇÃO SERIAL — (10 QUESTÕES)
    // ---------------------------------------------------------------------
    {
        category: "Comunicação Serial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAApO5DTRSAACS8juKHzNp4I5cGIeG1GT9Hw&s",
        question: "Qual comando inicia a comunicação serial no Arduino?",
        options: ["Serial.begin()", "Serial.start()", "serialInit()", "beginSerial()"],
        correctAnswer: 0,
        explanation: "Serial.begin() define o baud rate e inicia a comunicação UART."
    },
    {
        category: "Comunicação Serial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiz7mq8RfuqextWcycB4hjDgRmFmgq88EkBA&s",
        question: "O que significa 'baud rate' na comunicação serial?",
        options: [
            "A taxa de transmissão de dados",
            "O tamanho da memória RAM",
            "A corrente do pino PWM",
            "A capacidade do ADC"
        ],
        correctAnswer: 0,
        explanation: "Baud rate é o número de bits transferidos por segundo."
    },
    {
        category: "Comunicação Serial",
        image: "https://europe1.discourse-cdn.com/arduino/original/4X/0/7/c/07cf85475dbbb5e32199495c196c1bf3a4f3e084.png",
        question: "Qual comando envia texto para o monitor serial?",
        options: ["Serial.println()", "digitalWrite()", "analogWrite()", "sendText()"],
        correctAnswer: 0,
        explanation: "Serial.println() envia dados com quebra de linha."
    },
    {
        category: "Comunicação Serial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvk7SppLNe1VYwwMkLJnMyiVB18f5kAJ2X9g&s",
        question: "Qual comando lê dados recebidos via comunicação serial?",
        options: ["Serial.read()", "Serial.input()", "readSerial()", "serialGet()"],
        correctAnswer: 0,
        explanation: "Serial.read() captura dados vindos pela porta UART."
    },
    {
        category: "Comunicação Serial",
        image: "https://ai.thestempedia.com/wp-content/uploads/2022/08/I2C-Communication-How-It-Works.png",
        question: "O protocolo I2C utiliza quantos fios principais?",
        options: ["2 fios (SDA e SCL)", "1 fio", "3 fios", "5 fios"],
        correctAnswer: 0,
        explanation: "O I2C usa SDA para dados e SCL para clock."
    },
    {
        category: "Comunicação Serial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkEs2-7ONv89G2rwaTVg5O2DY77LSZsSZLw&s",
        question: "O protocolo SPI utiliza qual combinação de sinais?",
        options: [
            "MISO, MOSI, SCK e SS",
            "RX e TX",
            "SDA e SCL",
            "PWM e ADC"
        ],
        correctAnswer: 0,
        explanation: "SPI usa linha de dados de entrada, saída, clock e seleção."
    },
    {
        category: "Comunicação Serial",
        image: "https://blog.arduinoomega.com/wp-content/uploads/2022/02/arduino-uno-rx-tx.png",
        question: "Quais pinos são usados na UART do Arduino Uno?",
        options: ["0 (RX) e 1 (TX)", "2 e 3", "A4 e A5", "9 e 10"],
        correctAnswer: 0,
        explanation: "O Arduino Uno usa pino 0 para RX e pino 1 para TX."
    },
    {
        category: "Comunicação Serial",
        image: "https://preview.redd.it/i2c-would-this-theoretically-work-v0-7t1c43klgtlf1.png?auto=webp&s=28edc3591e9e91ac5e5503942b4e713ddd0746c7",
        question: "O protocolo I2C permite:",
        options: [
            "Vários dispositivos no mesmo barramento",
            "Apenas conexão ponto a ponto",
            "Somente comunicação de alta velocidade",
            "Somente uso com sensores de temperatura"
        ],
        correctAnswer: 0,
        explanation: "I2C suporta vários dispositivos compartilhando SDA e SCL."
    },
    {
        category: "Comunicação Serial",
        image: "https://i.pinimg.com/originals/b4/dd/78/b4dd78266b7af0d57fb036d92d5cad2c.gif",
        question: "Qual vantagem do SPI em relação ao I2C?",
        options: [
            "Maior velocidade de transmissão",
            "Menor número de fios",
            "Menos consumo de energia",
            "Função automática de endereçamento"
        ],
        correctAnswer: 0,
        explanation: "SPI é geralmente muito mais rápido que I2C."
    },
    {
        category: "Comunicação Serial",
        image: "https://i0.wp.com/portal.vidadesilicio.com.br/wp-content/uploads/2017/09/serialmon.png?resize=494%2C297&ssl=1",
        question: "Qual monitor é usado para visualizar valores enviados via Serial?",
        options: ["Monitor Serial da IDE", "Monitor de PWM", "Console I2C", "Visor analógico"],
        correctAnswer: 0,
        explanation: "O monitor serial da IDE exibe textos enviados pelo Arduino via UART."
    },




    // ---------------------------------------------------------------------
    // 🟦 CATEGORIA: SISTEMAS EMBARCADOS — Conceitos básicos
    // ---------------------------------------------------------------------
    {
        category: "Conceitos Básicos",
        image: "https://miro.medium.com/v2/resize:fit:638/1*sgnFZKp3JzLNvIp1ffZhdQ.jpeg",
        question: "O que é um sistema embarcado?",
        options: [
            "Um sistema eletrônico dedicado a uma função específica",
            "Um computador pessoal comum",
            "Um servidor de dados",
            "Um sistema operacional genérico"
        ],
        correctAnswer: 0,
        explanation: "Sistemas embarcados são dispositivos projetados para executar funções específicas."
    },
    {
        category: "Conceitos Básicos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGVng9q3g1NGfFbLD7SO72XPeRc-i9ZTZhA&s",
        question: "Qual é o principal componente de um sistema embarcado?",
        options: ["Microcontrolador", "Disjuntor", "Motor", "Fonte AC trifásica"],
        correctAnswer: 0,
        explanation: "O microcontrolador é o cérebro do sistema embarcado."
    },

    // ---------------------------------------------------------------------
    // 🟦 CATEGORIA: MICROCONTROLADORES
    // ---------------------------------------------------------------------
    {
        category: "Microcontroladores",
        image: "https://images.tcdn.com.br/img/img_prod/900872/atmega328xxx_microcontrolador_7191_2_7c4673aa3d43bed1a555436f0d156393_20250818180030.jpg",
        question: "O ATmega328P pertence a qual família?",
        options: ["AVR", "PIC", "ARM Cortex-M", "ESP"],
        correctAnswer: 0,
        explanation: "O ATmega328P é um MCU AVR usado no Arduino Uno."
    },
    {
        category: "Microcontroladores",
        image: "https://netcomputadores.com.br/dbimg/produtos/pic18f66j50_i_pt_111479_g.jpg",
        question: "Os microcontroladores PIC são fabricados por:",
        options: ["Microchip", "Intel", "AMD", "Sony"],
        correctAnswer: 0,
        explanation: "A Microchip fabrica a família PIC."
    },

    // ---------------------------------------------------------------------
    // 🟦 PROTOCOLOS
    // ---------------------------------------------------------------------
    {
        category: "Comunicação Serial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZj0W_OdmCQpT6xkghbeyiWifs5lsfGLgYg&s",
        question: "O que significa UART?",
        options: [
            "Universal Asynchronous Receiver and Transmitter",
            "Unified Automatic Response Terminal",
            "Universal Algorithmic Relay Transmission",
            "User Access Remote Transfer"
        ],
        correctAnswer: 0,
        explanation: "UART é um protocolo serial assíncrono simples e muito usado."
    },
    {
        category: "Comunicação Serial",
        image: "https://ai.thestempedia.com/wp-content/uploads/2022/08/I2C-Communication-How-It-Works.png",
        question: "O protocolo I2C utiliza quantas linhas?",
        options: ["2", "3", "4", "1"],
        correctAnswer: 0,
        explanation: "O I2C usa SDA (dados) e SCL (clock)."
    },
    {
        category: "Comunicação Serial",
        image: "https://embarcados.com.br/wp-content/uploads/2014/04/esquema_padr%C3%A3o.png",
        question: "O protocolo SPI possui quantas linhas principais?",
        options: ["4", "2", "1", "5"],
        correctAnswer: 0,
        explanation: "SPI usa MOSI, MISO, SCK e SS."
    },

    // ---------------------------------------------------------------------
    // 🟦 PERIFÉRICOS
    // ---------------------------------------------------------------------
    {
        category: "Periféricos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxx73zoWYu84dkMEexe6GL6K_7lnz3zxYRg&s",
        question: "Para que servem os pinos GPIO?",
        options: [
            "Entrada e saída digital",
            "Fonte de energia",
            "Armazenar programas",
            "Regular tensão"
        ],
        correctAnswer: 0,
        explanation: "GPIO significa pinos de uso geral — entrada e saída."
    },
    {
        category: "Periféricos",
        image: "https://images.squarespace-cdn.com/content/v1/5fe7e3738d20536a3fbe1050/1699868178556-N06KMDBCK2RB6V7CN6CI/1699622724901.jpeg",
        question: "O ADC serve para:",
        options: [
            "Converter sinais analógicos em digitais",
            "Gerar PWM",
            "Registrar logs",
            "Controlar Wi-Fi"
        ],
        correctAnswer: 0,
        explanation: "ADC converte tensões analógicas em valores digitais."
    },

    // ---------------------------------------------------------------------
    // 🟦 PWM
    // ---------------------------------------------------------------------
    {
        category: "PWM",
        image: "https://miro.medium.com/0*k0jPOmFTKVsyKDcz",
        question: "O que significa PWM?",
        options: [
            "Modulação por Largura de Pulso",
            "Protocolo Multicanal Wireless",
            "Processador Modular Web",
            "Pulso de Memória Virtual"
        ],
        correctAnswer: 0,
        explanation: "PWM permite controlar potência variando o ciclo ativo."
    },

    // ---------------------------------------------------------------------
    // 🟦 PLACAS
    // ---------------------------------------------------------------------
    {
        category: "Placas e Módulos",
        image: "https://www.blogdarobotica.com/wp-content/uploads/2020/09/ARDUINO-UNO-1024x685.png",
        question: "O Arduino Uno utiliza qual microcontrolador?",
        options: ["ATmega328P", "PIC16F877A", "ESP32", "STM32F103"],
        correctAnswer: 0,
        explanation: "O Uno usa o clássico ATmega328P."
    },
    {
        category: "Placas e Módulos",
        image: "https://cdn.awsli.com.br/600x700/468/468162/produto/40224659/491fa7b39e.jpg",
        question: "O ESP32 possui qual recurso integrado?",
        options: ["Wi-Fi e Bluetooth", "Motor DC", "Amplificador de áudio", "Fonte AC"],
        correctAnswer: 0,
        explanation: "O ESP32 tem Wi-Fi + Bluetooth."
    }
];

// Embaralha perguntas e opções
quizQuestions = shuffleArray(quizQuestions).map(q => {
    const correctOption = q.options[q.correctAnswer];
    const shuffledOptions = shuffleArray([...q.options]);
    return {
        ...q,
        options: shuffledOptions,
        correctAnswer: shuffledOptions.indexOf(correctOption)
    };
});

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function renderQuiz() {
    const q = quizQuestions[currentQuestion];
    const isAnswered = selectedAnswer !== null;

    document.getElementById("quiz-content").innerHTML = `
        <div class="quiz-header">
            <h1 class="quiz-title">SISTEMAS EMBARCADOS E MICROCONTROLADORES</h1>
            <div class="quiz-stats">
                <span class="stat-badge">Questão ${currentQuestion + 1} de ${quizQuestions.length}</span>
                <span class="stat-badge">Pontos: ${score}</span>
            </div>
        </div>

        <div class="progress-bar">
            <div class="progress-fill" style="width:${((currentQuestion + 1) / quizQuestions.length) * 100}%"></div>
        </div>

        <h3 class="category-label">${q.category}</h3>

        <img src="${q.image}" class="question-image">

        <div class="question-text">${q.question}</div>

        <div class="options-container">
            ${q.options.map((opt, i) => `
                <button class="option-btn
                    ${isAnswered ? (i === q.correctAnswer ? 'correct' : (i === selectedAnswer ? 'incorrect' : '')) : ''}"
                    onclick="${isAnswered ? '' : `handleAnswer(${i})`}"
                    ${isAnswered ? 'disabled' : ''}>
                    ${opt}
                </button>
            `).join("")}
        </div>

        ${isAnswered ? `
            <div class="explanation-box">
                <p><strong>Explicação:</strong> ${q.explanation}</p>
            </div>
            <button class="next-btn" onclick="goToNext()">Próxima</button>
        ` : ""}
    `;
}

function handleAnswer(i) {
    selectedAnswer = i;
    if (i === quizQuestions[currentQuestion].correctAnswer) score++;
    renderQuiz();
}

function goToNext() {
    selectedAnswer = null;
    currentQuestion++;
    if (currentQuestion >= quizQuestions.length) return showResults();
    renderQuiz();
}

function showResults() {
    const p = Math.round((score / quizQuestions.length) * 100);
    document.getElementById("quiz-content").innerHTML = `
        <div class="results-container">
            <div class="results-icon">✓</div>
            <h2>Quiz Finalizado!</h2>
            <p>Você acertou ${score} de ${quizQuestions.length}</p>
            <div class="results-progress"><div class="results-progress-fill" style="width:${p}%"></div></div>
            <p class="results-percentage">${p}% de acerto</p>
            <button class="restart-btn" onclick="location.reload()">Voltar ao Menu</button>
        </div>
    `;
}

renderQuiz();
