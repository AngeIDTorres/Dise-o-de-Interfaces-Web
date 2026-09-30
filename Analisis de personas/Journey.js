/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Laura Martínez",
                Photo: "woman.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Se da cuenta de que necesita datos de uso reales para evaluar un lanzamiento, pero los desarrolladores tardan días en darle los reportes",
                touch1: "Reunión de equipo",
                feel1: "2",
                con1: "Siente frustración por la dependencia técnica y la lentitud para tomar decisiones de negocio",
                ima1: "cartoon-PCangry.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Descubre una web de monitorización visual con fichas muy personalizables",
                touch2: "Ordenador (búsqueda web)",
                feel2: "2",
                con2: "Ve que la instalación requiere Linux y Docker, conocimientos técnicos que ella no tiene",
                ima2: "cartoon-planning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Pide ayuda al equipo de sistemas para que le desplieguen la infraestructura inicial",
                touch3: "Slack / Ticket IT",
                feel3: "3",
                con3: "Tiene que esperar a que sistemas le monte el entorno de Docker antes de poder probarla",
                ima3: "cartoon-teamthinking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Entra por fin a la web y ve que, tras la barrera de instalación, la interfaz es amigable",
                touch4: "Ordenador (webapp)",
                feel4: "4",
                con4: "Sigue abrumada inicialmente, teme que configurar las fichas también requiera código",
                ima4: "cartoon-PChard.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Descubre que implementar nuevas fichas en el dashboard es fácil, visual y personalizable",
                touch5: "Ordenador (edición de dashboard)",
                feel5: "5",
                con5: "Le cuesta un poco encontrar de dónde vienen exactamente los datos de conversión de su app",
                ima5: "cartoon-PCtyping.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Termina de personalizar su dashboard con métricas de negocio de forma autónoma",
                touch6: "Ordenador (dashboard final)",
                feel6: "5",
                con6: "Satisfecha, aunque dependerá de sistemas si el entorno de Linux/Docker necesita escalarse",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Carlos Ruiz",
                Photo: "man.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Un servidor crítico se cae y se entera por quejas de los usuarios, no por sus herramientas actuales",
                touch1: "Móvil (llamadas de usuarios)",
                feel1: "1",
                con1: "Siente una tremenda frustración por no haberse anticipado a la caída por falta de visibilidad en tiempo real",
                ima1: "cartoon-phoningangry.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Descubre esta herramienta y ve que es fácil de instalar, escalar y mantener vía contenedores",
                touch2: "Ordenador (comparativa de software)",
                feel2: "2",
                con2: "Le atrae lo escalable que es, pero le preocupa el tiempo de migrar configuraciones a Linux/Docker",
                ima2: "cartoon-planning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Despliega la herramienta de forma rápida usando sus conocimientos avanzados de Linux y Docker",
                touch3: "Ordenador (consola de comandos)",
                feel3: "4",
                con3: "Algunos de los servidores más antiguos no soportan bien Docker y le dan problemas",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Entra al dashboard y ve que los datos empiezan a llegar de forma centralizada y escalable",
                touch4: "Ordenador (vista general)",
                feel4: "4",
                con4: "Hay demasiado ruido al principio; necesita aprovechar las nuevas fichas para separar lo crítico",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Aprovecha la fácil implementación de nuevas fichas para crear paneles muy personalizados",
                touch5: "Ordenador (configuración avanzada)",
                feel5: "5",
                con5: "Requiere bastante tiempo de configuración inicial para dejar las alertas ajustadas sin falsos positivos",
                ima5: "cartoon-PCtyping.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finaliza un sistema robusto, fácil de escalar en el futuro y con mantenimiento automatizado",
                touch6: "Ordenador (dashboard central)",
                feel6: "5",
                con6: "Muy satisfecho, su única preocupación es formar al resto del equipo en el mantenimiento de contenedores",
                ima6: "cartoon-teamthinking.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



