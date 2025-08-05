const learningModules = [
    // IELTS Vocabulary Flashcard Modules
    {
        id: 'flashcard-ielts-general',
        name: 'Flashcard: General',
        gameMode: 'flashcard',
        data: [
            { en: "Analyze", es: "Analizar", ipa: "/ˈænəlaɪz/", example: "You need to analyze the data carefully.", example_es: "Necesitas analizar los datos cuidadosamente." },
            { en: "Assume", es: "Asumir", ipa: "/əˈsuːm/", example: "Never assume you know the answer.", example_es: "Nunca asumas que sabes la respuesta." },
            { en: "Benefit", es: "Beneficio", ipa: "/ˈbenɪfɪt/", example: "What is the main benefit of this approach?", example_es: "¿Cuál es el principal beneficio de este enfoque?" },
            { en: "Concept", es: "Concepto", ipa: "/ˈkɒnsept/", example: "It's important to understand the basic concepts.", example_es: "Es importante entender los conceptos básicos." },
            { en: "Context", es: "Contexto", ipa: "/ˈkɒntekst/", example: "The meaning of a word can change with context.", example_es: "El significado de una palabra puede cambiar con el contexto." },
            { en: "Criteria", es: "Criterios", ipa: "/kraɪˈtɪəriə/", example: "What are the criteria for success?", example_es: "¿Cuáles son los criterios para el éxito?" },
            { en: "Data", es: "Datos", ipa: "/ˈdeɪtə/", example: "We need more data to make a decision.", example_es: "Necesitamos más datos para tomar una decisión." },
            { en: "Factor", es: "Factor", ipa: "/ˈfæktər/", example: "Cost is a major factor in our decision.", example_es: "El costo es un factor importante en nuestra decisión." },
            { en: "Function", es: "Función", ipa: "/ˈfʌŋkʃn/", example: "What is the function of this device?", example_es: "¿Cuál es la función de este dispositivo?" },
            { en: "Issue", es: "Asunto / Problema", ipa: "/ˈɪʃuː/", example: "This is a complex issue with no easy solution.", example_es: "Este es un asunto complejo sin una solución fácil." },
            { en: "Method", es: "Método", ipa: "/ˈmeθəd/", example: "We need a new method to solve this problem.", example_es: "Necesitamos un nuevo método para resolver este problema." },
            { en: "Period", es: "Período", ipa: "/ˈpɪəriəd/", example: "This was a period of great change.", example_es: "Este fue un período de grandes cambios." },
            { en: "Principle", es: "Principio", ipa: "/ˈprɪnsəpl/", example: "This is a fundamental principle of science.", example_es: "Este es un principio fundamental de la ciencia." },
            { en: "Role", es: "Rol / Papel", ipa: "/rəʊl/", example: "He played a key role in the project.", example_es: "Él jugó un papel clave en el proyecto." },
            { en: "Sector", es: "Sector", ipa: "/ˈsektər/", example: "The technology sector is growing rapidly.", example_es: "El sector tecnológico está creciendo rápidamente." },
            { en: "Source", es: "Fuente", ipa: "/sɔːrs/", example: "What is the source of this information?", example_es: "¿Cuál es la fuente de esta información?" },
            { en: "Structure", es: "Estructura", ipa: "/ˈstrʌktʃər/", example: "The structure of the building is very complex.", example_es: "La estructura del edificio es muy compleja." },
            { en: "Theory", es: "Teoría", ipa: "/ˈθɪəri/", example: "This is just a theory, it hasn't been proven.", example_es: "Esto es solo una teoría, no ha sido probada." },
            { en: "Variable", es: "Variable", ipa: "/ˈveəriəbl/", example: "There are too many variables to consider.", example_es: "Hay demasiadas variables a considerar." },
            { en: "Trend", es: "Tendencia", ipa: "/trend/", example: "There is a growing trend towards online shopping.", example_es: "Hay una tendencia creciente hacia las compras en línea." }
        ]
    },
    {
        id: 'flashcard-ielts-environment',
        name: 'Flashcard: Environment',
        gameMode: 'flashcard',
        data: [
            { en: "Environment", es: "Medio Ambiente", ipa: "/ɪnˈvaɪrənmənt/", example: "We need to protect the environment.", example_es: "Necesitamos proteger el medio ambiente." },
            { en: "Pollution", es: "Contaminación", ipa: "/pəˈluːʃn/", example: "Air pollution is a major global issue.", example_es: "La contaminación del aire es un problema mundial importante." },
            { en: "Sustainable", es: "Sostenible", ipa: "/səˈsteɪnəbl/", example: "We need to find sustainable energy sources.", example_es: "Necesitamos encontrar fuentes de energía sostenibles." },
            { en: "Conservation", es: "Conservación", ipa: "/ˌkɒnsərˈveɪʃn/", example: "Wildlife conservation is crucial for biodiversity.", example_es: "La conservación de la vida silvestre es crucial para la biodiversidad." },
            { en: "Biodiversity", es: "Biodiversidad", ipa: "/ˌbaɪoʊdaɪˈvɜːrsəti/", example: "The Amazon rainforest has incredible biodiversity.", example_es: "La selva amazónica tiene una biodiversidad increíble." },
            { en: "Deforestation", es: "Deforestación", ipa: "/diːˌfɒrɪˈsteɪʃn/", example: "Deforestation is a major cause of climate change.", example_es: "La deforestación es una causa principal del cambio climático." },
            { en: "Ecosystem", es: "Ecosistema", ipa: "/ˈiːkoʊsɪstəm/", example: "A coral reef is a very delicate ecosystem.", example_es: "Un arrecife de coral es un ecosistema muy delicado." },
            { en: "Emissions", es: "Emisiones", ipa: "/ɪnˈmɪʃnz/", example: "We need to reduce our carbon emissions.", example_es: "Necesitamos reducir nuestras emisiones de carbono." },
            { en: "Renewable", es: "Renovable", ipa: "/rɪˈnjuːəbl/", example: "Solar and wind are renewable energy sources.", example_es: "La solar y la eólica son fuentes de energía sostenibles." },
            { en: "Fossil fuels", es: "Combustibles fósiles", ipa: "/ˈfɒsl fjuːəlz/", example: "The world is too dependent on fossil fuels.", example_es: "El mundo depende demasiado de los combustibles fósiles." },
            { en: "Global warming", es: "Calentamiento global", ipa: "/ˌɡloʊbl ˈwɔːrmɪŋ/", example: "Global warming is causing sea levels to rise.", example_es: "El calentamiento global está provocando el aumento del nivel del mar." },
            { en: "Habitat", es: "Hábitat", ipa: "/ˈhæbɪtæt/", example: "The destruction of habitat threatens many species.", example_es: "La destrucción del hábitat amenaza a muchas especies." },
            { en: "Recycle", es: "Reciclar", ipa: "/ˌriːˈsaɪkl/", example: "It's important to recycle paper, glass, and plastic.", example_es: "Es importante reciclar papel, vidrio y plástico." },
            { en: "Waste", es: "Residuos / Desperdicio", ipa: "/weɪst/", example: "We need to reduce the amount of household waste.", example_es: "Necesitamos reducir la cantidad de residuos domésticos." },
            { en: "Carbon footprint", es: "Huella de carbono", ipa: "/ˌkɑːrbən ˈfʊtprɪnt/", example: "Flying has a large carbon footprint.", example_es: "Volar tiene una gran huella de carbono." },
            { en: "Climate change", es: "Cambio climático", ipa: "/ˈklaɪmət tʃeɪndʒ/", example: "Climate change is one of the biggest challenges we face.", example_es: "El cambio climático es uno de los mayores desafíos que enfrentamos." },
            { en: "Contamination", es: "Contaminación", ipa: "/kənˌtæmɪˈneɪʃn/", example: "The contamination of the river was a disaster.", example_es: "La contaminación del río fue un desastre." },
            { en: "Erosion", es: "Erosión", ipa: "/ɪˈroʊʒn/", example: "Soil erosion is a serious problem for farmers.", example_es: "La erosión del suelo es un problema grave para los agricultores." },
            { en: "Greenhouse effect", es: "Efecto invernadero", ipa: "/ˈɡriːnhaʊs ɪˌfekt/", example: "The greenhouse effect traps heat in the atmosphere.", example_es: "El efecto invernadero atrapa el calor en la atmósfera." },
            { en: "Preservation", es: "Preservación", ipa: "/ˌprezərˈveɪʃn/", example: "The preservation of ancient forests is vital.", example_es: "La preservación de los bosques antiguos es vital." }
        ]
    },
    {
        id: 'flashcard-ielts-technology',
        name: 'Flashcard: Technology',
        gameMode: 'flashcard',
        data: [
            { en: "Innovation", es: "Innovación", ipa: "/ˌɪnəˈveɪʃn/", example: "The company is a leader in technological innovation.", example_es: "La empresa es líder en innovación tecnológica." },
            { en: "Algorithm", es: "Algoritmo", ipa: "/ˈælɡərɪðəm/", example: "Search engines use a complex algorithm to rank pages.", example_es: "Los motores de búsqueda utilizan un algoritmo complejo para clasificar las páginas." },
            { en: "Automation", es: "Automatización", ipa: "/ˌɔːtəˈmeɪʃn/", example: "Automation has increased productivity in factories.", example_es: "La automatización ha aumentado la productividad en las fábricas." },
            { en: "Cybersecurity", es: "Ciberseguridad", ipa: "/ˈsaɪbərsɪˌkjʊrəti/", example: "Cybersecurity is essential to protect sensitive data.", example_es: "La ciberseguridad es esencial para proteger los datos confidenciales." },
            { en: "Artificial Intelligence", es: "Inteligencia Artificial", ipa: "/ˌɑːrtɪˌfɪʃl ɪnˈtelɪdʒəns/", example: "Artificial Intelligence is transforming many industries.", example_es: "La Inteligencia Artificial está transformando muchas industrias." },
            { en: "Database", es: "Base de datos", ipa: "/ˈdeɪtəbeɪs/", example: "The company maintains a large database of customers.", example_es: "La empresa mantiene una gran base de datos de clientes." },
            { en: "Digital", es: "Digital", ipa: "/ˈdɪdʒɪtl/", example: "We are living in a digital age.", example_es: "Vivimos en una era digital." },
            { en: "Device", es: "Dispositivo", ipa: "/dɪˈvaɪs/", example: "A smartphone is a very useful device.", example_es: "Un teléfono inteligente es un dispositivo muy útil." },
            { en: "Gadget", es: "Aparato / Artilugio", ipa: "/ˈɡædʒɪt/", example: "He loves buying the latest electronic gadgets.", example_es: "Le encanta comprar los últimos aparatos electrónicos." },
            { en: "Network", es: "Red", ipa: "/ˈnetwɜːrk/", example: "The office network was down for an hour.", example_es: "La red de la oficina estuvo caída durante una hora." },
            { en: "Software", es: "Software", ipa: "/ˈsɒftweər/", example: "You need to install the new software to use this feature.", example_es: "Necesitas instalar el nuevo software para usar esta función." },
            { en: "Hardware", es: "Hardware", ipa: "/ˈhɑːrdweər/", example: "The computer's hardware was damaged.", example_es: "El hardware de la computadora estaba dañado." },
            { en: "Upload", es: "Subir / Cargar", ipa: "/ˌʌpˈloʊd/", example: "I need to upload these files to the server.", example_es: "Necesito subir estos archivos al servidor." },
            { en: "Download", es: "Descargar", ipa: "/ˈdaʊnloʊd/", example: "You can download the document from our website.", example_es: "Puedes descargar el documento desde nuestro sitio web." },
            { en: "User-friendly", es: "Fácil de usar", ipa: "/ˌjuːzər ˈfrendli/", example: "The new app is very user-friendly.", example_es: "La nueva aplicación es muy fácil de usar." },
            { en: "State-of-the-art", es: "De última generación", ipa: "/ˌsteɪt əv ðɪ ˈɑːrt/", example: "The hospital has state-of-the-art equipment.", example_es: "El hospital cuenta con equipos de última generación." },
            { en: "Virtual reality", es: "Realidad virtual", ipa: "/ˌvɜːrtʃuəl riˈæləti/", example: "Virtual reality games are becoming very popular.", example_es: "Los juegos de realidad virtual se están volviendo muy populares." },
            { en: "Biotechnology", es: "Biotecnología", ipa: "/ˌbaɪoʊtekˈnɒlədʒi/", example: "Biotechnology has led to new medical treatments.", example_es: "La biotecnología ha dado lugar a nuevos tratamientos médicos." },
            { en: "E-commerce", es: "Comercio electrónico", ipa: "/ˈiː kɒmɜːrs/", example: "E-commerce has changed the way people shop.", example_es: "El comercio electrónico ha cambiado la forma en que la gente compra." },
            { en: "Cloud computing", es: "Computación en la nube", ipa: "/ˌklaʊd kəmˈpjuːtɪŋ/", example: "Many companies now use cloud computing for data storage.", example_es: "Muchas empresas ahora usan la computación en la nube para el almacenamiento de datos." }
        ]
    },
    {
        id: 'flashcard-ielts-business',
        name: 'Flashcard: Business',
        gameMode: 'flashcard',
        data: [
            { en: "Revenue", es: "Ingresos", ipa: "/ˈrevənjuː/", example: "The company's revenue increased by 20% last year.", example_es: "Los ingresos de la empresa aumentaron un 20% el año pasado." },
            { en: "Entrepreneur", es: "Emprendedor", ipa: "/ˌɒntrəprəˈnɜːr/", example: "She is a successful entrepreneur who started her own business.", example_es: "Ella es una emprendedora exitosa que comenzó su propio negocio." },
            { en: "Negotiation", es: "Negociación", ipa: "/nɪˌɡoʊʃiˈeɪʃn/", example: "Successful negotiation requires good communication skills.", example_es: "Una negociación exitosa requiere buenas habilidades de comunicación." },
            { en: "Marketing", es: "Marketing", ipa: "/ˈmɑːrkɪtɪŋ/", example: "Their marketing campaign was very effective.", example_es: "Su campaña de marketing fue muy efectiva." },
            { en: "Profit", es: "Ganancia", ipa: "/ˈprɒfɪt/", example: "The main goal of a company is to make a profit.", example_es: "El objetivo principal de una empresa es obtener ganancias." },
            { en: "Asset", es: "Activo", ipa: "/ˈæset/", example: "The company's assets include buildings and machinery.", example_es: "Los activos de la empresa incluyen edificios y maquinaria." },
            { en: "Liability", es: "Pasivo / Deuda", ipa: "/ˌlaɪəˈbɪləti/", example: "The company has significant liabilities.", example_es: "La empresa tiene deudas significativas." },
            { en: "Investment", es: "Inversión", ipa: "/ɪnˈvestmənt/", example: "This property is a good long-term investment.", example_es: "Esta propiedad es una buena inversión a largo plazo." },
            { en: "Stakeholder", es: "Parte interesada", ipa: "/ˈsteɪkhoʊldər/", example: "We need to consider all the stakeholders in this decision.", example_es: "Necesitamos considerar a todas las partes interesadas en esta decisión." },
            { en: "Supply chain", es: "Cadena de suministro", ipa: "/səˈplaɪ tʃeɪn/", example: "The pandemic disrupted the global supply chain.", example_es: "La pandemia interrumpió la cadena de suministro global." },
            { en: "Monopoly", es: "Monopolio", ipa: "/məˈnɒpəli/", example: "The company has a monopoly on the market.", example_es: "La empresa tiene el monopolio del mercado." },
            { en: "Merger", es: "Fusión", ipa: "/ˈmɜːrdʒər/", example: "The merger of the two companies was announced yesterday.", example_es: "La fusión de las dos empresas se anunció ayer." },
            { en: "Acquisition", es: "Adquisición", ipa: "/ˌækwɪˈzɪʃn/", example: "This was the company's largest acquisition to date.", example_es: "Esta fue la mayor adquisición de la empresa hasta la fecha." },
            { en: "Outsource", es: "Externalizar / Subcontratar", ipa: "/ˈaʊtsɔːrs/", example: "Many companies outsource their customer service.", example_es: "Muchas empresas externalizan su servicio al cliente." },
            { en: "Brand", es: "Marca", ipa: "/brænd/", example: "Building a strong brand is essential for success.", example_es: "Construir una marca fuerte es esencial para el éxito." },
            { en: "Consumer", es: "Consumidor", ipa: "/kənˈsuːmər/", example: "Consumer confidence has fallen recently.", example_es: "La confianza del consumidor ha caído recientemente." },
            { en: "Demand", es: "Demanda", ipa: "/dɪˈmænd/", example: "There is a high demand for these products.", example_es: "Hay una alta demanda de estos productos." },
            { en: "Supply", es: "Oferta", ipa: "/səˈplaɪ/", example: "The supply of raw materials is limited.", example_es: "La oferta de materias primas es limitada." },
            { en: "Inflation", es: "Inflación", ipa: "/ɪnˈfleɪʃn/", example: "Inflation is a major concern for the economy.", example_es: "La inflación es una gran preocupación para la economía." },
            { en: "Deflation", es: "Deflación", ipa: "/diːˈfleɪʃn/", example: "Deflation can be a sign of a weak economy.", example_es: "La deflación puede ser una señal de una economía débil." }
        ]
    },
    {
        id: 'flashcard-ielts-home-daily-life',
        name: 'Flashcard: Home',
        gameMode: 'flashcard',
        data: [
            { en: "Clean up", es: "Limpiar / Ordenar", ipa: "/kliːn ʌp/", example: "I need to clean up my room, it's a mess.", example_es: "Necesito limpiar mi habitación, es un desorden." },
            { en: "Do up", es: "Reformar / Decorar", ipa: "/duː ʌp/", example: "She's been doing up the house all day.", example_es: "Ha estado reformando la casa todo el día." },
            { en: "Potter about/around", es: "Vagar / Merodear", ipa: "/ˈpɒtər əˈbaʊt/", example: "He's been pottering about in the garden all morning.", example_es: "Ha estado vagando por el jardín toda la mañana." },
            { en: "Sort out", es: "Organizar / Solucionar", ipa: "/sɔːrt aʊt/", example: "I need to sort out my clothes and get rid of some.", example_es: "Necesito organizar mi ropa y deshacerme de algo." },
            { en: "Slave away", es: "Trabajar como un esclavo", ipa: "/sleɪv əˈweɪ/", example: "She's been slaving away in the kitchen all day.", example_es: "Ha estado trabajando como una esclava en la cocina todo el día." },
            { en: "Laze about/around", es: "Holgazanear", ipa: "/leɪz əˈbaʊt/", example: "He's been lazing about in front of the TV all day.", example_es: "Ha estado holgazaneando frente al televisor todo el día." },
            { en: "Pop out", es: "Salir un momento", ipa: "/pɒp aʊt/", example: "I need to pop out to the shops for some milk.", example_es: "Necesito salir un momento a las tiendas a por leche." },
            { en: "Help out", es: "Ayudar", ipa: "/help aʊt/", example: "She's been helping out around the house.", example_es: "Ha estado ayudando en casa." },
            { en: "Stay up", es: "Quedarse despierto", ipa: "/steɪ ʌp/", example: "He's been staying up late to finish his work.", example_es: "Se ha estado quedando despierto hasta tarde para terminar su trabajo." },
            { en: "Get down to", es: "Ponerse en serio con", ipa: "/ɡet daʊn tuː/", example: "I need to get down to doing my homework.", example_es: "Necesito ponerme en serio con mis deberes." },
            { en: "Look for", es: "Buscar", ipa: "/lʊk fɔːr/", example: "She's been looking for her keys all morning.", example_es: "Ha estado buscando sus llaves toda la mañana." },
            { en: "Put off", es: "Posponer", ipa: "/pʊt ɒf/", example: "He's been putting off his homework until the last minute.", example_es: "Ha estado posponiendo sus deberes hasta el último minuto." },
            { en: "Take out", es: "Sacar / Quitar", ipa: "/teɪk aʊt/", example: "I need to take out the rubbish.", example_es: "Necesito sacar la basura." },
                        { sentence: "He needs to throw _ his old shoes.", options: ["away", "out", "up", "on"], correct: "away", explanation: "El phrasal verb 'throw away' o 'throw out' significa desechar algo." },
            { en: "Tidy up", es: "Ordenar", ipa: "/ˈtaɪdi ʌp/", example: "He's been tidying up his desk.", example_es: "Ha estado ordenando su escritorio." },
            { en: "Wake up", es: "Despertarse", ipa: "/weɪk ʌp/", example: "I need to wake up early tomorrow.", example_es: "Necesito despertarme temprano mañana." },
            { en: "Wash up", es: "Fregar los platos", ipa: "/wɒʃ ʌp/", example: "She's been washing up the dishes.", example_es: "Ha estado fregando los platos." },
            { en: "Hang out", es: "Tender (ropa)", ipa: "/hæŋ aʊt/", example: "He's been hanging out his clothes to dry.", example_es: "Ha estado tendiendo su ropa para que se seque." },
            { en: "Put away", es: "Guardar", ipa: "/pʊt əˈweɪ/", example: "I need to put away the shopping.", example_es: "Necesito guardar la compra." },
            { en: "Switch off", es: "Apagar", ipa: "/swɪtʃ ɒf/", example: "She's been switching off the lights when she leaves a room.", example_es: "Ha estado apagando las luces cuando sale de una habitación." }
        ]
    },
    {
        id: 'flashcard-ielts-problem-solving',
        name: 'Flashcard: Problems',
        gameMode: 'flashcard',
        data: [
            { en: "Figure out", es: "Resolver / Entender", ipa: "/ˈfɪɡjər aʊt/", example: "We need to figure out a way to solve this problem.", example_es: "Necesitamos encontrar una manera de resolver este problema." },
            { en: "Think over", es: "Reflexionar sobre", ipa: "/θɪŋk ˈoʊvər/", example: "I need to think this over carefully before I make a decision.", example_es: "Necesito reflexionar sobre esto cuidadosamente antes de tomar una decisión." },
            { en: "Work on", es: "Trabajar en / Dedicarse a", ipa: "/wɜːrk ɒn/", example: "She's been working on a solution to the problem.", example_es: "Ha estado trabajando en una solución al problema." },
            { en: "Get around", es: "Sortear / Evitar (un problema)", ipa: "/ɡet əˈraʊnd/", example: "He's been trying to get around the problem all day.", example_es: "Ha estado intentando sortear el problema todo el día." },
            { en: "Iron out", es: "Solucionar / Limar asperezas", ipa: "/ˈaɪərn aʊt/", example: "We need to iron out the details of the plan.", example_es: "Necesitamos solucionar los detalles del plan." },
            { en: "Grapple with", es: "Lidiar con / Enfrentarse a", ipa: "/ˈɡræpl wɪð/", example: "She's been grappling with the problem for weeks.", example_es: "Ha estado lidiando con el problema durante semanas." },
            { en: "Mull over", es: "Meditar / Reflexionar", ipa: "/mʌl ˈoʊvər/", example: "He's been mulling over the problem for a while.", example_es: "Ha estado meditando sobre el problema por un tiempo." },
            { en: "Puzzle out", es: "Descifrar / Resolver", ipa: "/ˈpʌzl aʊt/", example: "We need to puzzle out what to do next.", example_es: "Necesitamos descifrar qué hacer a continuación." },
            { en: "Wrestle with", es: "Luchar con (un problema)", ipa: "/ˈresl wɪð/", example: "She's been wrestling with the problem of what to do with her life.", example_es: "Ha estado luchando con el problema de qué hacer con su vida." },
            { en: "Bat around", es: "Debatir / Discutir (ideas)", ipa: "/bæt əˈraʊnd/", example: "He's been batting around the idea of starting his own business.", example_es: "Ha estado debatiendo la idea de iniciar su propio negocio." },
            { en: "Talk through", es: "Discutir a fondo", ipa: "/tɔːk θruː/", example: "We need to talk through the problem and find a solution.", example_es: "Necesitamos discutir a fondo el problema y encontrar una solución." },
            { en: "Pore over", es: "Estudiar detenidamente", ipa: "/pɔːr ˈoʊvər/", example: "She's been poring over the documents for hours.", example_es: "Ha estado estudiando detenidamente los documentos durante horas." },
            { en: "Rack your brains", es: "Devanarse los sesos", ipa: "/ræk jɔːr breɪnz/", example: "He's been racking his brains to remember where he put his keys.", example_es: "Se ha estado devanando los sesos para recordar dónde puso sus llaves." },
            { en: "Get to the bottom of", es: "Llegar al fondo de", ipa: "/ɡet tuː ðə ˈbɒtəm ɒv/", example: "We need to get to the bottom of the problem.", example_es: "Necesitamos llegar al fondo del problema." },
            { en: "Piece together", es: "Reconstruir / Armar", ipa: "/piːs təˈɡeðər/", example: "She's been trying to piece together what happened.", example_es: "Ha estado intentando reconstruir lo que pasó." },
            { en: "Track down", es: "Rastrear / Localizar", ipa: "/træk daʊn/", example: "He's been trying to track down the source of the problem.", example_es: "Ha estado intentando rastrear la fuente del problema." },
            { en: "Smooth over", es: "Suavizar / Limar", ipa: "/smuːð ˈoʊvər/", example: "We need to smooth over the problems before we can launch the product.", example_es: "Necesitamos suavizar los problemas antes de poder lanzar el producto." },
            { en: "Get your head around", es: "Entender / Asimilar", ipa: "/ɡet jɔːr hed əˈraʊnd/", example: "She's been trying to get her head around the problem.", example_es: "Ha estado intentando asimilar el problema." },
            { en: "Get to grips with", es: "Dominar / Entender a fondo", ipa: "/ɡet tuː ɡrɪps wɪð/", example: "He's been trying to get to grips with the problem.", example_es: "Ha estado intentando dominar el problema." },
            { en: "Hammer out", es: "Negociar / Acordar", ipa: "/ˈhæmər aʊt/", example: "We need to hammer out an agreement.", example_es: "Necesitamos negociar un acuerdo." }
        ]
    },
    {
        id: 'flashcard-ielts-clothing-appearance',
        name: 'Flashcard: Phrasal Verbs',
        gameMode: 'flashcard',
        data: [
            { en: "Dress up", es: "Vestirse elegante / Disfrazarse", ipa: "/dres ʌp/", example: "She likes to dress up for parties.", example_es: "Le gusta vestirse elegante para las fiestas." },
            { en: "Smarten up", es: "Arreglarse / Mejorar el aspecto", ipa: "/ˈsmɑːrtn ʌp/", example: "He needs to smarten up for the interview.", example_es: "Necesita arreglarse para la entrevista." },
            { en: "Try on", es: "Probarse (ropa)", ipa: "/traɪ ɒn/", example: "She's been trying on clothes all morning.", example_es: "Ha estado probándose ropa toda la mañana." },
            { en: "Take off", es: "Quitarse (ropa)", ipa: "/teɪk ɒf/", example: "He needs to take off his shoes before he comes in.", example_es: "Necesita quitarse los zapatos antes de entrar." },
            { en: "Put on", es: "Ponerse (ropa/maquillaje)", ipa: "/pʊt ɒn/", example: "She's been putting on her makeup.", example_es: "Se ha estado maquillando." },
            { en: "Do up", es: "Abrochar / Atar", ipa: "/duː ʌp/", example: "He needs to do up his shoelaces.", example_es: "Necesita atarse los cordones de los zapatos." },
            { en: "Wrap up", es: "Abrigarse", ipa: "/ræp ʌp/", example: "She's been wrapping up warm because it's cold outside.", example_es: "Se ha estado abrigando porque hace frío fuera." },
            { en: "Get changed out of", es: "Quitarse (ropa mojada)", ipa: "/ɡet tʃeɪndʒd aʊt ɒv/", example: "He needs to get changed out of his wet clothes.", example_es: "Necesita quitarse la ropa mojada." },
            { en: "Slip into", es: "Ponerse (ropa fácilmente)", ipa: "/slɪp ˈɪntuː/", example: "She's been slipping into her new dress.", example_es: "Se ha estado poniendo su nuevo vestido fácilmente." },
            { en: "Throw on", es: "Ponerse (ropa rápidamente)", ipa: "/θroʊ ɒn/", example: "He needs to throw on a jacket before he goes out.", example_es: "Necesita ponerse una chaqueta antes de salir." },
            { en: "Show off", es: "Presumir / Alardear", ipa: "/ʃoʊ ɒf/", example: "She's been showing off her new ring.", example_es: "Ha estado presumiendo de su nuevo anillo." },
            { en: "Grow out", es: "Dejar crecer (pelo)", ipa: "/ɡroʊ aʊt/", example: "He needs to grow out his hair.", example_es: "Necesita dejarse crecer el pelo." },
            { en: "Let out", es: "Ensanchar (ropa)", ipa: "/let aʊt/", example: "She's been letting out her dress.", example_es: "Ha estado ensanchando su vestido." },
            { en: "Take in", es: "Estrechar (ropa)", ipa: "/teɪk ɪn/", example: "He needs to take in his trousers.", example_es: "Necesita estrechar sus pantalones." },
            { en: "Do up", es: "Peinarse / Arreglarse el pelo", ipa: "/duː ʌp/", example: "She's been doing up her hair.", example_es: "Se ha estado peinando." },
            { en: "Zip up", es: "Subir la cremallera", ipa: "/zɪp ʌp/", example: "He needs to zip up his jacket.", example_es: "Necesita subirse la cremallera de la chaqueta." },
            { en: "Kick off", es: "Quitarse (zapatos)", ipa: "/kɪk ɒf/", example: "She's been kicking off her shoes.", example_es: "Se ha estado quitando los zapatos." },
            { en: "Pull up", es: "Subir (ropa)", ipa: "/pʊl ʌp/", example: "He needs to pull up his socks.", example_es: "Necesita subirse los calcetines." },
            { en: "Slip out of", es: "Quitarse (ropa fácilmente)", ipa: "/slɪp aʊt ɒv/", example: "She's been slipping out of her wet clothes.", example_es: "Se ha estado quitando la ropa mojada fácilmente." },
            { en: "Let out", es: "Ensanchar (traje)", ipa: "/let aʊt/", example: "He needs to have his suit let out.", example_es: "Necesita que le ensanchen el traje." }
        ]
    },
    // Idioms Quiz Module
    {
        id: 'quiz-idioms-everyday-situations',
        name: 'Quiz: Idioms - Situations',
        gameMode: 'quiz',
        data: [
            {
                sentence: "It was raining <span class=\"font-bold text-blue-500\">cats and dogs</span> all night.",
                idiom: "cats and dogs",
                options: ["raining heavily", "raining lightly", "raining animals", "raining intermittently"],
                correct: "raining heavily",
                explanation: "The idiom 'raining cats and dogs' means it's raining very heavily."
            },
            {
                sentence: "I'm feeling a bit <span class=\"font-bold text-blue-500\">under the weather</span> today.",
                idiom: "under the weather",
                options: ["feeling sick", "feeling happy", "feeling cold", "feeling tired"],
                correct: "feeling sick",
                explanation: "The idiom 'under the weather' means feeling slightly unwell or ill."
            },
            {
                sentence: "Don't <span class=\"font-bold text-blue-500\">beat around the bush</span>, just tell me what happened.",
                idiom: "beat around the bush",
                options: ["avoid the main topic", "speak directly", "hit a bush", "talk loudly"],
                correct: "avoid the main topic",
                explanation: "To 'beat around the bush' means to avoid coming to the point."
            },
            {
                sentence: "Learning English is a <span class=\"font-bold text-blue-500\">piece of cake</span> for her.",
                idiom: "piece of cake",
                options: ["very easy", "very difficult", "a type of dessert", "a small portion"],
                correct: "very easy",
                explanation: "If something is a 'piece of cake', it is very easy to do."
            },
            {
                sentence: "Let's <span class=\"font-bold text-blue-500\">call it a day</span>, I'm exhausted.",
                idiom: "call it a day",
                options: ["stop working for the day", "make a phone call", "start a new day", "go for a walk"],
                correct: "stop working for the day",
                explanation: "To 'call it a day' means to stop working on something for the rest of the day."
            },
            {
                sentence: "He has a <span class=\"font-bold text-blue-500\">chip on his shoulder</span> about not getting promoted.",
                idiom: "chip on his shoulder",
                options: ["holding a grudge", "feeling happy", "carrying something heavy", "having a small injury"],
                correct: "holding a grudge",
                explanation: "To have a 'chip on your shoulder' means to be resentful or hold a grudge about something."
            },
            {
                sentence: "She accidentally <span class=\"font-bold text-blue-500\">spilled the beans</span> about the surprise party.",
                idiom: "spilled the beans",
                options: ["revealed a secret", "dropped some food", "cleaned up a mess", "cooked a meal"],
                correct: "revealed a secret",
                explanation: "To 'spill the beans' means to reveal a secret or disclose confidential information."
            },
            {
                sentence: "Watching horror movies is <span class=\"font-bold text-blue-500\">not my cup of tea</span>.",
                idiom: "not my cup of tea",
                options: ["not something I enjoy", "my favorite drink", "something I do often", "a type of tea"],
                correct: "not something I enjoy",
                explanation: "If something is 'not your cup of tea', it is not something you like or are interested in."
            },
            {
                sentence: "You're <span class=\"font-bold text-blue-500\">barking up the wrong tree</span> if you think I stole your pen.",
                idiom: "barking up the wrong tree",
                options: ["pursuing a mistaken course of action", "climbing a tree", "making a loud noise", "looking in the right place"],
                correct: "pursuing a mistaken course of action",
                explanation: "To be 'barking up the wrong tree' means to be pursuing a mistaken course of action or making a wrong assumption."
            },
            {
                sentence: "Don't <span class=\"font-bold text-blue-500\">cry over spilled milk</span>, it's just a small mistake.",
                idiom: "cry over spilled milk",
                options: ["regret something that cannot be undone", "be upset about a minor accident", "clean up a mess", "express sadness"],
                correct: "regret something that cannot be undone",
                explanation: "To 'cry over spilled milk' means to be upset about something that has already happened and cannot be changed."
            },
            {
                sentence: "He's got a <span class=\"font-bold text-blue-500\">bee in his bonnet</span> about healthy eating.",
                idiom: "bee in his bonnet",
                options: ["an obsession or fixation", "an insect in his hat", "a buzzing sound", "a new idea"],
                correct: "an obsession or fixation",
                explanation: "To have a 'bee in your bonnet' means to be preoccupied or obsessed with something."
            },
            {
                sentence: "Are you <span class=\"font-bold text-blue-500\">pulling my leg</span> or is that true?",
                idiom: "pulling my leg",
                options: ["joking or teasing me", "helping me walk", "hurting my leg", "telling me a secret"],
                correct: "joking or teasing me",
                explanation: "To 'pull someone's leg' means to tease or joke with them, often by telling them something untrue."
            },
            {
                sentence: "Working from home gives me <span class=\"font-bold text-blue-500\">the best of both worlds</span>.",
                idiom: "the best of both worlds",
                options: ["all the advantages", "a difficult choice", "a confusing situation", "a new experience"],
                correct: "all the advantages",
                explanation: "To have 'the best of both worlds' means to enjoy the advantages of two different things at the same time."
            },
            {
                sentence: "He had a <span class=\"font-bold text-blue-500\">frog in his throat</span> during his speech.",
                idiom: "frog in his throat",
                options: ["difficulty speaking due to hoarseness", "a pet frog", "a sore throat", "a sudden cough"],
                correct: "difficulty speaking due to hoarseness",
                explanation: "To have a 'frog in your throat' means to have a hoarse voice or difficulty speaking clearly."
            },
            {
                sentence: "She always has her <span class=\"font-bold text-blue-500\">head in the clouds</span>.",
                idiom: "head in the clouds",
                options: ["daydreaming or unrealistic", "thinking clearly", "looking at the sky", "feeling dizzy"],
                correct: "daydreaming or unrealistic",
                explanation: "To have your 'head in the clouds' means to be daydreaming, unrealistic, or impractical."
            },
            {
                sentence: "Losing that job was a <span class=\"font-bold text-blue-500\">blessing in disguise</span>.",
                idiom: "blessing in disguise",
                options: ["a good thing that seemed bad at first", "a hidden problem", "a fortunate event", "a difficult situation"],
                correct: "a good thing that seemed bad at first",
                explanation: "A 'blessing in disguise' is something that seems bad or unlucky at first but results in something good happening later."
            },
            {
                sentence: "I think he's got a <span class=\"font-bold text-blue-500\">screw loose</span>, he acts so strangely.",
                idiom: "screw loose",
                options: ["slightly crazy or eccentric", "a missing part", "a loose bolt", "a clever idea"],
                correct: "slightly crazy or eccentric",
                explanation: "To have a 'screw loose' means to be slightly crazy or eccentric."
            },
            {
                sentence: "My grandmother has a <span class=\"font-bold text-blue-500\">heart of gold</span>.",
                idiom: "heart of gold",
                options: ["very kind and generous", "a valuable possession", "a strong heart", "a selfish person"],
                correct: "very kind and generous",
                explanation: "To have a 'heart of gold' means to be very kind and generous."
            },
            {
                sentence: "Their argument was just a <span class=\"font-bold text-blue-500\">storm in a teacup</span>.",
                idiom: "storm in a teacup",
                options: ["a lot of fuss about something unimportant", "a serious problem", "a sudden weather change", "a small drink"],
                correct: "a lot of fuss about something unimportant",
                explanation: "A 'storm in a teacup' refers to a lot of anger or worry about something unimportant."
            },
            {
                sentence: "He has <span class=\"font-bold text-blue-500\">two left feet</span> when he tries to dance.",
                idiom: "two left feet",
                options: ["clumsy or awkward at dancing", "missing a foot", "wearing two left shoes", "a good dancer"],
                correct: "clumsy or awkward at dancing",
                explanation: "To have 'two left feet' means to be clumsy or awkward, especially when dancing."
            }
        ]
    },
    {
        id: 'quiz-idioms-emotions-feelings',
        name: 'Flashcard: Idioms - Emotions',
        gameMode: 'flashcard',
        data: [
            { en: "Feeling blue", es: "Sentirse triste / Deprimido", ipa: "/ˈfiːlɪŋ bluː/", example: "She's feeling blue today.", example_es: "Se siente triste hoy." },
            { en: "Cold feet", es: "Echarse para atrás / Acobardarse", ipa: "/koʊld fiːt/", example: "He's got cold feet about the presentation.", example_es: "Se ha echado para atrás con la presentación." },
            { en: "Butterflies in your stomach", es: "Tener mariposas en el estómago", ipa: "/ˈbʌtərflaɪz ɪn jɔːr ˈstʌmək/", example: "She's got butterflies in her stomach.", example_es: "Tiene mariposas en el estómago." },
            { en: "A short fuse", es: "Tener poca paciencia / Ser irascible", ipa: "/ə ʃɔːrt fjuːz/", example: "He's got a short fuse.", example_es: "Tiene poca paciencia." },
            { en: "A heavy heart", es: "Con el corazón encogido / Triste", ipa: "/ə ˈhevi hɑːrt/", example: "She's got a heavy heart.", example_es: "Tiene el corazón encogido." },
            { en: "A bone to pick with someone", es: "Tener algo que reprochar a alguien", ipa: "/ə boʊn tuː pɪk wɪð ˈsʌmwʌn/", example: "He's got a bone to pick with you.", example_es: "Tiene algo que reprocharte." },
            { en: "A lump in your throat", es: "Tener un nudo en la garganta (emocional)", ipa: "/ə lʌmp ɪn jɔːr θroʊt/", example: "She's got a lump in her throat.", example_es: "Tiene un nudo en la garganta." },
            { en: "A green thumb", es: "Tener mano para las plantas", ipa: "/ə ɡriːn θʌm/", example: "She's got a green thumb.", example_es: "Tiene mano para las plantas." },
            { en: "A sweet tooth", es: "Ser goloso", ipa: "/ə swiːt tuːθ/", example: "He's got a sweet tooth.", example_es: "Es goloso." },
            { en: "A sharp tongue", es: "Tener la lengua afilada", ipa: "/ə ʃɑːrp tʌŋ/", example: "She's got a sharp tongue.", example_es: "Tiene la lengua afilada." },
            { en: "A big head", es: "Ser engreído / Creído", ipa: "/ə bɪɡ hed/", example: "He's got a big head.", example_es: "Es engreído." }
        ]
    },
    {
        id: 'quiz-idioms-success-failure',
        name: 'Flashcard: Idioms - Success',
        gameMode: 'flashcard',
        data: [
            { en: "With flying colors", es: "Con gran éxito / Con honores", ipa: "/wɪð ˈflaɪɪŋ ˈkʌlərz/", example: "He passed the exam with flying colors.", example_es: "Aprobó el examen con gran éxito." },
            { en: "Hit the nail on the head", es: "Dar en el clavo", ipa: "/hɪt ðə neɪl ɒn ðə hed/", example: "She hit the nail on the head.", example_es: "Dio en el clavo." },
            { en: "Not rocket science", es: "No es ciencia espacial / No es tan difícil", ipa: "/nɒt ˈrɒkɪt ˈsaɪəns/", example: "It's not rocket science.", example_es: "No es ciencia espacial." },
            { en: "Bite off more than you can chew", es: "Querer abarcar demasiado", ipa: "/baɪt ɒf mɔːr ðæn juː kæn tʃuː/", example: "He bit off more than he could chew.", example_es: "Quiso abarcar demasiado." },
            { en: "Cut corners", es: "Tomar atajos / Recortar gastos", ipa: "/kʌt ˈkɔːrnərz/", example: "She cut corners to finish the project on time.", example_es: "Tomó atajos para terminar el proyecto a tiempo." },
            { en: "Back to square one", es: "Volver a empezar de cero", ipa: "/bæk tuː skweər wʌn/", example: "He's back to square one.", example_es: "Está de vuelta en el punto de partida." },
            { en: "On the right track", es: "En el camino correcto", ipa: "/ɒn ðə raɪt træk/", example: "She's on the right track.", example_es: "Está en el camino correcto." },
            { en: "Have your work cut out for you", es: "Tener mucho trabajo por delante", ipa: "/hæv jɔːr wɜːrk kʌt aʊt fɔːr juː/", example: "He's got his work cut out for him.", example_es: "Tiene mucho trabajo por delante." },
            { en: "Have your ducks in a row", es: "Tener todo en orden", ipa: "/hæv jɔːr dʌks ɪn ə roʊ/", example: "She's got her ducks in a row.", example_es: "Tiene todo en orden." },
            { en: "Have your head in the game", es: "Estar concentrado / Atento", ipa: "/hæv jɔːr hed ɪn ðə ɡeɪm/", example: "He's got his head in the game.", example_es: "Está concentrado." },
            { en: "Keep your eye on the ball", es: "Estar atento / No perder de vista el objetivo", ipa: "/kiːp jɔːr aɪ ɒn ðə bɔːl/", example: "She's got her eye on the ball.", example_es: "Está atenta." },
            { en: "Have your foot in the door", es: "Poner un pie en (una empresa/oportunidad)", ipa: "/hæv jɔːr fʊt ɪn ðə dɔːr/", example: "He's got his foot in the door.", example_es: "Ha puesto un pie en la empresa." },
            { en: "Have your hands full", es: "Estar muy ocupado", ipa: "/hæv jɔːr hændz fʊl/", example: "She's got her hands full with work.", example_es: "Está muy ocupada con el trabajo." },
            { en: "Have your back against the wall", es: "Estar contra la espada y la pared", ipa: "/hæv jɔːr bæk əˈɡenst ðə wɔːl/", example: "He's got his back against the wall.", example_es: "Está contra la espada y la pared." }
        ]
    },
    {
        id: 'quiz-idioms-time',
        name: 'Flashcard: Idioms - Time',
        gameMode: 'flashcard',
        data: [
            { en: "Once in a blue moon", es: "Muy de vez en cuando / Rara vez", ipa: "/wʌns ɪn ə bluː muːn/", example: "Once in a blue moon.", example_es: "Muy de vez en cuando." },
            { en: "Time flies when you're having fun", es: "El tiempo vuela cuando te diviertes", ipa: "/taɪm flaɪz wɛn jʊər ˈhævɪŋ fʌn/", example: "Time flies when you're having fun.", example_es: "El tiempo vuela cuando te diviertes." },
            { en: "Better late than never", es: "Más vale tarde que nunca", ipa: "/ˈbetər leɪt ðæn ˈnevər/", example: "Better late than never.", example_es: "Más vale tarde que nunca." },
            { en: "In the nick of time", es: "Justo a tiempo / En el último momento", ipa: "/ɪn ðə nɪk ɒv taɪm/", example: "In the nick of time.", example_es: "Justo a tiempo." },
            { en: "Kill two birds with one stone", es: "Matar dos pájaros de un tiro", ipa: "/kɪl tuː bɜːrdz wɪð wʌn stoʊn/", example: "Kill two birds with one stone.", example_es: "Matar dos pájaros de un tiro." },
            { en: "The early bird catches the worm", es: "Al que madruga, Dios le ayuda", ipa: "/ði ˈɜːrli bɜːrd ˈkætʃɪz ðə wɜːrm/", example: "The early bird catches the worm.", example_es: "Al que madruga, Dios le ayuda." },
            { en: "A stitch in time saves nine", es: "Más vale prevenir que curar", ipa: "/ə stɪtʃ ɪn taɪm seɪvz naɪn/", example: "A stitch in time saves nine.", example_es: "Más vale prevenir que curar." },
            { en: "Burn the midnight oil", es: "Trabajar hasta altas horas de la noche", ipa: "/bɜːrn ðə ˈmɪdnaɪt ɔɪl/", example: "Burn the midnight oil.", example_es: "Trabajar hasta altas horas de la noche." },
            { en: "At the eleventh hour", es: "En el último momento", ipa: "/æt ði ɪˈlevənθ ˈaʊər/", example: "At the eleventh hour.", example_es: "En el último momento." },
            { en: "Turn back the clock", es: "Volver atrás en el tiempo", ipa: "/tɜːrn bæk ðə klɒk/", example: "Turn back the clock.", example_es: "Volver atrás en el tiempo." },
            { en: "Against the clock", es: "Contra reloj", ipa: "/əˈɡenst ðə klɒk/", example: "Against the clock.", example_es: "Contra reloj." },
            { en: "The sands of time are running out", es: "El tiempo se acaba", ipa: "/ðə sændz ɒv taɪm ɑːr ˈrʌnɪŋ aʊt/", example: "The sands of time are running out.", example_es: "El tiempo se acaba." },
            { en: "Take your time", es: "Tómate tu tiempo", ipa: "/teɪk jɔːr taɪm/", example: "Take your time.", example_es: "Tómate tu tiempo." },
            { en: "Time is money", es: "El tiempo es oro", ipa: "/taɪm ɪz ˈmʌni/", example: "Time is money.", example_es: "El tiempo es oro." },
            { en: "Have the time of your life", es: "Pasárselo en grande", ipa: "/hæv ðə taɪm ɒv jɔːr laɪf/", example: "Have the time of your life.", example_es: "Pasárselo en grande." },
            { en: "Behind the times", es: "Anticuado / Desfasado", ipa: "/bɪˈhaɪnd ðə taɪmz/", example: "Behind the times.", example_es: "Anticuado." },
            { en: "Ahead of its time", es: "Avanzado a su tiempo", ipa: "/əˈhed ɒv ɪts taɪm/", example: "Ahead of its time.", example_es: "Avanzado a su tiempo." },
            { en: "From time to time", es: "De vez en cuando", ipa: "/frɒm taɪm tuː taɪm/", example: "From time to time.", example_es: "De vez en cuando." },
            { en: "The big day", es: "El gran día", ipa: "/ðə bɪɡ deɪ/", example: "The big day.", example_es: "El gran día." },
            { en: "In the long run", es: "A la larga / A la larga", ipa: "/ɪn ðə lɒŋ rʌn/", example: "In the long run.", example_es: "A la larga." }
        ]
    },
    {
        id: 'quiz-idioms-nature-animals',
        name: 'Flashcard: Idioms - Nature',
        gameMode: 'flashcard',
        data: [
            { en: "A bird in the hand is worth two in the bush", es: "Más vale pájaro en mano que ciento volando", ipa: "/ə bɜːrd ɪn ðə hænd ɪz wɜːrθ tuː ɪn ðə bʊʃ/", example: "A bird in the hand is worth two in the bush.", example_es: "Más vale pájaro en mano que ciento volando." },
            { en: "Let the cat out of the bag", es: "Revelar un secreto / Irse de la lengua", ipa: "/let ðə kæt aʊt ɒv ðə bæɡ/", example: "Let the cat out of the bag.", example_es: "Revelar un secreto." },
            { en: "Every cloud has a silver lining", es: "No hay mal que por bien no venga", ipa: "/ˈevri klaʊd hæz ə ˈsɪlvər ˈlaɪnɪŋ/", example: "Every cloud has a silver lining.", example_es: "No hay mal que por bien no venga." },
            { en: "The elephant in the room", es: "El elefante en la habitación (problema obvio)", ipa: "/ði ˈelɪfənt ɪn ðə ruːm/", example: "The elephant in the room.", example_es: "El elefante en la habitación." },
            { en: "A fish out of water", es: "Como pez fuera del agua", ipa: "/ə fɪʃ aʊt ɒv ˈwɔːtər/", example: "A fish out of water.", example_es: "Como pez fuera del agua." },
            { en: "As busy as a bee", es: "Ocupado como una abeja", ipa: "/æz ˈbɪzi æz ə biː/", example: "As busy as a bee.", example_es: "Ocupado como una abeja." },
            { en: "To kill two birds with one stone", es: "Matar dos pájaros de un tiro", ipa: "/tuː kɪl tuː bɜːrdz wɪð wʌn stoʊn/", example: "To kill two birds with one stone.", example_es: "Matar dos pájaros de un tiro." },
            { en: "The lion's share", es: "La mayor parte", ipa: "/ðə ˈlaɪənz ʃer/", example: "The lion's share of the share.", example_es: "La mayor parte." },
            { en: "A lone wolf", es: "Un lobo solitario", ipa: "/ə loʊn wʊlf/", example: "A lone wolf.", example_es: "Un lobo solitario." },
            { en: "To take the bull by the horns", es: "Tomar el toro por los cuernos", ipa: "/tuː teɪk ðə bʊl baɪ ðə hɔːrnz/", example: "To take the bull by the horns.", example_es: "Tomar el toro por los cuernos." },
            { en: "To smell a rat", es: "Sospechar / Oler a chamusquina", ipa: "/tuː smel ə ræt/", example: "To smell a rat.", example_es: "Sospechar." },
            { en: "To have a frog in your throat", es: "Tener un nudo en la garganta (al hablar)", ipa: "/tuː hæv ə frɒɡ ɪn jɔːr θroʊt/", example: "To have a frog in your throat.", example_es: "Tener un nudo en la garganta." },
            { en: "To be a guinea pig", es: "Ser un conejillo de indias", ipa: "/tuː bi ə ˈɡɪni pɪɡ/", example: "To be a guinea pig.", example_es: "Ser un conejillo de indias." },
            { en: "To be a copycat", es: "Ser un imitador", ipa: "/tuː bi ə ˈkɒpiˌkæt/", example: "To be a copycat.", example_es: "Ser un imitador." },
            { en: "To be a dark horse", es: "Ser un tapado / Sorpresa", ipa: "/tuː bi ə dɑːrk hɔːrs/", example: "To be a dark horse.", example_es: "Ser un tapado." },
            { en: "To be a busy bee", es: "Ser una persona muy ocupada", ipa: "/tuː bi ə ˈbɪzi biː/", example: "To be a busy bee.", example_es: "Ser una persona muy ocupada." },
            { en: "To be a night owl", es: "Ser un ave nocturna", ipa: "/tuː bi ə naɪt aʊl/", example: "To be a night owl.", example_es: "Ser una ave nocturna." },
            { en: "To be a morning lark", es: "Ser una persona madrugadora", ipa: "/tuː bi ə ˈmɔːrnɪŋ lɑːrk/", example: "To be a morning lark.", example_es: "Ser una persona madrugadora." },
            { en: "To be a social butterfly", es: "Ser una mariposa social", ipa: "/tuː bi ə ˈsoʊʃl ˈbʌtərflaɪ/", example: "To be a social butterfly.", example_es: "Ser una mariposa social." }
        ]
    },
    // Advanced Grammar Quiz Module
    {
        id: 'quiz-advanced-grammar-conditionals',
        name: 'Quiz: Grammar - Conditionals',
        gameMode: 'quiz',
        data: [
            { sentence: "If I _ you, I would study more for the exam.", options: ["am", "were", "was", "be"], correct: "were", explanation: "En el segundo condicional (situaciones hipotéticas), se usa 'were' para todos los pronombres, incluido 'I'." },
            { sentence: "Had I known about the traffic, I _ a different route.", options: ["would take", "would have taken", "took", "take"], correct: "would have taken", explanation: "Esto es una inversión del tercer condicional. La estructura es 'Had + sujeto + participio pasado, sujeto + would have + participio pasado'." },
            { sentence: "If you heat water to 100 degrees, it _.", options: ["boils", "will boil", "would boil", "is boiling"], correct: "boils", explanation: "El condicional cero se usa para hechos generales o verdades científicas. La estructura es 'If + presente simple, ... presente simple'." },
            { sentence: "Unless you _ now, you will miss the train.", options: ["leave", "don't leave", "left", "will leave"], correct: "leave", explanation: "'Unless' significa 'si no'. Después de 'unless', se usa el verbo en afirmativo. 'Unless you leave' = 'If you don't leave'." },
            { sentence: "She would be a great musician if she _ more.", options: ["practiced", "practices", "had practiced", "would practice"], correct: "practiced", explanation: "Segundo condicional para una situación hipotética presente. La estructura es 'sujeto + would + infinitivo ... if + sujeto + pasado simple'." },
            { sentence: "If she had studied, she _ the exam.", options: ["will pass", "would pass", "passed", "would have passed"], correct: "would have passed", explanation: "Tercer condicional para una situación hipotética en el pasado. 'If + pasado perfecto, ... would have + participio pasado'." },
            { sentence: "What would you do if it _ tomorrow?", options: ["rains", "rained", "will rain", "would rain"], correct: "rained", explanation: "Segundo condicional para una situación hipotética futura. 'If + pasado simple, ... would + infinitivo'." },
            { sentence: "If I see him, I _ him the message.", options: ["give", "will give", "gave", "would give"], correct: "will give", explanation: "Primer condicional para una situación real o probable en el futuro. 'If + presente simple, ... will + infinitivo'." },
            { sentence: "They would have been lost if he _ a map.", options: ["didn't bring", "hadn't brought", "doesn't bring", "wouldn't bring"], correct: "hadn't brought", explanation: "Tercer condicional que expresa una condición pasada que no ocurrió y su resultado hipotético." },
            { sentence: "If you mix red and blue, you _ purple.", options: ["got", "get", "will get", "would get"], correct: "get", explanation: "Condicional cero para una verdad universal o un hecho científico." },
            { sentence: "Provided that you _ on time, you'll get a good seat.", options: ["arrive", "arrived", "will arrive", "are arriving"], correct: "arrive", explanation: "'Provided that' es similar a 'if' y se usa con el presente simple para una condición futura." },
            { sentence: "I wouldn't go there if I _ you.", options: ["am", "was", "were", "be"], correct: "were", explanation: "En el segundo condicional, se prefiere 'were' sobre 'was' para todos los sujetos al expresar una hipótesis." },
            { sentence: "If the weather _ better, we would have gone to the beach.", options: ["was", "had been", "is", "would be"], correct: "had been", explanation: "Tercer condicional para una situación pasada irreal y su resultado." },
            { sentence: "He will be late unless he _ now.", options: ["hurry", "hurries", "hurried", "will hurry"], correct: "hurries", explanation: "'Unless' (a menos que) va seguido del presente simple para indicar una condición." },
            { sentence: "If I had the money, I _ a new car.", options: ["will buy", "bought", "would buy", "buy"], correct: "would buy", explanation: "Segundo condicional para una situación presente o futura hipotética." },
            { sentence: "Should you _ any help, just ask.", options: ["need", "needed", "to need", "are needing"], correct: "need", explanation: "Esto es una forma invertida y más formal del primer condicional, omitiendo 'if'. 'Should you need' = 'If you should need'." },
            { sentence: "If he _ harder, he will succeed.", options: ["try", "tried", "tries", "will try"], correct: "tries", explanation: "Primer condicional para una posible situación futura." },
            { sentence: "Water turns to ice if the temperature _ below zero.", options: ["drop", "drops", "dropped", "will drop"], correct: "drops", explanation: "Condicional cero para un hecho científico." },
            { sentence: "If they had invited me, I _.", options: ["went", "would go", "will go", "would have gone"], correct: "would have gone", explanation: "Tercer condicional para una situación hipotética en el pasado." },
            { sentence: "As long as you _ quiet, you can stay.", options: ["keep", "kept", "will keep", "are keeping"], correct: "keep", explanation: "'As long as' (siempre y cuando) se usa con el presente simple para establecer una condición." }
        ]
    },
    {
        id: 'quiz-advanced-grammar-participles',
        name: 'Quiz: Grammar - Participles',
        gameMode: 'quiz',
        data: [
            { sentence: "The report, _ by the committee, was published yesterday.", options: ["written", "wrote", "writing", "writes"], correct: "written", explanation: "Se usa un participio pasado ('written') para crear una cláusula pasiva reducida que modifica al sustantivo 'report'." },
            { sentence: "Having _ the book, he knew the movie's ending.", options: ["read", "reading", "reads", "had read"], correct: "read", explanation: "Se usa un participio perfecto ('Having read') para indicar que una acción se completó antes que la otra." },
            { sentence: "All the tickets for the concert had already been _.", options: ["selled", "sale", "sold", "selling"], correct: "sold", explanation: "Se necesita el participio pasado del verbo 'sell' (sold) para la voz pasiva en pluscuamperfecto ('had been sold')." },
            { sentence: "I was very _ in the story he told.", options: ["interesting", "interested", "interest", "interests"], correct: "interested", explanation: "Se usa el participio pasado (-ed) para describir un sentimiento o emoción. 'Interested' describe cómo me sentía." },
            { sentence: "The movie was so _, I fell asleep.", options: ["bored", "boring", "bore", "bores"], correct: "boring", explanation: "Se usa el participio presente (-ing) para describir la característica de algo o alguien que causa un sentimiento. La película era aburrida." },
            { sentence: "_ by the noise, the baby started to cry.", options: ["Woken", "Waking", "Woke", "Awake"], correct: "Woken", explanation: "Un participio pasado se usa al principio de una cláusula para indicar la razón (pasiva) de la acción principal." },
            { sentence: "The man _ the newspaper is my father.", options: ["read", "is reading", "reading", "reads"], correct: "reading", explanation: "Un participio presente se usa para reducir una cláusula adjetiva ('The man who is reading...')." },
            { sentence: "She felt _ after the long journey.", options: ["exhausting", "exhausted", "exhausts", "exhaust"], correct: "exhausted", explanation: "El participio pasado (-ed) se usa para describir cómo se siente una persona." },
            { sentence: "The results were _.", options: ["disappointed", "disappoints", "disappointing", "disappointment"], correct: "disappointing", explanation: "El participio presente (-ing) se usa para describir la cualidad de algo que causa un sentimiento." },
            { sentence: "Having _ his homework, he went out to play.", options: ["finish", "finished", "finishing", "was finishing"], correct: "finished", explanation: "El participio perfecto ('Having finished') muestra que la primera acción se completó antes de la segunda." },
            { sentence: "The car, _ in Germany, is very reliable.", options: ["making", "made", "is made", "makes"], correct: "made", explanation: "Cláusula de participio pasado para dar más información sobre el sustantivo ('The car which was made...')." },
            { sentence: "I find this subject very _.", options: ["confused", "confusing", "confuse", "confusion"], correct: "confusing", explanation: "El participio presente (-ing) describe la característica que provoca el sentimiento de confusión." },
            { sentence: "The students _ for the exam felt nervous.", options: ["study", "studied", "studying", "were studying"], correct: "studying", explanation: "Cláusula de participio presente para modificar 'students' ('The students who were studying...')." },
            { sentence: "The letter _ yesterday contained good news.", options: ["receiving", "received", "was received", "receive"], correct: "received", explanation: "Cláusula de participio pasado para modificar 'letter' ('The letter that was received...')." },
            { sentence: "He was _ by the film's special effects.", options: ["amazing", "amazed", "amaze", "amazement"], correct: "amazed", explanation: "El participio pasado (-ed) describe la emoción o sentimiento de una persona." },
            { sentence: "The speech _ by the president was inspiring.", options: ["giving", "gave", "given", "was given"], correct: "given", explanation: "Cláusula de participio pasado en función adjetival ('The speech that was given...')." },
            { sentence: "Feeling _, she went to bed early.", options: ["tired", "tiring", "tire", "tires"], correct: "tired", explanation: "Una cláusula de participio presente al inicio de la oración para describir el estado del sujeto." },
            { sentence: "The problem, _ for hours, remained unsolved.", options: ["discussing", "discussed", "was discussed", "having discussed"], correct: "discussed", explanation: "Participio pasado para una cláusula pasiva reducida." },
            { sentence: "The _ child held his mother's hand.", options: ["frightening", "frightened", "frighten", "frightens"], correct: "frightened", explanation: "El participio pasado 'frightened' funciona como un adjetivo para describir el estado del niño." },
            { sentence: "This is a very _ book.", options: ["entertained", "entertaining", "entertain", "entertainment"], correct: "entertaining", explanation: "El participio presente 'entertaining' funciona como un adjetivo para describir la cualidad del libro." }
        ]
    },
    {
        id: 'quiz-advanced-grammar-subjunctive',
        name: 'Quiz: Grammar - Subjunctive',
        gameMode: 'quiz',
        data: [
            { sentence: "The manager insists that every employee _ on time.", options: ["is", "be", "are", "was"], correct: "be", explanation: "Después de verbos de sugerencia o demanda como 'insist', 'suggest', 'recommend', se usa el subjuntivo (la forma base del verbo)." },
            { sentence: "I wish I _ more time to travel.", options: ["have", "had", "would have", "having"], correct: "had", explanation: "Para expresar un deseo sobre una situación presente que es irreal, se usa 'wish + pasado simple'." },
            { sentence: "It is essential that she _ the document before signing.", options: ["reads", "read", "reading", "to read"], correct: "read", explanation: "Después de la estructura 'It is essential/important/vital that...', se usa el subjuntivo (la forma base del verbo)." },
            { sentence: "If only he _ us the truth earlier.", options: ["told", "had told", "tells", "would tell"], correct: "had told", explanation: "Para expresar un arrepentimiento sobre una situación pasada, se usa 'If only + pasado perfecto'." },
            { sentence: "He talks as if he _ everything.", options: ["knows", "knew", "known", "had known"], correct: "knew", explanation: "Después de 'as if' para describir una situación hipotética o irreal en el presente, se usa el pasado simple." },
            { sentence: "I demand that he _ immediately.", options: ["apologizes", "apologize", "apologized", "to apologize"], correct: "apologize", explanation: "El subjuntivo (forma base del verbo) se usa después de verbos de demanda como 'demand'." },
            { sentence: "It's crucial that they _ on the project together.", options: ["work", "works", "worked", "are working"], correct: "work", explanation: "Después de 'It's crucial that...', se usa el subjuntivo." },
            { sentence: "She wishes she _ taller.", options: ["is", "was", "were", "be"], correct: "were", explanation: "Para deseos en el presente, se usa 'wish + pasado simple'. Se prefiere 'were' para todos los sujetos." },
            { sentence: "The doctor recommended that he _ more.", options: ["rests", "rested", "rest", "to rest"], correct: "rest", explanation: "El subjuntivo se usa después de verbos de recomendación como 'recommend'." },
            { sentence: "If only I _ the answer.", options: ["know", "knew", "had known", "known"], correct: "knew", explanation: "'If only' funciona como 'I wish' para expresar deseos. Se usa el pasado para un deseo presente." },
            { sentence: "It is imperative that the rules _ followed.", options: ["are", "be", "were", "to be"], correct: "be", explanation: "Después de 'It is imperative that...', se usa el subjuntivo pasivo 'be + participio pasado'." },
            { sentence: "He acts as though he _ the boss.", options: ["is", "were", "was", "be"], correct: "were", explanation: "Se usa el pasado subjuntivo 'were' después de 'as though' para situaciones hipotéticas." },
            { sentence: "I propose that the meeting _ postponed.", options: ["is", "be", "was", "to be"], correct: "be", explanation: "El subjuntivo se usa después de verbos como 'propose'." },
            { sentence: "They requested that she _ the presentation.", options: ["gives", "give", "gave", "to give"], correct: "give", explanation: "El subjuntivo (forma base) se usa después de 'request that...'." },
            { sentence: "I wish you _ making that noise.", options: ["stop", "stopped", "would stop", "had stopped"], correct: "would stop", explanation: "Se usa 'wish + would + infinitivo' para expresar molestia o un deseo de que alguien cambie su comportamiento." },
            { sentence: "It's important that everyone _ their role.", options: ["understands", "understand", "understood", "is understanding"], correct: "understand", explanation: "Después de 'It's important that...', se usa el subjuntivo." },
            { sentence: "If only we _ sooner.", options: ["left", "had left", "leave", "would leave"], correct: "had left", explanation: "Se usa 'If only + pasado perfecto' para expresar arrepentimiento por algo que no sucedió en el pasado." },
            { sentence: "The law requires that all drivers _ insurance.", options: ["have", "has", "had", "are having"], correct: "have", explanation: "El subjuntivo se usa después de verbos que indican un requisito, como 'require'." },
            { sentence: "I wish it _ Friday today.", options: ["is", "was", "were", "be"], correct: "were", explanation: "Se usa 'wish + pasado simple' para un deseo sobre el presente. 'Were' es la forma subjuntiva correcta." },
            { sentence: "The teacher suggested that the student _ the chapter again.", options: ["reads", "read", "to read", "reading"], correct: "read", explanation: "Después de 'suggest that...', se usa el subjuntivo (forma base del verbo)." }
        ]
    },
    {
        id: 'quiz-advanced-grammar-inversions',
        name: 'Quiz: Grammar - Inversions',
        gameMode: 'quiz',
        data: [
            { sentence: "Never before _ such a beautiful sunset.", options: ["I have seen", "have I seen", "I saw", "did I see"], correct: "have I seen", explanation: "Cuando una frase comienza con una expresión negativa como 'Never before', se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Hardly ever _ so much talent in one place.", options: ["I have seen", "have I seen", "I saw", "did I see"], correct: "have I seen", explanation: "Con 'Hardly ever' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Scarcely had _ when the phone rang.", options: ["I arrived", "I arrive", "arrived I", "did I arrive"], correct: "I arrived", explanation: "Con 'Scarcely had' al inicio, se usa la inversión del sujeto y el verbo auxiliar." },
            { sentence: "No sooner had _ than it started to rain.", options: ["he left", "he leave", "left he", "did he leave"], correct: "he left", explanation: "Con 'No sooner had' al inicio, se usa la inversión del sujeto y el verbo auxiliar." },
            { sentence: "Little _ about his past.", options: ["did he know", "he knew", "knew he", "he did know"], correct: "did he know", explanation: "Con 'Little' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Only after _ the truth did she apologize.", options: ["she knew", "did she know", "knew she", "she did know"], correct: "she knew", explanation: "Con 'Only after' al inicio, la inversión ocurre en la segunda cláusula." },
            { sentence: "Not until _ the sun set did they leave.", options: ["did they see", "they saw", "saw they", "they did see"], correct: "they saw", explanation: "Con 'Not until' al inicio, la inversión ocurre en la segunda cláusula." },
            { sentence: "Rarely _ such a stunning performance.", options: ["I have witnessed", "have I witnessed", "I witnessed", "did I witness"], correct: "have I witnessed", explanation: "Con 'Rarely' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Seldom _ a more captivating story.", options: ["I have heard", "have I heard", "I heard", "did I hear"], correct: "have I heard", explanation: "Con 'Seldom' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Under no circumstances _ you reveal this information.", options: ["should", "will", "can", "do"], correct: "should", explanation: "Con 'Under no circumstances' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "On no account _ you open that package.", options: ["should", "must", "will", "can"], correct: "must", explanation: "Con 'On no account' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "In no way _ I agree with his proposal.", options: ["do", "did", "will", "can"], correct: "do", explanation: "Con 'In no way' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "At no time _ he admit his mistake.", options: ["did", "does", "will", "can"], correct: "did", explanation: "Con 'At no time' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "So successful _ the project that they expanded it.", options: ["was", "is", "has been", "had been"], correct: "was", explanation: "Con 'So + adjective/adverb' al inicio, se invierte el sujeto y el verbo." },
            { sentence: "Such _ the impact that it changed everything.", options: ["was", "is", "has been", "had been"], correct: "was", explanation: "Con 'Such' al inicio, se invierte el sujeto y el verbo." },
            { sentence: "Not a single word _ she say.", options: ["did", "does", "will", "can"], correct: "did", explanation: "Con 'Not a single word' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Never in my life _ such a beautiful sight.", options: ["I have seen", "have I seen", "I saw", "did I see"], correct: "have I seen", explanation: "Con 'Never in my life' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Only then _ the truth come out.", options: ["did", "does", "will", "can"], correct: "did", explanation: "Con 'Only then' al inicio, se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Had I known, _ I would have helped.", options: ["I would have helped", "would I have helped", "I helped", "did I help"], correct: "I would have helped", explanation: "En oraciones condicionales sin 'if', se invierte el sujeto y el verbo auxiliar." },
            { sentence: "Should you need anything, _ me know.", options: ["let", "you let", "do you let", "you do let"], correct: "let", explanation: "En oraciones condicionales sin 'if', se invierte el sujeto y el verbo auxiliar." }
        ]
    },
    // Phrasal Verbs Completion Module
    {
        id: 'completion-phrasal-verbs',
        name: 'Completion: Phrasal Verbs',
        gameMode: 'completion',
        data: [
            { sentence: "She needs to brush ______ on her Spanish before the trip.", correct: "up", explanation: "El phrasal verb 'brush up on' significa repasar o mejorar una habilidad que no has usado recientemente.", tip: "Complete the phrasal verb." },
            { sentence: "They decided to call ______ the wedding.", correct: "off", explanation: "El phrasal verb 'call off' significa cancelar.", tip: "Complete the phrasal verb." },
            { sentence: "He came ______ with a great idea for the campaign.", correct: "up", explanation: "El phrasal verb 'come up with' significa pensar en o sugerir una idea o plan.", tip: "Complete the phrasal verb." },
            { sentence: "I can't put ______ with his attitude anymore.", correct: "up", explanation: "El phrasal verb 'put up with' significa tolerar a alguien o algo desagradable.", tip: "Complete the phrasal verb." },
            { sentence: "She takes ______ her mother; they are very similar.", correct: "after", explanation: "El phrasal verb 'take after' significa parecerse a un familiar mayor.", tip: "Complete the phrasal verb." },
            { sentence: "The negotiations broke ______ without an agreement.", correct: "down", explanation: "El phrasal verb 'break down' puede significar dejar de funcionar o fracasar.", tip: "Complete the phrasal verb." },
            { sentence: "I ran ______ an old friend at the supermarket.", correct: "into", explanation: "El phrasal verb 'run into' significa encontrarse con alguien por casualidad.", tip: "Complete the phrasal verb." },
            { sentence: "He promised to look ______ my cat while I'm away.", correct: "after", explanation: "El phrasal verb 'look after' significa cuidar de alguien o algo.", tip: "Complete the phrasal verb." },
            { sentence: "We need to get ______ to the real issue here.", correct: "down", explanation: "El phrasal verb 'get down to' significa empezar a hacer o considerar algo seriamente.", tip: "Complete the phrasal verb." },
            { sentence: "She finally got ______ her fear of flying.", correct: "over", explanation: "El phrasal verb 'get over' significa recuperarse de una enfermedad, sorpresa o miedo.", tip: "Complete the phrasal verb." },
            { sentence: "The company is looking ______ new employees.", correct: "for", explanation: "El phrasal verb 'look for' significa buscar.", tip: "Complete the phrasal verb." },
            { sentence: "Don't give ______! You're almost there.", correct: "up", explanation: "El phrasal verb 'give up' significa rendirse o dejar de intentar.", tip: "Complete the phrasal verb." },
            { sentence: "The plane will take ______ in ten minutes.", correct: "off", explanation: "El phrasal verb 'take off' significa despegar (para aviones) o quitarse (ropa).", tip: "Complete the phrasal verb." },
            { sentence: "It's cold, you should put ______ a jacket.", correct: "on", explanation: "El phrasal verb 'put on' significa ponerse ropa.", tip: "Complete the phrasal verb." },
            { sentence: "He turned ______ the job offer because it didn't pay enough.", correct: "down", explanation: "El phrasal verb 'turn down' significa rechazar una oferta o bajar el volumen.", tip: "Complete the phrasal verb." },
            { sentence: "They decided to break ______ after a long relationship.", correct: "up", explanation: "El phrasal verb 'break up' significa terminar una relación.", tip: "Complete the phrasal verb." },
            { sentence: "If you don't know the word, look it ______ in the dictionary.", correct: "up", explanation: "El phrasal verb 'look up' significa buscar información en un diccionario o libro de referencia.", tip: "Complete the phrasal verb." },
            { sentence: "Don't bring ______ that topic again, it's too sensitive.", correct: "up", explanation: "El phrasal verb 'bring up' significa mencionar un tema o criar a un niño.", tip: "Complete the phrasal verb." },
            { sentence: "Please go ______ with your story, I'm listening.", correct: "on", explanation: "El phrasal verb 'go on' significa continuar o seguir.", tip: "Complete the phrasal verb." },
            { sentence: "We need to set ______ a meeting for next week.", correct: "up", explanation: "El phrasal verb 'set up' significa organizar o establecer algo.", tip: "Complete the phrasal verb." },
            { sentence: "I hope everything works ______ for you.", correct: "out", explanation: "El phrasal verb 'work out' significa resolver un problema o tener éxito.", tip: "Complete the phrasal verb." },
            { sentence: "I came ______ an old photo album while cleaning.", correct: "across", explanation: "El phrasal verb 'come across' significa encontrar algo o a alguien por casualidad.", tip: "Complete the phrasal verb." },
            { sentence: "She needs to fill ______ this form before she leaves.", correct: "in", explanation: "El phrasal verb 'fill in' o 'fill out' significa rellenar un formulario.", tip: "Complete the phrasal verb." },
            { sentence: "He needs to cut ______ on sugar if he wants to lose weight.", correct: "down", explanation: "El phrasal verb 'cut down on' significa reducir el consumo de algo.", tip: "Complete the phrasal verb." },
            { sentence: "They decided to eat ______ tonight instead of cooking.", correct: "out", explanation: "El phrasal verb 'eat out' significa comer fuera de casa.", tip: "Complete the phrasal verb." },
            { sentence: "I need to pick ______ my sister from the airport.", correct: "up", explanation: "El phrasal verb 'pick up' significa recoger a alguien.", tip: "Complete the phrasal verb." },
            { sentence: "He needs to get ______ of bed, it's already noon.", correct: "up", explanation: "El phrasal verb 'get up' significa levantarse.", tip: "Complete the phrasal verb." },
            { sentence: "She needs to put ______ her clothes after washing them.", correct: "away", explanation: "El phrasal verb 'put away' significa guardar algo en su lugar.", tip: "Complete the phrasal verb." },
            { sentence: "He needs to throw ______ his old shoes.", correct: "away", explanation: "El phrasal verb 'throw away' o 'throw out' significa desechar algo.", tip: "Complete the phrasal verb." },
            { sentence: "I need to tidy ______ my room before my parents arrive.", correct: "up", explanation: "El phrasal verb 'tidy up' significa ordenar o arreglar.", tip: "Complete the phrasal verb." },
            { sentence: "She needs to switch ______ the lights when she leaves the room.", correct: "off", explanation: "El phrasal verb 'switch off' significa apagar un aparato eléctrico.", tip: "Complete the phrasal verb." }
        ]
    },
    {
        id: 'completion-used-to',
        name: 'Completion: Grammar - UsedTo',
        gameMode: 'completion',
        data: [
            {
                sentence: "When I started waitressing I needed help with carrying trays, but now I ______ them by myself.",
                correct: "am used to carrying",
                explanation: "The correct answer is 'am used to carrying'. This expresses a present habit or state that has become familiar.",
                tip: "Complete with '- / get / be' + used to' + carry."
            },
            {
                sentence: "I ______ English every day, but now I don't have time.",
                correct: "used to read",
                explanation: "The correct answer is 'used to read'. 'Used to' + base form of the verb expresses a past habit or state that no longer exists.",
                tip: "Complete with '- / get / be' + used to' + read."
            },
            {
                sentence: "Don't worry, it is easy to learn this grammar. You ______  in no time!",
                correct: "will get used to it",
                explanation: "The correct answer is 'will get used to'. 'Get used to' expresses the process of becoming accustomed to something.",
                tip: "Complete with '- / get / be' + used to' + it."
            },
            {
                sentence: "I was surprised to see her running - she ______ when I knew her.",
                correct: "didn't use to run",
                explanation: "The correct answer is 'didn't use to run'. The negative form of 'used to' is 'didn't use to' + base form of the verb.",
                tip: "Complete with '- / get / be' + used to' + run."
            },
            {
                sentence: "When I had to take the train to work I ______ very early.",
                correct: "used to get up",
                explanation: "The correct answer is 'used to get up'. 'Used to' + base form of the verb expresses a past habit.",
                tip: "Complete with '- / get / be' + used to' + get up."
            },
            {
                sentence: "When you were a teenager did you ______ to rap music?",
                correct: "use to listen",
                explanation: "The correct answer is 'use to listen'. In questions, 'did' is used with 'use to' + base form of the verb.",
                tip: "Complete with '- / get / be' + used to' + listen."
            },
            {
                sentence: "She didn't ______ about fashion but now she spends a lot of money on clothes.",
                correct: "use to care",
                explanation: "The correct answer is 'use to care'. In negative sentences, 'didn't use to' + base form of the verb is used.",
                tip: "Complete with '- / get / be' + used to' + care."
            },
            {
                sentence: "I don't like revising for exams but I ______ .",
                correct: "am getting used to it",
                explanation: "The correct answer is 'am getting used to it'. 'Am getting used to' expresses the ongoing process of becoming accustomed to something.",
                tip: "Complete with '- / get / be' + used to' + it."
            },
            {
                sentence: "He ______ in a small village, but now he lives in a big city.",
                correct: "used to live",
                explanation: "The correct answer is 'used to'. 'Used to' + base form of the verb expresses a past state that no longer exists.",
                tip: "Complete with '- / get / be' + used to' + live."
            },
            {
                sentence: "It took me a while, but I ______ early for work.",
                correct: "got used to waking up",
                explanation: "The correct answer is 'got used to'. 'Get used to' expresses the process of becoming accustomed to something.",
                tip: "Complete with '- / get / be' + used to' + wake up."
            },
            {
                sentence: "My grandmother ______ me stories every night.",
                correct: "used to tell",
                explanation: "The correct answer is 'used to'. 'Used to' + base form of the verb expresses a past habit.",
                tip: "Complete with '- / get / be' + used to' + tell."
            },
            {
                sentence: "I ______ coffee in the morning, so I feel strange without it.",
                correct: "am used to drinking",
                explanation: "The correct answer is 'am used to drinking'. 'Be used to' + -ing form expresses a present habit or state that has become familiar.",
                tip: "Complete with '- / get / be' + used to' + drink."
            },
            {
                sentence: "Did you ______ outside a lot when you were a child?",
                correct: "use to play",
                explanation: "The correct answer is 'use to'. In questions, 'did' is used with 'use to' + base form of the verb.",
                tip: "Complete with '- / get / be' + used to' + play."
            },
            {
                sentence: "She ______ spicy food, so she doesn't mind the chili.",
                correct: "is used to eating",
                explanation: "The correct answer is 'is used to'. 'Be used to' + -ing form expresses a present habit or state that has become familiar.",
                tip: "Complete with '- / get / be' + used to' + eat."
            },
            {
                sentence: "It's hard to ______ in a new country.",
                correct: "get used to living",
                explanation: "The correct answer is 'get used to'. 'Get used to' expresses the process of becoming accustomed to something.",
                tip: "Complete with '- / get / be' + used to' + live."
            },
            {
                sentence: "They ______ a dog, but it died last year.",
                correct: "used to have",
                explanation: "The correct answer is 'used to'. 'Used to' + base form of the verb expresses a past state that no longer exists.",
                tip: "Complete with '- / get / be' + used to' + have."
            },
            {
                sentence: "I ______ from the street now; it doesn't bother me anymore.",
                correct: "am used to the noise",
                explanation: "The correct answer is 'am used to'. 'Be used to' + -- expresses a present habit or state that has become familiar.",
                tip: "Complete with '- / get / be' + used to' + the noise."
            },
            {
                sentence: "He ______ , but he quit five years ago.",
                correct: "used to smoke",
                explanation: "The correct answer is 'used to'. 'Used to' + base form of the verb expresses a past habit that no longer exists.",
                tip: "Complete with '- / get / be' + used to' + smoke."
            },
            {
                sentence: "You'll ______ weather after a few weeks.",
                correct: "get used to the cold",
                explanation: "The correct answer is 'get used to'. 'Get used to' expresses the process of becoming accustomed to something.",
                tip: "Complete with '- / get / be' + used to' + the cold."
            },
            {
                sentence: "We ______ to that restaurant every Friday.",
                correct: "used to go",
                explanation: "The correct answer is 'used to'. 'Used to' + base form of the verb expresses a past habit.",
                tip: "Complete with '- / get / be' + used to' + go."
            }
        ]
    }
];